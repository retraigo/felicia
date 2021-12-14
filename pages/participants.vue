<template>
<div>
  <p class = "text-white font-semibold text-center text-4xl animate-pulse">Redirecting you...</p>
</div>
</template>

<script>
export default {
  mounted () {
         setTimeout(function(){
        window.location.href = 'https://easychair.org/conferences/?conf=ivcmasm2022' 
         }, 3000)
  }
}
</script>

