import axios from 'axios'
axios.defaults.withCredentials = true
    // const axios = require('axios')

export default {
    query,
    add,
    remove,
    getById,
    edit,
    getDefaultMeal

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
    return axios.post(BASE_URL, meal)
        .then(res => {
            return res.data
        })
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
    return axios.put(`${BASE_URL}/${mealToEdit._id}`, mealToEdit)
        .then(res => {
            return res.data
        })
}

function getDefaultMeal() {
    return {
        location: {
          country: "italy",
          city: "rome"
  
        },
        imgUrl:[],
        ownerId:{},
        dishes: {
          appetizers: [
            {
              name: "",
              description: "",
              count: 2
            },
            {
              name: "",
              description: "",
              count: 1
            }
          ],
          mains: [
            {
              name: "",
              description: "",
              count: 2
            },
            {
              name: "",
              description: "",
              count: 1
            }
          ],
          dessert: [
            {
              name: "",
              description: "",
              count: 2
            },
            {
              name: "",
              description: "",
              count: 1
            }
          ],
          drinks: ["Red Wine", "White Wine", "Beer"]
        }
      }
}