<script setup lang="ts">
    import { GW2_PROFESSION_OPTIONS } from '@/utils/gw2';
    import BuildCase from './BuildCase.vue';
    import { type Build } from '@/shared/prisma';

    interface BuildsByProfession {
        builds: Record<number, Build[]>
    }

    const { user } = useAuth();
    const userBuilds = ref<Build[]>([]);
    const buildsByProf = ref<BuildsByProfession>({builds: []});

    onMounted(async () => {
        userBuilds.value = await $fetch('/api/builds/by/' + user.value?.id, { method: 'GET' }) as Build[];
        buildsByProf.value = groupBuildByProfession(userBuilds.value);
        console.log(buildsByProf);
    });

    function groupBuildByProfession(items: Build[]): BuildsByProfession {
        const builds = Object.fromEntries(GW2_PROFESSION_OPTIONS.map(x => [x.value, [] as Build[]])) as Record<number, Build[]>;
        for (const build of items)
            (builds[build.buildClass] ??= []).push(build);
        return { builds };
    }
</script>

<template>
    <div class="shelf">
        <BuildCase v-for="profession in GW2_PROFESSION_OPTIONS" :builds="buildsByProf.builds[profession.value]" :profession="profession.label" />
    </div>
</template>

<style lang="scss" scoped>
    .shelf
    {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>
