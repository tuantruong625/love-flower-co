import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import './scss/app.scss'
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
