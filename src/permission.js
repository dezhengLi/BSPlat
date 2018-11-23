import Router from './router'
import store from './store'
import NProgress from 'nprogress'

const WhiteList = ['/login']
Router.beforeEach((to, from, next) => {
  NProgress.start()
  const inWhiteList = WhiteList.indexOf(to.path)
  const { username, privilege, merchantType } = store.getters
  if (username && privilege && merchantType) {
    if (inWhiteList === -1) {
      next()
    } else {
      next('/')
    }
  } else {
    if (inWhiteList === -1) {
      next('/login')
    } else {
      next()
    }
  }
})

Router.afterEach(() => {
  NProgress.done()
})
