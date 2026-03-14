<script lang="ts" setup>
    import type { Build } from '@/shared/prisma';
    import BasicGearLine from './BasicGearLine.vue'
    import type { GW2_Equipments } from '@/types/equipment';
    import Separator from '../Misc/Separator.vue';

    const props = defineProps<{ build: Build }>();
    const entries: (keyof GW2_Equipments)[] = ["head", "shoulders", "coat", "gloves", "leggings", "boots", "rune"];
    const equipment = computed<GW2_Equipments>(() => {
        try {
            return JSON.parse(props.build.buildEquipment) as GW2_Equipments;
        }
        catch { return {} as GW2_Equipments; }
    });
    const hasEquipment = computed(() => {
        return entries.some((entry) => {
            const value = equipment.value[entry];
            return value !== 0 && value !== undefined;
        });
    });
</script>

<template>
    <div class="container" v-if="hasEquipment">
        <Separator :text="'BODY'" />
        <BasicGearLine v-for="entry in entries" :data="equipment[entry]" :type="entry" />
    </div>
</template>

<style lang="scss" scoped>
    .container
    {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }
</style>
