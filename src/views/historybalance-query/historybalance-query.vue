<template>
  <div class="roleManage-container">
    <table-query :query-title="queryTitle" @handleQuery="getQueryData"/>
    <table-content :table-title="tableTitle" :table-data="tableData" @activeData="getActiveData" @dataReq="dataReq">
      <nav-panel slot="panel" :nav-data="navData" :current-active="isActiveData" @triggerPanel="triggerPanel"/>
      <sumh-panel slot="sum" :sum-data="this.tableData.otherData[0]" ></sumh-panel>
    </table-content>
  </div>
</template>

<script>
  import requestMixin from 'common/mixins/requestMixin'
  import queryComponentMixin from 'common/mixins/queryComponentMixin'
  import commonPanelMixin from 'common/mixins/common-panel-method.js'
  import {gethistorybalance} from 'api/historybalance-query'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
       data:function(){
        return{
          sumData:[]
        }
    },
    created() {
      this.historyQuery = {}
      this._initData()  
      // 设置一个响应数据data里的一个属性
      this.FunKey = ['HisBalanceArray','SumHisBalanceArray']
      this.requestFunc = gethistorybalance
      this.navData = [
          {
            label: '导出表格',
            fcName: 'exporttable'
          }
       ]
      // this.sumData=[
      //   {SumBalance:"127,007,724.14",
      //    SumCommissionInCome:"0.00",
      //    SumCurrentBalance:"127,007,724.14"
      //   }
      // ]

    },
    methods: {
        
       
 

      _initData() {
        this.queryTitle = ['StoreSerial','StartTime', 'EndTime']
        this.tableTitle = ['MerchantID', 'MerchantName', 'MerchantType','TradeDate','Balance', 'InAmount','RechargeAmount','OutAmount','WithdrawAmount','CurrentBalance','CommissionInCome','UpdateTime']
        
      }
    }
  }
</script>
