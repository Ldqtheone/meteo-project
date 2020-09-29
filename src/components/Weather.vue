<template>
  <div class="weather">
    <h1>{{msg}}</h1>
    <label for="reSearch">Ville souhaitée : </label>
    <input type="text" v-model="reSearch" id="reSearch">
    <button @click="getCityWeather">City</button>
    <button @click="getEphemeride">Ephemeride</button>
    <button @click="getForecast">Forecast</button>

    <div class="city" v-if="this.$store.getters.city !== ''">
      <CityWeather city="{{this.reSearch}}" v-bind:cityWeather="this.villeWeather"/>
    </div>

  </div>
</template>

<script>

import moment from 'moment-timezone';
moment.locale("fr");
import axios from 'axios'
import {CURRENT_WEATHER_CITY, CURRENT_WEATHER_EPHEMERIDE, CURRENT_WEATHER_FORECAST} from '../constants'
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
      axios.get(CURRENT_WEATHER_CITY + "&search=" + this.reSearch)
          .then(response => {
            console.log(response.data);
            this.villeWeather.push(response.data.cities);

            let insee = response.data.cities.map(item => {
              let inseeArray = [];
              inseeArray.push(item.insee)
              return inseeArray;

            })

            this.$store.commit('setInsee', insee);
          })
          .catch(e => {
            this.errors.push(e);
            this.$store.commit('displayError', e)

          });

      this.$store.commit('searchCity', this.reSearch);
      this.villeWeather = [];
    },
    getEphemeride() {
      axios.get(CURRENT_WEATHER_EPHEMERIDE + "&insee=95394"/* + this.reSearch*/)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            this.errors.push(e);
            this.$store.commit('displayError', e)
          })
    },
    getForecast() {
      axios.get(CURRENT_WEATHER_FORECAST + "&insee=95394"/* + this.reSearch*/)
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