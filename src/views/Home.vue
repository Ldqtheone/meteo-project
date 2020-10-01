<template>
  <div class="home">
    <img src="../../img/source.gif" alt="" />
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
img {
  width: 300px;
}
</style>