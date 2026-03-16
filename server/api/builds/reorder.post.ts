import { prisma } from '@/server/utils/db'

type ReorderItem = {
  id: number
  position: number
}

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)

  const body = await readBody<ReorderItem[]>(event)

  if (!Array.isArray(body) || body.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Body invalide : tableau attendu.'
    })
  }

  const isValid = body.every(
    (item) =>
      item &&
      typeof item.id === 'number' &&
      Number.isInteger(item.id) &&
      typeof item.position === 'number' &&
      Number.isInteger(item.position)
  )

  if (!isValid) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Body invalide : chaque entrée doit contenir { id, position }.'
    })
  }

  const results = await prisma.$transaction(
    body.map(({ id, position }) =>
      prisma.build.updateMany({
        where: {
          id,
          ownerId: user.id
        },
        data: {
          position
        }
      })
    )
  )

  const updatedCount = results.reduce((sum, result) => sum + result.count, 0)

  if (updatedCount !== body.length) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Impossible de mettre à jour un ou plusieurs builds.'
    })
  }

  return {
    success: true,
    updated: updatedCount
  }
})
