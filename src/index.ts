import Vue from 'vue'

// import store
import store from './vue/store'

// router
import router from './vue/router'

// Import style
import './scss/app.scss'

// font awesome
import "@fortawesome/fontawesome-free/css/all.css"

// Import App
import MyApp from './vue/App.vue'

// jquery
import jQuery from 'jquery';

(<any>window).$ = (<any>window).jQuery = jQuery

/*
 |----------------------------------------------------------
 | App Created Here
 |----------------------------------------------------------
*/

const app = new Vue({
    store,
    router,
    components: {
        MyApp
    }
}).$mount('#app')