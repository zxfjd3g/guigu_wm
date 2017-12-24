import {
  GET_USERINFO,
  SAVE_AVATAR,
  RECORD_USERINFO,
} from './mutation-types.js'

import {setStore} from 'common/utils/storageUtil'

export default {

  //保存图片
  [SAVE_AVATAR](state, {imgPath}) {
    state.imgPath = imgPath;
  },

  //获取用户信息存入vuex
  [GET_USERINFO](state, {info}) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    }
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = {...info}
    } else {
      state.userInfo = null
    }
  },

  // 记录用户信息
  [RECORD_USERINFO](state, {info}) {
    state.userInfo = info;
    state.login = true
    setStore('user_id', info.user_id);
  },
}
