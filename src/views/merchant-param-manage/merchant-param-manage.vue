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
  import {getParamManage,alterParamManage} from 'api/merchant-param-manage'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'ParamInfoList'
      this.requestFunc = getParamManage
      this.navData = [{
        label: '修改',
        fcName: 'alter'
      }, {
        label: '详情',
        fcName: 'detail'
      }]
    },
    methods: {
      // 修改  
      alter() {
          // const modifyFiled = ['MerchantID', 'PayType','StoreSerial', 'StoreName', 'BigMerchantID']
          const modifyFiled=[
            {title:"商户信息",
              info:['StoreSerial', 'BigMerchantID']
          }, {title:"收款设置",
              info:['IsAllowIn', 'InControlFlag','LessInAmount', 'MaxInAmount', 'MaxTotalInAmount']
          }, {title:"付款设置",
              info:['IsAllowOut', 'OutControlFlag','LessOutAmount', 'MaxOutAmount', 'MaxTotalOutAmount','FrozenAmount','OutStartTime','OutEndTime','IsPaymentAudit']
          }, {title:"银行账户信息",
              info:['WithdrawAccountNo', 'WithdrawAccountName','WithdrawBankID','WithdrawBranchBankName','WithdrawSubBranchBankName','WithdrawSubBranchBankID','Province','City','WithdrawAccProp','WithdrawAccType','WithdrawTel','WithdrawAccCardNum','WithdrawAccCardType']
          },{title:"其他",
              info:['WithdrawFee', 'RechargeFee','MaxWithdrawAmount','CurrentTradeDate','NotifyUrl','NextTradeDate','ReturnUrl']
              //CurrentTradeDate当前工作日  文档使用TradeDate,所以显示不出时间,后期根据统一再做修改
          }]
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
             CurrentTradeDate: {
              readonly: true
            },
              NextTradeDate: {
              readonly: true
            }

          },
          submitFc: (params, p) => {
            params = Object.assign({}, this.activeData, params)
            this.popupHttpFc(params, p, alterParamManage)
          }
        })

      },

      _initData() {
        this.queryTitle = ['StoreSerial']
        this.tableTitle = ['StoreSerial', 'StoreName', 'BigMerchantID', 'BigMerchantName', 'IsAllowIn', 'InControlFlag', 'LessInAmount', 'MaxInAmount', 'MaxTotalInAmount', 'IsAllowOut', 'OutControlFlag', 'LessOutAmount', 'MaxOutAmount', 'MaxTotalOutAmount']
        this.detailFieldName = [ {title:"商户信息",
              info:['StoreSerial','StoreName', 'BigMerchantID','BigMerchantName']
          }, {title:"收款设置",
              info:['IsAllowIn', 'InControlFlag','LessInAmount', 'MaxInAmount', 'MaxTotalInAmount']
          }, {title:"付款设置",
              info:['IsAllowOut', 'OutControlFlag','LessOutAmount', 'MaxOutAmount', 'MaxTotalOutAmount','FrozenAmount','OutStartTime','OutEndTime','OutMoneyThreshold','IsPaymentAudit']
          }, {title:"银行账户信息",
              info:['WithdrawAccountNo', 'WithdrawAccountName','WithdrawBankID','WithdrawBranchBankName','WithdrawSubBranchBankName','WithdrawSubBranchBankID','Province','City','WithdrawAccProp','WithdrawAccType','WithdrawTel','WithdrawAccCardNum','WithdrawAccCardType']
          },{title:"其他",
              info:['WithdrawFee', 'RechargeFee','MaxWithdrawAmount','OperatorID','CurrentTradeDate','NextTradeDate','CreateTime','UpdateTime','NotifyUrl','ReturnUrl']
              //CurrentTradeDate当前工作日  文档使用TradeDate,所以显示不出时间,后期根据统一再做修改
          }]
      }
    }
  }
</script>
