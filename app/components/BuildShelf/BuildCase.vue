<script setup lang="ts">
    import BuildBook from './BuildBook.vue';
    import { type Build } from '@/shared/prisma';
    import { type Profession } from '@/types/profession';

    const props = defineProps<{ builds?: Build[], profession?: Profession }>();
</script>

<template>
    <div class="case" :class="'class_' + profession?.value" v-if="$props.builds?.length">
        <div class="case-header">
            {{ profession?.label }}
        </div>
        <div class="case-body">
            <BuildBook :build="build" v-for="build of builds" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .case
    {
        //border: 1px solid var(--color-gray-900);

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
