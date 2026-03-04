import { defineEventHandler, getQuery, createError } from 'h3'
import { fetchGw2 } from '@/server/utils/gw2'

export default defineEventHandler(async (event) => {
  const q = getQuery(event)
  const ids = q.ids as string | undefined

  if (!ids) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing ?ids=...'
    })
  }

  // 6h de cache, tu peux descendre à 1h
  const data = await fetchGw2(`v2/specializations?ids=${ids}&lang=en`);
  return data;
})
