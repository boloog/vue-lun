<template>
    <button class="v-button" :class="{ [`icon-${iconPosition}`]: true }"
            @click="$emit('click')"
    >
        <v-icon :name="icon" class="icon" v-if="icon && !loading"></v-icon>
        <v-icon name="loading" class="icon  loading" v-if="loading"></v-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            icon: {},
            iconPosition: { // left right
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            },
            loading: {
                type: Boolean,
                default: false
            }
        }
        // 两种参数写法
        // props: ['icon', 'iconPosition']
    }
</script>

<style lang="scss">
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .v-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 6px;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-background);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        cursor: pointer;
        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-background);
        }

        &:focus {
            outline: none;
        }

        > .content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: 4px;
        }

        &.icon-right {
            > .content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: 4px;
            }
        }

        .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>