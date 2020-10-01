<template>
  <div class="weather">
    <h1>{{ msg }}</h1>
    <b-row class="my-1">
      <b-col sm="2">
        <label for="reSearch">Voir la météo de : </label>
      </b-col>
      <b-col sm="3">
        <b-form-input v-model="reSearch" id="reSearch"></b-form-input>
      </b-col>
      <b-button variant="outline-light" @click="getCityWeather">TROUVER</b-button>
    </b-row>
    <div class="city" v-if="this.$store.getters.city !== ''">
      <CityWeather v-bind:cityWeather="this.villeWeather"/>
    </div>
  </div>
</template>

<script>
import moment from "moment-timezone";

moment.locale("fr");

import axios from "axios";
import {CURRENT_WEATHER_CITY} from "../constants";
import CityWeather from "./CityWeather";

export default {
  name: "Weather",
  components: {CityWeather},
  props: {
    msg: String,
  },
  data() {
    return {
      reSearch: "",
      villeWeather: [],
    };
  },
  methods: {
    getCityWeather() {

      this.$store.commit("resetErrors");

      let cityName = this.$store.getters.cityInfos.map(item => {
        return item.name.toUpperCase();
      });

      let canPush = cityName.length < 9;

      if (!cityName.includes(this.reSearch.toUpperCase()) && canPush)
        axios
            .get(CURRENT_WEATHER_CITY + "&q=" + this.reSearch)
            .then((response) => {
              console.log(response.data);
              this.villeWeather.push(response.data);
              this.$store.commit("setCityInfos", this.villeWeather);
              this.$store.commit("searchCity", this.reSearch);
            });
      else {
        if (!canPush)
          this.$store.commit("displayError", "Le nombre maximale de ville a été atteint");
        else
          this.$store.commit("displayError", "La ville recherchée est déjà affichée");
      }

      // this.villeWeather = [];
    },
  },
};
</script>

<style scoped>

.my-1{
  margin-left:  26em;
}

.panel {
  width: 100%;
  display: inline-block;
}
</style>