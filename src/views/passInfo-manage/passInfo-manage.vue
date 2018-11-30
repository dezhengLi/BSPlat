<template>
  <div class="roleManage-container">
    <table-query :query-title="queryTitle" @handleQuery="getQueryData"/>
    <table-content :table-title="tableTitle" :table-data="tableData" @activeData="getActiveData" @dataReq="dataReq">
      <nav-panel slot="panel" :nav-data="navData" :current-active="isActiveData" @triggerPanel="triggerPanel"/>
    </table-content>

  <el-dialog title="渠道余额查询" :visible.sync="dialogTableVisible" width="30%">
              <el-button @click="Export" class="el-icon-download" type="success">导出</el-button>
            <el-table
                :data="popupTabledata"
                style="width: 100%"
                height="500px">
                <el-table-column v-for="(item,indexs) in info" :key="indexs"
                    :prop="item.name"
                    :label='item.label'
                    width="130">
                </el-table-column>
            </el-table>
             <div slot="footer" class="dialog-footer">
                 <el-button @click="dialogTableVisible = false">关闭</el-button>
             </div>
   </el-dialog>

  </div>

</template>

<script>
  import requestMixin from 'common/mixins/requestMixin'
  import queryComponentMixin from 'common/mixins/queryComponentMixin'
  import commonPanelMixin from 'common/mixins/common-panel-method.js'
  import {getPassInfomanage, alterPassInfo, balancePassInfo} from 'api/passInfo-manage'
  import { ERR_OK } from '../../common/config/api.config'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    data: function() {
      return {
         dialogTableVisible: false,
         info: [
            {
            name: 'SubMerchantID',
            label: '子商户编号'
            },
            {
            name: 'CurrentBalances',
            label: '余额'
            },
            {
            name: 'FreezeBalance',
            label: '冻结余额'
            },
            {
            name: 'AvailableBalance',
            label: '可用余额'
            }
         ],
         popupTabledata: []
      }
    },
    created() {
      this.historyQuery = {}
      this._initData()
      // 设置一个响应数据data里的一个属性
      this.FunKey = 'ParamInfoList'
      this.requestFunc = getPassInfomanage
      this.navData = [{
        label: '修改',
        fcName: 'alter'
      }, {
        label: '详情',
        fcName: 'detail'
      }, {
        label: '查询余额',
        fcName: 'balance'
      }]
    },
    methods: {
      // 修改
      alter() {
          const modifyFiled = ['CusBankID', 'CusBankType', 'CusBankName', 'CusBankShortName', 'CurrCode', 'PlatRechargeAccNo', 'PlatRechargeAccName', 'RechargeIDType', 'RechargeIDCard', 'PlatWithDrawAccNo', 'PlatWithDrawAccName', 'WithDrawIDType', 'WithDrawIDCard', 'PlatPayAccNo', 'PlatPayAccName']

        this.$commonPopup({
          titleField: modifyFiled,
          renderData: this.activeData,
          fieldConfig: {
            CusBankID: {
              readonly: true
            }

          },
          submitFc: (params, p) => {
            params = Object.assign({}, this.activeData, params)
            this.popupHttpFc(params, p, alterPassInfo)
          }
        })
      },
     async balance() {
         this.dialogTableVisible = true
         console.log(this.activeData.CusBankID)
         const {data, msg, code} = await balancePassInfo(this.activeData)
         this._$queryMessage({code, msg})
         if (code === ERR_OK) {
            // 导出表格功能没完成,还有返回的数据属性不知道popupTabledata
         }
      },
      Export() {

      },
      _initData() {
        this.queryTitle = ['CusBankID']
        this.tableTitle = ['CusBankID', 'CusBankName', 'CusBankShortName', 'CurrCode', 'PlatRechargeAccNo', 'PlatWithDrawAccNo', 'PlatPayAccNo', 'UpdateTime']
        this.detailFieldName = ['CusBankID', 'CusBankType', 'CusBankName', 'CusBankShortName', 'CurrCode', 'PlatRechargeAccNo', 'PlatRechargeAccName', 'RechargeIDType', 'RechargeIDCard', 'PlatWithDrawAccNo', 'PlatWithDrawAccName', 'WithDrawIDType', 'WithDrawIDCard', 'PlatPayAccNo', 'PlatPayAccName', 'CreateTime', 'UpdateTime']
      }
    }
  }
</script>
