'use strict';

import MealService from '../services/MealService.js'



export default ({
    strict: true,
    state: {
        meals: [],
        currMeal: null,
    },
    mutations: {
        setMeals(state, { meals }) {
            state.meals = meals;
        },
    },
    getters: {
        mealsToShow(state) {
            // var filterBy = state.filterBy;
            // let filteredToys = [...state.toys];

            // filteredToys = filteredToys.filter(toy =>
            //     (toy.name.toLowerCase().includes(filterBy.searchStr.toLowerCase()))
            // );
            // filteredToys = filteredToys.filter(toy =>

            //     filterBy.category === 'All' ||
            //     (filterBy.category === 'Educational' && toy.type === 'Educational') ||
            //     (filterBy.category === 'Funny' && toy.type === 'Funny') ||
            //     (filterBy.category === 'Adult' && toy.type === 'Adult'));

            // filteredToys = filteredToys.filter(toy =>
            //     !filterBy.inStock ||
            //     filterBy.inStock && toy.inStock
            // )
            return state.meals;
        }
    },
    actions: {
        loadMeals({ commit }) {
            return MealService.query()
                .then(meals =>
                    commit({ type: 'setMeals', meals })
                )
        },
    },

})