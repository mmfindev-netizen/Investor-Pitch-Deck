# Gmaxira Investor Pitch Deck

18-slide institutional investor presentation for Gmaxira — Institutional Digital Asset Exchange.

## Stack

- React + TypeScript + Vite
- Centralized configuration (`src/config/pitchDeckConfig.ts`)
- Shared presentation components and 16:9 stage

## Develop

```bash
npm install
npm run dev
```

Navigate with ← →, Space, Enter, Page Up/Down, Home, End.

## Build

```bash
npm run build
npm run preview
```

## Configuration

All slide copy, funding figures, roadmap dates, disclosures, and contact fields live in `src/config/pitchDeckConfig.ts`.

- Do not hard-code contact details in components.
- Market sizing and absolute financial figures must be updated from approved investor materials before external distribution.
- Legal disclosures remain visible on applicable slides.

## Spec

See `GMAXIRA_Investor_Pitch_Deck_Master_Cursor_Spec.md`.
