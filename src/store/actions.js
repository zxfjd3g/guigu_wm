import {getUser} from '../api'
import {
  GET_USERINFO,
  SAVE_AVATAR,
  RECORD_USERINFO,
} from './mutation-types.js'

export default {

  async getUserInfo({commit, state}) {
    const info = await getUser()
    commit(GET_USERINFO, {info})
  },

  recordUserinfo({commit}, info) {
    commit(RECORD_USERINFO, {info})
  },
}