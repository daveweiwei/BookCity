import * as Types from './mutation-type'

const actions = {
  [Types.PULLDATA]({commit}, item) {
    commit(Types.PULLDATA, item)
  }
};

export default actions
