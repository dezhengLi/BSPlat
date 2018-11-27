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
  import {getsignInoutmanage,altersignInout,signInmanage,signOutmanage} from 'api/signInout-manage'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'SignInOutInfoList'
      this.requestFunc = getsignInoutmanage
      this.navData = [{
        label: '修改',
        fcName: 'alter'
      },{
          label:'强制签到 ',
          fcName:'signIn'
      },{
          label:'强制签退 ',
          fcName:'signOut'
      },{
        label: '详情',
        fcName: 'detail'
      }]
    },
    methods: {
      // 修改  
      alter() {
          const modifyFiled = ['CusBankID','IsAuto','AutoSignInStartTime', 'AutoSignOutStartTime','TradeDate','NextTradeDate']

        this.$commonPopup({
          titleField: modifyFiled,
          renderData: this.activeData,
          fieldConfig: {
            CusBankID: {
              readonly: true
            },
            TradeDate: {
              readonly: true
            }

          },
          submitFc: (params, p) => {
            params = Object.assign({}, this.activeData, params)
            this.popupHttpFc(params, p, altersignInout)
          }
        })

      },
     async signIn(){
        this.setGlobalLoading(true)
        const { code, msg } = await signInmanage(this.activeData)
        this._$queryMessage({ code, msg })
        this.setGlobalLoading(false)
      },
     signOut(){
         this.setGlobalLoading(true)
         signOutmanage(this.activeData).then(res=>{
           const { code, msg } = res
           this._$queryMessage({ code, msg })
           this.setGlobalLoading(false)
         })
     },
    
      _initData() {
        this.queryTitle = ['CusBankID']
        this.tableTitle = ['CusBankID', 'CusBankName', 'IsAuto', 'AutoSignInStartTime', 'AutoSignOutStartTime', 'SignInStatus', 'ForceSignInDate', 'ForceSignOutDate','TradeDate','NextTradeDate','CreateTime','UpdateTime']
        this.detailFieldName = ['CusBankID', 'CusBankName', 'IsAuto', 'AutoSignInStartTime', 'AutoSignOutStartTime', 'SignInStatus', 'ForceSignInDate', 'ForceSignOutDate','TradeDate','NextTradeDate','CreateTime','UpdateTime']
      }
    }
  }
</script>