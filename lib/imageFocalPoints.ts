/**
 * Image Focal Points Configuration
 *
 * This file maps image paths to their optimal focal points for smart cropping.
 * When an image is displayed in a container with object-fit: cover, this determines
 * which part of the image stays visible.
 *
 * Focal Point Options:
 * - Presets: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
 * - Custom: { x: number, y: number } where x and y are percentages (0-100)
 */

export type FocalPointPreset =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export type FocalPointCustom = {
  x: number // percentage from left (0-100)
  y: number // percentage from top (0-100)
}

export type FocalPoint = FocalPointPreset | FocalPointCustom

/**
 * Convert a focal point to CSS object-position value
 */
export function focalPointToCSS(focalPoint: FocalPoint): string {
  if (typeof focalPoint === 'object') {
    return `${focalPoint.x}% ${focalPoint.y}%`
  }

  const presetMap: Record<FocalPointPreset, string> = {
    'center': 'center center',
    'top': 'center top',
    'bottom': 'center bottom',
    'left': 'left center',
    'right': 'right center',
    'top-left': 'left top',
    'top-right': 'right top',
    'bottom-left': 'left bottom',
    'bottom-right': 'right bottom',
  }

  return presetMap[focalPoint] || 'center center'
}

/**
 * Get the focal point for an image path
 * Returns 'center' if no specific focal point is configured
 */
export function getFocalPoint(imagePath: string): FocalPoint {
  // Normalize the path (remove leading slash if present for lookup)
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  return imageFocalPoints[normalizedPath] || 'center'
}

/**
 * Image focal points mapping
 *
 * Key: Image path (relative to public folder, with leading slash)
 * Value: Focal point preset or custom coordinates
 */
