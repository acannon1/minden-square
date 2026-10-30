# Minden Square — design iteration 1

A Next.js App Router + TypeScript + Tailwind CSS website prepared for Vercel. The initial public site is statically rendered; the future resident portal has not been implemented.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run build
npm run typecheck
```

## Deploy to Vercel

Push this source folder to a GitHub repository, then import it in Vercel. Select the Next.js framework preset. Build command: `npm run build`. Vercel detects the configured static export. No environment variables or database are needed for this design version.

`next.config.ts` currently uses `output: 'export'` to keep the design portable. Before adding authenticated resident pages, server endpoints, or AI agent integrations, remove the export setting and use the standard Next.js deployment on Vercel. Use a server-side database/auth solution such as Supabase for that phase, with tenant-scoped authorization.

The `out` directory is the built static site. It can also be served by any static web server. Opening index.html directly from disk is not supported because assets use root-relative paths.

## Included

- Ivory and forest-green responsive public website, property monogram, aerial hero image
- Floor-plan category tabs and details dialogs
- Amenities, neighborhood destinations, Houston skyline photograph
- Filterable gallery, enlarged photos, self-guided photo walkthrough
- Pricing/specials section, leasing calls to action, office hours, contact section
- Complete footer, legal/privacy/accessibility dialogs, keyboard-accessible navigation and dialogs
- RentCafe listing links for availability, applications, and tour requests

## Confirm before public launch

This is a design draft. Metadata intentionally sets `noindex, nofollow`; change this only after the details below are approved.

1. Official address: RentCafe lists **5441 Pardee Street**; Apartments.com lists **5441 Minden St**. This draft uses Pardee Street.
2. Direct leasing phone: the RentCafe description uses **713-678-7229** while its contact area displays **346-712-7149**. The Apartments.com unit listing uses a listing agent's number. This draft uses the RentCafe description number; management must confirm it.
3. RentCafe office hours: Monday–Friday, 9 AM–4 PM. Confirm holiday and weekend policies.
4. Rates: draft highlights a RentCafe-listed 2 bed / 1 bath / 816 sq. ft. home at $1,050 base rent. It is not live inventory. Apartments.com’s unit listing shows inconsistent square footage and pricing. No $150 rate is advertised because that value appears anomalous.
5. RentCafe also lists one- and three-bedroom categories. Their exact dimensions, configuration, inventory, and rates require confirmation. The draft intentionally omits unverified dimensions and uses descriptive category names, not official plan names.
6. No dimensioned floor-plan graphics or 360°/video tour were supplied. The site offers a clearly labeled still-photo walkthrough. Add approved floor-plan images and a tour embed when available.
7. No verified leasing email or property-specific resident portal URL was found. Their buttons open explanatory dialogs instead of using invented destinations. Add approved links before launch.
8. Apply, availability, and appointment actions open the property listing, not a verified direct application flow. Replace with the management-approved direct destinations if available.
9. No specific move-in offer is promised. Confirm specials, fees, utility costs, qualification rules, and policies before publishing.
10. Management must approve property-photo reproduction rights and property-specific legal/privacy text. The site collects no form data, takes no payments, and has no analytics configured.
11. No exact hospital/downtown travel times are claimed. Routes and travel times vary. The stated UHD distance is from Apartments.com and should be confirmed if retained.

## Sources and photo provenance

Accessed October 30, 2026.

- RentCafe community listing: https://www.rentcafe.com/apartments/tx/houston/835-recently-renovated-2-bedroom-1-bathroom-townhom/default.aspx
- Apartments.com unit listing: https://www.apartments.com/5441-minden-st-houston-tx/em18ntm/
- LBJ Hospital location: https://www.harrishealth.org/locations-hh/Pages/lbj.aspx
- Hutcheson Park: https://www.hcp1.net/HutchesonPark
- Houston skyline: Adrian Newell, Unsplash: https://unsplash.com/photos/a-city-skyline-at-night-1GQoJGCoRTw (free Unsplash license per source page)

Property images downloaded from the RentCafe community listing:

- community.jpg: 2023_MS(20250617115859784).jpg
- kitchen.jpg: 2023_ms5(20250617115902450).jpg
- living.jpg: 2023_ms4(20250617115902412).jpg
- bedroom.png: Bedroom_2(20250617115901016).png
- entrance.jpg: 21bad9d73fda4bc1b18117084cce7398_406x539(20250617115900924).jpg

The skyline image depicts a destination, not a view from an apartment. No generated property photographs, testimonials, availability counts, or floor-plan drawings are used.

## Verification

Production build and TypeScript compilation pass. Desktop browser checks confirmed floor-plan switching, floor-plan dialog, gallery filtering (three interior images), tour navigation, dialog dismissal, and image rendering. Responsive CSS includes tablet/mobile breakpoints and reduced-motion support; mobile device browser QA has not been performed.
