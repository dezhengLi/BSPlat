<template>
  <div class="roleManage-container">
    <table-query :query-title="queryTitle" @handleQuery="getQueryData"/>
    <table-content :table-title="tableTitle" :table-data="tableData" @activeData="getActiveData" @dataReq="dataReq">
      <nav-panel slot="panel" :nav-data="navData" :current-active="isActiveData" @triggerPanel="triggerPanel"/>
    </table-content>
  </div>
</template>

<script>
  import requestMixin from 'common/mixins/requestMixin'
  import queryComponentMixin from 'common/mixins/queryComponentMixin'
  import commonPanelMixin from 'common/mixins/common-panel-method.js'
  import { getRechargeData, addRecharge, getKey} from 'api/recharge-manage'
  import {strEnc} from '../../common/config/crypto.config.js'
  let Base64 = require('js-base64').Base64
  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    data: function() {
       return {
         OriPlatSerial: undefined,
         getkey: undefined
       }
    },
    created() {
      this.historyQuery = {}
      this._initData()
      // FunKey是设置一个响应数据data里的一个属性，不同的响应属性值不同
      this.FunKey = 'AppInfoList'
      this.requestFunc = getRechargeData
      this.navData = [{
        label: '新增',
        noNeedData: true,
        fcName: 'add'
      }, {
        label: '详情',
        fcName: 'detail'
      }]
    },

    methods: {
     add() {
        const addFiled = ['BigMerchantID', 'StoreSerial', 'Amt', 'PayAuditPwd', 'Remark']
        // 审核密码时还需用到一个随机数和加密key，获取密钥
       getKey().then((res) => {
          this.getkey = Base64.decode(res.data.DesKey)
          this.OriPlatSerial = res.data.PlatSerial
       })

        // 全局引入$commonPopup
        this.$commonPopup({
          titleField: addFiled,
          // submitFc是公共弹框里设置的一个属性函数
        submitFc: (params, p) => {
            // OrderID是根据商户编号和时间生成的
           params = Object.assign({}, params, {OriPlatSerial: this.OriPlatSerial,
                                           OrderID: params.StoreSerial + new Date().getTime()})
            // 加密
           params.PayAuditPwd = strEnc(params.PayAuditPwd, this.getkey)
            this.popupHttpFc(params, p, addRecharge)
          }
        })
      },
      _initData() {
        this.queryTitle = ['BigMerchantID', 'StoreSerial', 'StartTime', 'EndTime', 'OrderID']
        this.tableTitle = ['ApplicationDate', 'OrderID', 'PlatSerial', 'Amount', 'StoreSerial', 'StoreName', 'BigMerchantID', 'BigMerchantName', 'BankAccountNo', 'BankAccountName', 'ApplicationCode', 'ExecuteType']
        this.detailFieldName = ['ApplicationDate', 'OrderID', 'Amount', 'StoreSerial', 'StoreName', 'BigMerchantID', 'MerchantName', 'BankAccountNo', 'BankAccountName', 'ApplicationCode', 'OperatorID', 'AuditStatus', 'ExecuteType', 'AuditTime', 'Auditor', 'AuditRemark']
      }
    }
  }
</script>
