<template>
    <div class="js-pagination">
        <p>This is a test!</p>
    </div>
</template>

<script>
    export default {
        name : 'js-pagination',

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
