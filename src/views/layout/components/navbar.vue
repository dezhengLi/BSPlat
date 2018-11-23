<template lang="pug">
  el-menu( class="c-navbar" mode="horizontal")
    ham-burger(:isActive="sidebar.opened" :toggleClick="toggleSidebarOpened" class="hamburger-container")
    el-dropdown(class="avatar-container" trigger="click")
      div(class="avatar-wrapper")  欢迎光临：{{username}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      el-dropdown-menu(slot="dropdown")
        el-dropdown-item(@click.native="home")  首页
        el-dropdown-item(@click.native="exit")  退出
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import HamBurger from 'components/ham-burger'

export default {
  components: {HamBurger},
  computed: {
    ...mapGetters(['sidebar', 'username'])
  },
  methods: {
    home () {
      this.$router.push('/')
    },
    exit () {
      this.logout()
      window.location.reload()
    },
    ...mapActions(['toggleSidebarOpened', 'logout'])
  }
}
</script>

<style lang="scss">
.c-navbar {
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
}
.hamburger-container {
  height: 50px;
  line-height: 58px;
  float: left;
  padding: 0 10px;
}
.avatar-container {
  cursor: pointer;
  height: 50px;
  position: absolute;
  right: 35px;
  .avatar-wrapper {
    font-weight: bold;
  }
}
</style>
