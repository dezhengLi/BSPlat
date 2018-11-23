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
  import {getPayPassManage, addPayPassManage, modifyPayPass, DeletePayPass} from 'api/paypass-manage'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'PayTypeInfoList'
      this.requestFunc = getPayPassManage
      this.navData = [
      {
        label: '新增',
        noNeedData: true,
        fcName: 'add'
      },
      {
        label: '编辑',
        fcName: 'modify'
      },
      {
        label: '删除',
        fcName: 'Delete'
      },
      {
        label: '详情',
        fcName: 'detail'
      }
    ]
    },
    methods: {
        add() {
            const addFiled = ['MerchantID', 'PayType', 'PayTypeName', 'CusBankName', 'IsAllow', 'SubMerchantID', 'ControlFlag', 'LessAmount', 'MaxAmount', 'MaxTotalAmount', 'StartTime', 'EndTime', 'MoneyFee', 'FeeMode', 'ArrivalWay', 'LessFee']
             this.$commonPopup({
          titleField: addFiled,
          // submitFc是公共弹框里设置的一个属性函数,
          submitFc: (params, p) => {
            console.log(params)
            console.log(p)
            this.popupHttpFc(params, p, addPayPassManage)
          }
        })
        },
        modify() {
        const modifyFiled = ['MerchantID', 'PayType', 'PayTypeName', 'CusBankName', 'IsAllow', 'SubMerchantID', 'ControlFlag', 'LessAmount', 'MaxAmount', 'MaxTotalAmount', 'StartTime', 'EndTime', 'MoneyFee', 'FeeMode', 'ArrivalWay', 'LessFee']
        this.$commonPopup({
          titleField: modifyFiled,
          renderData: this.activeData,
          fieldConfig: {
            MerchantID: {
              readonly: true
            },
            PayType: {
              readonly: true
            },
            PayTypeName: {
              readonly: true
            },
            ArrivalWay: {
              readonly: true
            }
          },
          submitFc: (params, p) => {
            params = Object.assign({}, this.activeData, params)
            this.popupHttpFc(params, p, modifyPayPass)
          }
        })
      },
      Delete() {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          this.setGlobalLoading(true)
          const { code, msg } = await DeletePayPass(this.activeData)
          this.setGlobalLoading(false)
          this._$queryMessage({ code, msg })
        })
        .catch(() => {})
    },

      _initData() {
        this.queryTitle = ['MerchantID']
        this.tableTitle = ['MerchantID', 'PayTypeName', 'PayType', 'ArrivalWay', 'CusBankName', 'SubMerchantID', 'LessAmount', 'MaxAmount', 'MaxTotalAmount', 'MoneyFee', 'FeeMode']
        this.detailFieldName = ['MerchantID', 'PayType', 'PayTypeName', 'CusBankName', 'IsAllow', 'SubMerchantID', 'ControlFlag', 'LessAmount', 'MaxAmount', 'MaxTotalAmount', 'StartTime', 'EndTime', 'MoneyFee', 'FeeMode', 'ArrivalWay', 'LessFee', 'CreateTime', 'UpdateTime']
      }
    }
  }
</script>
