<template>
  <div class="roleManage-container">
    <table-query :query-title="queryTitle" @handleQuery="getQueryData"/>
    <table-content :table-title="tableTitle" :table-data="tableData" @activeData="getActiveData" @dataReq="dataReq">
      <nav-panel slot="panel" :nav-data="navData" :current-active="isActiveData" @triggerPanel="triggerPanel"/>
      <sum-panel slot="sum" :sum-data="this.tableData.otherData[0]" ></sum-panel>
    </table-content>
  </div>
</template>

<script>
  import requestMixin from 'common/mixins/requestMixin'
  import queryComponentMixin from 'common/mixins/queryComponentMixin'
  import commonPanelMixin from 'common/mixins/common-panel-method.js'
  import {getcurrentbalance, getsubcurrentbalance } from 'api/currentbalance-query'
  import exportExcel from 'common/js/export.js'
  // import * as types from 'src/store/mutations-type'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    data: function() {
        return {
          sumData: []
        }
    },
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = ['CurrentBalanceArray', 'SumCurrentBalanceArray']
      this.requestFunc = getcurrentbalance
      this.navData = [
          {
            label: '导出表格',
            fcName: 'exporttable'
          }
       ]
    },
    methods: {

        //  async getdata(){
        //     let params= {StoreSerial : ''}
        //     const {data} =await getcurrentbalance(params)
        //     console.log(data)
        //  },
        // 导出表格按钮
        exporttable() {
            // this.$store.commit(types.SET_GLOBAL_LOADING, true)
            // 求一个时间名
            let D = new Date()
            const filename = D.getFullYear() + '' + (D.getMonth() + 1) + D.getDate() + D.getHours() + D.getMinutes() + D.getSeconds()
             let params = {StoreSerial: ''}
             const PageSize = 60
             let PageID = 0
                 // 请求数据第一页的
                getcurrentbalance(params).then(res => {
                  console.log(res)
                   PageID = Math.ceil(res.data.RowCount / PageSize)
                   console.log(PageID)
                   this.sumData = res.data.CurrentBalanceArray.reduce(function(prev, curr) {
                           prev.push(curr)
                           return prev
                   }, this.sumData).slice(0, 60)
                  //  //请求数据其他页的
                  //    for(let i=2;i<=PageID;i++){
                  //         getsubcurrentbalance({PageID:i}).then(subres=>{
                  //           console.log(subres)
                  //         })
                  //    }
                })
        },

      _initData() {
        this.queryTitle = ['StoreSerial']
        this.tableTitle = ['MerchantID', 'MerchantName', 'MerchantType', 'Balance', 'InAmount', 'RechargeAmount', 'OutAmount', 'WithdrawAmount', 'CurrentBalance', 'AvailableBalance', 'CommissionInCome', 'UpdateTime']
      }
    }
  }
</script>
