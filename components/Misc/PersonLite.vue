<template>
  <div class="w-full flex flex-col items-center">
    <div class="p-4">
      <img :src="news.pic" class="object-cover w-36 h-36" />
    </div>

    <div class="p-2 flex flex-col justify-start items-center space-y-2 w-full">
      <p class="text-lg font-semibold">{{ news.title }}</p>
      <div class="text-xs text-gray-700">{{ desc[desc.length - 2] }}, {{desc[desc.length - 1]}}</div>
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
  data() {
      return {
          desc: this.news.description.split(', ')
      }
  }
};
</script>