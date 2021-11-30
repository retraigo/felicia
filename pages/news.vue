<template>
  <div class="p-8">
    <div class="text-lg">
      <div class="flex flex-row items-stretch justify-between">
        <div>
          <div class="p-2 text-gray-700 border-gray-400 border-b-2">
            Latest News:
          </div>

          <MiscNews v-for="x in Array(5).keys()" :key="x" />
        </div>
        <div class="filler">filler</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
