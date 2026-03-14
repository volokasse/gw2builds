<script setup lang="ts">
    import { decode } from 'gw2e-chat-codes';
    import GW2Specializations from './GW2Specializations.client.vue';
    import NewBuildStats from './NewBuildStats.vue';
    import { extractSpecs, isValidGW2Link } from '@/utils/gw2';

    /// Utilities
    const buildSpecializations = ref<Array<{ id: number; traits: number[] }>>([])
    const formOpen             = ref<boolean>(false);
    const statFormOpen         = ref<boolean>(false);
    const submitting           = ref(false);
    const serverError          = ref<string | null>(null);
    const equipmentStatsRef    = ref<InstanceType<typeof NewBuildStats> | null>(null);

    /// Form
    const name          = ref('');
    const styleTemplate = ref('');
    const buildTemplate = ref('');
    const isPublic      = ref(true);
    const equipmentJSON = ref('');

    /// Types
    type Gw2Specialization = { id: number, major_traits: number[] };
    type Gw2SpecDict = Record<number, Gw2Specialization>;
    type DecodedBuild = {
        type: 'build'
        specialization1?: number
        traitChoices1?: number[]
        specialization2?: number
        traitChoices2?: number[]
        specialization3?: number
        traitChoices3?: number[]
    };
    type AddBuildResponse = {
        id: number
        slug: string
        title: string
        isPublic: boolean
        createdAt: string
    };

    /// Functions
    async function updateBuildTemplate()
    {
        buildSpecializations.value = [];
        const buildInfos = decode(buildTemplate.value);
        if (buildInfos === false)
            return;
        if (buildInfos.type != "build")
            return;

        const specs: number[] = extractSpecs(buildTemplate.value);
        const specsAPI = await $fetch('/api/gw2/specializations', {
            params: { ids: specs }
        });

        const dict = Object.fromEntries((specsAPI as any).map((s: any) => [s.id, s]));
        const armoryDatas = buildArmoryPayload(buildInfos, dict);
        buildSpecializations.value = armoryDatas;
    }

    async function submitNewBuild() {
        serverError.value = null;
        if (!name.value.trim()) {
            serverError.value = 'Le nom est requis.';
            return
        }
        if (!isValidGW2Link(buildTemplate.value)) {
            serverError.value = 'Le build template est invalide.';
            return
        }

        submitting.value = true;
        try {
            const res = await $fetch<AddBuildResponse>('/api/builds/add', {
                method: 'POST',
                credentials: 'include',
                body: {
                    name: name.value.trim(),
                    build: buildTemplate.value.trim(),
                    style: styleTemplate.value.trim(),
                    equipment: equipmentJSON.value || '',
                    isPublic: isPublic.value
                }
            });

            equipmentStatsRef.value?.clearAll();
            name.value                 = '';
            styleTemplate.value        = '';
            buildTemplate.value        = '';
            isPublic.value             = true;
            equipmentJSON.value        = '';
            buildSpecializations.value = [];

            setTimeout(() => { statFormOpen.value = false; formOpen.value = false; }, 500);
        }
        catch (err: any) {
            serverError.value = err?.data?.statusMessage || 'Erreur lors de la création du build.';
        }
        finally {
            submitting.value = false;
        }
    }

    function resolveTraitsForSpecialization(spec: Gw2Specialization, traitChoices: number[]): number[] {
        if (!spec || !Array.isArray(spec.major_traits))
            return []

        return traitChoices
            .map((choice, tierIdx) => {
            if (!choice || choice < 1 || choice > 3) return null
            const baseIndex = tierIdx * 3
            const traitIndex = baseIndex + (choice - 1)
            return spec.major_traits[traitIndex] ?? null
            })
            .filter(Boolean) as number[]
    }

    function buildArmoryPayload(decoded: DecodedBuild, specsById: Gw2SpecDict): Array<{ id: number; traits: number[] }> {
        const result: Array<{ id: number; traits: number[] }> = []
        const entries: Array<[number | undefined, number[] | undefined]> = [
            [decoded.specialization1, decoded.traitChoices1],
            [decoded.specialization2, decoded.traitChoices2],
            [decoded.specialization3, decoded.traitChoices3]
        ]

        for (const [specId, choices] of entries) {
            if (!specId) continue
            const specData = specsById[specId]
            const traits = choices && specData
            ? resolveTraitsForSpecialization(specData, choices)
            : []
            result.push({ id: specId, traits })
        }

        return result
    }

    function toggleFormBuild()
    {
        formOpen.value = !formOpen.value;
        if (!formOpen.value)
            statFormOpen.value = false;
    }
