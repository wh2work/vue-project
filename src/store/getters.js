const getters = {
    token: state => state.user.token,
    name: state => state.user.avatar,
    avatar: state => state.user.avatar,
    permissions: state => state.user.permissions,
    sidebar: state => state.app.sidebar

}

export default getters
