<script lang="ts" setup>
    import type { GW2_Equipments } from '@/types/equipment';

    const types: (keyof GW2_Equipments)[] = [
        'head',
        'shoulders',
        'coat',
        'gloves',
        'leggings',
        'boots',
        'backpiece',
        'accessory1',
        'accessory2',
        'ring1',
        'ring2',
        'amulet',
        'relic',
        'mainHand1',
        'mainHand2',
        'offHand1',
        'offHand2',
        'sigil',
        'rune',
        'relic'
    ] as const;
    const props = defineProps<{ type: keyof GW2_Equipments }>();
</script>

<template>
    <span class="icon" :class="type"></span>
</template>

<style lang="scss" scoped>
    .icon
    {
        display: block;
        background-image: url('/equip-icons.png');
        width: 32px;
        height: 32px;
        flex-shrink: 0;

        /* ARMOR */
        &.head
        {
            background-position: 0px -200px;
        }
        &.shoulders
        {
            background-position: -32px -200px;
        }
        &.coat
        {
            background-position: -64px -200px;
        }
        &.gloves
        {
        background-position: -96px -200px;
        }
        &.leggings
        {
        background-position: -128px -200px;
        }
        &.boots
        {
        background-position: -160px -200px;
        }

        /* ACCESSORIES */
        &.backpiece
        {
            background-position: -288px -200px;
        }
        &.accessory1,
        &.accessory2
        {
            background-position: -256px -200px;
        }
        &.ring1,
        &.ring2
        {
            background-position: -224px -200px;
        }
        &.amulet
        {
            background-position: -192px -200px;
        }
        &.relic
        {
            background-position: 0px -200px;
        }

        /* WEAPONS */
        &.mainHand,
        &.mainHand1,
        &.mainHand2
        {
            background-position: -352px -168px;
        }
        &.offHand,
        &.offHand1,
        &.offHand2
        {
            background-position: -416px -168px;
        }
        &.sigil
        {
            background-position: -320px -200px;
        }
        &.rune
        {
            background-position: -352px -200px;
        }
        &.relic
        {
            background-position: -384px -200px;
        }
    }
</style>
