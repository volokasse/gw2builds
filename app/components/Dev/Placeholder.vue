<script setup lang="ts">
    interface Props {
        bthick?: string,
        bstyle?: string,
        color?: string,
        mh?: string,
        mw?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        bthick: 'border',
        bstyle: 'border-dashed',
        color: 'border-gray-400',
        mh: 'min-h-10',
        mw: 'w-full'
    });

</script>

<template>
    <div :class="bthick + ' ' + bstyle + ' ' + color + ' ' + mh + ' ' + mw"></div>
</template>

<style lang="scss" scoped>

</style>
