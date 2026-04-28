# The Tech Builder Portfolio

Premium personal portfolio website for Emmanuel Bamgbala, built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

## Edit Portfolio Text

Most editable content lives in:

```text
src/data/portfolio.ts
```

Update names, roles, summary text, stats, focus areas, projects, skills, experience, email, GitHub, LinkedIn, and CV path there.

## Replace The CV

Place the PDF in:

```text
public/cv/
```

The default link expects:

```text
public/cv/emmanuel-bamgbala-cv.pdf
```

If the filename changes, update `cvPath` in `src/data/portfolio.ts`.

## Replace Images

Place profile or project images in:

```text
public/images/
```

The hero currently uses an `EB` placeholder. Replace the placeholder block in `src/components/Hero.tsx` with `next/image` when a real image is ready.

## Icons

Static icons can be stored in:

```text
public/icons/
```

UI icons are currently provided by `lucide-react`.

## Deploy To Vercel

1. Push this project to GitHub.
2. Create a new Vercel project.
3. Import the GitHub repository.
4. Keep the default Next.js build settings.
5. Deploy.

## Connect `thetechbuilder.co.uk`

In Vercel:

1. Open the project dashboard.
2. Go to `Settings` > `Domains`.
3. Add `thetechbuilder.co.uk`.
4. Follow the DNS records Vercel provides.

Typical DNS setup:

```text
A record     @      76.76.21.21
CNAME        www    cname.vercel-dns.com
```

DNS changes can take time to propagate. Keep the domain registrar records aligned with the exact values Vercel shows for the project.
