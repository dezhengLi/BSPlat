<template>
  <div class="roleManage-container">
      <div class="password-box">
          <Updatepass @Updatepass="Updatapass"></Updatepass>
      </div>
  </div>
</template>
<script>
  import requestMixin from 'common/mixins/requestMixin'
  import Updatepass from './subpay-password.vue'
  import {updatePassWD, getKey} from 'api/pay-password.js'

  import {strEnc} from '../../common/config/crypto.config.js'
  let Base64 = require('js-base64').Base64
  export default {
      mixins: [requestMixin],
     components: { Updatepass },

    methods: {

      Updatapass(info) {
            getKey().then((res) => {
            this.getkey = Base64.decode(res.data.DesKey)
            this.OriPlatSerial = res.data.PlatSerial
            info.checkPass = strEnc(info.checkPass, this.getkey)
            info.pass = strEnc(info.pass, this.getkey)
            info.oldpass = strEnc(info.oldpass, this.getkey)

            info = Object.assign({}, info, {OriPlatSerial: this.OriPlatSerial })
            console.log(info)
           }).then(async() => {
                         const {code, data, msg} = await updatePassWD(info)
                         this._$queryMessage({code, msg})
           }

           )
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
