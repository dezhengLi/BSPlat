import * as types from './mutations-type'
import { setSidebarState } from 'common/js/cache'
import { Loading } from 'element-ui'

const loadingConfig = {
  fullscreen: true,
  background: 'rgba(0, 0, 0, .3)'
}

export default {
  [types.SET_USER] (state, user) {
    state.user = user
  },
  [types.SET_MERCHANTYPE] (state, type) {
    state.merchantType = type
  },
  [types.SET_PRIVILEGE] (state, privilege) {
    state.privilege = privilege
  },
  [types.SET_SIDEBAR_OPENED] (state, status) {
    state.sidebar.opened = !!setSidebarState(+status)
  },
  [types.SET_GLOBAL_LOADING] (state, flag) {
    if (flag) {
      state.globalLoading = Loading.service(loadingConfig)
    } else {
      state.globalLoading.close()
      state.globalLoading = null
    }
  },
  [types.SET_MENU] (state, menu) {
    state.menu = menu
  }

}
