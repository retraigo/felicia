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
            class="
              p-2
              text-gray-700
              dark:text-white
              font-semibold
              border-gray-400 border-b-2
            "
          >
            Keynote Speakers:
          </div>
          <div class="flex flex-col items-start w-full">
            <MiscPerson
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
  head() {
    return {
      title: "Keynote Speakers",
      meta: [
        { hid: "title", name: "title", content: "Keynote Speakers" },
        { hid: "og:title", name: "og:title", content: "Keynote Speakers" },
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
    const articles = await $content("speakers/keynote").fetch();
    return {
      articles,
    };
  },
};
</script>
