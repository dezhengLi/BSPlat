import qs from 'qs'
const USER_KEY = '__USERINFO__'
const SIDEBAR_KEY = '__SIDEBAR__'

export const setUserStore = (data) => {
  localStorage.setItem(USER_KEY, qs.stringify(data))
  return data
}

export const getUserStore = () => {
  const dvVal = {
    username: '',
    Privilege: '',
    MerChantType: ''
  }
  let data = localStorage.getItem(USER_KEY)
  data = data ? qs.parse(data) : dvVal
  return data
}

export const setSidebarState = (state) => {
  localStorage.setItem(SIDEBAR_KEY, state)
  return state
}

export const getSidebarState = () => {
  return localStorage.getItem(SIDEBAR_KEY)
}
