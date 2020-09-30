import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        errorMessage: "",
        city: "",
        cityId: []
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
        }
    },
    getters: {
        errorMessage: state => state.errorMessage,
        city: state => state.city,
        cityId: state => state.cityId
    }
});