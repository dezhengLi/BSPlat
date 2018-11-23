<template>
  <div class="userManage-container">
    <table-query
      :query-title="queryTitle"
      @handleQuery="getQueryData"
    ></table-query>
    <table-content :table-title="tableTitle" :table-data="tableData" @activeData="getActiveData" @dataReq="dataReq">
      <nav-panel slot="panel" :nav-data="navData" :current-active="isActiveData" @triggerPanel="triggerPanel"></nav-panel>
    </table-content>
  </div>
</template>

<script>
  import queryComponent from 'common/mixins/queryComponentMixin'
  import requestMixin from 'common/mixins/requestMixin'
  import commonPanelMixin from 'common/mixins/common-panel-method.js'
  import { getUserManageData, registerUser, modifyUser, resetPassword, cancelUser } from 'api/user-manage'

  export default {
    mixins: [queryComponent, requestMixin, commonPanelMixin],
    created () {
      this.historyQuery = {}
      this._initData()
      // FunKey是设置一个响应数据data里的一个属性，不同的响应属性值不同
      this.FunKey = 'UsersArray'
      this.requestFunc = getUserManageData
      this.navData = [{
        label: '新增',
        noNeedData: true,
        fcName: 'add'
      }, {
        label: '编辑',
        fcName: 'modify'
      }, {
        label: '重置密码',
        fcName: 'reset'
      }, {
        label: '注销',
        fcName: 'cancel'
      }, {
        label: '详情',
        fcName: 'detail'
      }]
    },
    methods: {
      add () {
        const addFiled = ['UserSerial', '', 'BigMerchantID', 'StoreSerial', 'UserType', 'IsEnable', 'TelNo', 'RoleSerial', 'UserPWD', 'UserPWDAgent']
        this.$commonPopup({
          titleField: addFiled,
          submitFc: (params, p) => {
            this.popupHttpFc(params, p, registerUser)
          }
        })
      },
      modify () {
        const editFiled = ['LoginCode', 'StoreSerial', 'UserType', 'IsEnable', 'TelNo', 'RoleSerial']
        this.$commonPopup({
          titleField: editFiled,
          fieldConfig: {
            LoginCode: {
              readonly: true
            },
            StoreSerial: {
              readonly: true
            }
          },
          renderData: this.activeData,
          submitFc: (params, p) => {
            this.popupHttpFc(params, p, modifyUser)
        }
        })
      },
      reset () {
        this.$confirm('密码将被重置，请确认是否重置', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          this.setGlobalLoading(true)
          const {code, msg} = await resetPassword({ UserSerial: this.activeData.LoginCode })
          this.setGlobalLoading(false)
          this._$queryMessage({ code, msg })
        }).catch(() => {})
      },
      cancel () {
        this.$prompt('注销用户描述', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(async ({ value }) => {
          this.setGlobalLoading(true)
          const {code, msg} = await cancelUser({ UserSerial: this.activeData.LoginCode, Remark: value })
          this.setGlobalLoading(false)
          this._$queryMessage({ code, msg })
        }).catch(() => {})
      },
      _initData () {
        this.queryTitle = ['MerchantID', 'UserSerial', 'StartTime', 'EndTime']
        this.tableTitle = ['LoginCode', 'UserType', 'StoreSerial', 'StoreName', 'IsEnable', 'RoleName', 'OnLineStatus', 'LoginTime', 'LoginOutTime', 'LoginIP', 'LoginAddr', 'UserStatus']
      }
    }
  }
</script>

<style scoped>

</style>
