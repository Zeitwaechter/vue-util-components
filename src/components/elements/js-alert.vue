<template>
    <div
        class="js-alert"
        :class="{ getBackgroundColorState, getFontColorState }"
    >
        <template>
            <p class="font-bold">
                <slot name="heading-text" />
            </p>
        </template>

        <template v-if="slotPassed">
            <div class="">
                <slot name="body-content" />
            </div>
        </template>
    </div>
</template>

<script>
    import { selectBackgroundColor } from '../helpers/bg-color';
    import { selectFontColor }       from '../helpers/font-color';

    export default {
        name : 'js-alert',

        props : {
            state   : {
                default : `primary`,
                type    : String,
            },
            outside : {
                default : false,
                type    : Boolean,
            }
        },

        components : {},

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

            /**
             * @return {boolean}
             */
            slotPassed() {
                return !!this.$slots.default[0].text.length
            }
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
