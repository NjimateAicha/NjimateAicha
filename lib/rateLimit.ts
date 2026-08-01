import 'server-only';

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;

const hits = new Map<string, number[]>();

/**
 * Very simple in-memory rate limiter: max MAX_REQUESTS per key per WINDOW_MS.
 * Good enough for a single-instance Next.js deployment; resets on redeploy/restart.
 */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > MAX_REQUESTS;
}
