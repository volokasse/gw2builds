import { prisma } from '@/server/utils/db';
import { decode } from 'gw2e-chat-codes';
import { createUniqueBuildSlug } from '@/server/utils/slug';

export default defineEventHandler(async (event) => {
    const user = await requireUser(event);
    const body = await readBody<{
        name?: string;
        style?: String;
        build?: string;
        equipment?: string;
        isPublic? : boolean
    }>(event);

    /*
    id              - int
    title           - string
    styleTemplate   - string
    buildTemplate   - string
    buildClass      - int
    buildSpec       - int
    buildEquipment  - string
    isPublic        - boolean
    createdAt       - DateTime
    slug            - string
    */

    const name      = body?.name?.trim() || '';
    const style     = body?.style?.trim() || '';
    const build     = body?.build?.trim() || '';
    const equipment = body?.equipment || '';
    const isPublic  = body?.isPublic || false;

    if (!name || !build) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing name or build template'
        })
    }

    let buildInfos = decode(build);
    if (!buildInfos || buildInfos.type !== 'build')
    {
        throw createError({
            statusCode: 400,
            statusMessage: 'Build template is invalid'
        });
    }

    let profession = buildInfos.profession;
    let specs = [buildInfos.specialization1, buildInfos.specialization2, buildInfos.specialization3];

    /// Check elite spec
    const specsInfos = await fetchGw2(`v2/specializations?ids=${specs.join(',')}`);
    let eliteSpecID = 0;
    for (let specInfos of specsInfos)
    {
        if (specInfos.elite)
        {
            eliteSpecID = specInfos.id;
            break;
        }
    }

    let slug = await createUniqueBuildSlug();
    const newBuild = await prisma.build.create({
        data: {
            title: name,
            styleTemplate: style,
            buildTemplate: build,
            buildClass: profession,
            buildSpec: eliteSpecID,
            buildEquipment: equipment,
            isPublic: isPublic,
            slug: slug,
            ownerId: user.id
        },
        select: {
            id: true,
            slug: true,
            title: true,
            isPublic: true,
            createdAt: true
        }
    });

    return newBuild;
})
