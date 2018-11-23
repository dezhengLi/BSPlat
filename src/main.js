import Vue from 'vue'
import ElementUI from 'element-ui'
import 'common/style/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'
import 'common/icons'
import './permission'
import SearchPopup from 'components/search-popup'
import CommonPopup from 'components/common-popup'

import AddPopup from 'components/add-popups'

Vue.use(ElementUI)
Vue.prototype.$searchPopup = SearchPopup
Vue.prototype.$commonPopup = CommonPopup

Vue.prototype.$addPopup = AddPopup

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
