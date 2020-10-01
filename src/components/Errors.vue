<template>
  <div class="errors" v-if="this.$store.getters.errorMessage">
    <b-alert show variant="danger" class="errorMessage">{{this.$store.getters.errorMessage}}</b-alert>
  </div>
</template>

<script>

export default {
  name: "Errors",
}
</script>

<style scoped>

.errors{
  display: flex;
  justify-content: center;
}

.errorMessage{
  width: 40%;
  margin-top: 10px;
}

</style>