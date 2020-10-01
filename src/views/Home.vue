<template>
  <div class="home">
    <img src="../../img/source.gif" alt="" />
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
img {
  width: 300px;
}
</style>