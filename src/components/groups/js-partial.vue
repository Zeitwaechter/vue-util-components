<template>
    <div class="js-partial p-6 bg-white rounded-lg shadow-xl mx-6">

        <p class="text-2xl font-bold mb-4">
            <slot name="heading-text" />
        </p>

        <slot name="body-content" />

    </div>
</template>

<script>
  export default {
    name : 'js-partial',

    components : {},

    mounted() {
      //
    },

    created() {
      //
    },
  }
</script>
