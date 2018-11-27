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
               //导出表格按钮
        // exporttable(){
        //     let labelTitle={MerchantID:'商户编号',MerchantName:'商户名称',MerchantType: '商户类型',TradeDate:'日期',Balance: '期初余额',InAmount:'支付入账金额',
        //           RechargeAmount:'充值入账金额',OutAmount:'代付出账金额',WithdrawAmount:'提现出账金额',CurrentBalance: '期末余额',
        //           CommissionInCome: '手续费收益',UpdateTime: '更新时间'}
        //     // this.$store.commit(types.SET_GLOBAL_LOADING, true)
        //     //求一个时间名
        //     let D=new Date()
        //     const filename=D.getFullYear()+''+(D.getMonth()+1)+D.getDate()+D.getHours()+D.getMinutes()+D.getSeconds()
        //      let params= {StoreSerial : ''}
        //      const PageSize = 60
        //      let PageID=0
        //          //请求数据第一页的
        //         getcurrentbalance(params).then(res=>{
        //           console.log(res)
        //            PageID=Math.ceil(res.data.RowCount/PageSize)
        //            console.log(PageID)
        //            this.sumData=res.data.CurrentBalanceArray.reduce(function(prev,curr){
        //                    prev.push(curr)     
        //                    return prev      
        //            },this.sumData)
        //           //  请求数据其他页的
        //              for(let i=2;i<=PageID;i++){
        //                    setTimeout(function(){
        //                         getsubcurrentbalance({PageID:i}).then(subres=>{
        //                               if(subres.data.RetCode==="0000"){
        //                                   this.sumData=subres.data.CurrentBalanceArray.reduce(function(prev,curr){
        //                                                   prev.push(curr)     
        //                                                   return prev      
        //                                           },this.sumData)
        //                                   }
        //                         })
        //                    },2000*i)  
        //              }
        //            exportExcel({filename,infosData:this.sumData,labelTitle}) 
                  
        //         })

               
              
              
          
        // },
       
 

      _initData() {
        this.queryTitle = ['StoreSerial','StartTime', 'EndTime']
        this.tableTitle = ['MerchantID', 'MerchantName', 'MerchantType','TradeDate','Balance', 'InAmount','RechargeAmount','OutAmount','WithdrawAmount','CurrentBalance','CommissionInCome','UpdateTime']
        
      }
    }
  }
</script>
