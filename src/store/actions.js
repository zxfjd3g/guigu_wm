import {getUser} from '../api'
import {
  GET_USERINFO,
  SAVE_AVATAR,
  RECORD_USERINFO,
} from './mutation-types.js'

export default {

  saveAvatar({commit}, imgPath) {
    commit(SAVE_AVATAR, {imgPath})
  },

  async getUserInfo({commit, state}) {
    const info = await getUser()
    commit(GET_USERINFO, {info})
  },

  recordUserinfo({commit}, info) {
    commit(RECORD_USERINFO, {info})
  },
}