<template>
    <div class="js-breadcrumb">
        <p>This is a test!</p>
    </div>
</template>

<script>
    import { selectBackgroundColor } from "../helpers/bg-color";
    import { selectFontColor }       from "../helpers/font-color";

    export default {
        name : 'js-breadcrumb',

        components : {},

        computed : {
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
