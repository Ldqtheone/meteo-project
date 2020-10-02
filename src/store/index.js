import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
})

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
        },
        updateCity (state, cityInfos) {
            const index = state.cityInfos.findIndex(item => item.name === cityInfos.name)
            state.cityInfos[index] = cityInfos
            console.log(state.cityInfos[index]);
        },
        deleteCity(state, cityInfos) {
            const index = state.cityInfos.findIndex(item => item.name === cityInfos.name)
            state.cityInfos.splice(index, 1);
            console.log(state.cityInfos[index]);
        }
    },
    getters: {
        errorMessage: state => state.errorMessage,
        city: state => state.city,
        cityInfos: state => state.cityInfos
    },
    plugins: [vuexLocal.plugin]
});