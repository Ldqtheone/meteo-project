import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        errorMessage: "",
        city: "",
        cityInfos: []
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
        setCityInfos(state, cityInfos) {
            state.cityInfos = cityInfos
        }
    },
    getters: {
        errorMessage: state => state.errorMessage,
        city: state => state.city,
        cityInfos: state => state.cityInfos
    }
});