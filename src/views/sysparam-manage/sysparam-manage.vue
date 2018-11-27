<template>
  <div class="roleManage-container">
    <!-- <table-query :query-title="queryTitle" @handleQuery="getQueryData"/> -->
    <table-content :table-title="tableTitle" :table-data="tableData" @activeData="getActiveData" @dataReq="dataReq">
      <nav-panel slot="panel" :nav-data="navData" :current-active="isActiveData" @triggerPanel="triggerPanel"/>
    </table-content>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import requestMixin from 'common/mixins/requestMixin'
  import queryComponentMixin from 'common/mixins/queryComponentMixin'
  import commonPanelMixin from 'common/mixins/common-panel-method.js'
  import {getSysparamManageInfo,alterSysparamManage} from 'api/sysparam-manage'
  import { ERR_OK } from '../../common/config/api.config'
  import * as types from 'src/store/mutations-type'
  import { isOK } from 'api/utils'
  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    data: function() {
        return {
           tableData: {
              count: 0,
            requestData: []
           }
        }
    },
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'ParamInfoList'
      this.navData = [{
        label: '修改',
        fcName: 'alter'
      }, {
        label: '详情',
        fcName: 'detail'
      }]
      this.getSysparamManage()
    },
    methods: {
      // 查询数据
       isOK: isOK,
      async  getSysparamManage() {
            this.setGlobalLoading(true)
            const {code, data, msg} = await getSysparamManageInfo()
 
            this.setGlobalLoading(false)
            this._$queryMessage({code, msg})
            if (isOK(code)) {
                  this.tableData.requestData = data[this.FunKey]
                  this.tableData.count = data['RowCount'] || data[this.FunKey].length
                }
   },
      // 修改
      alter() {
        const modifyFiled=[
            {title:"收款设置",
              info:['IsAllowIn', 'InControlFlag','LessInAmount', 'MaxInAmount', 'MaxTotalInAmount','InStartTime','InMoneyFee','InEndTime']
          }, {title:"付款设置",
              info:['IsAllowOut', 'OutControlFlag','LessOutAmount', 'MaxOutAmount', 'MaxTotalOutAmount','InStartTime','InEndTime','OutMoneyFee']
          },{title:"其他",
              info:['WithdrawFee', 'RechargeFee','MaxWithdrawAmount','StartCheckTime','StartSettleTime','StartClearTime','CurrentTradeDate','NextTradeDate']
              //CurrentTradeDate当前工作日  文档使用TradeDate,所以显示不出时间,后期根据统一再做修改
          }]
            this.$commonPopup({
          titleField: modifyFiled,
          renderData: this.activeData,
         
          submitFc: (params, p) => {
            params = Object.assign({}, this.activeData, params)
            this.popupHttpFc(params, p, alterSysparamManage)
          }
        })

      },

      _initData() {
        // this.queryTitle = ['StoreSerial']
        this.tableTitle = ['IsAllowIn', 'InControlFlag', 'LessInAmount', 'MaxInAmount', 'MaxTotalInAmount', 'IsAllowOut', 'OutControlFlag', 'LessOutAmount', 'MaxOutAmount', 'MaxTotalOutAmount', 'OutMoneyFee', 'WithdrawFee', 'InMoneyFee', 'RechargeFee']
        this.detailFieldName = [ 
          {title:"收款设置",
           info:['IsAllowIn', 'InControlFlag','LessInAmount', 'MaxInAmount', 'MaxTotalInAmount','InStartTime','InEndTime','InMoneyFee']
          }, {title:"付款设置",
              info:['IsAllowOut', 'OutControlFlag','LessOutAmount', 'MaxOutAmount', 'MaxTotalOutAmount','InStartTime','InEndTime','OutMoneyFee']
          },{title:"其他",
              info:['WithdrawFee', 'RechargeFee','MaxWithdrawAmount','StartCheckTime','StartSettleTime','StartClearTime','CurrentTradeDate','NextTradeDate','CreateTime','UpdateTime']
              //CurrentTradeDate当前工作日  文档使用TradeDate,所以显示不出时间,后期根据统一再做修改
          }]
      },
    ...mapMutations({
        setGlobalLoading: types.SET_GLOBAL_LOADING
      })
    }
  }
</script>
