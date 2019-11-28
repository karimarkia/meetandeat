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
        setCurrMeal(state, mealId) {
            let meal = state.meals.find(meal => meal.id === mealId);
            state.currMeal = meal;
        },
        removeMeal(state, { mealId }) {
            // todoService.remove(todoId);
            const idx = state.meals.findIndex(meal => meal.id === mealId)
            state.meals.splice(idx, 1)

        },
        addMeal(state, { meal }) {
            // state.toys.id=1
            const addedTodo = MealService.add(meal)
            state.meals.push(addedTodo)

        },
        editMeal(state, { item }) {
            const idx = state.meals.findIndex(currItem => currItem.id === item.id);
            state.meals.splice(idx, 1, item);
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
        editMeal(context, {currMeal}) {
            MealService.edit(currMeal)
                .then((updatedMeal) => {
                    context.commit({ type: 'editMeal', updatedMeal })
                })
        }, 
        addMeal(context, { newMeal }) {
            return MealService.add(newMeal)
                .then((addedItem) => {
                    context.commit({ type: 'addMeal', meal: addedItem })
                    return addedItem
                })
        },
    },

})