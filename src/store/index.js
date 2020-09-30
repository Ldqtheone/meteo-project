import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        errorMessage: "",
        city: "",
        cityId: [],
        cityLatLon: []
    },
    mutations: {
        displayError(state, errorMessage) {
            state.errorMessage = errorMessage
        },
        resetErrors(state) {
            state.errorMessage = ""
        },
        searchCity(state, city) {
            state.city = city
        },
        setCityId(state, cityId) {
            state.cityId = cityId
        },
        setCityLatLon(state, cityLatLon) {
            state.cityLatLon = cityLatLon
        }
    },
    getters: {
        errorMessage: state => state.errorMessage,
        city: state => state.city,
        cityId: state => state.cityId,
        cityLatLon: state => state.cityLatLon
    }
});