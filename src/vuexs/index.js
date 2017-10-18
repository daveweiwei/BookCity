import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  book_data: [], //书列表
  token: null, //用户登陆状态
  footer_state:true // 隐藏footer组件
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: true
});
