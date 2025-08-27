# AI3D SaaS (Next.js + Cloudflare AI + Stripe)

Minimal starter to deploy an AI+3D SaaS MVP on **Cloudflare Pages** using **GitHub**.

## Features
- Next.js (Pages Router) with TypeScript
- API route to call **Cloudflare Workers AI** (Stable Diffusion XL) as a demo
- Simple UI to submit a prompt and preview the generated image (base64)
- Stripe Checkout skeleton for subscriptions

## Quick Start
```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages
- Build command: `npm install && npm run build`
- Output directory: `.next`

## Env Vars
Copy `.env.example` to `.env.local` and fill:
- `CF_ACCOUNT_ID`, `CF_API_TOKEN`
- `STRIPE_SECRET_KEY`, `STRIPE_PUBLIC_KEY`, `STRIPE_PRICE_ID`

## Notes
- This template renders an *image* from Workers AI as a placeholder for "AI 3D".
  You can replace it with a pipeline that returns a 3D model and render it via Three.js.
- Keep your secrets in project settings on Cloudflare Pages (Environment Variables).
