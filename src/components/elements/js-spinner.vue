<template>
    <div class="js-spinner">
        <p>This is a test!</p>
    </div>
</template>

<script>
    export default {
        name : 'js-spinner',

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
