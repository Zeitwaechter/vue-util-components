<template>
    <div class="js-progress-bar">
        <p>This is a test!</p>
    </div>
</template>

<script>
    export default {
        name : 'js-progress-bar',

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
