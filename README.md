# TNRTC Website - Next.js

ThalaiNagaram Road Transport Corporation - Official Website built with Next.js

## Features

- Modern, responsive design with Next.js 14
- Clean UI with consistent branding
- Mobile-first approach
- Smooth animations and transitions
- Professional taxi service website
- Optimized for Vercel deployment

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

## Pages

- **Home** (`/`) - Hero section with call-to-action buttons
- **Services** (`/services`) - Service offerings grid
- **Offers** (`/offers`) - Special offers and discounts
- **Careers** (`/careers`) - Job listings and application
- **Contact** (`/contact`) - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment on Vercel

The project is optimized for Vercel deployment. You can deploy in several ways:

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your repository or upload files
4. Vercel will auto-detect Next.js settings
5. Deploy

## Build Verification

The project has been verified to build successfully:

```bash
npm run build
```

✅ Build completed successfully with all pages generated as static content.

## Project Structure

```
tnrtc-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── careers/
│   │   └── page.tsx        # Careers page
│   ├── offers/
│   │   └── page.tsx        # Offers page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── vercel.json             # Vercel deployment configuration
```

## Brand Colors

- Primary Yellow: `#FACC15`
- Primary Black: `#0F172A`
- White: `#FFFFFF`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© TNRTC - All rights reserved
