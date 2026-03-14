<script lang="ts" setup>
    const props = defineProps<{ text: string }>();
</script>

<template>
    <div class="separator">
        {{ text }}
    </div>
</template>

<style lang="scss" scoped>
    .separator
    {
        display: flex;
        align-items: center;
        text-align: center;
        padding: 10px 5px;
        color: var(--color-gray-500);
        font-weight: bold;

        &::before,
        &::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid var(--color-gray-500);
        }
        &:not(:empty)::before {
            margin-right: .35em;
        }
        &:not(:empty)::after {
            margin-left: .35em;
        }
    }
</style>
