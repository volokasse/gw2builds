import { prisma } from '@/server/utils/db'

export default defineEventHandler(async (event) => {
  const { username } = event.context.params as { username: string }

  const user = await prisma.user.findUnique({
    where: { username }
  })

  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    })
  }

  const builds = await prisma.build.findMany({
    where: {
      ownerId: user.id,
      isPublic: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return {
    ok: true,
    user: {
      id: user.id,
      username: user.username
    },
    builds
  }
})
