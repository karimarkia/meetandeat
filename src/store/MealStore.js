'use strict';
import MealService from '../services/MealService.js'
// import { stat } from 'fs';

export default ({
    strict: true,
    state: {
        meals: [],
        currMeal: null,
        userMeals: null,
        mainFilter: '',
        filterBy: {
            searchStr: '',
            mealType: [],
            priceRange: [0, 100]
        },
    },
    mutations: {
        setMeals(state, {
            meals
        }) {
            state.meals = meals;
        },
        setCurrMeal(state, mealId) {
            let meal = state.meals.find(meal => meal._id === mealId);
            state.currMeal = meal;
        },
        removeMeal(state, {
            mealId
        }) {
            const idx = state.meals.findIndex(meal => meal._id === mealId)
            state.meals.splice(idx, 1)
        },
        addMeal(state, {
            meal
        }) {
            state.meals.push(meal)
        },
        editMeal(state, {
            updatedMeal
        }) {
            const idx = state.meals.findIndex(currMeal => currMeal._id === updatedMeal._id);
            state.meals.splice(idx, 1, updatedMeal);
            state.currMeal = updatedMeal
        },
        setMealsFilter(state, filterBy) {
            state.filterBy = filterBy;
        },
        setMainFilter(state, filterBy) {
            state.mainFilter = filterBy;
            console.log(state.mainFilter);

        },
        sortMeals(state, sortBy) {
            state.meals.sort((a, b) => (a.price > b.price ? 1 : -1));
        },
        userMeals(state, userId) {
            const meals = state.meals.filter(meal => {
                return meal.ownerId.id === userId.userId
            });
            state.userMeals = meals;
        },
    },
    getters: {
        mealsToShow(state) {
            let filterBy = state.filterBy;
            let mainFilter = state.mainFilter;
            let filteredMeals = [...state.meals];
            console.log('country', mainFilter);

            let regex = new RegExp(mainFilter, 'i');
            if (mainFilter.length !== 0) {
                filteredMeals = filteredMeals.filter(meal => {
                    if (!meal.location) return
                    return regex.test(meal.location.city) || regex.test(meal.location.country)
                })
            }
            regex = new RegExp(filterBy.searchStr, 'i');



            if (filterBy.searchStr.length > 0) {
                filteredMeals = filteredMeals.filter(meal => {
                    return regex.test(meal.title)

                })
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
        },
        mainFilter(state) {
            return state.mainFilter;
        }
    },
    actions: {
        async loadMeals({
            commit
        }) {
            let meals = await MealService.query()
            commit({
                type: 'setMeals',
                meals
            })
            return meals

        },
        async setCurrMeal(context, {
            mealId
        }) {
            const meals = await MealService.query()
            context.commit('setCurrMeal', mealId)
            return meals
        },
        async removeMeal(context, payload) {
            await MealService.remove(payload.mealId)
            context.commit({
                type: 'removeMeal',
                mealId: payload.mealId
            })
        },
        async getById(context, mealId) {
            const meals = await MealService.getById(mealId.routeParamsId)
            context.commit({
                type: 'setCurrMeal',
                meals
            })
            return meals
        },
        async editMeal(context, {
            currMeal
        }) {
            const meals = await MealService.edit(currMeal)
            context.commit({
                type: 'editMeal',
                updatedMeal: meals
            })
            return meals
        },
        async addMeal(context, {
            currMeal
        }) {
            const meals = await MealService.add(currMeal)
            context.commit({
                type: 'addMeal',
                meal: meals
            })
            return meals
        },
    },
})