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
  import {getsubmerchantInfo,addSubMerchant,modifySubMerchant,activeSubMerchant,DeleteSubMerchant} from 'api/submerchant-manage'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'SubMerchantArrayInfos'
      this.requestFunc = getsubmerchantInfo
      this.navData = [{
        label: '新增',
        noNeedData: true,
        fcName: 'add'
      },
      {
        label: '编辑',
        fcName: 'modify'
      }, {
        label: '激活',
        fcName: 'active'
      }, {
        label: '删除',
        fcName: 'Delete'
      }]
    },
    methods: {
        add(){
                const addFiled =['SubMerchantID', 'SubMerchantName','SubMerchantType','CusBankID']
                this.$commonPopup({
            titleField: addFiled,
            submitFc: (params, p) => {
                this.popupHttpFc(params, p, addSubMerchant)
                
            }
            
            })
        },
        modify() {
        const modifyFiled = [ 'SubMerchantName', 'SubMerchantType']
        this.$commonPopup({
          titleField: modifyFiled,
          renderData: this.activeData,
          submitFc: (params, p) => {
            params = Object.assign({}, this.activeData, params)
            this.popupHttpFc(params, p, modifySubMerchant)
          }
        })
      },
        active() {
        const activeFiled = ['IsInvalid']
        this.$commonPopup({
          titleField: activeFiled,
          renderData: this.activeData,
          submitFc: (params, p) => {
            params = Object.assign({}, this.activeData, params)
            this.popupHttpFc(params, p, activeSubMerchant)
          }
        })
      },
         Delete() {
            this.$confirm('请确认是否删除', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(async () => {
            this.setGlobalLoading(true)
            // const { code, msg } = await DeleteSubMerchant(this.activeData)
            const { code, msg } = await DeleteSubMerchant(this.activeData)

            this.setGlobalLoading(false)
            this._$queryMessage({ code, msg })
            //重新刷新页面
             this.getQueryData({CusBankID:-1})
            })
            .catch(() => {})
    },
    
      _initData() {
        this.queryTitle = ['CusBankID']
        this.tableTitle = ['CusBankID', 'CusBankName', 'SubMerchantID', 'SubMerchantName', 'SubMerchantType','IsInvalid']
      }
    }
  }
</script>