<template>
 <div class="weather">
    <h1>{{msg}}</h1>
   <label for="reSearch">Ville souhaitée : </label>
    <input type="text" v-model="reSearch" id="reSearch">
    <button @click="getCityWeather">City</button>
    <button @click="getEphemeride">Ephemeride</button>
    <button @click="getForecast">Forecast</button>
 </div>
</template>

<script>

import moment from 'moment-timezone';
moment.locale("fr");
import axios from 'axios'
import {CURRENT_WEATHER_CITY, CURRENT_WEATHER_EPHEMERIDE, CURRENT_WEATHER_FORECAST} from '../constants'

export default {
  name: "Weather",
  props: {
    msg: String
  },
  data() {
    return {
      reSearch: ""
    }
  },
  methods: {
    getCityWeather() {
      axios.get(CURRENT_WEATHER_CITY + "&search=" + this.reSearch)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            this.errors.push(e);
            this.$store.commit('displayError', e)

          })
    },
    getEphemeride() {
      axios.get(CURRENT_WEATHER_EPHEMERIDE + "&search=" + this.reSearch)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            this.errors.push(e);
            this.$store.commit('displayError', e)

          })
    },
    getForecast() {
      axios.get(CURRENT_WEATHER_FORECAST + "&search=" + this.reSearch)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            this.errors.push(e);
            this.$store.commit('displayError', e)

          })
    },
  }
}

</script>

<style scoped>

</style>