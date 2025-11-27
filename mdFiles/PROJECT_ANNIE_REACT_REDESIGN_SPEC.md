# Project Annie: Complete React Website Redesign Specification

## CRITICAL DESIGN MANDATE

**THIS IS NOT A VIBE-CODED PROJECT.** This specification describes a professional-grade nonprofit website that should appear as if built by a team of experienced designers and developers at a $15,000-$30,000 budget level. The output must be indistinguishable from a professionally designed site.

### Anti-Vibe-Code Directives

The AI building this site MUST avoid these common AI-generated design patterns:

- ❌ **NO fully rounded corners** (border-radius: 9999px or rounded-full on containers)
- ❌ **NO excessive shadows** on every element
- ❌ **NO gradient backgrounds** on every section
- ❌ **NO oversized spacing** that creates "floaty" layouts
- ❌ **NO generic stock-photo-looking placeholder aesthetics**
- ❌ **NO overly symmetrical, grid-perfect layouts** that feel robotic
- ❌ **NO excessive use of cards** for everything
- ❌ **NO default Tailwind color palette** without customization
- ❌ **NO purple/indigo/violet** as primary colors (very "AI-coded" aesthetic)
- ❌ **NO pill-shaped buttons** unless specifically designed
- ❌ **NO excessive animations** on every element
- ❌ **NO hero sections with centered text and gradient overlay** as the default

### Professional Design Directives

Instead, the design MUST:

- ✅ Use **intentional, restrained border-radius** (4-8px for cards, 4-6px for buttons)
- ✅ Apply shadows **sparingly** and with purpose
- ✅ Create **visual hierarchy through typography and spacing**, not effects
- ✅ Use **asymmetric layouts** where appropriate for visual interest
- ✅ Implement **authentic photography** prominently (the existing assets are real)
- ✅ Design with **editorial precision** — like a magazine or high-end publication
- ✅ Use **whitespace strategically** — not excessively
- ✅ Create **subtle, purposeful microinteractions**
- ✅ Design **unique section treatments** — not every section should follow the same pattern

---

## ORGANIZATION OVERVIEW

### About Project Annie, Inc.

**Organization Name:** Project Annie, Inc. / Annie's Nursery School
**Founded:** 15+ years ago
**Location:** 625 W. 4th Ave., Tallahassee, FL 32303 (Frenchtown community)
**Phone:** 850.222.6133
**Executive Director:** Annie M. Johnson (Ms. Annie)
**Tax Status:** 501(c)(3) Nonprofit

### Mission Statement
"Helping Children/Adults to Help Themselves" — Project Annie provides quality, affordable childcare and early education that empowers families in the Frenchtown community to pursue their goals while ensuring their children receive the care and development they deserve.

### Core Services
1. **Nursery School** — Licensed childcare for children ages 1-3
2. **Community Meals** — Annual Thanksgiving feast serving 2,000+ meals
3. **Volunteer Programs** — Partnership with FSU/TCC students
4. **Family Support** — Resources for working parents, students, and job-seekers

### Target Audiences (in priority order)
1. **Parents** — Seeking quality, affordable childcare
2. **Donors** — Individuals and organizations wanting to support the mission
3. **Volunteers** — FSU/TCC students and community members
4. **Partners** — Local businesses and organizations for sponsorships
5. **Media** — Journalists covering community stories
6. **Community Members** — General Frenchtown residents

### Brand Personality
- **Warm** — Like a grandmother's embrace
- **Trustworthy** — Decades of community service
- **Hopeful** — Focused on positive outcomes
- **Professional** — Serious about quality care
- **Rooted** — Deep Frenchtown community connection
- **Dignified** — Respects the families served

---

## VISUAL IDENTITY SYSTEM

### Logo Analysis
The existing logo features:
- "PROJECT ANNIE INC." header text
- Silhouettes of diverse children holding hands
- Rainbow arc beneath the children
- "Annie's Nursery School" in script typography

The logo uses rainbow colors and conveys joy, diversity, and community.

### Recommended Color Palette

**Primary Colors:**

| Name | Hex | Usage |
|------|-----|-------|
| Sunset Terracotta | `#C4532A` | Primary brand color, CTAs, headers |
| Deep Forest | `#1A4D3E` | Secondary, footer, professional elements |
| Warm Cream | `#F8F5EF` | Background, sections |

