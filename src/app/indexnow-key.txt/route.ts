/**
 * IndexNow key file (https://www.indexnow.org). The key lives in the INDEXNOW_KEY env var
 * in Vercel rather than in source control; scripts/indexnow.mjs passes this URL as
 * keyLocation. Returns 404 until the key is configured.
 */
export const dynamic = "force-static";

export function GET() {
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!key || !/^[a-zA-Z0-9-]{8,128}$/.test(key)) return new Response("Not found", { status: 404 });
  return new Response(key, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
