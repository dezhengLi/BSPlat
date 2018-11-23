import * as types from './mutations-type'
import { setUserStore } from 'src/common/js/cache'
// import { Login } from 'src/api/login'
// import { ERR_OK } from 'src/common/config/api.config'

export const login = ({ commit }, params) => {
  const { username, Privilege, MerchantType } = setUserStore(params)
  commit(types.SET_USER, username)
  commit(types.SET_PRIVILEGE, Privilege)
  commit(types.SET_MERCHANTYPE, MerchantType)
}

export const logout = ({ commit }) => {
  setUserStore()
  commit(types.SET_USER)
  commit(types.SET_PRIVILEGE)
  commit(types.SET_MERCHANTYPE)
}

export const toggleSidebarOpened = ({ commit, state }) => {
  const opened = state.sidebar.opened
  commit(types.SET_SIDEBAR_OPENED, !opened)
}