export const imageFocalPoints: Record<string, FocalPoint> = {
  // ============================================
  // HOME PAGE IMAGES - Community events, group photos
  // ============================================
  '/images/Home/IMG1.webp': 'top',       // Large group photo indoors - faces at top
  '/images/Home/IMG4.webp': 'center',    // Volunteers with cart outdoors - centered
  '/images/Home/IMG5.webp': 'top',       // People loading truck - faces at top
  '/images/Home/IMG6.webp': 'top',       // Large group photo outdoors - faces at top
  '/images/Home/IMG7.webp': 'top',       // Large group photo outdoors - faces at top
  '/images/Home/IMG8.webp': 'top',       // Portrait of elderly woman - face at top
  '/images/Home/IMG9.webp': 'top',       // Group photo indoors - faces at top
  '/images/Home/IMG10.webp': 'bottom',   // Indoor scene - person in foreground at bottom
  '/images/Home/IMG12.webp': 'center',   // Indoor activity - centered
  '/images/Home/IMG13.webp': 'top',      // Portrait outdoors - face at top
  '/images/Home/IMG14.webp': 'top',      // Group loading supplies - faces at top
  '/images/Home/IMG15.webp': 'center',   // Person carrying box - centered vertically
  '/images/Home/IMG16.webp': 'top',      // Group at truck - faces at top
  '/images/Home/IMG17.webp': 'top',      // Person carrying supplies - face at top
  '/images/Home/IMG18.webp': 'top',      // Indoor group activity - faces at top
  '/images/Home/IMG19.webp': 'top',      // Woman with supplies outdoors - face at top
  '/images/Home/IMG20.webp': 'top',      // Portrait of elderly woman - face at top
  '/images/Home/IMG21.webp': 'top',      // Indoor activity group - faces at top
  '/images/Home/IMG22.webp': 'top',      // Large group photo - faces at top
  '/images/Home/IMG23.webp': 'top',      // Group photo with supplies - faces at top
  '/images/Home/IMG24.webp': 'center',   // Indoor activity - centered
  '/images/Home/IMG25.webp': 'top',      // Two people working - faces at top
  '/images/Home/IMG26.webp': 'top',      // Person at table - face at top

  // ============================================
  // ABOUT PAGE IMAGES - Children, teachers, childcare
  // ============================================
  '/images/About/A1.webp': 'center',     // Teacher with child on playground - centered
  '/images/About/A2.webp': 'center',     // Children faces in circle looking down - centered
  '/images/About/A3.webp': 'top',        // Children making binocular hands - faces at top
  '/images/About/A4.webp': 'top',        // Baby portrait - face at top
  '/images/About/C1.webp': 'center',     // Group selfie - faces centered
  '/images/About/C2.webp': 'center',     // Child with teddy bear - centered
  '/images/About/C3.webp': 'bottom',     // Sleeping baby in crib - baby at bottom
  '/images/About/C4.webp': 'left',       // Baby in bath - face on left
  '/images/About/C5.webp': 'center',     // Mother and baby portrait - faces centered
  '/images/About/C6.webp': 'top',        // Mother feeding baby - faces at top
  '/images/About/C7.webp': 'top-left',   // Mother with baby in high chair - faces top-left
  '/images/About/C8.webp': 'center',     // Children with hula hoops - centered
  '/images/About/C9.webp': 'center',     // Stock photo - centered
  '/images/About/C10.webp': 'center',    // Stock photo - centered
  '/images/About/C11.webp': 'center',    // Stock photo - centered
  '/images/About/C12.webp': 'center',    // Stock photo - centered
  '/images/About/C13.webp': 'center',    // Stock photo - centered
  '/images/About/C14.webp': 'center',    // Stock photo - centered
  '/images/About/EarlyChildcare.webp': 'center', // Children with teacher - faces centered
  '/images/About/Toddler Care.webp': 'top', // Toddler portrait - face at top

  // ============================================
  // MS. ANNIE IMAGES - Portraits
  // ============================================
  '/images/ms-annie.webp': 'top',        // Portrait - face at top

  // ============================================
  // DONATE/VOLUNTEER IMAGES
  // ============================================
  // Annie photos
  '/images/Donate_Volunteer/Annie1.webp': 'top',  // Ms. Annie with sign - face at top
  '/images/Donate_Volunteer/Annie2.webp': 'top',  // Ms. Annie portrait - face at top
  '/images/Donate_Volunteer/Annie3.webp': 'top',  // Ms. Annie - face at top
  '/images/Donate_Volunteer/Annie4.webp': 'top',  // Ms. Annie - face at top

  // Charity/concept images
  '/images/Donate_Volunteer/Charity1.webp': 'center', // Charity concept art - centered
  '/images/Donate_Volunteer/Charity2.webp': 'center', // Charity concept - centered
  '/images/Donate_Volunteer/Charity3.webp': 'center', // Charity concept - centered

  // Nursery photos
  '/images/Donate_Volunteer/Nursery1.webp': 'center', // Nursery - centered
  '/images/Donate_Volunteer/Nursery2.webp': 'center', // Nursery - centered
  '/images/Donate_Volunteer/Nursery3.webp': 'center', // Nursery - centered

  // Volunteer photos (V series) - mostly portraits and group photos
  '/images/Donate_Volunteer/V1.webp': 'top',   // Three women portrait - faces at top
  '/images/Donate_Volunteer/V2.webp': 'top',   // Two women portrait - faces at top
  '/images/Donate_Volunteer/V3.webp': 'top',   // Portrait - face at top
  '/images/Donate_Volunteer/V4.webp': 'top',   // Portrait - face at top
  '/images/Donate_Volunteer/V5.webp': 'top',   // Portrait - face at top
  '/images/Donate_Volunteer/V6.webp': 'top',   // Portrait - face at top
  '/images/Donate_Volunteer/V7.webp': 'top',   // Portrait - face at top
  '/images/Donate_Volunteer/V8.webp': 'top',   // Portrait - face at top
  '/images/Donate_Volunteer/V9.webp': 'top',   // Portrait - face at top
  '/images/Donate_Volunteer/V10.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V11.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V12.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V13.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V14.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V15.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V16.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V17.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V18.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V19.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V20.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V21.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V22.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V23.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V24.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V25.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V26.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V27.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V28.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V30.webp': 'top',  // Portrait - face at top
  '/images/Donate_Volunteer/V31.webp': 'top',  // Portrait - face at top

  // Volunteer Work photos (VW series) - activity shots
  '/images/Donate_Volunteer/VW1.webp': 'top',  // Activity - faces at top
  '/images/Donate_Volunteer/VW2.webp': 'top',  // Activity - faces at top
  '/images/Donate_Volunteer/VW3.webp': 'top',  // Activity - faces at top
  '/images/Donate_Volunteer/VW4.webp': 'top',  // Activity - faces at top
  '/images/Donate_Volunteer/VW5.webp': 'top',  // Activity - faces at top
  '/images/Donate_Volunteer/VW6.webp': 'top',  // Activity - faces at top
  '/images/Donate_Volunteer/VW7.webp': 'top',  // Activity - faces at top
  '/images/Donate_Volunteer/VW8.webp': 'top',  // Activity - faces at top
  '/images/Donate_Volunteer/VW9.webp': 'top',  // Activity - faces at top
  '/images/Donate_Volunteer/VW10.webp': 'top', // Activity - faces at top
  '/images/Donate_Volunteer/VW11.webp': 'top', // Activity - faces at top
  '/images/Donate_Volunteer/VW12.webp': 'top', // Activity - faces at top
  '/images/Donate_Volunteer/VW13.webp': 'top', // Activity - faces at top

  // ============================================
  // NURSERY IMAGES
  // ============================================
  '/images/Nursery/OpeningSoon.webp': 'center', // Graphic - centered
  '/images/Nursery/ELC.webp': 'center',         // Graphic/logo - centered

  // ============================================
  // LOGOS AND BRANDING
  // ============================================
  '/images/logo.webp': 'center',  // Logo - always centered
}
