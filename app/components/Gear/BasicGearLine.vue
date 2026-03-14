<script lang="ts" setup>
    import type { GW2_Equipments } from '@/types/equipment';
    import IconGear from './IconGear.vue';
    import { getStatLabel, getRuneLabel, getSigilLabel, getRelicLabel } from '@/utils/gw2';
    import Placeholder from '../Dev/Placeholder.vue';

    const props = defineProps<{ data: number | undefined, type: keyof GW2_Equipments }>();
    const dataValue = ref("");
    switch(props.type)
    {
        case "rune":
            dataValue.value = getRuneLabel(props.data);
        break;
        case "sigil":
            dataValue.value = getSigilLabel(props.data);
        break;
        case "relic":
            dataValue.value = getRelicLabel(props.data);
        break;
        default:
            dataValue.value = getStatLabel(props.data);
        break;
    }
</script>

<template>
    <div class="gearline">
        <template v-if="data !== undefined && data > 0">
            <IconGear :type="type" />
            <div class="attribute">
                {{ dataValue }}
            </div>
        </template>
        <template v-else>
            <IconGear :type="type" />
            <Placeholder :mh="'min-h-8'" />
        </template>
    </div>
</template>

<style lang="scss" scoped>
    .gearline
    {
        display: flex;
        column-gap: 5px;

        .attribute::first-letter
        {
            text-transform: capitalize;
        }
    }
</style>
