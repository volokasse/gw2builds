<script setup lang="ts">
    import BuildBook from './BuildBook.vue';
    import { type Build } from '@/shared/prisma';

    const props = defineProps<{ builds?: Build[], profession?: string }>();
</script>

<template>
    <div class="case" v-if="$props.builds?.length">
        <div class="case-header">
            {{ profession }}
        </div>
        <div class="case-body">
            <BuildBook :build="build" v-for="build of builds" />
        </div>
    </div>
</template>

<style lang="scss">
    .case
    {
        border: 1px solid var(--color-gray-900);

        display: flex;
        flex-direction: column;
        min-height: 100px;
        min-width: 0;

        .case-header
        {

        }
        .case-body
        {
            display: flex;
            flex-direction: column;
            row-gap: 5px;
            padding: 5px;
        }
    }
</style>
