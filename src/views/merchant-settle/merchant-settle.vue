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
  import {getmerchantSettle} from 'api/merchant-settle'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'DailySettleDetailInfos'
      this.requestFunc = getmerchantSettle
      this.navData = [ {
            label: '订单详情',
            fcName: 'detail'
      },{
            label: '导出表格',
            fcName: 'exporttable'
          }]
    },
    methods: {
    

      _initData() {
        //table-query的输入框
        this.queryTitle = ['MerchantID', 'CusBankID', 'StartTime', 'EndTime']
        //table-content 的显示
        this.tableTitle = ['MerchantID', 'MerchantName', 'MerchantType', 'CusBankName', 'Amount', 'Charge', 'NetWorth', 'PayType', 'TradeDate']
        //详情的输入框
        this.detailFieldName = ['MerchantID', 'MerchantName','MerchantType', 'CusBankID', 'CusBankName', 'Amount', 'Charge', 'NetWorth', 'PayType', 'TradeDate']
      }
    }
  }
</script>
