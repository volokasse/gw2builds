<script setup lang="ts">
    import { GW2_STATS_OPTIONS, GW2_STATS_SIGILS } from '@/utils/gw2';
    import type { SelectItem } from '@/types/selectItem';
    import { WeaponSwap } from '@/shared/Weapon';
    import { ref, watch, computed } from 'vue';
    import type { WeaponSwapDTO } from '@/shared/Weapon';

    const props = defineProps<{ stat?: number }>();

    const itemsSigils = ref<SelectItem[]>(GW2_STATS_SIGILS);
    const items       = ref<SelectItem[]>(GW2_STATS_OPTIONS);

    const weaponSwaps = ref<WeaponSwap[]>([
        new WeaponSwap(),
        new WeaponSwap(),
    ]);

    const hands = [
        { key: 'main', icon: 'mainHand' },
        { key: 'off',  icon: 'offHand' },
    ] as const;

    const emit = defineEmits<{
        (e: 'update:swaps', value: WeaponSwapDTO[]): void;
    }>();

    const normalizeStat = (stat?: number): number | undefined => {
        if (typeof stat !== 'number') {
            return undefined;
        }
        if (stat <= 0) {
            return undefined;
        }
        return stat;
    };

    const applyGlobalToAll = (): void => {
        const value = normalizeStat(props.stat);
        for (const swap of weaponSwaps.value) {
            for (const hand of hands) {
                swap.slots[hand.key].stat = value;
            }
        }
    };

    const applyGlobalToEmptyOnly = (): void => {
        const value = normalizeStat(props.stat);
        for (const swap of weaponSwaps.value) {
            for (const hand of hands) {
                if (swap.slots[hand.key].stat === undefined) {
                    swap.slots[hand.key].stat = value;
                }
            }
        }
    };

    const clearAll = (): void => {
        for (const swap of weaponSwaps.value) {
            for (const hand of hands) {
                swap.slots[hand.key].stat = undefined;
                swap.slots[hand.key].sigils[0] = undefined;
                swap.slots[hand.key].sigils[1] = undefined;
            }
        }
    };

    defineExpose({
        applyGlobalToAll,
        applyGlobalToEmptyOnly,
        clearAll,
    });

    const swapsDTO = computed(() => weaponSwaps.value.map(s => s.toJSON()));
    watch(swapsDTO, (v) => { emit('update:swaps', v); }, { deep: true, immediate: true });
</script>

<template>
  <div class="flex flex-col gap-5 w-full" v-for="(swap, swapIndex) in weaponSwaps" :key="swapIndex">
    <UIcon name="i-material-symbols:sync" class="w-full shrink-0 size-8" v-if="swapIndex > 0" />
    <div v-for="hand in hands" :key="hand.key" class="grid grid-cols-2 gap-x-5 gap-y-2">
      <div class="flex gap-2 col-span-2">
        <span class="icon_gear shrink-0" :class="hand.icon"></span>

        <USelectMenu
          v-model="swap.slots[hand.key].stat"
          value-key="value"
          class="w-full"
          variant="outline"
          color="secondary"
          :items="items"
          placeholder="Statistique"
          :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }"
          trailingIcon="i-material-symbols:keyboard-arrow-down-rounded"
        >
          <template #trailing>
            <UButton
              v-if="swap.slots[hand.key].stat !== undefined"
              icon="i-heroicons-x-mark-20-solid"
              variant="ghost"
              color="error"
              size="xs"
              class="rounded-full cursor-pointer"
              aria-label="Effacer la sélection"
              @click.stop="swap.slots[hand.key].stat = undefined"
            />
          </template>
        </USelectMenu>
      </div>

      <div class="flex gap-2">
        <span class="icon_gear shrink-0 sigil"></span>

        <USelectMenu
          v-model="swap.slots[hand.key].sigils[0]"
          value-key="value"
          class="w-full"
          variant="outline"
          color="secondary"
          :items="itemsSigils"
          placeholder="Cachet"
          :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }"
          trailingIcon="i-material-symbols:keyboard-arrow-down-rounded"
        >
          <template #trailing>
            <UButton
              v-if="swap.slots[hand.key].sigils[0] !== undefined"
              icon="i-heroicons-x-mark-20-solid"
              variant="ghost"
              color="error"
              size="xs"
              class="rounded-full cursor-pointer"
              aria-label="Effacer la sélection"
              @click.stop="swap.slots[hand.key].sigils[0] = undefined"
            />
          </template>
        </USelectMenu>
      </div>

      <div class="flex gap-2">
        <span class="icon_gear shrink-0 sigil"></span>

        <USelectMenu
          v-model="swap.slots[hand.key].sigils[1]"
          value-key="value"
          class="w-full"
          variant="outline"
          color="secondary"
          :items="itemsSigils"
          placeholder="Cachet"
          :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }"
          trailingIcon="i-material-symbols:keyboard-arrow-down-rounded"
        >
          <template #trailing>
            <UButton
              v-if="swap.slots[hand.key].sigils[1] !== undefined"
              icon="i-heroicons-x-mark-20-solid"
              variant="ghost"
              color="error"
              size="xs"
              class="rounded-full cursor-pointer"
              aria-label="Effacer la sélection"
              @click.stop="swap.slots[hand.key].sigils[1] = undefined"
            />
          </template>
        </USelectMenu>
      </div>
    </div>
  </div>
</template>
