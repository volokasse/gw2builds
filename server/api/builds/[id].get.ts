import { prisma } from '@/server/utils/db'
import { getCurrentUser } from '@/server/utils/session'

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string }
  const buildId = Number(id)

  if (Number.isNaN(buildId)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid build id'
    })
  }

  const currentUser = await getCurrentUser(event)

  const build = await prisma.build.findUnique({
    where: { id: buildId },
    include: {
      owner: {
        select: {
          id: true,
          username: true
        }
      }
    }
  })

  if (!build) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Build not found'
    })
  }

  // si le build est privé, on autorise uniquement le propriétaire
  if (!build.isPublic) {
    if (!currentUser || currentUser.id !== build.ownerId) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Forbidden'
      })
    }
  }

  return {
    ok: true,
    build
  }
})
