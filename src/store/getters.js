const getters = {
    token: state => state.user.token,
    name: state => state.user.avatar,
    avatar: state => state.user.avatar,
    roles: state => state.user.roles

}

export default getters
