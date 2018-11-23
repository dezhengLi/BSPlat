<template lang="pug">
  div(class="login-container")
    login-model(:loading="loading" @handleLogin="loginByUsername")
</template>

<script>
import { mapActions } from 'vuex'
import LoginModel from './loginModel.vue'
import { LoginPlat } from 'src/api/login'
import { ERR_OK } from 'src/common/config/api.config'
import { MESSAGE_PARAMS } from 'src/common/config/element-ui.config'

export default {
  components: { LoginModel },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async loginByUsername (info) {
      this.loading = true
      const res = await LoginPlat(info)
      this.loading = false
      const messageParams = Object.assign({}, MESSAGE_PARAMS, {
        type: res.code === ERR_OK ? 'success' : 'error',
        message: res.msg
      })
      this.$message(messageParams)
      if (res.code === ERR_OK) {
        const { Privilege, MerchantType } = res.data
        this.login({ username: info.username, Privilege, MerchantType })
        this.$router.push('/')
      }
    },
    ...mapActions(['login'])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;

}
</style>
