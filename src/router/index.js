import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

const router = new Router({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    // 设置title
    if ('title' in to.meta) {
        window.document.title = to.meta.title
    }

    // if 没有token或token失效跳转到登录
    if (to.name !== 'login' && !Vue.auth.getToken()) {
        next({name: 'login'})
    }

    // 如果已经认证 访问登录跳转到 主页
    if (to.name === 'login' && Vue.auth.getToken()) {
        next({name: 'dashboard'})
    }

    next()
})

export default router
