import { NextRequest, NextResponse } from 'next/server'

/**
 * Sanity Webhook Handler
 * 
 * Configure this URL in Sanity Studio:
 * 1. Go to Manage > API > Webhooks
 * 2. Create a new webhook pointing to: https://yourdomain.com/api/sanity-webhook
 * 3. Select the events you want to listen to (Create, Update, Delete)
 * 4. Add a Secret (optional but recommended)
 * 
 * This endpoint receives notifications when content changes in Sanity
 * and can trigger revalidation or syncing actions.
 */

// Verify webhook secret (set this in your Sanity webhook configuration)
const WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET

export async function POST(request: NextRequest) {
  try {
    // Verify the webhook secret if configured
    const secret = request.headers.get('x-sanity-webhook-secret')
    if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
      console.warn('Webhook secret mismatch')
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const payload = await request.json()

    console.log('Sanity webhook received:', {
      type: payload._type,
      id: payload._id,
      action: payload._action,
    })

    // Handle different types of events
    switch (payload._action) {
      case 'publish':
        console.log(`Published: ${payload._type} - ${payload._id}`)
        // Add logic here to sync published content
        // e.g., update your database, invalidate cache, etc.
        break

      case 'unpublish':
        console.log(`Unpublished: ${payload._type} - ${payload._id}`)
        // Add logic here to handle unpublished content
        break

      case 'delete':
        console.log(`Deleted: ${payload._type} - ${payload._id}`)
        // Add logic here to handle deleted content
        break

      default:
        console.log(`Unknown action: ${payload._action}`)
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Webhook processed' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Sanity webhook endpoint',
    setup: 'Configure this URL in Sanity Studio > Manage > API > Webhooks',
  })
}
