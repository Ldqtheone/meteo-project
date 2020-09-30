<template>
  <div v-if="uvValue !== 0">
    <h2>Indice Uv : {{uvValue}}</h2>
  </div>
</template>

<script>

export default {
  name: "UvValue",
  props: {
    uvValue: [String, Number]
  }
}

</script>

<style scoped>

</style>