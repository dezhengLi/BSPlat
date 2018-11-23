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
  import {getStoreManage, updatePWMerchant, registerStore, modifyStore, resetPwd, auditStore, activeStore, sendOpenEmail} from 'api/store-manage'
  import {getKey} from 'api/utils.js'
  import {strEnc} from '../../common/config/crypto.config.js'
  let Base64 = require('js-base64').Base64
  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      this.FunKey = 'StoresArray'
      this.requestFunc = getStoreManage
      this.navData = [{
        label: '新增',
        noNeedData: true,
        fcName: 'add'
      }, {
        label: '编辑',
        fcName: 'modify'
      }, {
        label: '审核',
        fcName: 'audit'
      }, {
        label: '激活',
        fcName: 'active'
      }, {
        label: '修改支付密码',
        fcName: 'modifyPayPassword'
      }, {
        label: '重置支付密码',
        fcName: 'resetPayPassword'
      }, {
        label: '发送开户邮件',
        fcName: 'sendEmail'
      }, {
        label: '详情',
        fcName: 'detail'
      }]
    },
    methods: {
      add() {
        const addFiled = ['StoreSerial', 'BigMerchantID', 'StoreName', 'StoreShortName', 'StoreType', 'DepartName', 'StaffName']
        this.$commonPopup({
          titleField: addFiled,
          submitFc: (params, p) => {
            this.popupHttpFc(params, p, registerStore)
          }
        })
      },
      modify() {
        const modifyFiled = ['StoreSerial', 'BigMerchantID', 'StoreName', 'StoreShortName', 'StoreType', 'DepartName', 'StaffName', 'ArrivalWay', 'AuditStatus', 'AuditRemark', 'ActiveStatus', 'ActiveRemark']
        this.$commonPopup({
          titleField: modifyFiled,
          renderData: this.activeData,
          fieldConfig: {
            StoreSerial: {
              readonly: true
            },
            BigMerchantID: {
              readonly: true
            },
            ArrivalWay: {
              readonly: true
            },
            ActiveRemark: {
              readonly: true
            },
            ActiveStatus: {
              readonly: true
            },
            AuditStatus: {
              readonly: true
            },
            AuditRemark: {
              readonly: true
            }
          },
          submitFc: (params, p) => {
            params = Object.assign({}, this.activeData, params)
            this.popupHttpFc(params, p, modifyStore)
          }
        })
      },
      audit() {
        this.$commonPopup({
          titleField: ['AuditStatus', 'AuditRemark'],
          submitFc: (params, p) => {
            params = Object.assign({}, this.activeData, params)
            this.popupHttpFc(params, p, auditStore)
          }
        })
      },
      active() {
        this.$commonPopup({
          titleField: ['ActiveStatus', 'ActiveRemark'],
          submitFc: (params, p) => {
            params = Object.assign({}, this.activeData, params)
            this.popupHttpFc(params, p, activeStore)
          }
        })
      },
      modifyPayPassword() {
        getKey().then((res) => {
          this.getkey = Base64.decode(res.data.DesKey)
          this.OriPlatSerial = res.data.PlatSerial
        })
        this.$commonPopup({
          titleField: ['OldLoginPwd', 'NewLoginPwd', 'ConfirmPwd'],
          submitFc: (params, p) => {
              params = Object.assign({}, params, {OriPlatSerial: this.OriPlatSerial}, this.activeData)
              params.OldLoginPwd = strEnc(params.OldLoginPwd, this.getkey)
              params.NewLoginPwd = strEnc(params.NewLoginPwd, this.getkey)
              params.ConfirmPwd = strEnc(params.ConfirmPwd, this.getkey)

              this.popupHttpFc(params, p, updatePWMerchant)
          }
        })
      },
      resetPayPassword() {
        this.$confirm('支付密码将被重置，请确认是否重置', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(async () => {
          this.setGlobalLoading(true)
          const {code, msg} = await resetPwd(this.activeData)
          this._$queryMessage({code, msg})
          this.setGlobalLoading(false)
        })
      },
      async sendEmail() {
        this.setGlobalLoading(true)
        console.log(this.activeData)
        const {code, msg} = await sendOpenEmail(this.activeData)
        // this._$queryMessage({code, msg})
        this.setGlobalLoading(false)
        this._$queryMessage({code, msg})
      },
      _initData() {
        this.queryTitle = ['BigMerchantID', 'StoreSerial', 'StoreName', 'AuditStatus', 'ActiveStatus', 'ArrivalWay']
        this.tableTitle = ['MerchantName', 'StoreSerial', 'StoreName', 'StoreType', 'AuditStatus', 'ActiveStatus', 'DepartName', 'MerchantStatus']
        this.detailFieldName = ['StoreSerial', 'BigMerchantID', 'StoreName', 'MerchantName', 'StoreShortName', 'StoreType', 'DepartName', 'StaffName', 'ArrivalWay', 'Creator', 'CreateTime', 'MerchantStatus', 'AuditStatus', 'Auditor', 'AuditTime', 'AuditRemark', 'ActiveStatus', 'Activator', 'ActiveTime', 'ActiveRemark']
      }
    }
  }
</script>
