import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        errorMessage: ""
    },
    mutations: {
        displayError(state, errorMessage) {
            state.errorMessage = errorMessage
        },
        resetErrors(state) {
            state.errorMessage = ""
        }
    },
    getters: {
        errorMessage: state => state.errorMessage
    }
});