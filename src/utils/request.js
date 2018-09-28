import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL, // api的base_url
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
    // Do something before request is sen
        if (store.getters.token) {
            config.headers.common['Authorization'] = getToken()
        }
        return config
    },
    error => {
    // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// respone interceptor
service.interceptors.response.use(
    response => response,

    // response => {

    // },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
