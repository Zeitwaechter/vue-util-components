<template>
    <div class="js-thumbnail">
        <p>This is a test!</p>
    </div>
</template>

<script>
    // @info maybe redundant to figure
    export default {
        name : 'js-thumbnail',

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
