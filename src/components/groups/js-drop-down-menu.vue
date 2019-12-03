<template>
    <div class="js-drop-down-menu">
        <p>This is a test!</p>
    </div>
</template>

<script>
    export default {
        name : 'js-drop-down-menu',

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
