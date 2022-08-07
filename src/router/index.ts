import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: import('@/views/Calculator.vue'),
    },
    {
        path: '/actions',
        name: 'Actions',
        component: import('@/views/Actions.vue'),
    },
    {
        path: '/action',
        name: 'Action',
        component: import('@/views/Action.vue'),
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: import('@/views/Contacts.vue'),
    },
    {
        path: '/personal',
        name: 'Departures',
        component: import('@/views/personal/Departures.vue'),
    },
    {
        path: '/personal/departure',
        name: 'DepartureItem',
        component: import('@/views/personal/DepartureItem.vue'),
    },
    {
        path: '/personal/user',
        name: 'User',
        component: import('@/views/personal/User.vue'),
    },
    {
        path: '/personal/user/add',
        name: 'AddUser',
        component: import('@/views/personal/AddUser.vue'),
    },
    {
        path: '/personal/AddressBook',
        name: 'AddressBook',
        component: import('@/views/personal/AddressBook.vue'),
    },
    {
        path: '/personal/Calculator',
        name: 'PersonalCalculator',
        component: import('@/views/personal/Calculator.vue'),
    },
    {
        path: '/personal/Docs',
        name: 'Docs',
        component: import('@/views/personal/Docs.vue'),
    },
    {
        path: '/ui',
        name: 'Ui',
        component: () => import("@/views/UKit/index.vue"),
        children: [
            {
                path: '',
                name: 'UKitOne',
                component: () => import(/* webpackChunkName: "UKitOne" */'@/views/UKit/UKitOne.vue'),
            },
            {
                path: 'UKitTwo',
                name: 'UKitTwo',
                component: () => import(/* webpackChunkName: "UKitTwo" */"@/views/UKit/UKitTwo.vue"),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
