<template>
<div>
    <SVGHome v-if = "name.toLowerCase() == 'home'" />
    <SVGSus v-if = "name.toLowerCase() == 'sus'" />
</div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default() {return "sus"}
        }
    }
}
</script>