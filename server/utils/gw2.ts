// server/utils/gw2.ts
import { getGw2Cache, setGw2Cache } from '@/server/utils/gw2-cache'

const GW2_BASE = 'https://api.guildwars2.com'
const DEFAULT_TTL = 1000 * 60 * 60 * 6 // 6h

export async function fetchGw2<T = any>(
  path: string,
  ttlMs: number = DEFAULT_TTL
): Promise<T> {
  const cacheKey = `gw2:${path}`

  // 1. tenter le cache persistant
  const cached = await getGw2Cache<T>(cacheKey, ttlMs)
  if (cached) {
    return cached
  }

  // 2. fetch distant
  const res = await fetch(`${GW2_BASE}/${path}`, {
    headers: {
      'User-Agent': 'gw2builds/1.0',
      'Accept': 'application/json'
    }
  })

  if (!res.ok) {
    // on ne met pas en cache une erreur
    throw new Error(`GW2 API error: ${res.status} ${res.statusText}`)
  }

  const json = (await res.json()) as T

  // 3. stocker
  await setGw2Cache(cacheKey, json)

  return json
}
