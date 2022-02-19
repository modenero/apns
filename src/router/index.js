import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'

import About from '../views/About'
import Account from '../views/Account'
import Help from '../views/Help'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/account',
        component: Account,
    },
    {
        path: '/help',
        component: Help,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
