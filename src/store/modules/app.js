const app = {
    state: {
        sidebar: {
            opened: !+localStorage.getItem('sidebarStatus')
        }
    },
    mutations: {
        toggle_sidebar: state => {
            if (state.sidebar.opened) {
                localStorage.setItem('sidebarStatus', 1)
            } else {
                localStorage.setItem('sidebarStatus', 0)
            }

            state.sidebar.opened = !state.sidebar.opened
        }
    },
    actions: {
        toggleSideBar ({ commit }) {
            commit('toggle_sidebar')
        }
    }
}

export default app
