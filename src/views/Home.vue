<template>
  <div class="home">
    <Weather msg="Bienvenue sur notre appli de météo !" />
    <Errors/>
  </div>
</template>

<script>
import Weather from "../components/Weather";
import Errors from "../components/Errors";

export default {
  name: "Home",
  components: { Errors, Weather },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>