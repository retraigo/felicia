<template>
<div class = "w-full flex md:flex-row flex-col items-center">
        <div class = "p-4">
                <div class = "w-52 h-52 p-2 flex flex-col items-center justify-center border-dashed border-blue-300 border-4 rounded-full">
<img :src = "news.pic" class = "object-cover w-48 h-48 rounded-full border-gray-400 border-4 border-double"/></div>
        </div>

  <div class="p-2 flex flex-col justify-start items-start space-y-2 w-full">
    <p class = "text-lg font-semibold">{{news.title}}</p>
        <div class = "text-xs text-gray-700">{{news.description}}</div>
  </div>

<!--      <nuxt-content
        class="prose prose-sm"
        :document="news"
      />-->
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