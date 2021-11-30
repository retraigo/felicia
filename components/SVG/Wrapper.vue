<template>
  <div>
    <SVGHome v-if="name.toLowerCase() == 'home'" />
    <SVGSus v-if="name.toLowerCase() == 'sus'" />
    <SVGFile v-if="name.toLowerCase() == 'file'" />
    <SVGPlusSquare v-if="name.toLowerCase() == 'plussquare'" />
    <SVGTV v-if="name.toLowerCase() == 'tv'" />
    <SVGGlobe v-if="name.toLowerCase() == 'globe'" />

    <SVGParticipant v-if="name.toLowerCase() == 'participant'" />
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default() {
        return "sus";
      },
    },
  },
};
</script>