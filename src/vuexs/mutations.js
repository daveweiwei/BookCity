import * as Types from './mutation-type'

const mutations = {
  [Types.PULLDATA](state, item) {  // 把获取的数据同步到仓库中
    state.book_data = item
  },
  [Types.FOOTERSTATUS](state, item) {  // 把获取的数据同步到仓库中
    state.footer_state = item
  },
  [Types.LOGINSTATA](state, item) {  // 把获取的数据同步到仓库中
    state.user_status = item
  }
}
export default mutations
