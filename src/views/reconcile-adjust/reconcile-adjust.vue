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
  import {getreconcileAdjust,reconcileAdjust} from 'api/reconcile-adjust'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'WrongAccountArrayInfos'
      this.requestFunc = getreconcileAdjust
      this.navData = [ {
            label: '调整',
            fcName: 'adjust'
      },{
            label: '订单详情',
            fcName: 'detail'
      },{
            label: '导出表格',
            fcName: 'exporttable'
          }]
    },
    methods: {
         async  adjust(){
             this.setGlobalLoading(true)   
             const { code, msg } = await reconcileAdjust(this.activeData)
            this.setGlobalLoading(false)
            this._$queryMessage({ code, msg })
           },

      _initData() {
        //table-query的输入框
        this.queryTitle = ['CusBankID', 'StartTime', 'EndTime']
        //table-content 的显示
        this.tableTitle = ['OrderID', 'PlatSerial', 'ThirdSerial', 'PlatOrderID', 'MerchantID', 'CusBankName','PayType','ExecuteType','BankAmount','PlatAmount','ErrType','AdjustStatus','CurrCode','TradeDate']
        //详情的输入框
        this.detailFieldName = ['OrderID', 'PlatSerial', 'ThirdSerial', 'PlatOrderID', 'MerchantID','CusBankID', 'CusBankName','PayType','ExecuteType','BankAmount','PlatAmount','ErrType','AdjustStatus','CurrCode','TradeDate']
      }
    }
  }
</script>