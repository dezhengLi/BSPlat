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
  import {getpassparammanage,alterPassparam} from 'api/passparam-manage'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'ParamInfoList'
      this.requestFunc = getpassparammanage
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
          const modifyFiled = [{title:"渠道信息",
              info:['CusBankID','CusBankName']
          }, {title:"收款设置",
              info:['IsAllowIn', 'InControlFlag','LessInAmount', 'MaxInAmount', 'MaxTotalInAmount','InMoneyFee']
          }, {title:"付款设置",
              info:['IsAllowOut', 'OutControlFlag','LessOutAmount', 'MaxOutAmount', 'MaxTotalOutAmount','OutMoneyFee','OutStartTime','OutEndTime']
          },{title:"其他设置",
              info:['WithdrawFee', 'RechargeFee','MaxWithdrawAmount','StartCheckTime','StartSettleTime','StartClearTime','CurrentTradeDate','NextTradeDate']
              //CurrentTradeDate当前工作日  文档使用TradeDate,所以显示不出时间,后期根据统一再做修改
          }]

        this.$commonPopup({
          titleField: modifyFiled,
          renderData: this.activeData,
          fieldConfig: {
            CusBankID: {
              readonly: true
            },
            CusBankName: {
              readonly: true
            }

          },
          submitFc: (params, p) => {
            params = Object.assign({}, this.activeData, params)
            this.popupHttpFc(params, p, alterPassparam)
          }
        })

      },
      _initData() {
        this.queryTitle = ['CusBankID']
        this.tableTitle = ['CusBankID', 'CusBankName', 'IsAllowIn', 'InControlFlag', 'LessInAmount', 'MaxInAmount', 'MaxTotalInAmount', 'IsAllowOut','OutControlFlag','LessOutAmount','MaxOutAmount','MaxTotalOutAmount','MaxWithdrawAmount']
        this.detailFieldName = [{title:"渠道信息",
              info:['CusBankID','CusBankName']
          }, {title:"收款设置",
              info:['IsAllowIn', 'InControlFlag','LessInAmount', 'MaxInAmount', 'MaxTotalInAmount','InMoneyFee']
          }, {title:"付款设置",
              info:['IsAllowOut', 'OutControlFlag','LessOutAmount', 'MaxOutAmount', 'MaxTotalOutAmount','OutMoneyFee','OutStartTime','OutEndTime']
          },{title:"其他设置",
              info:['WithdrawFee', 'RechargeFee','MaxWithdrawAmount','StartCheckTime','StartSettleTime','StartClearTime','CurrentTradeDate','NextTradeDate','CreateTime','UpdateTime']
              //CurrentTradeDate当前工作日  文档使用TradeDate,所以显示不出时间,后期根据统一再做修改
          }]
      }
    }
  }
</script>
