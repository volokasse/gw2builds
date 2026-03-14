<script setup lang="ts">
    import { type GW2Spec, GW2_SPECIALIZATIONS_ELITES, getGW2Spec, isSpecElite } from '@/utils/gw2';

    const props = defineProps<{ specid?: number }>();
    const eliteInfos: GW2Spec | undefined = getGW2Spec(props.specid || 0);
</script>

<template>
    <div class="gw2-spec-icon" v-if="specid != 0 && eliteInfos !== undefined && isSpecElite(specid || 0)">
        <UTooltip :text="eliteInfos.name" :content="{ align: 'center', side: 'top', sideOffset: 8 }">
            <img :src="'/gw2-spec-icons/' + eliteInfos.id + '.png'" width="25px" height="25px" />
        </UTooltip>
    </div>
</template>

<style lang="scss">

</style>
