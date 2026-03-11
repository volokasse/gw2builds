<script setup lang="ts">
    import EliteIcon from '../GW2Utils/EliteIcon.vue';
    import ProfessionIcon from '../GW2Utils/ProfessionIcon.vue';
    import Placeholder from '../Dev/Placeholder.vue';
    import type { Build } from '@/shared/prisma';

    const build = defineProps<{ build?: Build }>();
    const isOpen = ref(false);

    const tooltipTextsBuild = ["Copier Build", "Build copié !"];
    const actualTooltipBuild = ref(tooltipTextsBuild[0]);
    async function copyBuild()
    {
        await navigator.clipboard.writeText(build.build?.buildTemplate || "");
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
        await navigator.clipboard.writeText(build.build?.styleTemplate || "");
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
    <div class="book rounded">
        <div class="book-header" @click="toggleOpen">
            <EliteIcon :specid="build.build?.buildSpec" />
            <ProfessionIcon :professionid="build.build?.buildClass || 0" :specid="build.build?.buildSpec || 0" />
            <div class="name">
                <UTooltip :text="build.build?.title" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0">
                    <div class="name-text">
                        {{ build.build?.title }}
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
        <UCollapsible class="book-body" :class="isOpen ? 'p-1' : 'p-0'"
            :unmount-on-hide="false"
            v-model:open="isOpen"
        >
            <template #content>
                <Placeholder />
            </template>
        </UCollapsible>
    </div>
</template>

<style lang="scss" scoped>
    .book
    {
        display: flex;
        flex-direction: column;

        .book-header
        {
            display: flex;
            align-items: center;
            column-gap: 5px;
            padding: 10px 0px 10px 5px;

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
        }
    }
</style>
<style lang="scss">
    .book
    {
        .actions
        {
            & button:hover
            {
                cursor: pointer;
            }
        }
    }
</style>
