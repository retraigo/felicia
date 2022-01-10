<template>
  <div class="p-4">
    <div class="flex flex-col space-y-4 w-full items-stretch">
      <div class="p-1 hidden md:block">
        <img src="/icvmasm.webp" />
      </div>
      <div class="p-4">
        <HomePage />
      </div>
      <div
        class="
          flex flex-col
          md:flex-row md:space-x-4
          space-y-4
          md:space-y-0
          justify-between
        "
      >
        <div class="p-1 flex flex-col justify-start">
          <div class="py-1 text-md">
            <div
              class="
                py-2
                text-lg text-gray-700
                dark:text-white
                font-semibold
                border-gray-400 border-b-2
              "
            >
              About Conference (IVCMASM - 2022)
            </div>
            <p class="py-1">
              The International Virtual Conference on Machine Learning
              Applications in Applied Sciences and Mathematics (IVCMASM 2022).
              The conference focuses on machine learning applications and latest
              developments in the Fields of physics, chemistry, mathematics,
              social sciences, agriculture, economics and other applied
              sciences. It targets to bring together researchers from all over
              the world to present the latest research results, and it is one of
              the main venues for demonstrating the results of research projects
              in relevant areas.
            </p>
          </div>
        </div>
      </div>
      <div class="p-1">
        <img
          class="flex-none flex-grow-0 h-36 w-auto mx-auto"
          src="/eec3.webp"
        />
      </div>
      <div
        class="
          flex flex-col
          md:flex-row md:space-x-4
          space-y-4
          md:space-y-0
          justify-between
        "
      >
        <div class="p-1 flex flex-col justify-start">
          <div class="py-1 text-md">
            <div
              class="
                py-2
                text-lg text-gray-700
                dark:text-white
                font-semibold
                border-gray-400 border-b-2
              "
            >
              Organizers, Partners and Indexing
            </div>
            <div class="py-1">
              All Accepted papers will be published in AIP Conference
              Proceedings that are indexed in a number of services, including
              but not limited to these leading databases:
              <ul class="space-y-2 list-disc p-4">
                <li>
                  The Conference Proceedings Citation Index (part of Web of
                  Science)
                </li>
                <li>Scopus (Elsevier)</li>
                <li>Inspec of Clarivate Analytics</li>
              </ul>

              <p class="text-xl font-bold text-center">
                IVCMASM 2021 is proud to have partnership with AIP Publishing,
                United States of America.
              </p>
            </div>
            <div
              class="
                grid grid-cols-1
                md:grid-cols-4
                space-y-4
                md:space-y-0 md:space-x-4
                items-center
              "
            >
              <img
                class="flex-none flex-grow-0 h-36 w-auto mx-auto"
                src="/icons/1.svg"
              />
              <img
                class="flex-none flex-grow-0 h-36 w-auto mx-auto"
                src="/icons/2.svg"
              />
              <img
                class="flex-none flex-grow-0 h-36 w-auto mx-auto"
                src="/icons/3.svg"
              />
              <img
                class="flex-none flex-grow-0 h-36 w-auto mx-auto"
                src="/icons/4.svg"
              />
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
                  dark:text-white
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
