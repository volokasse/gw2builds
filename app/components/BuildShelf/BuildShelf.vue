<script setup lang="ts">
    import { GW2_PROFESSION_OPTIONS } from '@/utils/gw2';
    import BuildCase from './BuildCase.vue';
</script>

<template>
    <div class="shelf">
        <BuildCase v-for="profession in GW2_PROFESSION_OPTIONS" />
    </div>
</template>

<style lang="scss" scoped>
    .shelf
    {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>
