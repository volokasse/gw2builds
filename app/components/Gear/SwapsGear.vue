<script lang="ts" setup>
    import { WeaponSwap } from '@/shared/Weapon';
    import Separator from '../Misc/Separator.vue';
    import Swap from './Swap.vue';

    const props = defineProps<{ swaps: WeaponSwap[] }>();
    const hasSwap = computed<boolean>(() => {
        return props.swaps.map(sw => sw.hasSetSlots()).length > 0;
    });
</script>

<template>
    <div v-if="hasSwap">
        <Separator :text="'WEAPONS'" />
        <div class="swap" v-for="(swap, swapIndex) in swaps" :key="swapIndex">
            <UIcon name="i-material-symbols:sync" class="w-full shrink-0 size-8 mt-2.5" v-if="swapIndex > 0" />
            <Swap :swap="swap.slots" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .swap
    {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }
</style>
