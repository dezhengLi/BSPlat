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
  import {getWithdrawManage, addWithdraw, auditWithdraw} from 'api/withdraw-manage'
  import {getKey} from 'api/utils.js'
  import {strEnc} from '../../common/config/crypto.config.js'
  let Base64 = require('js-base64').Base64
  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'AppInfoList'
      this.requestFunc = getWithdrawManage
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
        const addFiled = [{title: '', info: ['MerchantID', 'StoreSerial']},
                         {title: '资金信息', info: ['CurrentBalance', 'UnsettledAmount', 'OutmoneyThreShold', 'FrozenAmount', 'TransitAmount', 'AvailableBalance']},
                         {title: '结算账户信息', info: ['WithdrawAccountNo', 'WithdrawAccountName', 'WithdrawBankID', 'WithdrawSubBranchBankName', 'WithdrawSubBranchBankID']},
                         {title: '', info: ['WithdrawalAmount', 'PayPWD', 'Remark']}]

               getKey().then((res) => {
                  this.getkey = Base64.decode(res.data.DesKey)
                  this.OriPlatSerial = res.data.PlatSerial
                })           
        
        this.$addPopup({
          titleField: addFiled,
          // submitFc是公共弹框里设置的一个属性函数,
          submitFc: (params, p) => {
                params = Object.assign({}, params, {OriPlatSerial: this.OriPlatSerial,OrderID: this.$store.state.user + new Date().getTime()})
                params.PayPWD=strEnc(params.PayPWD, this.getkey)
                this.popupHttpFc(params, p, addWithdraw)
          }
        })
      },
      // 审核
      audit() {
      this.$commonPopup({
        titleField: ['AuditStatuso', 'TransferMethod', 'BankSerial', 'Remark'],
        submitFc: (params, p) => {
          // this.activeData选定的全部内容
          this.activeData.AuditStatus = params.AuditStatuso
          params = Object.assign({}, this.activeData, params)
          // 弹框的数据处理
          this.popupHttpFc(params, p, auditWithdraw)
        }
      })
    },
      _initData() {
        // table-query的输入框
        this.queryTitle = ['MerchantID', 'StoreSerial', 'StartTime', 'EndTime', 'OrderID']
        // table-content 的显示
        this.tableTitle = ['ApplicationDate', 'OrderID', 'PlatSerial', 'Amount', 'StoreSerial', 'StoreName', 'BankAccountNo', 'BankAccountName', 'ApplicationCode', 'AuditStatus', 'ExecuteType']
        // 详情的输入框
        this.detailFieldName = ['ApplicationDate', 'OrderID', 'PlatSerial', 'Amount', 'StoreSerial', 'StoreName', 'BigMerchantID', 'BigMerchantName', 'BankAccountNo', 'BankAccountName', 'ApplicationCode', 'OperatorCode', 'AuditStatus', 'ExecuteType', 'ConfirmDate', 'ConfirmOperatorCode', 'AuditRemark']
      }
    }
  }
</script>
