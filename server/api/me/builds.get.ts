import { prisma } from '@/server/utils/db'
import { requireUser } from '@/server/utils/auth'

export default defineEventHandler(async (event) => {
  // Vérifie la session, 401 si pas connecté
  const user = await requireUser(event)

  // Récupère tous les builds pour ce user
  const builds = await prisma.build.findMany({
    where: {
      ownerId: user.id
    },
    orderBy: {
      createdAt: 'desc'
    },
    select: {
      id: true,
      title: true,
      buildTemplate: true,
      buildClass: true,
      buildSpec: true,
      buildEquipment: true,
      isPublic: true,
      createdAt: true,
      slug: true
    }
  })

  return {
    ok: true,
    builds
  }
})
