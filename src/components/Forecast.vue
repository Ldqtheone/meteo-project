<template>
  <div>
    <h3>Prévisions : {{this.$route.params.city}}</h3>
      <b-table :items="items" :fields="fields" :tbody-tr-class="getCityForecast"></b-table>
  </div>
</template>

<script>

import axios from "axios";
import { CURRENT_WEATHER_FORECAST } from "../constants";

export default {
  name: "Forecast",
  data () {
    return {
      cityForecast: [],
      fields: ['date','humidité','vent','temperature','temps'],
      items: []
    }
  },
  asyncComputed: {
    getCityForecast: {
      get(){
        this.$store.commit("resetErrors");

        return axios
            .get(CURRENT_WEATHER_FORECAST + "&q=" + this.$route.params.city)
            .then((response) => {

              let result = response.data.list;

              result.forEach(item => this.items.push({
                date: item.dt_txt,
                humidité: item.main.humidity + "%",
                vent: item.wind.speed + " km/h",
                temperature: item.main.temp + "°C",
                temps: item.weather[0].description
              }));

              this.cityForecast.push(response.data.list);
            });
      },
      default() {
        return "Loading";
      }
    },
  },
}

</script>

<style scoped>

</style>