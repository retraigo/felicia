<template>
  <div class="p-8">
    <div class="text-lg">
      <div
        class="
          flex
          md:flex-row md:space-x-12
          flex-col
          items-stretch
          md:justify-between
          justify-start
        "
      >
        <div class="py-2 w-full">
          <div
            class="p-2 text-gray-700 font-semibold border-gray-400 border-b-2"
          >
            Invite Speakers:
          </div>
          <div class="flex flex-col items-start w-full">
            <MiscArticle
              :news="article"
              v-for="article in articles"
              :key="article.title"
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
    const article = await $content("speakers/invite").fetch();
    return {
      article,
    };
  },
};
</script>
