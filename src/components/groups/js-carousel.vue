<template>
    <div class="js-carousel">
        <p>This is a test!</p>
    </div>
</template>

<script>
    export default {
        name : 'js-carousel',

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