**Secondary Colors:**

| Name | Hex | Usage |
|------|-----|-------|
| Golden Honey | `#D4A547` | Accents, highlights, warmth |
| Sky Blue | `#5BA4C9` | Supporting accent, links, icons |
| Soft Sage | `#7FA68D` | Success states, positive messaging |

**Neutral Colors:**

| Name | Hex | Usage |
|------|-----|-------|
| Charcoal | `#2D2D2D` | Primary text |
| Warm Gray | `#5C5C5C` | Secondary text |
| Light Gray | `#E8E4DD` | Borders, dividers |
| Off-White | `#FDFCFA` | Card backgrounds |

**Rationale:** This palette draws from warm earth tones (terracotta, cream, honey) that evoke nurturing and home, combined with forest green for stability and professionalism. These colors feel mature and credible while remaining warm — avoiding the pastels and bright primaries often associated with childcare that can undermine credibility with donors.

### Typography

**Heading Font:** `Inter` or `DM Sans`
- Weight 700 for H1-H2
- Weight 600 for H3-H4
- Modern, clean, highly readable
- Conveys professionalism without being cold

**Body Font:** `Source Sans Pro` or `Nunito Sans`
- Weight 400 for body text
- Weight 600 for emphasis
- Excellent readability
- Warm and approachable

**Accent Font (Optional):** `Lora` or `Merriweather`
- For pull quotes, testimonials
- Adds editorial elegance

### Typography Scale

```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
--font-size-5xl: 3rem;      /* 48px */
--font-size-6xl: 3.75rem;   /* 60px */
```

### Spacing System

Use an 8px base grid:
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
```

### Border Radius

**Intentional and restrained:**
```css
--radius-sm: 4px;    /* Form inputs, small elements */
--radius-md: 6px;    /* Buttons, small cards */
--radius-lg: 8px;    /* Cards, containers */
--radius-xl: 12px;   /* Large featured elements */
```

**NEVER use:** `rounded-full` on containers, `border-radius: 9999px` on cards, or excessive rounding.

### Shadow System

**Minimal and purposeful:**
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 8px 24px rgba(0, 0, 0, 0.12);
```

Use shadows to create depth hierarchy, not decoration.

---

## SITE ARCHITECTURE

### Pages Required

1. **Home** (`/`)
2. **About** (`/about`)
3. **Programs** (`/programs`)
4. **Volunteer** (`/volunteer`)
5. **Donate** (`/donate`)
6. **Gallery** (`/gallery`)
7. **Contact** (`/contact`)

### Navigation Structure

**Primary Nav:**
- Home
- About
- Programs
- Volunteer
- Contact
- **Donate** (CTA button)

**Footer Nav:**
- About Us
- Programs
- Volunteer
- Photo Gallery
- Contact
- Privacy Policy

---

## PAGE-BY-PAGE SPECIFICATIONS

### HOME PAGE

**Primary Goal:** Establish credibility and drive visitors toward their appropriate conversion path (donate, volunteer, or enroll).

**Hero Section:**
- NOT a centered text hero with gradient overlay
- Use a **split layout** or **editorial-style layout**
- Feature authentic photography from the organization
- Clear, compelling headline focused on impact
- Three distinct CTAs: "Enroll Your Child" | "Volunteer" | "Donate"

**Suggested Hero Approaches:**
1. **Split Hero:** Large photo (60%) + text panel (40%)
2. **Editorial Hero:** Full-width image with text overlay using a clean text box (not gradient)
3. **Asymmetric Hero:** Overlapping elements, text positioned off-center

**Impact Statistics Section:**
Display key metrics with simple, elegant presentation:
- 2,000+ Meals Served Annually
- 150+ Children Served
- 15+ Years of Service
- 50+ Community Partners

**Design Note:** Avoid the typical "four cards in a row" layout. Consider:
- Horizontal ticker/scroll
- Integrated into other content
- Clean inline display

**Mission Introduction:**
Brief paragraph about what Project Annie does, paired with authentic photography.

**Pathways Section:**
Three distinct paths for different audiences:
- For Parents (learn about enrollment)
- For Volunteers (FSU/TCC partnership)
- For Donors (support the mission)

