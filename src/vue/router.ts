import Vue from 'vue'
import VueRouter from 'vue-router'

// COMPONENTS
import HomePage from './pages/Home.vue'
import DocsPage from './pages/Docs.vue'
import ContentPage from './pages/Content.vue'
import DetailPage from './pages/Detail.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '',
            redirect: {name: 'home'}
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage
        },
        {
            path: '/api',
            name: 'api',
            component: DocsPage,
            children: [
                {
                    path: 'content',
                    name: 'api.content',
                    component: ContentPage
                },
                {
                    path: 'item/:id',
                    name: 'api.item',
                    props: true,
                    component: DetailPage
                },
                {
                    path: '',
                    redirect: {name: 'api.content'}
                }
            ]
        }
    ]
})