<template lang="pug">
  el-form(ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left")
    h3(class="title") vue-element-admin
    el-form-item(prop="username")
      span(class="svg-container svg-container_login")
        svg-icon(icon-class="user")
      el-input(v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="username")
    el-form-item(prop="password")
      span(class="svg-container")
        svg-icon(icon-class="password")
      el-input(:type="pwdType" v-model="loginForm.password" name="password" auto-complete="on" placeholder="password" @keyup.enter.native="handleLogin")
      span(class="show-pwd" @click="showPwd")
        svg-icon(icon-class="eye")
    el-form-item
      el-button(:loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin") 登录
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      pwdType: 'password',
      loginForm: { username: '999999', password: '123456' },
      loginRules: {
        username: { required: true, trigger: 'blur', message: '请输入用户名' },
        password: { required: true, trigger: 'blur', message: '请输入密码' }
      }
    }
  },
  methods: {
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('handleLogin', this.loginForm)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$dark_gray: #889aa4;
$light_gray: #eee;
.login-form {
  position: absolute;
  left: 0;
  right: 0;
  width: 520px;
  padding: 35px 35px 15px 35px;
  margin: 120px auto;
}
.svg-container {
  padding: 6px 5px 6px 15px;
  color: $dark_gray;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
  &_login {
    font-size: 20px;
  }
}
.title {
  font-size: 26px;
  font-weight: 400;
  color: $light_gray;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}
.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: $dark_gray;
  cursor: pointer;
  user-select: none;
}
</style>
