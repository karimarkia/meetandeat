'use strict';

import MealService from '../services/MealService.js'



export default ({
    strict: true,
    state: {
        meals: [],
        currMeal: null,
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
            // todoService.remove(todoId);
            const idx = state.meals.findIndex(meal => meal._id === mealId)
            state.meals.splice(idx, 1)

        },
        addMeal(state, { meal }) {
            // state.toys.id=1
            // const addedMeal =  MealService.add(meal)
            state.meals.push(meal)

        },
        editMeal(state, { updatedMeal }) {
         
           console.log('banana 7 ',updatedMeal);
            const idx = state.meals.findIndex(currMeal => currMeal._id === updatedMeal._id);
            state.meals.splice(idx, 1, updatedMeal);
        },
        setMealsFilter(state, filterBy) {
            state.filterBy = filterBy;
        },
        sortMeals(state, sortBy) {
            state.meals.sort((a, b) => (a.price > b.price ? 1 : -1));
        }
    },

    getters: {
        mealsToShow(state) {
            var filterBy = state.filterBy;
            console.log(filterBy.mealType);

            let filteredMeals = [...state.meals];
            // filteredMeals = filteredMeals.filter(meal =>
            //     (meal.title.toLowerCase().includes(filterBy.searchStr.toLowerCase()))
            // );

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

    }, 
    actions: {
        loadMeals({ commit }) {
            return MealService.query()
                .then(meals =>
                    commit({ type: 'setMeals', meals })
                )
        },
        setCurrMeal(context, { mealId }) {
            MealService.query().then(() =>
                context.commit('setCurrMeal', mealId))
        },
        removeMeal(context, payload) {
            return MealService.remove(payload.mealId)
                .then(() => {
                    context.commit({ type: 'removeMeal', mealId: payload.mealId })
                })
        },
        getById(context, mealId) {
            return MealService.getById(mealId.routeParamsId)
                .then(meal => {
                    context.commit({ type: 'setCurrMeal', meal })
                    return meal
                })
        },

        editMeal(context, { currMeal }) {
            return MealService.edit(currMeal)
                .then((updatedMeal) => {
                    context.commit({ type: 'editMeal', updatedMeal })
                })
        },
        addMeal(context, { currMeal }) {
            // console.log(currMeal);
            return MealService.add(currMeal)
                .then((addedItem) => {
                    context.commit({ type: 'addMeal', meal: addedItem })
                        // console.log(addedItem);
                    return addedItem
                })
        },
    },
})  