<template>

            <el-form :model="updatepass" status-icon :rules="rules2" ref="updatepass" label-width="110px" class="demo-ruleForm">
            <el-form-item label="原代付审核密码" prop="oldpass">
                <el-input type="password" v-model="updatepass.oldpass" auto-complete="on"></el-input>
            </el-form-item>
            <el-form-item label="新代付审核密码" prop="pass">
                <el-input type="password" v-model="updatepass.pass" auto-complete="on"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="updatepass.checkPass" auto-complete="on"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('updatepass')">提交</el-button>
            </el-form-item>
            </el-form>

</template>
<script>

export default {
     data() {
      var validateoldPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.updatepass.checkPass !== '') {
            this.$refs.updatepass.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.updatepass.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        updatepass: {
          pass: '',
          checkPass: '',
          oldpass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' },
            { min: 6, max: 16, message: '代付审核密码由6—16个数字组成', trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' },
            { min: 6, max: 16, message: '代付审核密码由6—16个数字组成', trigger: 'blur' }
          ],
          oldpass: [
            { validator: validateoldPass, trigger: 'blur' },
            { min: 6, max: 16, message: '代付审核密码由6—16个数字组成', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(updatepass) {
            this.$refs[updatepass].validate((valid) => {
              console.log(valid)
              if (valid) {
                  this.$emit('Updatepass', this.updatepass)
            } else {
                console.log('error submit!!')
                return false
              }
            })
       }

    }
}
</script>

<style lang="scss" scoped>
@import "~common/style/variable.scss";
@import "~common/style/mixin.scss";
  .roleManage-container{
      display: flex;
      justify-content: center;
      align-content: center;
      .password-box{
        //   width: 500px;
        //   height:300px;
        //   border: 1px solid $border-color;
          margin-top:100px;
      }
  }

</style>
