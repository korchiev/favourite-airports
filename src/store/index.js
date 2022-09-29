import { createStore } from 'vuex'

export default createStore({
  state: {
    firstName: 'John',
    lastName: 'Doe',
    favorites: [] // will store favorites here
  },
  mutations: {
    UPDATE_FAVORITES(state, payload) {
      state.favorites = payload
    }
  },
  actions: {
    addToFavorites(context, payload) { //context is Vue app and payload data to be stored
      const favorites = context.state.favorites
      favorites.push(payload)
      context.commit('UPDATE_FAVORITES', payload)
    }
  },
  getters: {
    fullName: function(state) {
      return(`${state.firstName} ${state.lastName}`)
    }
  }
  
})