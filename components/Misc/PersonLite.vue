<template>
  <div class="w-full flex flex-col items-center">
    <div class="p-4">
      <div class = "w-40 h-40 p-2 flex flex-col items-center justify-center border-dashed border-blue-300 border-4 rounded-full">
      <img :src="news.pic" :alt = "news.title" class="object-cover w-36 h-36 rounded-full border-gray-400 border-4 border-double" />
      </div>
    </div>

    <div class="p-2 flex flex-col justify-start items-center space-y-2 w-full">
      <p class="text-lg font-semibold">{{ news.title }}</p>
      <div class="text-xs text-gray-700 dark:text-white">{{ desc[desc.length - 2] }}, {{desc[desc.length - 1]}}</div>
    </div>

    <!--      <nuxt-content
        class="prose dark:prose-dark prose-sm"
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
  data() {
      return {
          desc: this.news.description.split(', ')
      }
  }
};
</script>