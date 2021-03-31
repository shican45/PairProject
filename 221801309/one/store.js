import Vue from 'vue'
import Vuex from 'vuex'

import { storage } from './storage';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 默认读取storage里面的数据
    name: storage.getLocalStorageName || ''
  },
  mutations: {
    setData (state, data) {
      // 拿到数据有，向state和storage里面都放入数据
      state.name = data
      storage.setLocalStorageName = data;
    }
  },
  actions: {
    getData ({ commit, state }, params) {
      let name = 'web秀 Vuex+localStorage数据状态持久化';
      commit('setData', name)
    }
})

export default store

