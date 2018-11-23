import Vue from 'vue'
import SvgIcon from 'components/svg-icon/svg-icon.vue'

// register globally
Vue.use(SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
