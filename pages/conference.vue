<template>
  <div class="p-8 flex flex-col">
    <div class="p-1 flex flex-col justify-start">
      <div class="py-1 text-md">
        <p class="py-1">
          <MiscArticle :news="about" />
        </p>
      </div>
      <div class="py-1 text-md">
        <p class="py-1">
          <MiscArticle :news="conference" />
        </p>
      </div>
    </div>
    <div>
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
              Conference Tracks:
            </div>
            <div class="flex flex-col items-start w-full">
              <MiscArticle :news="conferencetracks" />
            </div>
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
      title: "About The Conference",
      meta: [
        { hid: "title", name: "title", content: "About The Conference" },
        { hid: "og:title", name: "og:title", content: "About The Conference" },
        {
          hid: "description",
          name: "description",
          content: this.conference.description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.conference.description,
        },
      ],
    };
  },
  async asyncData({ $content }) {
    const conference = await $content("conference").fetch();
    const conferencetracks = await $content("conferencetracks").fetch();
    const organizer = await $content("organizer").fetch();

    const about = await $content("about").fetch();

    return {
      about,
      organizer,
      conference,
      conferencetracks,
    };
  },
};
</script>
