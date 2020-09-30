<template>
  <div class="weather">
    <h1>{{msg}}</h1>
    <label for="reSearch">Ville souhaitée : </label>
    <input type="text" v-model="reSearch" id="reSearch">
    <button @click="getCityWeather">City</button>
    <div class="city" v-if="this.$store.getters.city !== ''">
      <CityWeather v-bind:cityWeather="this.villeWeather"/>
    </div>

  </div>
</template>

<script>

import moment from 'moment-timezone';
moment.locale("fr");

import axios from 'axios'
import {CURRENT_WEATHER_CITY} from '../constants'
import CityWeather from "./CityWeather";

export default {
  name: "Weather",
  components: {CityWeather},
  props: {
    msg: String
  },
  data() {
    return {
      reSearch: "",
      villeWeather: []
    }
  },
  methods: {
    getCityWeather() {
      axios.get(CURRENT_WEATHER_CITY + "&q=" + this.reSearch)
          .then(response => {
            console.log(response.data);
            this.villeWeather.push(response.data);
            this.$store.commit('setCityInfos', this.villeWeather);
            this.$store.commit('searchCity', this.reSearch);
          })
          .catch(e => {
            console.log(e);
            this.$store.commit('displayError', e)
          });

      // this.villeWeather = [];
    }
  }
}

</script>

<style scoped>

</style>