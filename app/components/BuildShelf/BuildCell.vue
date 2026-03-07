<script setup lang="ts">
    import { build } from 'nuxt';
import EliteIcon from '../GW2Utils/EliteIcon.vue';

    const isOpen: boolean = false;
    const buildValue: string = "[&DQcBHQoaSRcjDwAAZh0AAFMdAABpAQAAbR0AAAAAAAAAAAAAAAAAAAAAAAADWQAFAGYAAA==]";
    const styleValue: string = "[&DwAAqyQBAAEAAQABAHoCRQVQAnMCAQBbIEUFRQVFBUUFcwJzArAFAgBMANUkRQWwBdkEAgDdIMgBsAVWAXMCWgBzAkUFcwIBAAAAAQABAAEAAQAAAAAATyMvEFEhAAD9fw==]";

    const tooltipTextsBuild = ["Copier Build", "Build copié !"];
    const actualTooltipBuild = ref(tooltipTextsBuild[0]);
    async function copyBuild()
    {
        await navigator.clipboard.writeText(buildValue);
        actualTooltipBuild.value = tooltipTextsBuild[1];
    }
    function resetCopyBuild()
    {
        setTimeout(() => { actualTooltipBuild.value = tooltipTextsBuild[0]; }, 100);
    }

    const tooltipTextsStyle = ["Copier Style", "Style copié !"];
    const actualTooltipStyle = ref(tooltipTextsStyle[0]);
    async function copyStyle()
    {
        await navigator.clipboard.writeText(styleValue);
        actualTooltipStyle.value = tooltipTextsStyle[1];
    }
    function resetCopyStyle()
    {
        setTimeout(() => { actualTooltipStyle.value = tooltipTextsStyle[0]; }, 100);
    }
</script>

<template>
    <div class="cell">
        <EliteIcon />
        <div class="name">
            Power Troubadour
        </div>
        <div class="actions">
            <UTooltip :text="actualTooltipBuild" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0" :disableClosingTrigger="true">
                <UIcon size="18" name="material-symbols:content-copy" @click="copyBuild" @mouseleave="resetCopyBuild"/>
            </UTooltip>
            <UTooltip :text="actualTooltipStyle" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0" :disableClosingTrigger="true">
                <UIcon size="18" name="material-symbols:content-copy-outline" @click="copyStyle" @mouseleave="resetCopyStyle" />
            </UTooltip>
            <UIcon size="18" name="material-symbols:edit" />
            <UIcon size="25" name="material-symbols:keyboard-arrow-up-rounded" v-if="isOpen" />
            <UIcon size="25" name="material-symbols:keyboard-arrow-down-rounded" v-if="!isOpen" />
        </div>
    </div>
</template>

<style lang="scss">
    .cell
    {
        border: 1px solid red;

        display: flex;
        align-items: center;
        column-gap: 5px;
        padding: 10px;
        border-radius: 10rem;

        .name
        {
            flex-shrink: 0;
        }
        .actions
        {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            column-gap: 5px;
            flex-grow: 1;
        }
    }
</style>
