/* Layout */
import Layout from '@/views/layout/Layout'

export default [
    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
            }
        ]
    },

    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    }
]
