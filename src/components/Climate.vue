<template v-if="climate">
  <div>
    <h1>Forecast :</h1>
  </div>
</template>

<script>

export default {
  name: "Climate",
  props: {
    climate: Array
  }
}

</script>

<style scoped>

</style>