**Current Campaign/Initiative:**
Highlight the Thanksgiving meal program or current fundraising need with progress indicator.

**Photo Carousel:**
Showcase real photos from events and daily operations. Use existing image assets.

**Footer:**
Contact info, quick links, social media (but NOT at top of page), newsletter signup.

---

### ABOUT PAGE

**Goal:** Build trust and emotional connection through Ms. Annie's story.

**Sections:**
1. Page header with compelling tagline
2. "Our Story" — Ms. Annie's history and the founding of Project Annie
3. Mission & Vision statements (clean, editorial presentation)
4. Meet the Founder — Photo and bio of Ms. Annie Johnson
5. Community Impact — Statistics and testimonials
6. Programs overview with links to Programs page
7. Call-to-action to get involved

**Ms. Annie Feature:**
This is critical. The founder photo shows Ms. Annie as an elderly African-American woman — a respected community matriarch. The design should present her with dignity and warmth. Consider:
- Large, high-quality photo
- Quote or pull-text from her
- Warm background treatment

---

### PROGRAMS PAGE

**Goal:** Explain the nursery school services for potential parents.

**Sections:**
1. Programs overview
2. Age groups served (1-3 years)
3. Hours and scheduling
4. Educational philosophy
5. Daily activities
6. Nutrition/meals provided
7. Safety and licensing
8. Enrollment process
9. Contact CTA

**Important:** This page needs to feel professional and trustworthy — parents are entrusting their children. Use calm, confident design choices.

---

### VOLUNTEER PAGE

**Goal:** Recruit FSU/TCC students and community members.

**Sections:**
1. Why volunteer — impact and benefits
2. Volunteer opportunities (classroom assistant, event support, administrative)
3. Photo gallery of volunteers in action
4. Testimonials from past volunteers
5. Volunteer application/signup CTA

**Key Message:** Emphasize service-learning opportunities, resume building, and meaningful community connection.

---

### DONATE PAGE

**Goal:** Maximize donations through clear impact messaging.

**Sections:**
1. Compelling headline about impact
2. Donation tiers with specific impact descriptions:
   - $25 — Provides X
   - $50 — Provides Y
   - $100 — Provides Z
   - $250 — Provides A
   - $500+ — Major impact
3. Photo gallery showing the work
4. Transparency section (501c3 info, how funds are used)
5. Donation form integration placeholder
6. Alternative ways to give (mail, in-kind)

**Critical Design Consideration:** The donation page should feel trustworthy and legitimate. Avoid anything that looks cheap or untrustworthy.

---

### GALLERY PAGE

**Goal:** Showcase authentic photos from events, daily activities, and community impact.

**Design:**
- Clean masonry or grid layout
- Lightbox functionality
- Categories/filters (Thanksgiving, Daily Activities, Volunteers, Community)
- Captions for context

**Available Images:**
- Home folder: 26 images (IMG1-IMG26)
- About folder: 20 images (A1-A4, C1-C14, EarlyChildcare, Toddler Care)
- Donate_Volunteer folder: 60+ images (Annie, Charity, Nursery, V, VW series)
- Contact folder: 3 images
- Partners folder: 6 images

---

### CONTACT PAGE

**Goal:** Make it easy for anyone to reach the organization.

**Sections:**
1. Contact information (address, phone, email, hours)
2. Contact form (Name, Email, Phone, Subject, Message)
3. Google Maps embed
4. Quick links to specific actions (enrollment, volunteer, donate)

---

## COMPONENT SPECIFICATIONS

### Navigation Bar

**Requirements:**
- Fixed/sticky on scroll
- Logo on left
- Navigation links centered or right
- Donate button as prominent CTA
- Mobile hamburger menu
- Active state indicators

**Desktop:**
```
[Logo] ——————— Home | About | Programs | Volunteer | Contact | [Donate Button]
```

**Mobile:**
```
[Logo] ——————————————————————————————————————————————— [Hamburger]
```

### Buttons

**Primary Button:**
- Background: Sunset Terracotta (`#C4532A`)
- Text: White
- Border-radius: 6px
- Padding: 12px 24px (default), 16px 32px (large)
- Hover: Darken 10%
- NO pill shape, NO excessive shadow

