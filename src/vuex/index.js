import Vue from 'vue'

const state = {
  categoryTitle: [],
  categoryList: []
}

export const homeStore = Vue.observable(state)

export const mutations = {
  SET_CATEGORY_TITLE (value) {
    homeStore.categoryTitle = value
  },
  SET_CATEGORY_LIST (value) {
    homeStore.categoryList = value
  }
}
