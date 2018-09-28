import store from '@/store/index'

const permission = {
    install (Vue) {
        Vue.prototype.$hasRole = function (roles) {
            for (let index = 0; index < roles.length; index++) {
                if (store.getters.roles.includes(roles[index])) {
                    return true
                }
            }
            return false
        }
        Vue.prototype.$hasPermission = function (permission) {
            return !!store.getters.permissions.includes(permission)
        }
    }
}

export default permission