**Secondary Button:**
- Background: White
- Border: 2px solid Sunset Terracotta
- Text: Sunset Terracotta
- Hover: Light terracotta background

**Tertiary/Ghost Button:**
- Background: Transparent
- Text: Sunset Terracotta
- Underline on hover

### Cards

**Standard Card:**
- Background: Off-White (`#FDFCFA`)
- Border: 1px solid Light Gray (`#E8E4DD`)
- Border-radius: 8px
- Shadow: shadow-sm, shadow-md on hover
- Padding: 24px

### Form Inputs

- Border: 1px solid Light Gray
- Border-radius: 4px
- Padding: 12px 16px
- Focus: Terracotta border, subtle shadow
- Label: Above input, Weight 600

### Image Carousels

**Recommended Library:** Embla Carousel (lightweight, accessible) or Swiper.js

**Where to Use Carousels:**
- **Home Page** — Photo carousel section showcasing community events, daily operations, Thanksgiving meals
- **Gallery Page** — Lightbox carousel for full-screen image viewing
- **Volunteer Page** — Volunteer photos in action
- **About Page** — Optional: Historical photos or event highlights

**Design Specifications:**
- Clean, minimal controls (arrows on sides, dots below)
- Arrow buttons: 44x44px touch targets, subtle background on hover
- Dot indicators: 8px circles, active dot uses primary color
- Smooth transitions (300-400ms ease-out)
- Touch/swipe support for mobile
- Auto-advance every 5-6 seconds (optional, with pause on hover)
- Pause auto-advance when user interacts
- Keyboard navigation (arrow keys)

**Carousel Variants:**

1. **Hero/Featured Carousel:**
   - Large images (full-width or contained)
   - Optional text overlay with caption
   - 3-5 images max
   - Prominent navigation arrows

2. **Gallery Carousel (Lightbox):**
   - Opens in modal overlay
   - Dark background (rgba(0,0,0,0.9))
   - Close button (X) top-right
   - Image counter ("3 of 12")
   - Thumbnail strip below (optional)
   - Keyboard: Escape to close, arrows to navigate

3. **Testimonial Carousel:**
   - Text-focused, smaller images (avatar style)
   - Fade transition preferred over slide
   - Auto-rotate every 6-8 seconds

**Accessibility Requirements:**
- Pause button visible for auto-advancing carousels
- Respect `prefers-reduced-motion` (disable auto-advance, use fade instead of slide)
- Arrow buttons have aria-labels ("Previous image", "Next image")
- Current slide announced to screen readers
- Dots have aria-labels ("Go to slide 3")

**Image Handling:**
- Use Next.js Image component for optimization
- Lazy load off-screen carousel images
- Provide appropriate aspect ratios (16:9 for landscape, 4:3 for events)
- Alt text required for every image

---

## ACCESSIBILITY REQUIREMENTS (WCAG 2.1 AA)

### Color Contrast
- All text must meet 4.5:1 contrast ratio for normal text
- 3:1 for large text and UI elements
- Test all color combinations

### Keyboard Navigation
- All interactive elements focusable via Tab
- Visible focus indicators
- Skip-to-content link
- Logical tab order

### Screen Readers
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images (descriptive, contextual)
- ARIA labels where needed
- Form labels properly associated

### Motion
- Respect `prefers-reduced-motion`
- No auto-playing videos with sound
- Pause/stop controls for carousels

### Touch Targets
- Minimum 44x44px for all interactive elements
- Adequate spacing between targets

---

## TECHNICAL SPECIFICATIONS

### Tech Stack

**Framework:** Next.js 14 (App Router)
**Styling:** Tailwind CSS with custom configuration
**Animation:** Framer Motion (used sparingly)
**Icons:** Lucide React or Heroicons
**Fonts:** Google Fonts
**Image Handling:** Next.js Image optimization

### Project Structure

```
project-annie/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── about/
│   │   └── page.tsx
│   ├── programs/
│   │   └── page.tsx
│   ├── volunteer/
│   │   └── page.tsx
│   ├── donate/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Pathways.tsx
│   │   └── ...
│   └── gallery/
│       ├── ImageCarousel.tsx
│       ├── Lightbox.tsx
│       └── ImageGrid.tsx
├── lib/
│   └── utils.ts
├── content/
│   ├── home.json (or .md for Decap CMS)
│   ├── about.json
│   └── ...
├── public/
│   └── images/
│       ├── home/
│       ├── about/
│       ├── donate-volunteer/
│       └── ...
├── styles/
│   └── globals.css
└── tailwind.config.ts
```

