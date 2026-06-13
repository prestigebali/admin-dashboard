import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

// Helper function to fetch content from Sanity
export const fetchSanityContent = async (query: string, params?: Record<string, any>) => {
  try {
    const data = await sanityClient.fetch(query, params)
    return data
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
    throw error
  }
}

// Helper function to fetch a single document
export const fetchSanityDocument = async (id: string) => {
  try {
    const doc = await sanityClient.getDocument(id)
    return doc
  } catch (error) {
    console.error('Error fetching document from Sanity:', error)
    throw error
  }
}
