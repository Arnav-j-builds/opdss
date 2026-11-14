# OPDSS

Next.js clinical OPD workspace with patient records, encounter/prescription history, document indexing, Gemini-generated clinician drafts, and EuroSCORE screening.

## Run locally

Copy `.env.example` to `.env.local`, add `GEMINI_API_KEY`, then run `npm install` and `npm run dev`.

## Database

Apply `supabase/migrations/20261114000000_opd_core.sql` to a **dedicated** Supabase project. It creates RLS-protected patient, encounter, prescription, and document tables.

## Clinical safeguards

The AI feature produces a draft only. A licensed clinician must verify every fact and medication. EuroSCORE is shown as a screening aid; use the current official EuroSCORE II calculator for clinical decisions.
