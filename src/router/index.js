import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'

import $APNS from '../views/$APNS'
import About from '../views/About'
import Airdrop from '../views/Airdrop'
import Community from '../views/Community'
import Gov from '../views/Gov'
import Help from '../views/Help'
import Privacy from '../views/Privacy'
import Profile from '../views/Profile'
import Redirect from '../views/Redirect'
import Sandbox from '../views/Sandbox'
import ToS from '../views/ToS'

import Admin from '../views/Admin'
import AdminDashboard from '../views/Admin/Dashboard'

import Sponsors from '../views/Sponsors'
import SponsorsAds from '../views/Sponsors/Ads'
import SponsorsAnalytics from '../views/Sponsors/Analytics'
import SponsorsBilling from '../views/Sponsors/Billing'
import SponsorsProfile from '../views/Sponsors/Profile'
import SponsorsSecurity from '../views/Sponsors/Security'
import SponsorsWelcome from '../views/Sponsors/Welcome'

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
        children: [
            {
                name: 'Admin',
                path: '',
                component: AdminDashboard,
            },
            // {
            //     path: 'sponsors',
            //     component: AdminSponsors,
            // },
            // {
            //     path: 'sponsors/:sponsorid',
            //     component: AdminSponsors,
            // },
            // {
            //     path: 'logs',
            //     component: AdminLogs,
            // },
            // {
            //     path: 'logs/:logid',
            //     component: AdminLogs,
            // },
            // {
            //     path: 'reports',
            //     component: AdminReports,
            // },
            // {
            //     path: 'settings',
            //     component: AdminSettings,
            // },
            // {
            //     path: 'sessions',
            //     component: AdminSessions,
            // },
            // {
            //     path: 'sessions/:sessionid',
            //     component: AdminSessions,
            // },
            // {
            //     path: 'users',
            //     component: AdminUsers,
            // },
            // {
            //     path: 'users/:id',
            //     component: AdminUsers,
            // },
        ]
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
        path: '/r/:id',
        component: Redirect,
    },
    {
        path: '/sandbox',
        component: Sandbox,
    },
    {
        path: '/sponsors',
        component: Sponsors,
        children: [
            {
                name: 'Sponsors',
                path: '',
                component: SponsorsWelcome,
            },
            {
                path: 'ads',
                component: SponsorsAds,
            },
            {
                path: 'ads/:id',
                component: SponsorsAds,
            },
            {
                path: 'analytics',
                component: SponsorsAnalytics,
            },
            {
                path: 'billing',
                component: SponsorsBilling,
            },
            {
                path: 'profile',
                component: SponsorsProfile,
            },
            {
                path: 'security',
                component: SponsorsSecurity,
            },
        ]
    },
    {
        path: '/tos',
        component: ToS,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router
