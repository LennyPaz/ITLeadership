import { Resend } from 'resend'
import { NextResponse } from 'next/server'

/** Escape HTML special characters to prevent XSS in email templates */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// Initialize Resend only when API key is available (not during build)
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(apiKey)
}

// Rate limiting: IP -> { count, resetTime }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000 // 15 minutes

// Valid subject keys (whitelist)
const VALID_SUBJECTS = new Set([
  'enrollment',
  'volunteer',
  'donation',
  'partnership',
  'media',
  'other',
])

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown'
    const now = Date.now()
    const rateEntry = rateLimitMap.get(ip)

    if (rateEntry && now < rateEntry.resetTime) {
      if (rateEntry.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: 'Too many submissions. Please try again later.' },
          { status: 429 }
        )
      }
      rateEntry.count++
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    }

    // Clean up expired entries periodically
    if (rateLimitMap.size > 1000) {
      rateLimitMap.forEach((val, key) => {
        if (now >= val.resetTime) rateLimitMap.delete(key)
      })
    }

    const { name, email, phone, subject, message, website } = await request.json()

    // Honeypot: reject if hidden field is filled
    if (website) {
      // Silently accept to not tip off bots
      return NextResponse.json({ success: true })
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Input length limits
    if (typeof name !== 'string' || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be 100 characters or fewer.' },
        { status: 400 }
      )
    }
    if (typeof email !== 'string' || email.length > 254) {
      return NextResponse.json(
        { error: 'Email must be 254 characters or fewer.' },
        { status: 400 }
      )
    }
    if (typeof message !== 'string' || message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be 5000 characters or fewer.' },
        { status: 400 }
      )
    }

    // Subject whitelist validation
    if (!VALID_SUBJECTS.has(subject)) {
      return NextResponse.json(
        { error: 'Invalid subject selected.' },
        { status: 400 }
      )
    }

    // Map subject values to readable labels
    const subjectLabels: Record<string, string> = {
      enrollment: 'Enrollment Inquiry',
      volunteer: 'Volunteering',
      donation: 'Donations & Sponsorship',
      partnership: 'Partnership Opportunity',
      media: 'Media Inquiry',
      other: 'Other',
    }

    const subjectLabel = subjectLabels[subject]!

    // Sanitize all user inputs before injecting into HTML email
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = phone ? escapeHtml(phone) : ''
    const safeMessage = escapeHtml(message)
    const safeSubjectLabel = escapeHtml(subjectLabel)

    const resend = getResend()
    const { data, error } = await resend.emails.send({
      from: 'Project Annie Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'anniejohnsont@gmail.com',
      replyTo: email,
      subject: `[Contact Form] ${subjectLabel} - from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C4532A; border-bottom: 2px solid #C4532A; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="mailto:${safeEmail}" style="color: #C4532A;">${safeEmail}</a>
              </td>
            </tr>
            ${safePhone ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="tel:${safePhone}" style="color: #C4532A;">${safePhone}</a>
              </td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeSubjectLabel}</td>
            </tr>
          </table>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <p style="color: #888; font-size: 12px; margin-top: 30px; text-align: center;">
            This message was sent from the Project Annie website contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
