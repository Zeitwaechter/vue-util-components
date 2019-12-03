<template>
    <div
        class="js-alert border-l-4 p-2 rounded-lg"
        :class="`${ getBackgroundColorState } ${ getFontColorState }`"
        role="alert"
        v-show="visible"
    >
        <div class="flex content-start justify-between">
            <div class="content">
                <template v-if="$slots.hasOwnProperty(`heading-text`)">
                    <p class="font-bold" role="heading">
                        <slot name="heading-text" />
                    </p>
                </template>

                <template v-if="$slots.hasOwnProperty(`body-content`)">
                    <slot name="body-content" />
                </template>
            </div>

            <button
                class="btn"
                type="button"
                role="button"
                v-if="closeable"
                @click="visible = !visible"
            >
                <slot name="close-icon">
                    X
                </slot>
            </button>
        </div>
    </div>
</template>

<script>
    import { selectBackgroundColor } from '../helpers/bg-color';
    import { selectFontColor }       from '../helpers/font-color';

    export default {
        name : 'js-alert',

        props : {
            closeable : {
                default : false,
                type    : Boolean,
            },
            state     : {
                default : `primary`,
                type    : String,
            },
            outside   : {
                default : false,
                type    : Boolean,
            }
        },

        components : {},

        data() {
            return {
                visible : true,
            };
        },

        computed : {
            /**
             * @return {string}
             */
            getBackgroundColorState() {
                return selectBackgroundColor(this.state, this.outside);
            },

            /**
             * @return {string}
             */
            getFontColorState() {
                return selectFontColor(this.state, this.outside);
            },
        },

        methods : {
            //
        },

        mounted() {
            //
        },

        created() {
            //
        },
    };
</script>
