# AMEF website

A responsive multi-page website for the Asaba Memorial Education Foundation, built from the client-supplied history and brand palette.

## Website pages

- `/` — Home
- `/about/` — Foundation history and purpose
- `/our-work/` — All programme areas
- `/amhs/` — Asaba Memorial High School
- `/search/` — site-wide search
- `/sifa-skilling-centre/` — Sifa Skilling Centre
- `/get-involved/` — Support and partnership pathways
- `/sponsor-a-child/` — Child sponsorship information and interest pathway
- `/careers/` — Confirmed vacancies and future career guidance
- `/contact/` — Contact and inquiry form

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vercel is configured from the repository root through `../vercel.json`; do not select the Next.js framework preset for this project.

## Content and launch notes

- The hero is custom editorial artwork created for this concept. It is illustrative, not documentary photography.
- The logo is a temporary web-native brand mark and should be replaced if the client supplies an official logo.
- The contact forms are fully validated in the browser but intentionally do not send externally. Connect them to the client’s confirmed inbox or form service before launch.
- WhatsApp uses the publicly listed AMHS number. Facebook, Instagram, YouTube and TikTok icons remain visibly marked as pending until the client confirms the exact profile URLs.
- No phone number, email address, payment gateway or staff details were invented. Add those once the client confirms them.
