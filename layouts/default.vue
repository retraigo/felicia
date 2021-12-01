<script>
import Navigation from '@/data/Navigation'
export default {
  data() {
    return {
      Navigation
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'description',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="flex flex-col min-h-screen font-montserrat tracking-wide bg-white text-gray-600">
    <LayoutHeader :title="$nuxt.$route.path.split('/').reverse()[0] || 'home'" />
    <main class="flex-1 w-full max-w-7xl p-4 mx-auto md:px-8 py-16 mt-5">
      <Nuxt />
    </main>
    <LayoutFooter />
  </div>
</template>