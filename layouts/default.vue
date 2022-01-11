<script>
import Navigation from "@/data/Navigation";
import Meta from "@/data/Meta";
export default {
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "Event",
      name: Meta.siteName,
      startDate: "2022-03-30T00:00-05:00",
      endDate: "2022-03-31T23:00-05:00",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "VirtualLocation",
        name: "Virtual Conference",
      },
      image: Meta.image,
      description: Meta.description,
      organizer: {
        "@type": "Organization",
        name: "SRM Easwari Engineering College",
        url: "https://ai.srmeaswari.ac.in",
        logo: Meta.image,
      },
    };
  },
  data() {
    return {
      Navigation,
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<template>
  <div
    class="
      flex flex-col
      min-h-screen
      font-montserrat
      tracking-wide
      bg-white
      dark:bg-gray-900
      text-gray-600
      dark:text-gray-300
    "
  >
    <LayoutHeader
      :title="$nuxt.$route.path.split('/').reverse()[0] || 'home'"
    />
    <main class="flex-1 w-full max-w-7xl p-4 mx-auto md:px-8 py-16 mt-5">
      <Nuxt />
    </main>
    <LayoutFooter />
  </div>
</template>