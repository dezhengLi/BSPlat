<template>
  <div class="roleManage-container">
    <table-query :query-title="queryTitle" @handleQuery="getQueryData" />
    <table-content :table-title="tableTitle" :table-data="tableData" @activeData="getActiveData" @dataReq="dataReq">
      <nav-panel slot="panel" :nav-data="navData" :current-active="isActiveData" @triggerPanel="triggerPanel"/>
    </table-content>
  </div>
</template>

<script>

import requestMixin from 'common/mixins/requestMixin'
import queryComponentMixin from 'common/mixins/queryComponentMixin'
import commonPanelMixin from 'common/mixins/common-panel-method.js'
import {getKey} from 'api/utils.js'
import {strEnc} from '../../common/config/crypto.config.js'
let Base64 = require('js-base64').Base64
import {
  getMerchantManage,
  registerManage,
  auditMerchant,
  sendOpenEmail,
  cancelMerchant,
  resetPwd,
  modifyManage,
  updatePWMerchant
} from 'api/merchant-manage'

export default {
  mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
  created() {
    this.historyQuery = {}
    this._initData()
    this.FunKey = 'MerchantInfoArray'
    this.requestFunc = getMerchantManage
    this.detailFieldName = [
      {
        title:"基本信息",
        info:[
              'MerchantID',
              'MerchantType',
              'MerchantStatus',
              'MerchantName',
              'MerchantShortName',
              'IndustryType',
              'ServiceTelNo',
              'ManagerName',
              'ManagerPhoneNo',
              'Email',
              'WebSite',
              'Province',
              'City',
              'Address',
              'CardType',
              'CardNum',
              'ArrivalWay',
              'BankAccountNo',
              'BankAccountName',
              'BankID',
              'StaffName',
              'Creator',
              'CreateTime',
              'UpdateTime',
              'AgencyID',
              'AgencyName'
              ]
      },
      {title:"状态设置",
       info:['AuditStatus', 'Auditor','AuditTime', 'AuditRemark', 'ActiveStatus','Activator','ActiveTime','ActiveRemark']
          }
    ]
    this.navData = [
      {
        label: '新增',
        noNeedData: true,
        fcName: 'add'
      },
      {
        label: '编辑',
        fcName: 'modify'
      },
      {
        label: '审核',
        fcName: 'audit'
      },
      {
        label: '激活',
        fcName: 'active'
      },
      {
        label: '修改支付密码',
        fcName: 'modifyPayPassword'
      },
      {
        label: '重置支付密码',
        fcName: 'resetPayPassword'
      },
      {
        label: '注销',
        fcName: 'cancel'
      },
      {
        label: '发送开户邮件',
        fcName: 'sendEmail'
      },
      {
        label: '详情',
        fcName: 'detail'
      }
    ]
  },
  methods: {
    add() {
      const addFiled = [
        'MerchantName',
        'MerchantShortName',
        'MerchantType',
        'AgencyID',
        'CardType',
        'CardNum',
        'IndustryType',
        'ServiceTelNo',
        'ManagerName',
        'ManagerPhoneNo',
        'Email',
        'WebSite',
        'Province',
        'City',
        'Address',
        'ArrivalWay',
        'BankAccountNo',
        'BankAccountName',
        'BankID',
        'StaffName'
      ]
      this.$commonPopup({
        titleField: addFiled,
        submitFc: (params, p) => {
          this.popupHttpFc(params, p, registerManage)
        }
      })
    },
    modify() {
      const modifyFiled = [{
        title:"基本信息",
        info:[
              'MerchantID',
              'MerchantType',
              'MerchantStatus',
              'MerchantName',
              'MerchantShortName',
              'IndustryType',
              'ServiceTelNo',
              'ManagerName',
              'ManagerPhoneNo',
              'Email',
              'WebSite',
              'Province',
              'City',
              'Address',
              'CardType',
              'CardNum',
              'ArrivalWay',
              'BankAccountNo',
              'BankAccountName',
              'BankID',
              'StaffName',
              'AgencyID',
              'AgencyName'
              ]
      },
      {title:"状态设置",
       info:['AuditStatus', 'Auditor','AuditTime', 'AuditRemark', 'ActiveStatus','Activator','ActiveTime','ActiveRemark']
          }
        
      ]
      this.$commonPopup({
        titleField: modifyFiled,
        renderData: this.activeData,
         fieldConfig: {
            MerchantID: {
              readonly: true
            },
            MerchantType: {
              readonly: true
            },
            MerchantStatus: {
              readonly: true
            },
            ArrivalWay: {
              readonly: true
            },
            AgencyID: {
              readonly: true
            },
            AgencyName: {
              readonly: true
            }, 
            AuditStatus: {
              readonly: true
            }, 
            Auditor: {
              readonly: true
            },
             AuditTime: {
              readonly: true
            },
             AuditRemark: {
              readonly: true
            },
             ActiveStatus: {
              readonly: true
            },
            Activator: {
              readonly: true
            },
            ActiveRemark: {
              readonly: true
            },
            ActiveTime: {
              readonly: true
            }

          },
        submitFc: (params, p) => {
          params = Object.assign({}, this.activeData, params)
          this.popupHttpFc(params, p, modifyManage)
        }
      })
    },
    audit() {
      this.$commonPopup({
        titleField: ['AuditStatus', 'AuditRemark'],
        submitFc: (params, p) => {
          params = Object.assign({}, this.activeData, params)
          this.popupHttpFc(params, p, auditMerchant)
        }
      })
    },
    active() {
      this.$commonPopup({
        titleField: ['ActiveStatus', 'ActiveRemark'],
        submitFc: (params, p) => {
          params = Object.assign({}, this.activeData, params)
          this.popupHttpFc(params, p, auditMerchant)
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
          
          params = Object.assign({}, params, {OriPlatSerial: this.OriPlatSerial},this.activeData)
          params.OldLoginPwd=strEnc(params.OldLoginPwd, this.getkey)
          params.NewLoginPwd=strEnc(params.NewLoginPwd, this.getkey)
          params.ConfirmPwd=strEnc(params.ConfirmPwd, this.getkey)
          
          this.popupHttpFc(params, p,updatePWMerchant)
        }
      })
    },
    resetPayPassword() {
      this.$confirm('支付密码将被重置，请确认是否重置', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(async () => {
        this.setGlobalLoading(true)
        const { code, msg } = await resetPwd(this.activeData)
        this._$queryMessage({ code, msg })
        this.setGlobalLoading(false)
      })
    },
    cancel() {
      this.$confirm('该商户下的所有子商户将被注销，请确认是否要注销！', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          this.setGlobalLoading(true)
          const { code, msg } = await cancelMerchant(this.activeData)
          this.setGlobalLoading(false)
          this._$queryMessage({ code, msg })
        })
        .catch(() => {})
    },
    async sendEmail() {
      this.setGlobalLoading(true)
      const { code, msg } = await sendOpenEmail(this.activeData)
      this._$queryMessage({ code, msg })
      this.setGlobalLoading(false)
    },
    _initData() {
      this.queryTitle = [
        'MerchantID',
        'MerchantName',
        'MerchantType',
        'AgencyID',
        'AuditStatus',
        'ActiveStatus',
        'ArrivalWay'
      ]
      this.tableTitle = [
        'MerchantID',
        'MerchantName',
        'MerchantType',
        'IndustryType',
        'ServiceTelNo',
        'ManagerPhoneNo',
        'Email',
        'City',
        'AgencyName',
        'ActiveStatus',
        'MerchantStatus'
      ]
    }
  }
}
</script>
