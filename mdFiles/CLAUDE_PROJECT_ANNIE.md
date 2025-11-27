# CLAUDE.md - Project Annie React Website Build

## CRITICAL: READ THIS BEFORE WRITING ANY CODE

You are building a **professional-grade nonprofit website** for Annie's Nursery School (Project Annie, Inc.) in Tallahassee, Florida. This site must look like it was built by an experienced agency at a $20,000+ budget level.

### ANTI-VIBE-CODE RULES (STRICTLY FOLLOW)

**NEVER DO THESE:**
- ❌ Fully rounded corners (rounded-full, rounded-3xl on containers)
- ❌ Purple/indigo/violet color schemes
- ❌ Excessive shadows on every element  
- ❌ Gradient backgrounds on every section
- ❌ Pill-shaped buttons everywhere
- ❌ Four-cards-in-a-grid for everything
- ❌ Centered hero text with gradient overlay (the default AI pattern)
- ❌ Excessive animations/transitions on everything
- ❌ Generic placeholder aesthetic
- ❌ Oversized spacing that creates "floaty" layouts

**ALWAYS DO THESE:**
- ✅ Border-radius: 4-8px max on cards/containers, 4-6px on buttons
- ✅ Use authentic photos prominently (they exist in /assets)
- ✅ Create visual hierarchy through typography, not effects
- ✅ Use asymmetric layouts where appropriate
- ✅ Apply shadows sparingly and purposefully
- ✅ Design unique section treatments (not same pattern repeated)
- ✅ Think editorially — like a magazine, not a template

---

## PROJECT CONTEXT

**Organization:** Annie's Nursery School / Project Annie, Inc.
**Location:** 625 W. 4th Ave., Tallahassee, FL 32303 (Frenchtown)
**Phone:** 850.222.6133
**Founder:** Annie M. Johnson (Ms. Annie) — elderly African-American community matriarch
**Services:** Childcare (ages 1-3), Thanksgiving community meals (2,000+), volunteer programs with FSU/TCC

**Target Audiences (priority order):**
1. Parents seeking childcare
2. Donors
3. Volunteers (college students)
4. Partners/sponsors
5. Media

---

## COLOR PALETTE

```css
/* Primary */
--primary: #C4532A;        /* Sunset Terracotta - CTAs, headers */
--primary-dark: #A3421F;
--primary-light: #D4744D;

/* Secondary */  
--secondary: #1A4D3E;      /* Deep Forest - footer, professional elements */
--secondary-dark: #0F3329;
--secondary-light: #2A7A63;

/* Accents */
--accent-honey: #D4A547;   /* Warm gold highlights */
--accent-sky: #5BA4C9;     /* Supporting accent */
--accent-sage: #7FA68D;    /* Success states */

/* Neutrals */
--cream: #F8F5EF;          /* Section backgrounds */
--offwhite: #FDFCFA;       /* Card backgrounds */
--charcoal: #2D2D2D;       /* Primary text */
--gray: #5C5C5C;           /* Secondary text */
--light-gray: #E8E4DD;     /* Borders */
```

---

## TYPOGRAPHY

**Headings:** Inter or DM Sans (700 for H1-H2, 600 for H3-H4)
**Body:** Source Sans Pro or Nunito Sans (400 body, 600 emphasis)
**Accent (quotes):** Lora or Merriweather

---

## DESIGN SYSTEM

**Border Radius:**
- Buttons: 6px
- Cards: 8px  
- Small elements: 4px
- NEVER: rounded-full on containers

**Shadows (use sparingly):**
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 2px 8px rgba(0,0,0,0.08);
--shadow-lg: 0 4px 16px rgba(0,0,0,0.1);
```

---

## TECH STACK

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (custom config)
- **Animation:** Framer Motion (used sparingly)
- **Icons:** Lucide React
- **Fonts:** Google Fonts
- **Future CMS:** Decap CMS (structure content for this)

---

## PAGES TO BUILD

1. **Home** — Hero, stats, mission intro, pathways (parent/volunteer/donor), current campaign, gallery preview
2. **About** — Story, mission/vision, Ms. Annie feature, community impact
3. **Programs** — Nursery school details, ages, hours, philosophy, enrollment
4. **Volunteer** — Opportunities, benefits, volunteer gallery, application CTA
5. **Donate** — Impact tiers, transparency, donation form placeholder
6. **Gallery** — Photo grid/masonry with lightbox
7. **Contact** — Contact form, map, info

---

## EXISTING ASSETS

Images are in `/assets` organized by folder:
- `Home/` — IMG1-IMG26.webp (community photos)
- `About/` — A1-A4, C1-C14, program photos
- `Donate_Volunteer/` — 60+ photos of Annie, charity events, volunteers
- `Contact/` — Contact1-3.webp
- `Partners/` — P1-6.webp (partner logos)
- `logo.webp` — Organization logo (rainbow, kids holding hands)
- `ms-annie.webp` — Founder portrait (treat with dignity)

---

## ACCESSIBILITY (WCAG 2.1 AA)

- All text: 4.5:1 contrast ratio minimum
- Keyboard navigation throughout
- Alt text on all images
- Semantic HTML5
- Focus states visible
- 44x44px minimum touch targets
- Respect prefers-reduced-motion

---

## KEY QUALITY MARKERS

Before completion, the site must:
- [ ] Look like a $20K+ professional build
- [ ] NOT look "vibe-coded" (no AI aesthetic markers)
- [ ] Use authentic photos prominently
- [ ] Feel warm yet trustworthy
- [ ] Work flawlessly on mobile (70%+ traffic)
- [ ] Score 90+ on Lighthouse accessibility
- [ ] Have clear visual hierarchy on every page

---

## CONTENT STRUCTURING (FOR DECAP CMS)

Structure editable content in JSON/Markdown files:
- Statistics (numbers staff can update)
- Testimonials
- Current campaign progress
- Gallery images
- Contact info
- Donation tiers

---

## REMEMBER

This website represents decades of Ms. Annie's community service. It must feel:
- **Warm** — Like a grandmother's embrace
- **Professional** — Credible to donors and parents
- **Dignified** — Respecting the families served
- **Authentic** — Real community, real impact

Build something worthy of her legacy.
