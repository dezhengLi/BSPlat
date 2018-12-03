<template>
  <div class="roleManage-container">
    <table-query :query-title="queryTitle" @handleQuery="getQueryData" @exportQuery="exportparams"/>
    <reconcilebox :reconcile-data='this.tableData.objData'></reconcilebox>
    <table-content :table-title="tableTitle" :table-data="tableData" @activeData="getActiveData" @dataReq="dataReq" id="updatestyle">
      <nav-panel slot="panel" :nav-data="navData" :current-active="isActiveData" @triggerPanel="triggerPanel"/>
    </table-content>
  </div>
</template>

<script>
  import requestMixin from 'common/mixins/requestMixin'
  import queryComponentMixin from 'common/mixins/queryComponentMixin'
  import commonPanelMixin from 'common/mixins/common-panel-method.js'
  import {getreconcile,subreconcile} from 'api/reconcile'
  import exportExcel from 'common/js/export.js'
  import { ERR_OK } from '../../common/config/api.config'
  import  reconcilebox  from './components/reconcile-box'
  import { TST_OPTIONS } from '../../common/config/constants'
  export default {
    components:{reconcilebox},
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
      this.FunKey = ['CheckDataDetailInfos','CusBankCheckStatus']
      this.requestFunc = getreconcile
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
               let labelTitle = {OrderID:'订单号', PlatSerial:'平台流水号', BankSerial:'第三方流水号', PlatOrderID:'商户单号',SubMerchantID:'子商户编号',MerchantID:'商户编号',CusBankName:'渠道名称', PayType:'支付类型', ExecuteType:'交易类型', BankAmount:'银行交易金额',PlatCharge:'平台手续费', Charge:'手续费', PayStatus:'订单状态' , CurrCode:'币种', TradeDate:'交易日期'}
               // 表格名
              let D = new Date()
              const filename = D.getFullYear() + '' + (D.getMonth() + 1) + D.getDate() + D.getHours() + D.getMinutes() + D.getSeconds()
               let params = this.exportParams
               params.PageID = 1
               const PageSize = 60
               let PageID = 1
                // 第一页
                const {data, code, msg} = await subreconcile(params)
                if (code === ERR_OK) {
                          PageID = Math.ceil(data.RowCount / PageSize)
                          this.sumData = data.CheckDataDetailInfos.reduce(function(prev, curr) {
                                        prev.push(curr)
                                        return prev
                                }, this.sumData)
                          // 其他页数的拼接
                          if (PageID >= 2) {
                                for (let i = 2; i <= PageID; i++) {
                                    const {data, code} = await subreconcile(params = Object.assign({}, params, {PageID: i}))

                                    if (code === ERR_OK) {
                                      this.sumData = data.CheckDataDetailInfos.reduce(function(prev, curr) {
                                                      prev.push(curr)
                                                      return prev
                                              }, this.sumData)
                                      }
                                  }
                              }
                         //处理表格类型转换的问题      
                         for(var i=0;i<this.sumData.length;i++){
                             this.sumData[i].OrderID="'"+this.sumData[i].OrderID
                             this.sumData[i].PlatSerial="'"+this.sumData[i].PlatSerial
                             this.sumData[i].BankSerial="'"+this.sumData[i].BankSerial 
                             this.sumData[i].PlatOrderID="'"+this.sumData[i].PlatOrderID 
                             this.sumData[i].SubMerchantID="'"+this.sumData[i].SubMerchantID 
                             this.sumData[i].PayType=TST_OPTIONS.PayType[this.sumData[i].PayType]
                             this.sumData[i].ExecuteType=TST_OPTIONS.ExecuteType[this.sumData[i].ExecuteType] 
                             this.sumData[i].BankAmount="'"+this.sumData[i].BankAmount 
                             this.sumData[i].PlatCharge="'"+this.sumData[i].PlatCharge 
                             this.sumData[i].Charge="'"+this.sumData[i].Charge 
                             this.sumData[i].PayStatus=TST_OPTIONS.PayStatus[this.sumData[i].PayStatus]
                             this.sumData[i].CurrCode=TST_OPTIONS.CurrCode[this.sumData[i].CurrCode]               
                         }
                      exportExcel({filename, infosData: this.sumData, labelTitle})
                      this.sumData = []
                } else {
                     this._$queryMessage({code, msg})
                } 
        },

      _initData() {
        // table-query的输入框
        this.queryTitle = ['CusBankID','PlatTradeTime']
        // table-content 的显示
        this.tableTitle = ['OrderID', 'PlatSerial', 'BankSerial', 'PlatOrderID','MerchantID','SubMerchantID', 'CusBankName', 'PayType', 'ExecuteType', 'BankAmount','PlatCharge', 'Charge', 'PayStatus' , 'CurrCode', 'TradeDate']
        // 详情的输入框
        this.detailFieldName = ['OrderID', 'PlatSerial', 'BankSerial', 'PlatOrderID', 'MerchantID', 'SubMerchantID','CusBankID', 'CusBankName', 'PayType', 'ExecuteType', 'BankAmount','PlatCharge', 'Charge', 'PayStatus' , 'CurrCode', 'TradeDate']
      }
    }
  }
</script>
<style lang="scss" >
#updatestyle .el-table--fit{
    height:450px !important;
}

</style>

