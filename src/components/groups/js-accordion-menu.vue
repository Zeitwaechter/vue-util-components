<template>
    <div class="js-accordion-menu">
        <p>This is a test!</p>
    </div>
</template>

<script>
    export default {
        name : 'js-accordion-menu',

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
