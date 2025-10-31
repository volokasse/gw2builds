import { prisma } from '@/server/utils/db'
import { hashPassword, setSessionCookie } from '@/server/utils/session'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ username?: string; password?: string }>(event)

  const username = body?.username?.trim() || ''
  const password = body?.password || ''

  // validation basique
  if (username.length < 3) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username must be at least 3 characters.'
    })
  }

  if (password.length < 6) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Password must be at least 6 characters.'
    })
  }

  // check if username already exists
  const existing = await prisma.user.findUnique({
    where: { username }
  })

  if (existing) {
    throw createError({
      statusCode: 409,
      statusMessage: 'Username already taken.'
    })
  }

  // create user
  const passwordHash = await hashPassword(password)

  const user = await prisma.user.create({
    data: {
      username,
      passwordHash
    },
    select: {
      id: true,
      username: true,
      createdAt: true
    }
  })

  // set session cookie
  setSessionCookie(event, user.id)

  return {
    ok: true,
    user
  }
})
