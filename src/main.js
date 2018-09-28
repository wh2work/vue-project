import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css  覆盖element-ui样式

import './mock'

// bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// permission
import permission from '@/utils/permission'

Vue.use(BootstrapVue)
Vue.use(permission)

Vue.use(Element, {
    size: 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
