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
  addItem(context, {value}) {
    context.commit('add', value)
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}