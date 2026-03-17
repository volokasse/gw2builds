<script setup lang="ts">
    import { GW2_STATS_OPTIONS, GW2_STATS_RELICS, GW2_STATS_RUNES } from '@/utils/gw2';
    import type { WeaponSwapDTO } from '@/shared/Weapon';
    import type { SelectItem } from '@/types/selectItem';
    import { ref, reactive, watch } from 'vue';
    import NewBuildWeaponSwap from './NewBuildWeaponSwap.vue';

    const armorTypes       = ['head','shoulders','coat','gloves','leggings','boots', 'rune'];
    const accessoriesTypes = ['backpiece','accessory1','accessory2','amulet','ring1','ring2', 'relic'];

    const allKeys         = [...armorTypes,...accessoriesTypes];
    const selected        = reactive<Record<string, any>>(Object.fromEntries(allKeys.map(k => [k, undefined])));
    const items           = ref<SelectItem[]>(GW2_STATS_OPTIONS);
    const itemsRelics     = ref<SelectItem[]>(GW2_STATS_RELICS);
    const itemsRunes      = ref<SelectItem[]>(GW2_STATS_RUNES);
    const globalSelected  = ref<SelectItem | undefined>(undefined);
    const equipment       = defineModel<string>('equipment');
    const excludedFromAll = ['rune', 'relic'];
    const swapsDTO        = ref<WeaponSwapDTO[]>([]);

    const weaponSwapRef = ref<{
        applyGlobalToAll: () => void;
        applyGlobalToEmptyOnly: () => void;
        clearAll: () => void;
    } | null>(null);

    /// Form actions
    function applyGlobalToEmptyOnly() {
        for (const k of allKeys) {
            if (!selected[k]) {
                if (excludedFromAll.includes(k)) {
                    continue;
                }
                selected[k] = globalSelected.value;
            }
        }

        weaponSwapRef.value?.applyGlobalToEmptyOnly();
    }

    function applyGlobalToAll() {
        for (const k of allKeys) {
            if (excludedFromAll.includes(k)) {
                continue;
            }
            selected[k] = globalSelected.value;
        }

        weaponSwapRef.value?.applyGlobalToAll();
    }

    function clearAll() {
        for (const k of allKeys) {
            selected[k] = undefined;
        }

        weaponSwapRef.value?.clearAll();
    }

    /// Watcher
    const emit = defineEmits<{(e: 'update:equipmentJson', value: string): void}>();
    function emitJson() {
        const out: Record<string, number | WeaponSwapDTO[]> = {} as Record<string, number | WeaponSwapDTO[]>;
        for (const k of allKeys) {
            out[k] = selected[k]?.value ?? 0;
        }

        out['weapons'] = swapsDTO.value;
        equipment.value = JSON.stringify(out);
    }
    watch([selected, swapsDTO], emitJson, { deep: true, immediate: true });
    defineExpose({ clearAll });
</script>

<template>
    <!-- GLOBAL ACTIONS -->
    <div class="flex justify-between pt-4 px-4">
        <div class="flex gap-2">
            <USelectMenu
                v-model="globalSelected"
                class="w-1/5 min-w-50"
                variant="outline"
                color="secondary"
                :items="items"
                placeholder="Statistique"
                :ui="{trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'}"
                trailingIcon="i-material-symbols:keyboard-arrow-down-rounded"
            >
                <template #trailing>
                <UButton
                    v-if="globalSelected !== undefined"
                    icon="i-heroicons-x-mark-20-solid"
                    variant="outline"
                    color="error"
                    size="xs"
                    aria-label="Effacer la sélection globale"
                    class="rounded-full cursor-pointer"
                    @click.stop="globalSelected = undefined"
                />
                </template>
            </USelectMenu>
            <UButton
                :disabled="globalSelected === undefined"
                color="warning"
                variant="outline"
                @click="applyGlobalToAll"
                label="Appliquer à tous"
            />
            <UButton
                :disabled="globalSelected === undefined"
                color="secondary"
                variant="outline"
                @click="applyGlobalToEmptyOnly"
                label="Appliquer à vide"
            />
        </div>
        <div class="flex">
            <UButton
                color="error"
                variant="outline"
                @click="clearAll"
                label="Réinitialiser"
            />
        </div>
    </div>
    <!-- END GLOBAL ACTIONS -->
    <!-- START STATS -->
    <div class="w-full flex">
        <div class="grid grid-cols-2 gap-5 p-4 max-w-3/6 w-full">
            <div class="flex flex-col gap-2">
                <!-- ARMOR STATS -->
                <div class="flex justify-between gap-2" v-for="armorType in armorTypes" :key="armorType">
                    <span class="icon_gear shrink-0" :class="armorType"></span>
                    <USelectMenu
                        v-model="selected[armorType]"
                        class="w-full"
                        variant="outline"
                        color="secondary"
                        :items="armorType == 'rune' ? itemsRunes : items"
                        placeholder="Statistique"
                        :ui="{trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'}"
                        trailingIcon="i-material-symbols:keyboard-arrow-down-rounded"
                    >
                        <template #trailing>
                            <UButton
                                v-if="selected[armorType] !== undefined"
                                icon="i-heroicons-x-mark-20-solid"
                                variant="ghost"
                                color="error"
                                size="xs"
                                class="rounded-full cursor-pointer"
                                aria-label="Effacer la sélection"
                                @click.stop="selected[armorType] = undefined"
                            />
                        </template>
                    </USelectMenu>
                </div>
                <!-- END ARMOR STATS -->
            </div>
            <div class="flex flex-col gap-2">
                <!-- ACCESSORIES STATS -->
                <div class="flex justify-between gap-2" v-for="accessoryType in accessoriesTypes" :key="accessoryType">
                    <span class="icon_gear shrink-0" :class="accessoryType"></span>
                    <USelectMenu
                        v-model="selected[accessoryType]"
                        class="w-full"
                        variant="outline"
                        color="secondary"
                        :items="accessoryType == 'relic' ? itemsRelics : items"
                        placeholder="Statistique"
                        :ui="{trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'}"
                        trailingIcon="i-material-symbols:keyboard-arrow-down-rounded"
                    >
                        <template #trailing>
                            <UButton
                                v-if="selected[accessoryType] !== undefined"
                                icon="i-heroicons-x-mark-20-solid"
                                variant="ghost"
                                color="error"
                                size="xs"
                                class="rounded-full cursor-pointer"
                                aria-label="Effacer la sélection"
                                @click.stop="selected[accessoryType] = undefined"
                            />
                        </template>
                    </USelectMenu>
                </div>
                <!-- END ACCESSORIES STATS -->
            </div>
        </div>
        <div class="flex w-full">
            <div class="w-full p-4 flex flex-col gap-5">
                <!-- WEAPONS STATS -->
                <NewBuildWeaponSwap
                    ref="weaponSwapRef"
                    @update:swaps="(val) => swapsDTO = val"
                    :stat="globalSelected?.value"
                />
                <!-- END WEAPONS STATS -->
            </div>
        </div>
        <!-- END STATS -->
    </div>
</template>
