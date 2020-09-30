<template>
  <div>
    <h2> Voici les informations sur {{this.$store.getters.city}} : </h2>
    <ul v-for="(cityN, index) of cityWeather" v-bind:key="index">
      <li>
        Country : {{cityN.sys.country}}
        <br>
        ID : {{cityN.sys.id}}
      </li>
      <li>Latitude : {{cityN.coord.lat}} </li>
      <li>Longitude : {{cityN.coord.lon}} </li>
    </ul>
    <div class="advancedWeather" v-if="this.advanced">
      <button @click="getUv">Uv</button>
      <button @click="getClimate">Climat</button>
      <Climate v-bind:climate="this.climate"/>
      <UvValue v-bind:uvValue="this.uvValue"/>
    </div>
  </div>
</template>

<script>

import Climate from "./Climate";
import UvValue from "./UvValue";
import axios from "axios";
import {CURRENT_WEATHER_CLIMATE, CURRENT_WEATHER_UV} from "../constants";

export default {
  name: "CityWeather",
  components: {UvValue, Climate},
  props: {
    cityWeather: Array,
    latitude: Number,
    longitude: Number
  },
  data () {
    return {
      climate: [],
      uvValue: [],
      advanced: false
    }
  },
  updated() {
    this.displayAdvanced();
  },
  mounted() {
    this.getUv();
    this.getClimate();
  },
  methods : {
    getUv() {
/*      let Lat = this.$store.getters.cityLatLon;
      let Lon = this.$store.getters.cityLatLon;*/

      axios.get(CURRENT_WEATHER_UV + "&lat=" + this.latitude + "&lon=" + this.longitude)
          .then(response => {
            // console.log("Latitude et Longitude = " + response.data);
            //console.log(this.$store.getters.cityLatLon[0]);
            console.log(this.latitude);
            this.uvValue.push(response.data);
          })
          .catch(e => {
            this.errors.push(e);
            this.$store.commit('displayError', e)
          })
    },
    getClimate() {
      axios.get(CURRENT_WEATHER_CLIMATE + "&q=" + this.$store.getters.city)
          .then(response => {
            console.log(response.data);
            this.climate.push(response.data);
          })
          .catch(e => {
            this.errors.push(e);
            this.$store.commit('displayError', e);
          })
    },
    displayAdvanced(){
      this.advanced = this.climate.length > 0 && this.uvValue.length > 0;
    }
  }
}

</script>

<style scoped>

</style>