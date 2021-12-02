<template>
  <div class="p-2 flex flex-col justify-start items-start space-y-2 w-full">
    <p class = "text-lg font-semibold">{{news.title}}</p>
        <div class = "text-xs text-gray-700">{{news.description}}</div>

      <nuxt-content
        class="prose prose-sm"
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