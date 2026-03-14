<script setup lang="ts">
    import { getProfessionLabel, isSpecElite } from '@/utils/gw2';

    const props = defineProps<{ professionid: number, specid: number }>();
</script>

<template>
    <div class="gw2-spec-icon" v-if="!isSpecElite(specid)">
        <UTooltip :text="getProfessionLabel(professionid)" :content="{ align: 'center', side: 'top', sideOffset: 8 }">
            <img :src="'/gw2-professions-icons/' + professionid + '.png'" width="25px" height="25px" />
        </UTooltip>
    </div>
</template>

<style lang="scss">

</style>
