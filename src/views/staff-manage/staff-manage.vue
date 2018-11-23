<template>
  <div class="roleManage-container">
    <table-query :query-title="queryTitle" @handleQuery="getQueryData" />
    <table-content :table-title="tableTitle" :table-data="tableData" @activeData="getActiveData" @dataReq="dataReq">
      <nav-panel slot="panel" :nav-data="navData" :current-active="isActiveData" @triggerPanel="triggerPanel"/>
    </table-content>
  </div>
</template>

<script>
  import requestMixin from 'common/mixins/requestMixin'
  import queryComponentMixin from 'common/mixins/queryComponentMixin'
  import commonPanelMixin from 'common/mixins/common-panel-method.js'
  import { getStaffManage, registerStaff, modifyStaff } from 'api/staff-manage'

  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    created () {
      this.historyQuery = {}
      this._initData()
      this.FunKey = 'StaffArray'
      this.requestFunc = getStaffManage
      this.navData = [{
        label: '新增',
        noNeedData: true,
        fcName: 'add'
      }, {
        label: '编辑',
        fcName: 'modify'
      }]
    },
    methods: {
      add () {
        const addFiled = ['StaffName', 'StaffPhone', 'StaffDuty']
        this.$commonPopup({
          titleField: addFiled,
          submitFc: (params, p) => {
            this.popupHttpFc(params, p, registerStaff)
          }
        })
      },
      modify () {
        const editFiled = ['StaffID', 'StaffName', 'StaffPhone', 'StaffDuty']
        this.$commonPopup({
          titleField: editFiled,
          fieldConfig: {
            StaffID: {
              readonly: true
            }
          },
          renderData: this.activeData,
          submitFc: (params, p) => {
            this.popupHttpFc(params, p, modifyStaff)
          }
        })
      },
      _initData () {
        this.queryTitle = ['StaffID', 'StaffName', 'StaffDuty']
        this.tableTitle = ['StaffID', 'StaffName', 'StaffPhone', 'StaffDuty']
      }
    }
  }
</script>
