'use client'

import Image, { ImageProps } from 'next/image'
import { getImagePath } from '@/lib/utils'
import { getFocalPoint, FocalPoint, focalPointToCSS } from '@/lib/imageFocalPoints'

interface FocalImageProps extends Omit<ImageProps, 'src'> {
  src: string
  alt: string
  focalPoint?: FocalPoint
}

/**
 * FocalImage - A wrapper around Next.js Image with smart focal point cropping
 *
 * This component automatically applies the correct object-position based on
 * where the important content (faces, subjects) is located in the image.
 *
 * Usage:
 * - Without focalPoint prop: Looks up the image path in imageFocalPoints config
 * - With focalPoint prop: Uses the provided focal point directly
 *
 * FocalPoint can be:
 * - A preset string: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
 * - A custom object: { x: number, y: number } where x and y are percentages (0-100)
 */
export default function FocalImage({
  src,
  alt,
  focalPoint,
  className = '',
  style,
  ...props
}: FocalImageProps) {
  // Get the focal point - either from prop, config lookup, or default to center
  const resolvedFocalPoint = focalPoint ?? getFocalPoint(src)

  // Convert focal point to CSS object-position value
  const objectPosition = focalPointToCSS(resolvedFocalPoint)

  // Merge the object-position into the style prop
  const mergedStyle = {
    ...style,
    objectPosition,
  }

  return (
    <Image
      src={getImagePath(src)}
      alt={alt}
      className={className}
      style={mergedStyle}
      {...props}
    />
  )
}
