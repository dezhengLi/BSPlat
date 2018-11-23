<template lang="pug">
  div(class="c-app--wrapper")
    sidebar(class="c-app--sidebar")
    div(class="c-app--container")
      navbar
      app-main
</template>

<script>
  import {default as router, routerMap} from 'src/router'
import { Sidebar, Navbar, AppMain } from './components'
import {mapGetters, mapMutations} from 'vuex'
import privileges from 'common/config/privilege.config'
import {privilegeFilter} from 'common/js/utils'
import menu from 'common/config/menu.config'

export default {
  name: 'layout',
  components: {Sidebar, Navbar, AppMain},
  computed: {
    ...mapGetters(['privilege'])
  },
  watch: {
    privilege: {
      handler: function(newVal) {
        // 权限表，路由，菜单目录 权限筛选
        if (newVal) {
          privilegeFilter(privileges, newVal)
          privilegeFilter(menu, newVal)
          this.setMenu(menu)
          // privilegeFilter(routerMap, newVal)
          // router.addRoutes(routerMap)
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations({setMenu: 'SET_MENU'})
  }
}
</script>

<style lang="scss">
@import "~common/style/variable";
  .c-app--wrapper {
    position: relative;
    height: 100%;
  }
  .c-app--container {
    width: 0;
  }
  .drawer-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    height: 100%;
    width: 100%;
    background: $color-background-d;
  }
</style>
