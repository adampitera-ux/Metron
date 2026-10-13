# Bing & IndexNow Audit

## Bing visibility
- Bing Webmaster Tools: **no access**, so it is unknown whether the site is verified. Owner: sign in at https://www.bing.com/webmasters, choose "Import from Google Search Console" (fastest), and confirm the sitemap `https://www.usemetron.com/sitemap.xml`.
- Crawlability for Bingbot: allowed in robots.txt; all pages are static HTML with self-canonicals ✅.
- Freshness signal: sitemap `lastmod` previously equalled build time for every URL (inaccurate). **Fixed:** it is now only emitted for blog posts with real dates.

## IndexNow implementation
| Requirement | Implementation |
|---|---|
| Key not in source control | Key read from the `INDEXNOW_KEY` env var (Vercel) |
| Key hosted on the same host | `GET /indexnow-key.txt` (`src/app/indexnow-key.txt/route.ts`), 404 until configured |
| keyLocation | `https://www.usemetron.com/indexnow-key.txt` sent with each submission |
| Only canonical, own-host URLs | Script filters to the `www.usemetron.com` host |
| No excessive submissions | Manual: pass changed paths, or `--all` once for the initial seed |
| Error and rate-limit handling | Maps 400/403/422/429 to messages; exit code 1 on failure; key never printed |
| Verification | Script refuses to submit until the live key file matches |

Note: the IndexNow key is public by design (engines fetch it); "secret" only means it is not committed to git. The key must be 8–128 characters (letters, digits, dashes).

### Owner steps
1. Generate a key, for example `uuidgen | tr -d -` (32 hex characters).
2. Vercel → Project → Settings → Environment Variables: add `INDEXNOW_KEY` = that value (Production), then redeploy.
3. Check that `https://www.usemetron.com/indexnow-key.txt` shows the key.
4. Run `INDEXNOW_KEY=<key> npm run indexnow -- --all` once.
5. After future content changes, run `npm run indexnow -- /changed/path`.
6. Confirm in Bing Webmaster Tools → IndexNow.

**Status:** code deployed; **not yet active** (needs the key). IndexNow notifies engines of changes; it does not guarantee indexing or ranking.
