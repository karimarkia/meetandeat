import Vue from 'vue'
import Vuex from 'vuex'
import MealStore from './MealStore.js'
import UserStore from './UserStore.js'
import SocketStore from './SocketStore.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        meals: [],
        currMeal: null,
    },
    getters: {
        meals(state) {
            return state.meals
        },
    },
    actions: {},
    modules: {
        MealStore,
        UserStore,
        SocketStore
    }
})