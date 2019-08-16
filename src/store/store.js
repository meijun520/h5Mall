
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  list1: [
    { name: '1',
      img: '',
      cost: 1,
      count: 2,
      check: false,
      attribute: 'ok'},
    { name: '1',
      img: '',
      cost: 2,
      count: 5,
      check: false,
      attribute: 'ok'}
  ],
  ckecked: []
}
const mutations = {
  addCart (state, {name}) {
    let record = state.add.find(n => n.name === name)
    if (!record) {
      state.add.push({
        name,
        num: 1
      })
    } else {
      record.num++
    }
  }
}
const actions = {
  todingdan ({commit}, product) {
    commit('addCart', {
      name: product.name
    })
  }

}
const getters = {
  list1: state => state.list1,
  addShopList: state => {
    return state.add.map(({name, num}) => {
      let product = state.shop_list.find(n => name.id === name)
      if (product) {
        return {
          ...product,
          num
        }
      }
    })
  }

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
