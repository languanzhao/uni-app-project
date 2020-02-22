import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import test2 from './components/test2.vue'
Vue.component('test2',test2)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
