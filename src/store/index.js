import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meals: [],
    currMeal: null,
  },
  getters:{
    meals(state) {

      return state.meals
    },
  },
  mutations: {
    setToys(state, {toys}) {
      state.toys = toys;
      console.log('this :',state.toys);
  },
  },
  actions: {
  },
  modules: {
  }
})
