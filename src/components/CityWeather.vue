<template>
  <div>
    <b-card v-for="(cityN, index) of cityWeather" v-bind:key="index"
            :title="cityN.name"
            img-src="https://picsum.photos/600/300/?image=25"
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
    </b-card>
    <div class="advancedWeather">
      <UvValue v-bind:uvValue="this.displayUv"/>
    </div>
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
  asyncComputed: {
    displayUv : {
      get() {
        let lat = this.$store.getters.cityInfos.map(item => {
          return item.coord.lat;
        });

        let lon = this.$store.getters.cityInfos.map(item => {
          return item.coord.lon;
        });

        return axios.get(CURRENT_WEATHER_UV + "&lat=" + lat + "&lon=" + lon)
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