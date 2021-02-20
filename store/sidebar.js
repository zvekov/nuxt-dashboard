import Vue from 'vue'

export const store = Vue.observable({
  toogleAsideCompact: false,
})

export const mutations = {
  toggleNav() {
    store.toogleAsideCompact = !store.toogleAsideCompact
  },
}
