import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MealApp from '@/views/MealApp.vue'
import MealDetails from '@/views/MealDetails.vue'
import MealEdit from '@/views/MealEdit.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
    },
    {
        path: '/meal',
        name: 'mealApp',
        component: MealApp
    },
    {
        path: '/details/:_id?',
        name: 'mealdetails',
        component: MealDetails
    },
    {
        path: '/edit/:_id?',
        name: 'meal-edit',
        component: MealEdit
    },
    {
        path: '/add',
        component: MealEdit
    },
]

const router = new VueRouter({
    routes
})

export default router