### Tailwind Configuration

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C4532A',
          dark: '#A3421F',
          light: '#D4744D',
        },
        secondary: {
          DEFAULT: '#1A4D3E',
          dark: '#0F3329',
          light: '#2A7A63',
        },
        accent: {
          honey: '#D4A547',
          sky: '#5BA4C9',
          sage: '#7FA68D',
        },
        neutral: {
          cream: '#F8F5EF',
          offwhite: '#FDFCFA',
          charcoal: '#2D2D2D',
          gray: '#5C5C5C',
          light: '#E8E4DD',
        },
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        accent: ['Lora', 'serif'],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        lg: '8px',
        xl: '12px',
      },
    },
  },
};
```

---

## DECAP CMS PREPARATION

### Content Model

Structure content files to be easily editable via Decap CMS:

**Example: `content/home.json`**
```json
{
  "hero": {
    "headline": "Transforming Lives, One Child at a Time",
    "subheadline": "Quality childcare and education for Tallahassee's Frenchtown community",
    "heroImage": "/images/home/hero.jpg"
  },
  "stats": [
    { "number": 2000, "label": "Meals Served Annually" },
    { "number": 150, "label": "Children Served" },
    { "number": 15, "label": "Years of Service" },
    { "number": 50, "label": "Community Partners" }
  ],
  "mission": {
    "title": "Our Mission",
    "content": "Annie's Nursery School provides safe, nurturing childcare..."
  }
}
```

### Editable Sections

Identify what Ms. Annie and staff should be able to edit:
- Statistics numbers
- Testimonials
- Current campaign progress
- News/announcements
- Photo gallery images
- Contact information
- Donation tier descriptions

---

## REFERENCE: NONPROFIT BEST PRACTICES

### Key Insights from Research

1. **Clear Value Proposition:** Visitors should understand what the organization does within 3 seconds.

2. **Single Primary CTA:** While offering multiple paths, one action should be most prominent (usually Donate).

3. **Storytelling Over Statistics:** Stories of individual impact are more compelling than numbers alone.

4. **Visual Hierarchy:** Guide the eye naturally down the page toward conversion.

5. **Social Proof:** Testimonials, partner logos, media mentions build credibility.

6. **Urgency When Appropriate:** Current campaigns with progress bars create reasons to act now.

7. **Mobile-First:** 70%+ of nonprofit traffic is mobile.

8. **Trust Signals:** 501(c)(3) status, transparency about fund usage, professional design.

9. **Simplified Donation Flow:** Every click lost equals donations lost.

10. **Authentic Photography:** Real photos of real people outperform stock imagery.

### Inspiration Sites

Study these for patterns (NOT copying):
- charity: water — Clean, minimal, impact-focused
- Feeding America — Multiple audience pathways
- DonorsChoose — Progress tracking, transparency
- Local Initiatives Support Corporation — Professional nonprofit design

---

## EXISTING ASSETS

### Available Images

**Home Folder:** IMG1-IMG26.webp (community event photos)
**About Folder:** A1-A4.webp, C1-C14.webp, EarlyChildcare.webp, Toddler Care.webp
**Contact Folder:** Contact1-3.webp
**Donate_Volunteer Folder:** Annie1-4.webp, Charity1-3.webp, Nursery1-3.webp, V1-31.webp, VW1-17.webp
**Partners Folder:** P1-6.webp
**Nursery Folder:** ELC.webp, OpeningSoon.webp, Forms (enrollment documents)

**Key Images:**
- `logo.webp` — Organization logo
- `ms-annie.webp` — Founder photo

### Content from Previous Redesign

The HTML redesign provides all textual content needed:
- Page copy
- Mission/vision statements
- Program descriptions
- Contact information
- Footer content

---

## QUALITY CHECKLIST

Before considering the site complete, verify:

### Design Quality
- [ ] Does this look like a $20,000+ professional build?
- [ ] Is the design free of "vibe-coded" aesthetic markers?
- [ ] Is there clear visual hierarchy on every page?
- [ ] Does the design feel warm yet professional?
- [ ] Are authentic photos used prominently?
- [ ] Is the color palette consistent throughout?
- [ ] Is typography readable and well-proportioned?

### Functionality
- [ ] All navigation links work
- [ ] All CTAs are functional (or have clear placeholders)
- [ ] Forms submit correctly (or placeholder behavior)
- [ ] Image carousels/galleries work on all devices
- [ ] Mobile navigation works correctly
- [ ] Smooth scroll behavior
- [ ] 404 page exists

### Accessibility
- [ ] Lighthouse accessibility score 90+
- [ ] All images have alt text
- [ ] Color contrast passes WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Semantic HTML throughout

### Performance
- [ ] Lighthouse performance score 80+
- [ ] Images optimized and lazy-loaded
- [ ] Fonts loaded efficiently
- [ ] No layout shift

### Responsiveness
- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (1024px, 768px)
- [ ] Mobile (390px, 375px)

---

## FINAL NOTES FOR AI BUILDER

1. **Take your time.** This is not a speed exercise. Quality over quantity.

2. **Be intentional.** Every design decision should have a reason.

3. **Study the assets.** The real photos tell a story — let them shine.

4. **Think like a donor/parent.** What would make YOU trust this organization?

5. **Avoid the template look.** This should feel custom, not like a theme.

6. **Build iteratively.** Start with structure, refine design, polish details.

7. **Test everything.** Mobile, accessibility, performance, every page.

8. **Honor the organization.** Ms. Annie has dedicated decades to this community. The website should reflect that dedication.

---

---

## THIRD-PARTY INTEGRATIONS

### Donation Platform Options
- **PayPal Donate Button** — Easy setup, widely trusted
- **Stripe Checkout** — Modern, lower fees, better UX
- **GiveWP** (WordPress plugin) — For future WP migration
- **Donorbox** — Nonprofit-focused, recurring donations

### Email Marketing
- **Mailchimp** — Free tier available, easy integration
- **ConvertKit** — Better automation features
- **FormSubmit.co** — Free form-to-email service (no backend needed)

### Newsletter Form Integration
```jsx
// Simple FormSubmit.co integration (no backend)
<form action="https://formsubmit.co/info@projectannie.org" method="POST">
  <input type="email" name="email" required />
  <button type="submit">Subscribe</button>
