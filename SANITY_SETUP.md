# Sanity CMS Integration Setup Guide

This document explains how to set up and use the Sanity CMS integration in your Next.js admin dashboard.

## Prerequisites

- Sanity Studio access at: https://www.sanity.io/@oI8AwPhAL/studio/n4ql1ei1cwxd89p8v14al3f6/default/admin/structure/programs
- API credentials from your Sanity project
- Your website deployed (for webhook configuration)

## 1. Environment Variables

Update your `.env.local` file with your Sanity project credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=n4ql1ei1cwxd89p8v14al3f6
NEXT_PUBLIC_SANITY_DATASET=default
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=<your-api-token>
SANITY_WEBHOOK_SECRET=<your-webhook-secret>
