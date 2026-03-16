<script setup lang="ts">
    import EliteIcon from '../GW2Utils/EliteIcon.vue';
    import ProfessionIcon from '../GW2Utils/ProfessionIcon.vue';
    import BodyGear from '../Gear/BodyGear.vue';
    import BlingGear from '../Gear/BlingGear.vue';
    import SwapsGear from '../Gear/SwapsGear.vue';
    import type { Build } from '@/shared/prisma';
    import GW2SpecializationsClient from '../GW2Specializations.client.vue';
    import { getBuildDisplay } from '@/utils/gw2';
    import { WeaponSwap, type WeaponSwapDTO } from '@/shared/Weapon';

    const props = defineProps<{ build: Build }>();
    const isOpen = ref(false);
    const buildDisplay = await getBuildDisplay(props.build.buildTemplate);

    type BuildEquipmentDTO = { weapons?: WeaponSwapDTO[] };
    const equipment = computed<BuildEquipmentDTO>(() => {
        try {
            return JSON.parse(props.build.buildEquipment) as BuildEquipmentDTO;
        } catch {
            return {};
        }
    });
    const weaponSwaps = computed<WeaponSwap[]>(() => {
        return (equipment.value.weapons ?? []).map(WeaponSwap.fromDTO);
    });

    const tooltipTextsBuild = ["Copier Build", "Build copié !"];
    const actualTooltipBuild = ref(tooltipTextsBuild[0]);
    async function copyBuild()
    {
        await navigator.clipboard.writeText(props.build?.buildTemplate || "");
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
        await navigator.clipboard.writeText(props.build?.styleTemplate || "");
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
            <UTooltip text="Déplacer" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0">
                <UButton
                    class="icon rounded-1 drag-handle px-0"
                    icon="material-symbols:drag-indicator"
                    size="md"
                    color="neutral"
                    variant="link"
                    @click.stop
                />
            </UTooltip>
            <EliteIcon :specid="build?.buildSpec" />
            <ProfessionIcon :professionid="build?.buildClass || 0" :specid="build?.buildSpec || 0" />
            <div class="name">
                <UTooltip :text="build?.title" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0">
                    <div class="name-text">
                        {{ build?.title }}
                    </div>
                </UTooltip>
            </div>
            <div class="actions">
                <!-- COPY BUILD -->
                <UTooltip :text="actualTooltipBuild" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0" :disableClosingTrigger="true">
                    <UButton class="icon rounded-full" icon="material-symbols:content-copy" size="md" color="neutral" variant="ghost" @click.stop="copyBuild" @mouseleave="resetCopyBuild" />
                </UTooltip>
                <!-- COPY STYLE -->
                <UTooltip :text="actualTooltipStyle" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0" :disableClosingTrigger="true" v-if="build?.styleTemplate.length">
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
            :unmount-on-hide="true"
            v-model:open="isOpen"
        >
            <template #content>
                <GW2SpecializationsClient :specializations="buildDisplay" :direction="'column'" />
                <BodyGear :build="build" />
                <BlingGear :build="build" />
                <SwapsGear :swaps="weaponSwaps" />
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
        button:hover
        {
            cursor: pointer;
        }
    }
</style>
