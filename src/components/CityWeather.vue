<template>
  <div class="cityWeather">
    <b-card v-for="(cityN, index) of cityWeather" v-bind:key="index"
            :title="cityN.name"
            :img-src="'../assets/' + cityN.weather[0].icon"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
      <span>
        {{cityN.dt | moment("LLLL")}}
      </span>
      <span>Latitude : {{cityN.coord.lat}} </span>
      <span>Longitude : {{cityN.coord.lon}} </span>
      <br>
      <span>Temperature : {{ cityN.main.temp | celciusF}}</span>
      <UvValue v-bind:uvValue="displayUv"/>
    </b-card>
  </div>
</template>

<script>

import UvValue from "./UvValue";
import axios from "axios";
import { CURRENT_WEATHER_UV } from "../constants";
import moment from 'moment'

export default {
  name: "CityWeather",
  components: {UvValue},
  props: {
    cityWeather: Array
  },
  data(){
    return {
      lat: 0,
      lon: 0
    }
  },
  asyncComputed: {
    displayUv : {
      get() {
        this.lat = this.$store.getters.cityInfos.map(item => {
          return item.coord.lat;
        });

        this.lon = this.$store.getters.cityInfos.map(item => {
          return item.coord.lon;
        });

        return axios.get(CURRENT_WEATHER_UV + "&lat=" + this.lat + "&lon=" + this.lon)
            .then(response => {
              console.log(response.data);
              return response.data.value;
            })
            .catch(e => {
              this.errors.push(e);
              this.$store.commit('displayError', e)
            })
      },
      default() {
        return "Loading";
      }
    }
  },
  filters: {
    reformatDate: function (value) {
      if (!value)
        return 'Aucune date à afficher';

      let newDate = new Date(value);

      console.log(value);
      console.log(newDate);

      return moment(newDate).format('LLLL');
    },
    celciusF: (value) => {
      return Math.ceil(value - 273) + '°C / ' + Math.ceil(value * 9/5 - 459.67) + '°F'
    },
  }
}

</script>

<style scoped>

</style>