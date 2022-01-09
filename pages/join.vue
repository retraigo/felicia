<template>
  <div class="p-8 flex flex-col space-y-4">
    <span class="text-2xl text-center"
      >Join as a reviewer / committee member</span
    >
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(function () {
      window.location.href = "https://forms.gle/JJx7B9DiRdNjJcJv6";
    }, 2000);
  },
};
</script>