# Entity & Brand Audit

## Verified brand facts (source of truth: `src/lib/site.ts`)
| Fact | Value | Status |
|---|---|---|
| Name | Metron | Verified in repo |
| Canonical URL | https://www.usemetron.com | Verified (all variants redirect here) |
| Phone | (347) 674-1110 | Owner-provided |
| Email | eeharris2004@gmail.com | Owner-provided. ⚠ Personal Gmail weakens trust; recommend a domain email |
| Founded | Not published (removed 2026-10-12 at owner request) | — |
| Area served | United States (remote) | Owner-stated |
| Physical address | None published | Correct: don't invent one |
| Team | Ethan Harris (sales; Person schema) | Owner-provided photo and Cal.com link |
| Social profiles (`sameAs`) | **None** | ⚠ Gap |
| Logo | /icon.png | OK |

## Structured data (verified on the live site)
- `Organization` + `ProfessionalService` with `@id` `https://www.usemetron.com/#organization` on every page. `WebSite` (`#website`) has publisher → organization.
- `Service` pages carry provider and brand → organization. `BlogPosting` has author and publisher → organization (author changed from an unlinked "Metron Team" organization stub to the real `@id`). `Person` (Ethan) has worksFor → organization. `BreadcrumbList`, `DefinedTerm`, `FAQPage`, `WebApplication` (tools) and `ItemList` are also used.
- **Added:**
  - `alternateName` ["Metron AI Integration Agency", "usemetron.com"].
  - `disambiguatingDescription`.
  - `contactPoint` (sales).
- **Not added, on purpose:**
  - `aggregateRating` or `review` (no real reviews).
  - `LocalBusiness` with an address (no public office).
  - `sameAs` (no verified profiles exist yet).

## External identity
A web search for "Metron AI automation agency usemetron" (2026-10-12) returned only unrelated companies:
- Metron Inc (Reston VA)
- metron.ai (Hong Kong automation)
- metron.works
- metron.live
- Metron-Athene / Precisely
- Metron SAS
- metron-us.com

There are **no independent mentions of usemetron.com.**

## Owner actions (Metron does not create accounts on your behalf)
1. Create a LinkedIn company page named "Metron — AI Integration Agency", with the website set to https://www.usemetron.com.
2. Create Clutch and/or DesignRush and G2 agency profiles with identical name, URL, phone and description.
3. Create a Google Business Profile **only if eligible**. A remote service business can hide its address, but needs a real location. Virtual offices are not allowed.
4. Send the profile URLs to add to `SITE.sameAs`; they then flow into the schema automatically.
5. Use one consistent description everywhere: "Metron is an AI integration and automation agency for small and medium-sized businesses in the United States."
