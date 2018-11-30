<template>
  <div class="roleManage-container">
    <table-query :query-title="queryTitle" @handleQuery="getQueryData" @exportQuery="exportparams"/>
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
  import {gethistorybalance, subhistorybalance} from 'api/historybalance-query'
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
      this.FunKey = ['HisBalanceArray', 'SumHisBalanceArray']
      this.requestFunc = gethistorybalance
      this.navData = [
          {
            label: '导出表格',
            fcName: 'exporttable'
          }
       ]
    },
    methods: {
      // 获取tablequery里的内容
         exportparams(data) {
             this.exportParams = data
         },

        async  exporttable() {
              let labelTitle = {MerchantID: '商户编号',
                                MerchantName: '商户名称',
                                MerchantType: '商户类型',
                                TradeDate: '日期',
                                Balance: '期初余额',
                                InAmount: '支付入账金额',
                                RechargeAmount: '充值入账金额',
                                OutAmount: '代付出账金额',
                                WithdrawAmount: '提现出账金额',
                                CurrentBalance: '期末余额',
                                CommissionInCome: '手续费收益',
                                UpdateTime: '更新时间'}
              // 表格名
              let D = new Date()
              const filename = D.getFullYear() + '' + (D.getMonth() + 1) + D.getDate() + D.getHours() + D.getMinutes() + D.getSeconds()
               let params = this.exportParams
               params.PageID = 1
               const PageSize = 60
               let PageID = 1
                // 第一页
                const {data, code, msg} = await subhistorybalance(params)
                if (code === ERR_OK) {
                          PageID = Math.ceil(data.RowCount / PageSize)
                          this.sumData = data.HisBalanceArray.reduce(function(prev, curr) {
                                        prev.push(curr)
                                        return prev
                                }, this.sumData)
                          // 其他页数的拼接
                          if (PageID >= 2) {
                                for (let i = 2; i <= PageID; i++) {
                                    const {data, code} = await subhistorybalance(params = Object.assign({}, params, {PageID: i}))

                                    if (code === ERR_OK) {
                                      this.sumData = data.HisBalanceArray.reduce(function(prev, curr) {
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
        this.queryTitle = ['StoreSerial', 'StartTime', 'EndTime']
        this.tableTitle = ['MerchantID', 'MerchantName', 'MerchantType', 'TradeDate', 'Balance', 'InAmount', 'RechargeAmount', 'OutAmount', 'WithdrawAmount', 'CurrentBalance', 'CommissionInCome', 'UpdateTime']
      }
    }
  }
</script>
