<template>
    <div
        class="js-alert p-2 rounded-lg text-center"
        :class="`${ getBackgroundColorState } ${ getFontColorState }`"
        role="tabpanel"
    >
        <template v-if="$slots.hasOwnProperty(`body-content`)">
            <slot name="body-content" />
        </template>
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
