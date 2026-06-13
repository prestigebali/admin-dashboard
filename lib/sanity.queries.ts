/**
 * Sanity GROQ Queries
 * 
 * Common queries to fetch data from your Sanity CMS
 * Update these based on your schema
 */

// Query to fetch all programs
export const PROGRAMS_QUERY = `
  *[_type == "program"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    image,
    price,
    duration,
    level,
    _createdAt,
    _updatedAt
  }
`

// Query to fetch a single program by slug
export const PROGRAM_BY_SLUG_QUERY = `
  *[_type == "program" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    image,
    price,
    duration,
    level,
    content,
    _createdAt,
    _updatedAt
  }
`

// Query to fetch all activities/posts
export const ACTIVITIES_QUERY = `
  *[_type == "activity"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    image,
    _createdAt,
    _updatedAt
  }
`

// Query to fetch all team members
export const TEAM_QUERY = `
  *[_type == "team"] | order(name asc) {
    _id,
    name,
    role,
    image,
    bio,
    email,
    _createdAt
  }
`

// Query to fetch settings/config
export const SETTINGS_QUERY = `
  *[_type == "settings"][0] {
    siteName,
    description,
    logo,
    contactEmail,
    phone,
    address,
    socialMedia
  }
`

// Query to fetch testimonials
export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    content,
    author,
    role,
    image,
    rating,
    _createdAt
  }
`
