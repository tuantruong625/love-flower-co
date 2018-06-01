import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import About from '@/components/pages/About'
import Landing from '@/components/pages/Landing'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})
