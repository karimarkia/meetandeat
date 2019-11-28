'use strict';

import MealService from '../services/MealService.js'



export default ({
    strict: true,
    state: {
        meals: [],
        currMeal: null,
        filterBy: {
            searchStr: '',
            mealType: []
        },
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
        editMeal(state, { updatedMeal }) {
            const idx = state.meals.findIndex(currMeal => currMeal.id === updatedMeal.id);
            state.meals.splice(idx, 1, updatedMeal.data);
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
            filteredMeals = filteredMeals.filter(meal =>
                (meal.title.toLowerCase().includes(filterBy.searchStr.toLowerCase()))
            );
            // filteredToys = filteredToys.filter(toy =>
            // filteredMeals = filteredMeals.filter(meal => {
            //     return !filterBy.mealType.includes(meal.tags);
            // })
            // filteredMeals = filteredMeals.filter(
            //     function(e) {
            //         return this.indexOf(e) <= 0;
            //     }, filterBy.mealType
            // );
            // console.log(filterBy.mealType);
            // array1 = array1.filter(function(item) {
            //         return !array2.includes(item);
            //     })
            //     filterBy.category === 'All' ||
            //     (filterBy.category === 'Educational' && toy.type === 'Educational') ||
            //     (filterBy.category === 'Funny' && toy.type === 'Funny') ||
            //     (filterBy.category === 'Adult' && toy.type === 'Adult'));
            // mealType
            // filteredToys = filteredToys.filter(toy =>
            //     !filterBy.inStock ||
            //     filterBy.inStock && toy.inStock
            // )
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