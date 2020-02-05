import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./axios"
import Vant from "vant"

import search from './components/search.vue'
//注册搜索全局组件

Vue.component('my-search', search)
import "vant/lib/index.css"
Vue.use(Vant)
Vue.use(axios)
    // axios.defaults.withCredentials = true;

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')