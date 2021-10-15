import { createStore } from 'vuex'

import commonActions from './actions/actions'
import apiActions from './actions/api-requests'
import mutations from './mutations/mutations'

export default createStore({
  state: {
    // mock data
    user: {
      img: 'user1.png',
      username: 'user2021'
    },
    posts: []
  },
  mutations,
  actions: {
    ...commonActions,
    ...apiActions
  },
  modules: {
  }
})
