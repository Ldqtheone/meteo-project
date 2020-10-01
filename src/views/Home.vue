<template>
  <div class="home">
    <Weather msg="Bienvenue sur notre appli de météo !" />
  </div>
</template>

<script>
import Weather from "../components/Weather";

export default {
  name: "Home",
  components: { Weather },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>