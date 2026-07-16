# Nektar Homes — Website

Premium boutique hospitality website for Nektar Homes, Bangalore.

Built with Next.js 15, TypeScript, and Tailwind CSS.

---

## Local Development

### Prerequisites
- Node.js 18.18+ or 20+
- npm or yarn

### Setup

```bash
cd nektar-homes
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Type checking

```bash
npm run type-check
```

---

## Project Structure

```
nektar-homes/
├── app/                         # Next.js App Router pages
│   ├── layout.tsx               # Root layout (fonts, metadata, nav, footer)
│   ├── page.tsx                 # Homepage
│   ├── properties/
│   │   ├── page.tsx             # Properties overview
│   │   └── [slug]/page.tsx      # Individual property pages
│   ├── amenities/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts               # Auto-generated sitemap.xml
│   ├── robots.ts                # robots.txt
│   └── not-found.tsx            # 404 page
├── components/
│   ├── layout/                  # Navbar, Footer
│   ├── home/                    # Homepage sections
│   ├── property/                # Property page sections
│   └── ui/                      # Shared UI components
├── lib/
│   ├── properties.ts            # All property data & constants
│   └── whatsapp.ts              # WhatsApp URL generators
├── public/
│   ├── logo.jpg
│   └── images/
│       ├── property-1/          # Nektar Home Amruth images
│       ├── property-2/          # Nektar Home Advaith images
│       └── property-3/          # Nektar Home Amruth 2BHK images
└── types/index.ts               # TypeScript type definitions
```

---

## Updating Content

All property data lives in `lib/properties.ts`. To update:

- **Property names / descriptions**: Edit the `properties` array
- **WhatsApp number**: Update `WHATSAPP_NUMBER` constant
- **Contact email**: Update `CONTACT_EMAIL` constant
- **Domain**: Update `SITE_URL` constant (also update `metadataBase` in `app/layout.tsx`)
- **Images**: Replace files in `public/images/property-X/` (keep filenames the same)

---

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2: GitHub + Vercel (recommended)

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New → Project**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **Deploy**
6. Your site is live at a `.vercel.app` URL

---

## Connecting a Custom Domain (GoDaddy → Vercel)

### Step 1: Add Domain in Vercel

1. Go to your Vercel project dashboard
2. Settings → **Domains**
3. Enter `nektarhomes.com` → **Add**
4. Vercel will show you the DNS records needed

### Step 2: Configure DNS in GoDaddy

1. Log in to GoDaddy → **My Products** → **DNS**
2. Select your domain (`nektarhomes.com`)

**Add these DNS records:**

| Type  | Host | Value                      | TTL  |
|-------|------|----------------------------|------|
| A     | @    | `76.76.21.21`              | 1 hr |
| CNAME | www  | `cname.vercel-dns.com`     | 1 hr |

> Note: Vercel may provide slightly different IPs — always use the values shown in your Vercel project Settings → Domains screen.

3. Save the records

### Step 3: Verify and SSL

- Vercel automatically provisions a free SSL certificate via Let's Encrypt
- DNS propagation typically takes 5–30 minutes (up to 48 hours in rare cases)
- Once propagated, your site is live at `https://nektarhomes.com`

### Step 4: Set Domain in Code

Update `SITE_URL` in `lib/properties.ts`:

```typescript
export const SITE_URL = 'https://nektarhomes.com'
```

Also verify `metadataBase` in `app/layout.tsx` matches.

Redeploy after the change:
```bash
vercel --prod
```

---

## Environment Variables

No environment variables are required for the base setup.

If you add analytics or a CMS later, create a `.env.local` file:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## SEO

- Unique metadata on every page
- Open Graph + Twitter Card tags
- Schema.org structured data (LodgingBusiness, FAQPage, BreadcrumbList)
- sitemap.xml at `/sitemap.xml`
- robots.txt at `/robots.txt`
- Canonical URLs throughout
- Proper H1→H2→H3 hierarchy

---

## Performance

- Next.js Image component with AVIF/WebP auto-conversion
- Lazy loading for below-fold images
- `priority` on hero images
- Google Fonts via `next/font` (no layout shift)
- Static generation for all pages

---

## WhatsApp Integration

All CTA buttons generate pre-filled WhatsApp messages. The phone number and message templates are in `lib/whatsapp.ts`. No third-party service or API key is required.

Format: `https://wa.me/918123203622?text=...`
