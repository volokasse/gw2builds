<script lang="ts" setup>
    import type { WeaponSlot, WeaponHand } from '@/shared/Weapon';
    import { getStatLabel, getSigilLabel } from '@/utils/gw2';
    import IconGear from './IconGear.vue';

    const props = defineProps<{ swap: Record<WeaponHand, WeaponSlot> }>();
</script>

<template>
    <div class="swap">
        <div class="line">
            <IconGear :type="'mainHand1'" />
            <div class="stat">
                {{ getStatLabel(swap.main.stat) }}
            </div>
        </div>
        <div class="line" v-for="sigil in swap.main.sigils">
            <IconGear :type="'sigil'" />
            <div>
                {{ getSigilLabel(sigil) }}
            </div>
        </div>
    </div>
    <div class="swap">
        <div class="line">
            <IconGear :type="'offHand1'" />
            <div class="stat">
                {{ getStatLabel(swap.off.stat) }}
            </div>
        </div>
        <div class="line" v-for="sigil in swap.off.sigils">
            <IconGear :type="'sigil'" />
            <div>
                {{ getSigilLabel(sigil) }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .swap
    {
        display: flex;
        flex-direction: column;

        .line
        {
            display: flex;
            column-gap: 5px;

            .stat::first-letter
            {
                text-transform: capitalize;
            }
            .sigil_container
            {
                width: 50%;
            }
        }
    }
</style>