</form>
```

### Analytics
- **Google Analytics 4** — Add tracking code to layout.tsx
- **Vercel Analytics** — If deploying to Vercel (built-in)
- **Plausible** — Privacy-focused alternative

### Maps
- **Google Maps Embed** — Requires API key
- **Leaflet/OpenStreetMap** — Free alternative

---

## CONTENT MANAGEMENT SCHEDULE

### Monthly Updates
- [ ] Update current campaign progress bar percentage
- [ ] Refresh testimonials (rotate in new ones)
- [ ] Add new gallery photos from events
- [ ] Review and respond to any contact form submissions

### Quarterly Updates
- [ ] Update impact statistics (meals served, children enrolled, etc.)
- [ ] Review "Our Story" content for accuracy
- [ ] Add new media mentions/press coverage
- [ ] Update volunteer opportunity descriptions

### Annually
- [ ] Update copyright year in footer
- [ ] Refresh hero background image
- [ ] Review all page content for accuracy
- [ ] Update donation tier amounts if needed
- [ ] Refresh partner logos section
- [ ] Archive completed campaigns, create new ones

---

## BROWSER SUPPORT

### Fully Supported
- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome for Android

### Not Supported
- ❌ Internet Explorer (all versions)
- ⚠️ Safari < 14 (graceful degradation)

---

**Document Version:** 1.0
**Created:** November 2025
**Purpose:** Comprehensive specification for React website redesign with Decap CMS compatibility
**Framework:** Next.js 14 + Tailwind CSS
**Target Quality:** Professional-grade, agency-quality nonprofit website

---

*"The best charity websites have seamless UX and a stylish, professional, uniform design. Top sites have a content strategy that meets their users' needs and uses a variety of content types, from written text to photos and videos, to convey the mission."*
