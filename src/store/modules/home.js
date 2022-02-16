const state = {
  list: [],
  name: ''
}

const mutations = {
  add(state, value) {
    state.list.push(value)
    state.name = value
  }
}

const actions = {
  // addItem({commit}, {value}) {
  //   commit('add', value)
  // }
  addItem(context, value) {
    console.log(value);
    context.commit('add', value)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}