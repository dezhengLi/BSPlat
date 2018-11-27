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
  import {getkeymanage,updateWorkInfo,updateMD5Info} from 'api/keymanage-ment'
  import { isOK } from 'api/utils'
  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    data: function() {
        return {
           tableData: {
              count: 0,
            requestData: []
           }
        }
    },
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'MerchantKeyInfoArray'
      this.requestFunc = getkeymanage
      this.navData = [
      {
        label: '更新工作密钥',
        fcName: 'updateWork'
      }, {
        label: '更新MD5密钥',
        fcName: 'updateMD5'
      }]
      this.getkeymanageInfo()
    },
    methods: {
            isOK: isOK,
            async  getkeymanageInfo() {
                    this.setGlobalLoading(true)
                    const {code, data, msg} = await getkeymanage({StoreSerial:''})
                    this.setGlobalLoading(false)
                    this._$queryMessage({code, msg})
                    if (isOK(code)) {
                        this.tableData.requestData = data[this.FunKey]
                        this.tableData.count = data['RowCount'] || data[this.FunKey].length
                        }
             },
       
       updateWork(){
        this.$confirm('工作密钥将被更新，请确认是否更新', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          this.setGlobalLoading(true)
          const { code, msg } = await updateWorkInfo(this.activeData)
          this.setGlobalLoading(false)
          this._$queryMessage({ code, msg })
          this.getkeymanageInfo()
        })
        .catch(() => {})
       },


        updateMD5(){
        this.$confirm('MD5密钥将被更新，请确认是否更新', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          this.setGlobalLoading(true)
          const { code, msg } = await updateMD5Info(this.activeData)
          this.setGlobalLoading(false)
          this._$queryMessage({ code, msg })
          this.getkeymanageInfo()
        })
        .catch(() => {})
       },
    
      _initData() {
        this.queryTitle = ['StoreSerial']
        this.tableTitle = ['MerchantID', 'MerchantName', 'WorkKey', 'Md5Key', 'UpdateTime']
      }
    }
  }
</script>