export default {
    async LOGIN({ commit }, form) {
        const response = await fetch(process.env.VUE_APP_API_URL + 'users/login', {
            method: 'POST',
            mode: "no-cors",
            body: JSON.stringify(form)
        })
        // вызов мутации и созранение пользователя и token в стор (зависит от бэка)
        // commit('SAVE_USER', response.data)
        return response
    },
    async REGISTER({commit}, form) {
        let response = await fetch(process.env.VUE_APP_API_URL + 'users/register', {
            method: 'POST',
            mode: "no-cors",
            body: form
        })
        // вызов мутации и созранение пользователя и token в стор (зависит от бэка)
        // commit('SAVE_USER', response.data)
        return response
    },
    async GET_POSTS({commit}) {
        let response = await fetch(process.env.VUE_APP_API_URL + 'posts', {
            method: 'GET',
        })
        commit('SAVE_POSTS', response.data)
    },
    async CHANGE_LIKE({commit}, obj) {
        let response = await fetch(process.env.VUE_APP_API_URL + 'like', {
            method: 'POST',
            body: JSON.stringify({postId: obj.postId, isLike: obj.isLike})
        })
        // зависит об бэка
        commit('CHANGE_LIKE', obj)
    }
}