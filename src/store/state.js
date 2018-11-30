import { getUserStore, getSidebarState } from 'src/common/js/cache'

const { username, MerchantType, Privilege } = getUserStore()

const state = {
  user: username,
  merchantType: MerchantType,
  privilege: Privilege,
  sidebar: {
    opened: !!+getSidebarState()
  },
  menu: [],
  globalLoading: false

}

export default state
