import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

/**
 * Sanity Image URL Builder
 * 
 * Helper functions to generate optimized image URLs from Sanity images
 */

const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
})

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

/**
 * Generate an optimized image URL with specific dimensions
 */
export const getImageUrl = (
  image: SanityImageSource,
  width: number = 800,
  height?: number,
  fit: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' = 'crop'
): string => {
  let url = urlFor(image).width(width)

  if (height) {
    url = url.height(height).fit(fit)
  }

  return url.url()
}

/**
 * Generate a responsive image URL (for srcset)
 */
export const getResponsiveImageUrl = (
  image: SanityImageSource,
  size: number
): string => {
  return urlFor(image).width(size).url()
}

/**
 * Generate multiple sizes for srcset
 */
export const getImageSrcSet = (
  image: SanityImageSource,
  sizes: number[] = [640, 800, 1024, 1280]
): string => {
  return sizes
    .map((size) => `${getResponsiveImageUrl(image, size)} ${size}w`)
    .join(', ')
}
