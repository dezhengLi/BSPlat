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
  import {getchannelSettle} from 'api/channel-settle'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'DailySettleInfos'
      this.requestFunc = getchannelSettle
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
        this.queryTitle = ['CusBankID', 'StartTime', 'EndTime']
        //table-content 的显示
        this.tableTitle = ['CusBankName', 'Amount', 'Charge', 'NetWorth', 'PayType', 'TradeDate']
        //详情的输入框
        this.detailFieldName = ['CusBankID', 'CusBankName','Amount', 'Charge', 'NetWorth', 'PayType', 'TradeDate']
      }
    }
  }
</script>