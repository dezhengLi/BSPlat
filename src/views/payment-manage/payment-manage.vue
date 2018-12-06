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
  import {getpaymentmanage, addpayment, getKey, auditpayment} from 'api/payment-manage'
  import {strEnc} from '../../common/config/crypto.config.js'
  let Base64 = require('js-base64').Base64

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'AppInfoList'
      this.requestFunc = getpaymentmanage
      this.navData = [{
        label: '新增',
        noNeedData: true,
        fcName: 'add'
      }, {
        label: '审核',
        fcName: 'audit'
      }, {
        label: '详情',
        fcName: 'detail'
      }]
    },
    methods: {
      // 新增
      add() {
        const addFiled = ['BankAccountName', 'BankID', 'BankAccountNo', 'Province', 'AccountProp', 'City', 'WithdrawTel', 'WithdrawBranchBankName', 'CardType', 'SubBranchBankName', 'CardNum', 'SubBranchBankID', 'MerchantID', 'AvailableBalance', 'Amt', 'PayPWD', 'Summary']
        // 全局引入$commonPopup
          getKey().then((res) => {
          this.getkey = Base64.decode(res.data.DesKey)
          this.OriPlatSerial = res.data.PlatSerial
       })
        this.$commonPopup({
          titleField: addFiled,
          // submitFc是公共弹框里设置的一个属性函数,
          submitFc: (params, p) => {
            params = Object.assign({}, params, {OriPlatSerial: this.OriPlatSerial,
                                           OrderID: this.$store.state.user + new Date().getTime(),
                                           MachineIP: returnCitySN.cip,
                                           MerchantID: this.$store.state.user})
                                                       // 加密
           params.PayPWD = strEnc(params.PayPWD, this.getkey)
            this.popupHttpFc(params, p, addpayment)
          }
        })
      },
      // 审核
      audit() {
       // 审核密码时还需用到一个随机数和加密key，获取密钥
       getKey().then((res) => {
          this.getkey = Base64.decode(res.data.DesKey)
          this.OriPlatSerial = res.data.PlatSerial
       })
      this.$commonPopup({
        titleField: ['AuditStatus', 'PayAuditPwd', 'Remark'],
        submitFc: (params, p) => {
          // this.activeData选定的全部内容

           params = Object.assign({}, {OriPlatSerial: this.OriPlatSerial}, this.activeData, params)
            // 加密
           params.PayAuditPwd = strEnc(params.PayAuditPwd, this.getkey)
          // 弹框的数据处理
          this.popupHttpFc(params, p, auditpayment)
        }
      })
    },
      _initData() {
        this.queryTitle = [ 'StartTime', 'EndTime', 'AuditStatus', 'StoreSerial', 'OrderID']
        this.tableTitle = ['ApplicationDate', 'OrderID', 'PlatSerial', 'Amount', 'StoreSerial', 'StoreName', 'BankAccountNo', 'BankAccountName', 'ApplicationCode', 'AuditStatus', 'ExecuteType']
        this.detailFieldName = ['ApplicationDate', 'OrderID', 'PlatSerial', 'Amount', 'StoreSerial', 'StoreName', 'BigMerchantID', 'BigMerchantName', 'BankAccountNo', 'BankAccountName', 'BankID', 'ApplicationCode', 'OperatorCode', 'AuditStatus', 'ExecuteType', 'ConfirmDate', 'ConfirmOperatorCode', 'AuditRemark']
      }
    }
  }
</script>
