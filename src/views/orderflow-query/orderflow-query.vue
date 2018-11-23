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
  import {getorderflow,orderflowSync,supplyOrderflow,paymentOrderflow,refundOrderflow,TraceOrderflow} from 'api/orderflow-query'
  import {getKey} from 'api/utils'
  import {strEnc} from '../../common/config/crypto.config.js'
  let Base64 = require('js-base64').Base64 

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'TradeDetails'
      this.requestFunc = getorderflow
      this.navData = [{
        label: '订单状态同步',        
        fcName: 'OrderSync'
      }, {
        label: '补发通知',
        fcName: 'supply'
      }, {
        label: '代付退汇',
        fcName: 'payment'
      }, {
        label: '退款',
        fcName: 'refund'
      }, {
        label: '订单详情',
        fcName: 'detail'
      }, {
        label: '订单追踪',
        fcName: 'OrderTrace'
      }, {
        label: '导出表格',
        fcName: 'exporttable'
      }]
    },
    methods: {
      
     async OrderSync() {
      this.setGlobalLoading(true)
      const { code, msg } = await orderflowSync(this.activeData)
      
      this.setGlobalLoading(false)
      if (this.isOK(code)) {
        this._$queryMessage({ code, msg })
      }
    },
     async supply() {
        const pad=10
        console.log(pad)
        //出现模糊弹罩
      this.setGlobalLoading(true)
      //请求数据
      const { code, msg } = await supplyOrderflow(this.activeData)
      //提示框
      this._$queryMessage({ code, msg })
      //清除模糊弹罩
      this.setGlobalLoading(false)
    },  
    
    payment() {
        const paymentFiled = ['PayAuditPwd', 'ReexchangeRemark']
        // 审核密码时还需用到一个随机数和加密key，获取密钥
       getKey().then((res) => {
          this.getkey = Base64.decode(res.data.DesKey)
          this.OriPlatSerial = res.data.PlatSerial
       })

        // 全局引入$commonPopup
        this.$commonPopup({
          titleField: paymentFiled,
          // submitFc是公共弹框里设置的一个属性函数
        submitFc: (params, p) => {

           params = Object.assign({}, params, {OriPlatSerial: this.OriPlatSerial},this.activeData)
            // 加密
           params.PayAuditPwd = strEnc(params.PayAuditPwd, this.getkey)
            this.popupHttpFc(params, p, paymentOrderflow)
          }
        })
      }, 
      
      refund() {
        const refundFiled = ['PayAuditPwd', 'RefundRemark']
        
       getKey().then((res) => {
          this.getkey = Base64.decode(res.data.DesKey)
          this.OriPlatSerial = res.data.PlatSerial
       })    
        this.$commonPopup({
          titleField: refundFiled,
          
        submitFc: (params, p) => {
           console.log(this.activeData)
           params = Object.assign({}, params, {OriPlatSerial: this.OriPlatSerial},this.activeData)
           
           params.PayAuditPwd = strEnc(params.PayAuditPwd, this.getkey)
            this.popupHttpFc(params, p, refundOrderflow)
          }
        })
      },
    
    async OrderTrace() {
      this.setGlobalLoading(true)
      const { code, msg } = await TraceOrderflow(this.activeData)
      this._$queryMessage({ code, msg })
      this.setGlobalLoading(false)
 
    },
      _initData() {
        this.queryTitle = ['StoreSerial', 'MerchantName', 'StartTime', 'EndTime','CusBankID','PayType','ExecuteType','ExecuteStatus']
        this.tableTitle = ['PlatTradeTime', 'OrderID', 'PlatSerial','ThirdSerial', 'PlatOrderID',  'StoreSerial', 'StoreName', 'CusBankName', 'PayType', 'ExecuteType', 'ExecuteStatus', 'Amt','Charge','CurrCode']
         this.detailFieldName = [ 'OrderID','StoreSerial', 'PlatSerial', 'StoreName','ThirdSerial','BankAccountNo','CurrCode','BankAccountName','CusBankID','CusBankName','Amt','BankID','Charge','Subject','ExecuteType','OperatorID','ExecuteStatus','SubmitTime','DealText','FinishTime']
      }
    }
  }
</script>
