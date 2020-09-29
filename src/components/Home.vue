<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Home",
    props: {
      msg: String
    },
  }
</script>

<style scoped>

</style>