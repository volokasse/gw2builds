import { prisma } from '@/server/utils/db'
import { verifyPassword, setSessionCookie } from '@/server/utils/session'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ username?: string; password?: string }>(event)

  const username = body?.username?.trim() || ''
  const password = body?.password || ''

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing credentials.'
    })
  }

  const user = await prisma.user.findUnique({
    where: { username }
  })

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid username or password.'
    })
  }

  const ok = await verifyPassword(password, user.passwordHash)
  if (!ok) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid username or password.'
    })
  }

  // auth ok -> cookie
  setSessionCookie(event, user.id)

  return {
    ok: true,
    user: {
      id: user.id,
      username: user.username,
      createdAt: user.createdAt
    }
  }
})
