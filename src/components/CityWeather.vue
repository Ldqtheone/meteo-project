<template>
  <div>
    <h2> Voici les informations sur {{this.$store.getters.city}} : </h2>
    <ul v-for="(cityW, index) of cityWeather" v-bind:key="index">
      <li v-for="(cityN, index) of cityW" v-bind:key="index">
        Nom : {{cityN.name}}
        <br>
        Code Postal : {{cityN.cp}}
      </li>
    </ul>
    <Forecast/>
    <Ephemeride/>
  </div>
</template>

<script>

import Forecast from "./Forecast";
import Ephemeride from "./Ephemeride";

export default {
  name: "CityWeather",
  components: {Ephemeride, Forecast},
  props: {
    cityWeather: Array
  },
}

</script>

<style scoped>

</style>