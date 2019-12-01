import axios from 'axios'
axios.defaults.withCredentials=true
// const axios = require('axios')

export default {
    query,
    add,
    remove,
    getById,
    edit
}

const BASE_URL = (process.env.NODE_ENV !== 'development') ?
    '/api/meal' :
    '//localhost:3000/api/meal';


function query() {
    return axios.get(BASE_URL).then(res => {
        return res.data;
    });
}

function add(meal) {
    console.log(meal);
    return axios.post(BASE_URL, meal)
         .then(res => {
              return res.data})
}

function remove(mealId) {
    return axios.delete(`${BASE_URL}/${mealId}`)
}

function getById(_id) {
    return axios.get(`${BASE_URL}/${_id}`)
        .then(meals => {
            return meals.data
        })
}

function edit(mealToEdit) {
    console.log('banana 2: ',mealToEdit)
    return axios.put(`${BASE_URL}/${mealToEdit._id}`, mealToEdit)
        .then(res=>{
            console.log('banana5 :',res.data);
            return res.data})
}