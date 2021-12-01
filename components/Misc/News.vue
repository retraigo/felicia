<template>
  <div class="p-2 flex flex-col justify-start items-start space-y-2 w-full">
    <div class="pointer-events-none font-semibold text-gray-900 text-xl">
      {{ title }}
    </div>
    <div class = "text-xs text-gray-700">{{news.createdAt.substring(0, 10).split("-").reverse().join("-")}}</div>
    <div class="text-md text-gray-400">
      <nuxt-content
        class="prose prose-sm"
        :document="{ body: news.excerpt }"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return "Title";
      },
    },
    news: {
      type: Object,
      default: null,
    },
  },
};
</script>