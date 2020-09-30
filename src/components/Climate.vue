<template v-if="climate">
  <div>
    <h1>Climat :</h1>
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