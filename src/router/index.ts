import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
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
