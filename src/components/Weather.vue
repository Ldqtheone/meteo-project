<template>
  <div class="weather">
    <h1>{{ msg }}</h1>
    <label for="reSearch">Ville souhaitée : </label>
    <input type="text" class="searchbar" v-model="reSearch" id="reSearch" />
    <button class="button" @click="getCityWeather">TROUVER</button>
    <div class="city" v-if="this.$store.getters.city !== ''">
      <CityWeather v-bind:cityWeather="this.villeWeather" />
    </div>
  </div>
</template>

<script>
import moment from "moment-timezone";
moment.locale("fr");

import axios from "axios";
import { CURRENT_WEATHER_CITY } from "../constants";
import CityWeather from "./CityWeather";

export default {
  name: "Weather",
  components: { CityWeather },
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
      axios
        .get(CURRENT_WEATHER_CITY + "&q=" + this.reSearch)
        .then((response) => {
          console.log(response.data);
          this.villeWeather.push(response.data);
          this.$store.commit("setCityInfos", this.villeWeather);
          this.$store.commit("searchCity", this.reSearch);
        })
        .catch((e) => {
          console.log(e);
          this.$store.commit("displayError", e);
        });

      // this.villeWeather = [];
    },
  },
};
</script>

<style scoped>
.searchbar,
.button {
  height: 45px;
  margin: 1em 0 4em;
  padding: 0;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: white;
  border: none;
}
.searchbar {
  width: 380px;
  border-bottom: solid thin white;
  color: white;
  color: rgba(255, 255, 255, 0.7);
  background: transparent;
}

.searchbar::-webkit-input-placeholder {
  color: white;
  opacity: 0.35;
}
.searchbar::-moz-placeholder {
  color: white;
  opacity: 0.35;
}
.searchbar:-ms-input-placeholder {
  color: white;
  opacity: 0.35;
}
.searchbar:-moz-placeholder {
  color: white;
  opacity: 0.35;
}

.button:focus,
.searchbar:focus {
  outline: none;
  color: white;
}
.searchbar:focus::-webkit-input-placeholder {
  color: white;
  opacity: 0.7;
}
.searchbar:focus::-moz-placeholder {
  color: white;
  opacity: 0.7;
}
.searchbar:focus:-ms-input-placeholder {
  color: white;
  opacity: 0.7;
}
.searchbar:focus:-moz-placeholder {
  color: white;
  opacity: 0.7;
}

.button {
  border: none;
  border: solid 2px #22adff;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0);
  padding: 10px;
  margin-left: 10px;
}
.panel {
  width: 100%;
  display: inline-block;
}
</style>