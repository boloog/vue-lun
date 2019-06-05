<template>
    <button class="v-button">Hello~</button>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .v-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 6px;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-background);
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-background);
        }
        &:focus{
            outline: none;
        }
    }
</style>