<script setup lang="ts">
    import BuildCell from './BuildCell.vue';
</script>

<template>
    <div class="case">
        <BuildCell />
    </div>
</template>

<style lang="scss">
    .case
    {
        border: 1px solid var(--color-gray-900);

        display: flex;
        flex-direction: column;
        min-height: 100px;
        padding: 5px;
    }
</style>
