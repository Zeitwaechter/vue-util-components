<template>
    <div class="js-form-input-group">
        <p>This is a test!</p>
    </div>
</template>

<script>
    export default {
        name : 'js-form-input-group',

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
