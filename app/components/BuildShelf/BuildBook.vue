<script setup lang="ts">
    import EliteIcon from '../GW2Utils/EliteIcon.vue';
    import Placeholder from '../Dev/Placeholder.vue';
    import type { Build } from '@/shared/prisma';

    const build = defineProps<{ build?: Build }>();

    const buildName: string = "Power Troubadour de la mort qui tue de tout et walah";

    const isOpen = ref(false);
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

    function toggleOpen()
    {
        isOpen.value = !isOpen.value;
    }
</script>

<template>
    <div class="cell rounded">
        <div class="cell-header" @click="toggleOpen">
            <EliteIcon />
            <div class="name">
                <UTooltip :text="buildName" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0">
                    <div class="name-text">
                        {{ buildName }}
                    </div>
                </UTooltip>
            </div>
            <div class="actions">
                <!-- COPY BUILD -->
                <UTooltip :text="actualTooltipBuild" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0" :disableClosingTrigger="true">
                    <UButton class="icon rounded-full" icon="material-symbols:content-copy" size="md" color="neutral" variant="ghost" @click.stop="copyBuild" @mouseleave="resetCopyBuild" />
                </UTooltip>
                <!-- COPY STYLE -->
                <UTooltip :text="actualTooltipStyle" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0" :disableClosingTrigger="true" v-if="build.build?.styleTemplate.length">
                    <UButton class="icon rounded-full" icon="material-symbols:content-copy-outline" size="md" color="neutral" variant="ghost" @click.stop="copyStyle" @mouseleave="resetCopyStyle" />
                </UTooltip>
                <!-- EDIT -->
                <UTooltip text="Editer build" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0" :disableClosingTrigger="true">
                    <UButton class="icon rounded-full" icon="material-symbols:edit" size="md" color="neutral" variant="ghost" @click.stop="" @mouseleave="" />
                </UTooltip>
                <!-- UP/DOWN ICONS-->
                <UIcon size="25" name="material-symbols:keyboard-arrow-up-rounded" v-if="isOpen" />
                <UIcon size="25" name="material-symbols:keyboard-arrow-down-rounded" v-if="!isOpen" />
            </div>
        </div>
        <UCollapsible class="cell-body" :class="isOpen ? 'p-1' : 'p-0'"
            :unmount-on-hide="false"
            v-model:open="isOpen"
        >
            <template #content>
                <Placeholder />
            </template>
        </UCollapsible>
    </div>
</template>

<style lang="scss">
    .cell
    {
        border: 1px solid var(--color-gray-400);

        display: flex;
        flex-direction: column;

        .cell-header
        {
            display: flex;
            align-items: center;
            column-gap: 5px;
            padding: 10px;

            &:hover
            {
                cursor: pointer;
            }

            .name
            {
                flex: 1 1 0;
                min-width: 0;
            }
            .name-text
            {
                display: block;
                min-width: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .actions
            {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                column-gap: 0px;
                flex-shrink: 0;
            }
            .icon:hover
            {
                &:hover
                {
                    cursor: pointer;
                }
            }
        }
    }
</style>
