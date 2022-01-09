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
        <div class="py-2 w-full">
          <div
            class="p-2 text-gray-700 dark:text-white font-semibold border-gray-400 border-b-2"
          >
            Advisory Committee:
          </div>
          <div
            class="flex flex-col items-start w-full"
          >
            <MiscArticle
              :news="article"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    head() {
    return {
      title: "Advisory Committee",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Advisory Committee",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Advisory Committee",
        },
        {
          hid: "description",
          name: "description",
          content: article.description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: article.description,
        },
      ],
    };
  },
  async asyncData({ $content }) {
    const article = await $content("advisorycommittee")
      .fetch();
    return {
      article,
    };
  },
};
</script>
