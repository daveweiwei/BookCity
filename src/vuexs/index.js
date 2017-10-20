import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  book_data: [], //书列表
  token: null, //记录cookis
  user_status: false, //用户登陆状态
  footer_state: true, // 隐藏footer组件
  user_info: null // 用户信息
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: true
});