</script>

<template>
    <div class="absolute flex w-full top-0 mt-4 justify-start items-center z-1">
        <UTooltip text="Create Build" :content="{ align: 'center', side: 'bottom', sideOffset: 8 }" :delay-duration="0">
            <UButton
                icon="i-heroicons:plus-20-solid"
                class="rounded-full cursor-pointer transition-all duration-400 ease-linear relative"
                :class="formOpen ? 'left-5 rotate-45' : 'left-1/2'"
                :ui="{ 'leadingIcon': 'size-8 text-white', 'base': 'bg-red-600 hover:bg-red-700 active:bg-red-700 disabled:bg-red-700 aria-disabled:bg-red-700 focus-visible:outline-0 focus-visible:outline-offset-0 focus-visible:outline-red-700' }"
                @click="toggleFormBuild"
            />
        </UTooltip>
    </div>
    <UForm
        class="flex flex-col pb-10 pt-20 gap-y-2 border-x border-b border-gray-800 relative form_animated"
        :class="formOpen ? 'form_open' : ''"
        @submit.prevent="submitNewBuild"
    >
        <div class="flex gap-4 justify-center px-2 mb-2">
            <UFormField
                label="Nom"
                class="shrink-0 w-4/20"
                :ui="{ label: 'text-gray-400' }"
                required
            >
                <UInput
                    placeholder="Power Reaper"
                    class="w-full"
                    v-model="name"
                />
            </UFormField>
            <UFormField
                label="Build template"
                class="shrink-0 w-6/20"
                required
                :ui="{ label: 'text-gray-400' }"
            >
                <UInput
                    placeholder="Build Template"
                    class="w-full"
                    v-model="buildTemplate"
                    @change="updateBuildTemplate"
                />
            </UFormField>
            <UFormField
                label="Style"
                class="shrink-0 w-6/20"
                :ui="{ label: 'text-gray-400'}"
            >
                <UInput
                    placeholder="Style Template"
                    class="w-full"
                    v-model="styleTemplate"
                />
            </UFormField>
            <UFormField
                label="Public"
                class="shrink-0 w-1/20"
                :ui="{ label: 'text-gray-400' }"
            >
                <USwitch
                    v-model="isPublic"
                    size="xl"
                    class="top-1"
                    checked-icon="i-material-symbols:check-rounded"
                    unchecked-icon="i-material-symbols:close-rounded"
                    color="secondary"
                    :ui="{ base: 'cursor-pointer' }"
                />
            </UFormField>
        </div>
        <div>
            <GW2Specializations
                v-if="buildSpecializations.length"
                :specializations="buildSpecializations"
            />
        </div>
        <UCollapsible class="w-full px-10 self-center mt-2" :unmount-on-hide="false" v-model:open="statFormOpen">
            <UButton
                class="group w-full justify-between cursor-pointer"
                label="Equipement"
                trailing-icon="i-heroicons:chevron-down-16-solid"
                :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }"
                variant="subtle"
                color="secondary"
            />
            <template #content>
                <NewBuildStats v-model:equipment="equipmentJSON" ref="equipmentStatsRef" />
            </template>
        </UCollapsible>
        <div class="flex justify-center">
            <UButton
                size="xl"
                type="submit"
                class="cursor-pointer bg-red-600 hover:bg-red-700 text-gray-200 mt-4"
                :loading="submitting"
                :disabled="submitting"
            >
                Sauvegarder
            </UButton>
        </div>
    </UForm>
</template>

<style>
    .form_animated
    {
        transition: top 1s linear(0 0%, 0 2.27%, 0.02 4.53%, 0.04 6.8%, 0.06 9.07%, 0.1 11.33%, 0.14 13.6%, 0.25 18.15%, 0.39 22.7%, 0.56 27.25%, 0.77 31.8%, 1 36.35%, 0.89 40.9%, 0.85 43.18%, 0.81 45.45%, 0.79 47.72%, 0.77 50%, 0.75 52.27%, 0.75 54.55%, 0.75 56.82%, 0.77 59.1%, 0.79 61.38%, 0.81 63.65%, 0.85 65.93%, 0.89 68.2%, 1 72.7%, 0.97 74.98%, 0.95 77.25%, 0.94 79.53%, 0.94 81.8%, 0.94 84.08%, 0.95 86.35%, 0.97 88.63%, 1 90.9%, 0.99 93.18%, 0.98 95.45%, 0.99 97.73%, 1 100%);
        top: -75vw;
    }
    .form_animated.form_open
    {
        top: 0vw;
    }
</style>
