<template>
  <div>
    <h2>Voici les informations sur :</h2>
    <b-card>
      {{ this.$store.getters.city }}
      <div class="information">
        <ul v-for="(cityN, index) of cityWeather" v-bind:key="index">
          <li>
            Country : {{ cityN.sys.country }}
            <br />
            ID : {{ cityN.sys.id }}
          </li>
          <li>Latitude : {{ cityN.coord.lat }}</li>
          <li>Longitude : {{ cityN.coord.lon }}</li>
        </ul>
      </div>
      <div class="advancedWeather">
        <UvValue v-bind:uvValue="this.displayUv" />
      </div>
    </b-card>
  </div>
</template>

<script>
import UvValue from "./UvValue";
import axios from "axios";
import { CURRENT_WEATHER_UV } from "../constants";

export default {
  name: "CityWeather",
  components: { UvValue },
  props: {
    cityWeather: Array,
  },
  asyncComputed: {
    displayUv: {
      get() {
        let lat = this.$store.getters.cityInfos.map((item) => {
          return item.coord.lat;
        });

        let lon = this.$store.getters.cityInfos.map((item) => {
          return item.coord.lon;
        });

        return axios
          .get(CURRENT_WEATHER_UV + "&lat=" + lat + "&lon=" + lon)
          .then((response) => {
            console.log(response.data);
            return response.data.value;
          })
          .catch((e) => {
            this.errors.push(e);
            this.$store.commit("displayError", e);
          });
      },
      default() {
        return "Chargement";
      },
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}

.information {
  color: #878787;
}
</style>