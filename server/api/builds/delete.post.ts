import { prisma } from '@/server/utils/db'

type DeleteItem = { buildid: number };

export default defineEventHandler(async (event) => {
    const user = await requireUser(event);
    const body = await readBody<DeleteItem>(event);
    if (!Number.isInteger(body.buildid) || body.buildid <= 0)
    {
        throw createError({
            statusCode: 400,
            statusMessage: 'Body invalide : build id attendu.'
        });
    }

    const result = await prisma.build.deleteMany({
        where: {
            id: body.buildid,
            ownerId: user.id
        }
    });

    if (result.count === 0)
    {
        throw createError({
            statusCode: 404,
            statusMessage: 'Build introuvable'
        });
    }
    return { success: true };
});
