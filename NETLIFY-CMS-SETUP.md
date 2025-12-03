# Netlify & Decap CMS Integration

## Overview

This document outlines the Decap CMS integration for the Project Annie website, enabling non-technical users to manage content through a user-friendly admin interface.

## What Was Implemented

### 1. Decap CMS Admin Interface
- **Location**: `/admin` (accessible at `yoursite.netlify.app/admin`)
- **Files Created**:
  - `public/admin/index.html` - CMS entry point
  - `public/admin/config.yml` - CMS configuration with all content collections

### 2. Content Management Structure

All editable content has been moved from hardcoded values in React components to JSON files in the `/content` directory:

| File | Content |
|------|---------|
| `settings.json` | Organization name, contact info, address, hours, EIN |
| `stats.json` | Impact statistics for home, volunteer, and donate pages |
| `testimonials.json` | Quotes with page targeting (home/volunteer) |
| `gallery.json` | Photo gallery images with categories |
| `gallery-categories.json` | Gallery filter categories |
| `programs.json` | Nursery school info, schedule, enrollment steps |
| `volunteer-opportunities.json` | Volunteer roles, benefits, application steps |
| `donation-tiers.json` | Donation amounts, ways to give, fund allocation |
| `timeline.json` | Organization history milestones |
| `campaign.json` | Current fundraising campaign with progress |
| `values.json` | Mission, vision, core values |
| `founder.json` | Ms. Annie's bio and quotes |

### 3. Content Loading Utilities
- **File**: `lib/content.ts`
- Contains TypeScript types and helper functions for loading content
- Provides type safety for all content structures

### 4. Updated Components
Pages and components now import content from JSON files:
- `app/page.tsx` - Home page
- `app/gallery/page.tsx` - Photo gallery
- `components/Footer.tsx` - Site footer

## Deployment Configuration

### Changes Made for Netlify
1. **Removed GitHub Pages basePath**: Updated `next.config.js` to remove `/ITLeadership` prefix
2. **Fixed image paths**: Updated `lib/utils.ts` to use empty `BASE_PATH` for Netlify
3. **Added Netlify Identity**: Added identity widget script to `app/layout.tsx`

### Build Settings (in Netlify Dashboard)
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: 18.x (or higher)

## How to Enable CMS Access

### Step 1: Enable Netlify Identity
1. Go to Netlify Dashboard → Site settings → Identity
2. Click "Enable Identity"
3. Under "Registration", select "Invite only"

### Step 2: Enable Git Gateway
1. Go to Identity → Services
2. Click "Enable Git Gateway"
3. This allows the CMS to commit changes to your repository

### Step 3: Invite Users
1. Go to Identity → Invite users
2. Enter email addresses for content editors
3. Users will receive an invite to set up their account

### Step 4: Access the CMS
1. Go to `yoursite.netlify.app/admin`
2. Click "Login with Netlify Identity"
3. Sign in with invited credentials

## CMS Collections Available

Once logged in, editors can manage:

| Collection | What Can Be Edited |
|------------|-------------------|
| **Site Settings** | Phone, email, address, hours |
| **Impact Statistics** | All numbers displayed on the site |
| **Testimonials** | Add/edit/remove quotes |
| **Photo Gallery** | Upload images, set categories |
| **Programs** | Schedule, features, enrollment steps |
| **Volunteer Info** | Opportunities, benefits, application process |
| **Donation Info** | Tiers, ways to give, fund allocation |
| **Timeline** | Organization history milestones |
| **Campaign** | Fundraising goal, progress, description |
| **Core Values** | Mission, vision, values |
| **Founder** | Bio, photo, quotes |

## How Content Updates Work

1. Editor makes changes in the CMS at `/admin`
2. CMS commits changes to the GitHub repository
3. Netlify detects the commit and triggers a rebuild
4. Site is updated with new content (usually within 1-2 minutes)

## Alternative Authentication Options

The current setup uses Netlify Identity, but Decap CMS supports other backends:

- **GitHub OAuth**: Users log in with GitHub accounts
- **Auth0**: More flexible, supports any email provider
- **GitLab/Bitbucket**: For non-GitHub repositories

To switch backends, modify the `backend` section in `public/admin/config.yml`.

## Local Development

To test the CMS locally:

1. Install the Decap CMS proxy server:
   ```bash
   npx decap-server
   ```

2. Uncomment `local_backend: true` in `public/admin/config.yml`

3. Run the Next.js dev server:
   ```bash
   npm run dev
   ```

4. Access the CMS at `http://localhost:3000/admin`

## File Structure

```
ProjectAnnie/
├── content/                    # All CMS-editable content
│   ├── settings.json
│   ├── stats.json
│   ├── testimonials.json
│   ├── gallery.json
│   ├── gallery-categories.json
│   ├── programs.json
│   ├── volunteer-opportunities.json
│   ├── donation-tiers.json
│   ├── timeline.json
│   ├── campaign.json
│   ├── values.json
│   └── founder.json
├── public/
│   └── admin/
│       ├── index.html          # CMS entry point
│       └── config.yml          # CMS configuration
├── lib/
│   └── content.ts              # Content loading utilities
└── app/
    └── layout.tsx              # Includes Netlify Identity widget
```

## Troubleshooting

### Images not loading
- Ensure `BASE_PATH` in `lib/utils.ts` is empty (`''`)
- Check that image paths in JSON files start with `/images/`

### CMS login not working
- Verify Netlify Identity is enabled
- Check that Git Gateway is enabled
- Ensure user has been invited and confirmed their account

### Changes not appearing
- Wait 1-2 minutes for Netlify to rebuild
- Check Netlify dashboard for build errors
- Clear browser cache

## Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/security/secure-access-to-sites/identity/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
