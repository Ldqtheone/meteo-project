import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        errorMessage: "",
        city: "",
        insee: []
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
        setInsee(state, insee) {
            state.insee = insee
        }
    },
    getters: {
        errorMessage: state => state.errorMessage,
        city: state => state.city,
        insee: state => state.insee
    }
});