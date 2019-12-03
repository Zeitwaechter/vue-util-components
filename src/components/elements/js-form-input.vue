<template>
    <div class="js-form-input">
        <p>This is a test!</p>
    </div>
</template>

<script>
    export default {
        name : 'js-form-input',

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
