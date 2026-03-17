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

    /* MISC & VALUES */
    const props = withDefaults(defineProps<{ build: Build, actionsenabled?: boolean }>(), {
        actionsenabled: true
    });
    const buildDisplay = await getBuildDisplay(props.build.buildTemplate);
    const isOpen = ref(false);
    function toggleOpen()
    {
        isOpen.value = !isOpen.value;
    }

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

    /* COPY BUILD */
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

    /* COPY STYLE */
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

    /* DELETE BUILD */
    const emit = defineEmits<{(e: 'update:delete'): void}>();
    async function deleteBuild(buildid: number)
    {
        const res = await $fetch('/api/builds/delete/', {
            method: 'POST',
            body: {
                buildid: buildid
            }
        });

        if (res.success)
            emit('update:delete');
    }
</script>

<template>
    <div class="book rounded">
        <div class="book-header" @click="toggleOpen">
            <UTooltip text="Déplacer" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0" v-if="actionsenabled">
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
                <!-- COPY STYLE -->
                <UTooltip :text="actualTooltipStyle" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0" :disableClosingTrigger="true" v-if="build?.styleTemplate.length">
                    <UButton class="icon rounded-full" icon="material-symbols:content-copy-outline" size="md" color="neutral" variant="ghost" @click.stop="copyStyle" @mouseleave="resetCopyStyle" />
                </UTooltip>
                <!-- COPY BUILD -->
                <UTooltip :text="actualTooltipBuild" :content="{ align: 'center', side: 'top', sideOffset: 8 }" :delay-duration="0" :disableClosingTrigger="true">
                    <UButton class="icon rounded-full" icon="material-symbols:content-copy" size="md" color="neutral" variant="ghost" @click.stop="copyBuild" @mouseleave="resetCopyBuild" />
                </UTooltip>
                <!-- SECONDARY ACTIONS -->
                <UPopover :content="{ align: 'center', side: 'top', sideOffset: 0 }" arrow v-if="actionsenabled">
                    <UButton class="icon rounded-full" icon="material-symbols:settings" size="md" color="neutral" variant="ghost" @click.stop />
                    <template #content>
                        <div class="actions-grid">
                            <UButton class="icon" icon="material-symbols:edit" size="md" color="neutral" variant="ghost" @click.stop="" />
                            <UButton class="icon" icon="material-symbols:delete" size="md" color="neutral" variant="ghost" @click.stop="deleteBuild(build.id)" />
                        </div>
                    </template>
                </UPopover>
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
    .actions-grid
    {
        display: grid;
        padding: 3px;
        gap: 5px;
        grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
        max-width: calc(32px * 3);
        width: fit-content;

        .icon
        {
            cursor: pointer;
        }
    }
</style>
