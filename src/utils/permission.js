import store from '@/store/index'

// export default function (Vue) {
//     Vue.permission = {
//         hasPermission (permission) {

//         }
//     }

//     Object.defineProperties(Vue.prototype, {
//         $permission: {
//             get () {
//                 return Vue.permission
//             }
//         }
//     })
// }
const permission = {
    install (Vue) {
        Vue.prototype.$hasPermission = function (permission) {
            return !!store.getters.permissions.includes(permission)
        }
    }
}

export default permission
