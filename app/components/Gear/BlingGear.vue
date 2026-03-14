<script lang="ts" setup>
    import type { Build } from '@/shared/prisma';
    import type { GW2_Equipments } from '@/types/equipment';
    import BasicGearLine from './BasicGearLine.vue'
    import Separator from '../Misc/Separator.vue';

    const props = defineProps<{ build: Build }>();
    const entries: (keyof GW2_Equipments)[] = ["backpiece", "accessory1", "accessory2", "relic", "amulet", "ring1", "ring2"];
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
        <Separator :text="'ACCESSORIES'" />
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
