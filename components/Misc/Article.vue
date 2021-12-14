<template>
  <div class="p-2 flex flex-col justify-start items-start space-y-2 w-full">
      <nuxt-content
        class="prose prose-sm w-full"
        :document="news"
      />
  </div>
</template>
<script>
export default {
  props: {
    news: {
      type: Object,
      default: null,
    },
  },
};
</script>