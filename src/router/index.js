import Vue from 'vue'
import Router from 'vue-router'
import constantRouterMap from './constantRouter'
import store from '@/store/index'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'
Vue.use(Router)

// 创建router实例
const router = new Router({
    mode: 'history',
    routes: constantRouterMap
})

// router navigation

const whitelist = ['/login']

router.beforeEach((to, from, next) => {
    // 判断是否有token
    if (getToken()) {
        // 如果有token进入的是login页面
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            // 如果不是登录页面,判断用户的角色
            if (store.getters.permissions.length === 0) {
                store.dispatch('GetUserInfo').then(response => {
                    // const roles = response.data.roles
                }).catch(error => {
                    store.dispatch('FedLogOut').then(() => {
                        Message.error(error || '认证失败请重新登录')
                    })
                    next({ path: '/' })
                })
                next()
            } else {
                next()
            }
        }
    } else {
        if (whitelist.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})

export default router
