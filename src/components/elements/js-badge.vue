<template>
    <div
        class="js-badge"
        :class="{ getBackgroundColorState, getFontColorState }"
    >
        <p>This is a test!</p>
    </div>
</template>

<script>
    import { selectBackgroundColor } from '../helpers/bg-color';
    import { selectFontColor }       from '../helpers/font-color';

    export default {
        name : 'js-badge',

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
    }
</script>
