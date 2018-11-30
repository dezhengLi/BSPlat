<template>
  <div class="roleManage-container">
    <table-query :query-title="queryTitle" @handleQuery="getQueryData" @exportQuery="exportparams"/>
    <table-content :table-title="tableTitle" :table-data="tableData" @activeData="getActiveData" @dataReq="dataReq">
      <nav-panel slot="panel" :nav-data="navData" :current-active="isActiveData" @triggerPanel="triggerPanel"/>
    </table-content>
  </div>
</template>

<script>
  import requestMixin from 'common/mixins/requestMixin'
  import queryComponentMixin from 'common/mixins/queryComponentMixin'
  import commonPanelMixin from 'common/mixins/common-panel-method.js'
  import {getchannelSettle,subchannelSettle} from 'api/channel-settle'
  import exportExcel from 'common/js/export.js'
  import { ERR_OK } from '../../common/config/api.config'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    data: function() {
        return {
          sumData: [],
          labelTitle: {},
          exportParams: {}
        }
    },
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'DailySettleInfos'
      this.requestFunc = getchannelSettle
      this.navData = [ {
            label: '订单详情',
            fcName: 'detail'
      }, {
            label: '导出表格',
            fcName: 'exporttable'
          }]
    },
    methods: {
      // 获取tablequery里的内容
          exportparams(data) {
              this.exportParams = data
        },
        async exporttable(){
               let labelTitle = {CusBankName:'渠道名称', Amount:'交易金额', Charge:'手续费', NetWorth:'划账金额', PayType:'支付类型', TradeDate:"交易日期"}
               // 表格名
              let D = new Date()
              const filename = D.getFullYear() + '' + (D.getMonth() + 1) + D.getDate() + D.getHours() + D.getMinutes() + D.getSeconds()
               let params = this.exportParams
               params.PageID = 1
               const PageSize = 60
               let PageID = 1
                // 第一页
                const {data, code, msg} = await subchannelSettle(params)
                if (code === ERR_OK) {
                          PageID = Math.ceil(data.RowCount / PageSize)
                          this.sumData = data.DailySettleInfos.reduce(function(prev, curr) {
                                        prev.push(curr)
                                        return prev
                                }, this.sumData)
                          // 其他页数的拼接
                          if (PageID >= 2) {
                                for (let i = 2; i <= PageID; i++) {
                                    const {data, code} = await subchannelSettle(params = Object.assign({}, params, {PageID: i}))

                                    if (code === ERR_OK) {
                                      this.sumData = data.DailySettleInfos.reduce(function(prev, curr) {
                                                      prev.push(curr)
                                                      return prev
                                              }, this.sumData)
                                      }
                                  }
                              }
                      exportExcel({filename, infosData: this.sumData, labelTitle})
                      this.sumData = []
                } else {
                     this._$queryMessage({code, msg})
                } 
        },
      _initData() {
        // table-query的输入框
        this.queryTitle = ['CusBankID', 'StartTime', 'EndTime']
        // table-content 的显示
        this.tableTitle = ['CusBankName', 'Amount', 'Charge', 'NetWorth', 'PayType', 'TradeDate']
        // 详情的输入框
        this.detailFieldName = ['CusBankID', 'CusBankName', 'Amount', 'Charge', 'NetWorth', 'PayType', 'TradeDate']
      }
    }
  }
</script>
