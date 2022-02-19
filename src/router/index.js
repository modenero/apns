import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'

import About from '../views/About'
import Help from '../views/Help'
import Wallet from '../views/Wallet'

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
        path: '/help',
        component: Help,
    },
    {
        path: '/wallet',
        component: Wallet,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
