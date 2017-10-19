import * as Types from './mutation-type'

const actions = {
  [Types.PULLDATA]({commit}, item) {
    commit(Types.PULLDATA, item)
  },
  [Types.FOOTERSTATUS]({commit}, item) {
    commit(Types.FOOTERSTATUS, item)
  },
  [Types.LOGINSTATA]({commit}, item) {
    commit(Types.LOGINSTATA, item)
  }
};

export default actions
