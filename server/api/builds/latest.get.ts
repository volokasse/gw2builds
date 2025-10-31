import { prisma } from '@/server/utils/db'

export default defineEventHandler(async (event) => {
  // possibilité de passer ?limit=5
  const query = getQuery(event)
  const limit = query.limit ? Number(query.limit) : 10

  const builds = await prisma.build.findMany({
    where: {
      isPublic: true
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: limit,
    include: {
      owner: {
        select: {
          id: true,
          username: true
        }
      }
    }
  })

  return {
    ok: true,
    builds
  }
})
