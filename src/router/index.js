import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MealApp from '@/views/MealApp.vue'
import MealDetails from '@/views/MealDetails.vue'
import MealEdit from '@/views/MealEdit.vue'
import UserDetails from '@/views/UserDetails.vue'
import about from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: about
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
    {
        path: '/user/:_id?',
        name: 'user-details',
        component: UserDetails
    }
]

const router = new VueRouter({
    routes
})

export default router