import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'

import $APNS from '../views/$APNS'
import About from '../views/About'
import Admin from '../views/Admin'
import Airdrop from '../views/Airdrop'
import Community from '../views/Community'
import Gov from '../views/Gov'
import Help from '../views/Help'
import Privacy from '../views/Privacy'
import Profile from '../views/Profile'
import Sandbox from '../views/Sandbox'
import Sponsors from '../views/Sponsors'
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
        path: '/admin',
        component: Admin,
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
        path: '/privacy',
        component: Privacy,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/sandbox',
        component: Sandbox,
    },
    {
        path: '/sponsors',
        component: Sponsors,
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
