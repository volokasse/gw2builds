import { prisma } from '@/server/utils/db'
import { getCurrentUser } from '@/server/utils/session'

export default defineEventHandler(async (event) => {
    const { userid } = event.context.params as { userid: string };
    const id = Number(userid);
    console.log(id);

    if (Number.isNaN(userid))
        throw createError({ statusCode: 400, statusMessage: 'Invalid user id' });

    const currentUser = await getCurrentUser(event);
    let builds = null;
    if (currentUser?.id != id)
        builds = await prisma.build.findMany({ where: { ownerId: id }});
    else
        builds = await prisma.build.findMany({ where: { ownerId: id, isPublic: true }});

    if (!builds)
        throw createError({ statusCode: 404, statusMessage: 'Builds not found' });

    return builds;
})
