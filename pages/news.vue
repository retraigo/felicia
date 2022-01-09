<template>
  <div class="p-8">
    <div class="text-lg">
      <div
        class="
          flex
          md:flex-row
          md:space-x-12
          flex-col
          items-stretch
          md:justify-between
          justify-start
        "
      >
        <div class="py-2 md:w-2/4">
          <div
            class="p-2 text-gray-700 dark:text-white font-semibold border-gray-400 border-b-2"
          >
            Latest News:
          </div>
          <div
            class="flex flex-col items-start w-full"
          >
            <MiscNews
              v-for="x in news"
              :key="x.title"
              :news="x"
              :title="x.title"
            />
          </div>
        </div>
        <div class="py-2 md:w-1/4">
          <div
            class="p-2 text-gray-700 dark:text-white font-semibold border-gray-400 border-b-2"
          >
            Important News:
          </div>
          <div
            class="flex flex-col items-start w-full"
          >
            <MiscNews
              v-for="x in importantArticles"
              :key="x.title"
              :news="x"
              :title="x.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("news")
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();
    const importantArticles = await $content("news")
      .where({ important: true })
      .sortBy("createdAt", "desc")
      .fetch();
      console.log({news: articles})
            console.log({moarnews: importantArticles})
    return {
      news: articles,
      importantArticles
    };
  },
};
</script>
