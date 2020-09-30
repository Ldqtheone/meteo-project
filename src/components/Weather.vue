<template>
  <div class="weather">
    <h1>{{msg}}</h1>
    <label for="reSearch">Ville souhaitée : </label>
    <input type="text" v-model="reSearch" id="reSearch">
    <button @click="getCityWeather">City</button>
    <div class="city" v-if="this.$store.getters.city !== ''">
      <CityWeather v-bind:latitude="this.latitude" v-bind:longitude="this.longitude" v-bind:cityWeather="this.villeWeather"/>
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
      villeWeather: [],
      latitude: 0,
      longitude: 0
    }
  },
  methods: {
    getCityWeather() {
      axios.get(CURRENT_WEATHER_CITY + "&q=" + this.reSearch)
          .then(response => {
            console.log(response.data);
            this.villeWeather.push(response.data);
            this.latitude = response.data.coord.lat;
            this.longitude = response.data.coord.lon;

            let latLon = {"Latitude": response.data.coord.lat, "Longitude": response.data.coord.lon};

            this.$store.commit('setCityId', response.data.sys.id);
            this.$store.commit('setCityLatLon', latLon);
          })
          .catch(e => {
            console.log(e);
            this.$store.commit('displayError', e)
          });

      this.$store.commit('searchCity', this.reSearch);
      this.villeWeather = [];
    }
  }
}

</script>

<style scoped>

</style>