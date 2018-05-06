export const state = () => ({
  online: false,
  drawer: false,
})

export const mutations = {
  setOnline(state, status) {
    state.online = status
  },
  setDrawer(state, status) {
    state.drawer = status
  },
}

export const actions = {
}
