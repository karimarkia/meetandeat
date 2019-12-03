'use strict';
import MealService from '../services/MealService.js'
// import { stat } from 'fs';

export default ({
    strict: true,
    state: {
        meals: [],
        currMeal: null,
        userMeals: null,
        filterBy: {
            searchStr: '',
            mealType: [],
            priceRange: [0, 100]
        },
    },
    mutations: {
        setMeals(state, { meals }) {
            state.meals = meals;
        },
        setCurrMeal(state, mealId) {
            let meal = state.meals.find(meal => meal._id === mealId);
            state.currMeal = meal;
        },
        removeMeal(state, { mealId }) {
            const idx = state.meals.findIndex(meal => meal._id === mealId)
            state.meals.splice(idx, 1)
        },
        addMeal(state, { meal }) {
            state.meals.push(meal)
        },
        editMeal(state, { updatedMeal }) {
            console.log(updatedMeal);

            const idx = state.meals.findIndex(currMeal => currMeal._id === updatedMeal._id);
            state.meals.splice(idx, 1, updatedMeal);
        },
        setMealsFilter(state, filterBy) {
            state.filterBy = filterBy;
        },
        sortMeals(state, sortBy) {
            state.meals.sort((a, b) => (a.price > b.price ? 1 : -1));
        },
        userMeals(state, userId) {
            const meals = state.meals.filter(meal => {
                return meal.ownerId.id === userId.userId
            });
            state.userMeals = meals;
            return meals
        },
    },
    getters: {
        mealsToShow(state) {
            var filterBy = state.filterBy;

            let filteredMeals = [...state.meals];
            if (filterBy.searchStr.length > 0) {
                filteredMeals = filteredMeals.filter(meal =>
                    (meal.title.toLowerCase().includes(filterBy.searchStr.toLowerCase()))
                    // (meal.title.toLowerCase().includes(filterBy.searchStr.toLowerCase()))
                );
            }

            filteredMeals = filteredMeals.filter(meal =>
                (meal.price > filterBy.priceRange[0] && meal.price < filterBy.priceRange[1])
            );
            if (filterBy.mealType.length === 0) return filteredMeals
            filteredMeals = filteredMeals.filter(meal => {
                return filterBy.mealType.includes(meal.tags[0]);
            })
            return filteredMeals;
        },
        currMeal(state) {
            return state.currMeal;
        },
        userMeals(state) {
            return state.userMeals;
        }
    },
    actions: {
        async loadMeals({ commit }) {
            let meals = await MealService.query()
            commit({ type: 'setMeals', meals })
                // console.log(meals);
            return meals

        },
        async setCurrMeal(context, { mealId }) {
            const meals = await MealService.query()
            context.commit('setCurrMeal', mealId)
            return meals
        },
        async removeMeal(context, payload) {
            await MealService.remove(payload.mealId)
            context.commit({ type: 'removeMeal', mealId: payload.mealId })
        },
        async getById(context, mealId) {
            const meals = await MealService.getById(mealId.routeParamsId)
            context.commit({ type: 'setCurrMeal', meals })
            return meals

        },

        async editMeal(context, { currMeal }) {
            console.log(currMeal);
            
            const meals = await MealService.edit(currMeal)
            context.commit({ type: 'editMeal', updatedMeal: meals })
            return meals
        },
        async addMeal(context, { currMeal }) {
            const meals = await MealService.add(currMeal)
            context.commit({ type: 'addMeal', meal: meals })
            return meals

        },

    },
})