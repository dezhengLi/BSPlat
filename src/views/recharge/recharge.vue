<template>
  <div class="roleManage-container">
      <div class="password-box">
          <Rechargeinfo :title-field="queryTitle" @rechargeMoney="rechargeMoney"></Rechargeinfo>
      </div>
  </div>
</template>
<script>
  import requestMixin from 'common/mixins/requestMixin'
  import Rechargeinfo from './subrecharge.vue'
  import {rechargeWin} from 'api/recharge'
  // import { ERR_OK } from '../../common/config/api.config'
  export default {
      mixins: [requestMixin],
     components: { Rechargeinfo },
      created() {
      this.historyQuery = {}
      this._initData()
      
      
    },

    methods: {
      async rechargeMoney(params){
           params = Object.assign({}, params, {OrderID: this.$store.state.user + new Date().getTime()}) 
           const {data,code,msg}=await rechargeWin(params)
           this._$queryMessage({code, msg})
           //商户的跳转还没完成
       },
      _initData(){
        this.queryTitle = ['StoreSerial','rechargeAmt','ListBankID']
       
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
          margin-top:100px;
          margin-right:250px;
      }
  }

</style>
