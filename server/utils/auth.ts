import { H3Event, createError } from 'h3'
import { getCurrentUser } from '@/server/utils/session'

export async function requireUser(event: H3Event) {
  const user = await getCurrentUser(event)

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  return user
}

// Variante : renvoie user ou null, sans throw
export async function getOptionalUser(event: H3Event) {
  return getCurrentUser(event)
}
