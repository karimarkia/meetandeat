// import axios from 'axios'
// axios.defaults.withCredentials=true
const axios = require('axios')

export default {
    query,
    add,
    remove,
    getById,
    edit
}

const BASE_URL = (process.env.NODE_ENV !== 'development') ?
    '/api/meal' :
    '//localhost:3000/meals';


function query() {
    return axios.get(BASE_URL).then(res => {
        return res.data;
    });
}

function add(meal) {
    console.log(meal);
    // meal.id = 'bananawd'
    return axios.post(BASE_URL, meal)
         .then(res => res.data)
}

function remove(mealId) {
    return axios.delete(`${BASE_URL}/${mealId}`)
}

function getById(id) {
    return axios.get(`${BASE_URL}/${id}`)
        .then(meals => {
            return meals.data
        })
}

function edit(mealToEdit) {
    console.log('meal service edit meal: ',mealToEdit)
    return axios.put(`${BASE_URL}/${mealToEdit.id}`, mealToEdit)
}