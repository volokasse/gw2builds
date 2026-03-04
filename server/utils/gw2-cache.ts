// server/utils/gw2-cache.ts
import { prisma } from '@/server/utils/db'

/**
 * Récupère une entrée de cache si elle n'est pas expirée.
 */
export async function getGw2Cache<T = any>(key: string, ttlMs: number = 1000 * 60 * 60 * 6): Promise<T | null> {
  const row = await prisma.gw2Cache.findUnique({
    where: { key }
  })

  if (!row) {
    return null
  }

  const age = Date.now() - row.updatedAt.getTime()
  if (age > ttlMs) {
    // expiré
    return null
  }

  try {
    return JSON.parse(row.data) as T
  } catch {
    return null
  }
}

/**
 * Écrit/écrase le cache.
 */
export async function setGw2Cache(key: string, data: any): Promise<void> {
  await prisma.gw2Cache.upsert({
    where: { key },
    update: {
      data: JSON.stringify(data)
      // updatedAt sera mis à jour automatiquement
    },
    create: {
      key,
      data: JSON.stringify(data)
    }
  })
}
