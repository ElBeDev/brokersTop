# Altoros Trust LLC — Website Rebrand Workflow

## Project Overview
Rebrand the existing `brokersTop` static landing page from **Brokers Top LLC** to **Altoros Trust LLC** (Delaware File Number: 6068763).

---

## Company Reference

| Field | Value |
|---|---|
| Legal Name | ALTOROS TRUST LLC |
| File Number | 6068763 |
| Jurisdiction | Delaware (US) |
| Formation Date | June 14, 2016 |
| Company Type | Limited Liability Company |
| Registered Agent | The Company Corporation |
| Registered Agent Address | 2711 Centerville Rd Ste 400, Wilmington, DE 19808 |
| SEC IAPD | CRD #284423 / SEC# 801-108041 (registration terminated 12/14/2016) |

> **Note:** Public records only expose the Delaware registered agent address. Operational contact details (phone, email, physical office) are intentionally left blank until provided by the client.

---

## Completed

- [x] Identified company data from public sources using file number 6068763.
- [x] Audited all occurrences of "Brokers Top" branding in `index.html` and `fintech-theme.css`.
- [x] Replaced visible company name references (`Brokers Top` → `Altoros Trust`).
- [x] Blanked out contact details (phone, email, address).
- [x] Removed/hid map embed until address is confirmed.
- [x] Updated HTML meta tags (title, description, keywords, OG tags).
- [x] Updated theme comment in `fintech-theme.css`.

---

## Completed

- [x] Reviewed legal/compliance copy and softened unverifiable SEC claims.
- [x] Updated copyright year to 2026.
- [x] Created Privacy Policy and Terms of Service pages.
- [x] Updated footer links to point to real policy pages.
- [x] Created text-based placeholder logo assets for Altoros Trust.
- [x] Replaced all logo references and removed old Brokers Top logo files.
- [x] Performed browser QA: no broken images, no old brand text, all sections render.
- [x] Added social media "coming soon" alerts for placeholder links.
- [x] Downloaded testimonial avatars locally to remove external dependency.
- [x] Improved image alt text for accessibility.
- [x] Corrected support hours to 10:00 AM - 5:00 PM EST.
- [x] Increased readability and contrast for older users.
- [x] Fixed mobile navigation, CTA scrolling, and testimonial carousel behavior.

---

## In Progress

- [ ] None.

---

## Pending

- [ ] Decide and update operational contact information once provided.
- [x] Create and apply final professional logo assets (shield + AT monogram).
- [ ] Final visual QA on live mobile after latest deployment.

---

## Files to Modify

| File | Status | Notes |
|---|---|---|
| `index.html` | Done | Main content, meta tags, contact info, logo refs |
| `assets/css/fintech-theme.css` | Done | Theme header comment updated |
| `assets/images/logo/*` | Done | Shield + AT monogram logo applied to all sizes |
| `workflow.md` | Ongoing | Update as tasks progress |

---

## Branding Replacement Rules

- `Brokers Top LLC` → `Altoros Trust LLC`
- `Brokers Top` → `Altoros Trust`
- `Brokers top` / `brokerstopllc.com` → `Altoros Trust` / placeholder
- Keep product names like "Gold", "Crypto", "Strategies" but prefix with `Altoros Trust` where appropriate.

---

## Contact Placeholders

Until real contact details are confirmed, use:

- **Phone:** `[Phone number pending]`
- **Email:** `[Email pending]`
- **Address:** `[Address pending]`
- **Map:** Hidden/removed

---

## Notes

- Logo: shield + AT monogram in teal gradient, applied to all sizes and favicons.
- Contact placeholders are intentionally visible so the client notices them before launch.
- Map embed is commented out; restore once a real address is confirmed.
- Social media links show "coming soon" alerts until real profiles are created.
- Testimonial avatars are now local assets (no external API dependency).
- Latest polish pass focused on support-hours accuracy, larger text/tap targets, reduced motion, and mobile testimonial stability.

---

## Git Commits

- `783a409` — "Rebrand Brokers Top to Altoros Trust LLC" (21 files changed, 511 insertions(+), 102 deletions(-))
- `1b9b4a0` — "Polish rebrand and add remaining assets" (7 files changed, 37 insertions(+), 30 deletions(-))
- `f99660a` — "Apply selected Altoros Trust logo concept" (8 files changed, 78 insertions(+), 25 deletions(-))

---

## Last Updated

2026-07-08
