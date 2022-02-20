import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'

import $APNS from '../views/$APNS'
import About from '../views/About'
import Account from '../views/Account'
import Airdrop from '../views/Airdrop'
import Community from '../views/Community'
import Gov from '../views/Gov'
import Help from '../views/Help'
import Portal from '../views/Portal'
import Privacy from '../views/Privacy'
import Sandbox from '../views/Sandbox'
import ToS from '../views/ToS'

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
        path: '/airdrop',
        component: Airdrop,
    },
    {
        path: '/$APNS',
        component: $APNS,
    },
    {
        path: '/community',
        component: Community,
    },
    {
        path: '/gov',
        component: Gov,
    },
    {
        path: '/help',
        component: Help,
    },
    {
        path: '/portal',
        component: Portal,
    },
    {
        path: '/privacy',
        component: Privacy,
    },
    {
        path: '/sandbox',
        component: Sandbox,
    },
    {
        path: '/tos',
        component: ToS,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
