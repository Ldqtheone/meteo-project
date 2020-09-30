<template>
  <div v-if="uvValue !== 0">
    <h2 v-if="uvValue !== 'Loading'">Indice Uv : {{uvValue}}</h2>
    <div class="spinnerTest" v-if="uvValue === 'Loading'">
      <b-spinner label='Loading...'></b-spinner>
    </div>
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