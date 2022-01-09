
<template>
  <footer class="bg-gray-300 text-center md:text-left md:h-48 block">
    <ul
      class="
        flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4
        h-full
        items-center
        justify-between
        max-w-7xl
        mx-auto
        py-4
        px-4
        md:px-8
        text-sm text-black
      "
    >
      <div class="flex h-full">
        <div class="md:flex flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center">
          <img class="h-36 w-auto object-fit mx-auto" src="/icons/1.svg" />
          <img class="h-36 w-auto object-fit mx-auto" src="/icons/2.svg" />
          <img class="h-36 w-auto object-fit mx-auto" src="/icons/3.svg" />
          <img class="h-36 w-auto object-fit mx-auto" src="/icons/4.svg" />
        </div>
      </div>
      <ul class="flex-initial flex flex-col items-start space-y-4 mt-3 sm:mt-0">
        <!--<li class = "flex flex-row space-x-2 items-center justify-start"><SVGPhone /><span class = "px-1">+91 948 668 4400, +91 900 339 8442, +91 956 646 2802</span></li>-->
        <li class="flex flex-row space-x-2 items-center justify-start">
          <SVGFacebook /><a
            target="_blank"
            href="https://facebook.com/SRMEaswariOfficial"
            class="px-1"
            >SRMEaswariOfficial</a
          >
        </li>
        <li class="flex flex-row space-x-2 items-center justify-start">
          <SVGTwitter /><a
            target="_blank"
            href="https://twitter.com/srm_easwari/"
            class="px-1"
            >srm_easwari</a
          >
        </li>
        <li class="flex flex-row space-x-2 items-center justify-start">
          <SVGInstagram /><a
            target="_blank"
            href="https://www.instagram.com/srmeaswari/"
            class="px-1"
            >srmeaswari</a
          >
        </li>
      </ul>
    </ul>
  </footer>
</template>

  <script>
export default {};
</script>
  