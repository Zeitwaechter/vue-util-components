<template>
    <div class="js-component p-6 bg-gray-200 rounded-lg shadow-md mx-6 my-6">

        <p class="text-lg font-bold mb-2">
            <slot name="heading-text" />
        </p>

        <div class="p-6 bg-white rounded-lg">
            <slot name="body-content" />
        </div>

    </div>
</template>

<script>
    export default {
        name : 'js-component',

        components : {},

        computed : {
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
