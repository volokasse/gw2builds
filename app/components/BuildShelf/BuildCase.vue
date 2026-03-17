<script setup lang="ts">
    import BuildBook from './BuildBook.vue';
    import { type Build } from '@/shared/prisma';
    import { type Profession } from '@/types/profession';
    import { VueDraggable } from 'vue-draggable-plus';

    const props = withDefaults(defineProps<{ builds: Build[], profession?: Profession }>(), {
        builds: () => []
    });
    const localBuilds = ref<Build[]>([...props.builds]);

    const emit = defineEmits<{
        (e: 'update:builds', value: Build[]): void,
        (e: 'update:delete'): void
    }>();
    watch(
        () => props.builds,
        (value) => { localBuilds.value = [...value]; }
    );
    watch(localBuilds, (value) => {
        emit('update:builds', value)
    }, { deep: true });

    async function onDragEnd() {
        const payload = localBuilds.value.map((build, index) => ({
            id: build.id,
            position: index
        }));

        await $fetch('/api/builds/reorder', {
            method: 'POST',
            body: payload
        });
    };
</script>

<template>
    <div class="case" :class="'class_' + profession?.value" v-if="$props.builds?.length">
        <div class="case-header">
            {{ profession?.label }}
        </div>
        <VueDraggable
            v-model="localBuilds"
            item-key="id"
            handle=".drag-handle"
            :animation="150"
            ghost-class="drag-ghost"
            @end="onDragEnd"
            class="case-body"
        >
            <BuildBook :build="build" v-for="build of localBuilds" :key="build.id" @update:delete="() => emit('update:delete')"/>
        </VueDraggable>
    </div>
</template>

<style lang="scss" scoped>
    .case
    {
        display: flex;
        flex-direction: column;
        min-height: 100px;
        min-width: 0;

        .case-header
        {
            text-align: center;
            font-weight: bold;
            font-size: 1rem;
            text-transform: uppercase;
            padding: 10px 0;
        }
        .case-body
        {
            display: flex;
            flex-direction: column;
            row-gap: 5px;
            padding: 5px 8px 25px 8px;
        }
    }
    .drag-ghost
    {
        opacity: 0.5;
    }
</style>
<style lang="scss">
    .case
    {
        &[class^="class_"]
        {
            & .book
            {
                border-style: solid;
                border-width: 2px;
                border-color: var(--color-gray-950);
                border-radius: 5px;
            }
            & .book-header
            {
                background-color: var(--color-gray-950);
            }
        }
        // Guardian
        &.class_1
        {
            background: linear-gradient(180deg, var(--color-guardian-primary) 0%, rgba(11, 20, 26, 0) 100%);

            & .book { border: 2px solid var(--color-guardian-secondary); }
            & .book-header { background-color: var(--color-guardian-secondary); }
        }
        // Warrior
        &.class_2
        {
            background: linear-gradient(180deg, var(--color-warrior-primary) 0%, rgba(11, 20, 26, 0) 100%);

            & .book { border: 2px solid var(--color-warrior-secondary); }
            & .book-header { background-color: var(--color-warrior-secondary); }
        }
        // Engineer
        &.class_3
        {
            background: linear-gradient(180deg, var(--color-engineer-primary) 0%, rgba(11, 20, 26, 0) 100%);

            & .book { border: 2px solid var(--color-engineer-secondary); }
            & .book-header { background-color: var(--color-engineer-secondary); }
        }
        // Ranger
        &.class_4
        {
            background: linear-gradient(180deg, var(--color-ranger-primary) 0%, rgba(11, 20, 26, 0) 100%);

            & .book { border: 2px solid var(--color-ranger-secondary); }
            & .book-header { background-color: var(--color-ranger-secondary); }
        }
        // Thief
        &.class_5
        {
            background: linear-gradient(180deg, var(--color-thief-primary) 0%, rgba(11, 20, 26, 0) 100%);

            & .book { border: 2px solid var(--color-thief-secondary); }
            & .book-header { background-color: var(--color-thief-secondary); }
        }
        // Elementalist
        &.class_6
        {
            background: linear-gradient(180deg, var(--color-elementalist-primary) 0%, rgba(11, 20, 26, 0) 100%);

            & .book { border: 2px solid var(--color-elementalist-secondary); }
            & .book-header { background-color: var(--color-elementalist-secondary); }
        }
        // Mesmer
        &.class_7
        {
            background: linear-gradient(180deg, var(--color-mesmer-primary) 0%, rgba(11, 20, 26, 0) 100%);

            & .book { border: 2px solid var(--color-mesmer-secondary); }
            & .book-header { background-color: var(--color-mesmer-secondary); }
        }
        // Necromancer
        &.class_8
        {
            background: linear-gradient(180deg, var(--color-necromancer-primary) 0%, rgb(11 20 26 / 0%) 100%);

            & .book { border: 2px solid var(--color-necromancer-secondary); }
            & .book-header { background-color: var(--color-necromancer-secondary); }
        }
        // Revenant
        &.class_9
        {
            background: linear-gradient(180deg, var(--color-revenant-primary) 0%, rgb(11 20 26 / 0%) 100%);

            & .book { border: 2px solid var(--color-revenant-secondary); }
            & .book-header { background-color: var(--color-revenant-secondary); }
        }
    }
</style>
