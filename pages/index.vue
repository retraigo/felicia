<template>
  <div class="p-4">
    <div class="flex flex-col w-full items-stretch">
      <div class="p-1">
        <img src="/icvmasm.webp" />
      </div>
      <div
        class="
          flex flex-col
          md:flex-row md:space-x-4
          space-y-4
          md:space-y-0
          justify-between
          items-stretch
        "
      >
        <div class="p-1 md:flex flex-col justify-start hidden">
          <div class="py-2 text-md">
              <MiscArticle :news="organizer" />

          </div>
        </div>
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
              <NuxtLink
                to="/speakers/keynote"
                class="
                  p-2
                  block
                  text-gray-700
                  font-semibold
                  border-gray-400 border-b-2
                "
              >
                Keynote Speakers:
              </NuxtLink>
              <div class="flex flex-col md:flex-row items-start w-full">
                <MiscPersonLite
                  :news="article"
                  v-for="article in articles"
                  :key="article.title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ $content }) {
    const conference = await $content("conference").fetch();
    const conferencetracks = await $content("conferencetracks").fetch();
        const organizer = await $content("organizer").fetch();

    const about = await $content("about").fetch();

    const articles = await $content("speakers/keynote").fetch();
    return {
      about,
      articles,
      organizer,
      conference,
      conferencetracks,
    };
  },
};
</script>
