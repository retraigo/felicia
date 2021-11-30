<template>
    <div class = "p-2 flex flex-col justify-start items-start space-y-2">
        <div class = "py-1 pointer-events-none font-semibold text-black text-2xl">{{title}}</div>
        <div class = "py-1 text-md">{{content}}</div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default() {return "Title"}
        },
        content: {
            type: String,
            default() {return "This happened/happens on that date."}
        }
    }
}
</script>