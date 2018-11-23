<template>
  <div class="roleManage-container">
    <table-query :query-title="queryTitle" @handleQuery="getQueryData" />
    <div class="table-container">
      <div class="table-box">
        <table-content class="table" :table-title="tableTitle" :table-data="tableData"  @activeData="getActiveData" @dataReq="dataReq">
          <nav-panel slot="panel" :nav-data="navData" :current-active="isActiveData" @triggerPanel="triggerPanel" />
        </table-content>
      </div>
      <div class="tree-container">
        <menu-tree class="tree-box" :tree="showMenuTree"/>
      </div>
    </div>
    <role-popup ref="rolePopup" :privileges="privileges" @sendSubmitData="addRole" @sendModifyData="modifyRole"/>
  </div>
</template>

<script>
  import requestMixin from 'common/mixins/requestMixin'
  import queryComponentMixin from 'common/mixins/queryComponentMixin'
  import {getRoleManageData, addRoleManage, modifyManage} from 'api/role-manage'
  import MenuTree from './menu-tree'
  import privileges from 'common/config/privilege.config'
  import {privilegeOr, privilegeFilter, deepCopy} from 'common/js/utils'

  import RolePopup from './role-popup'

  const cache = {}
  export default {
    mixins: [requestMixin, queryComponentMixin],
    components: {MenuTree, RolePopup},
    data () {
      return {
        privileges
      }
    },
    computed: {
      showMenuTree() {
        if (!this.activeData) {
          return []
        }
        const privilege = this.activeData.Privilege
        if (cache[privilege]) {
          return cache[privilege]
        }
        const trees = deepCopy(this.privileges)
        privilegeFilter(trees, privilege)
        cache[privilege] = trees
        return trees
      }
    },
    created () {
      this.historyQuery = {}
      this._initData()
      this.FunKey = 'RolesArray'
      this.requestFunc = getRoleManageData
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
        const {rolePopup} = this.$refs
        rolePopup.show()
        rolePopup.changeType('add')
        rolePopup.changeShowTreeKeys([])
      },
      modify () {
        const {rolePopup} = this.$refs
        const showKeys = []
        this.platPrivilege(this.showMenuTree, showKeys)
        rolePopup.show()
        rolePopup.changeType('modify')
        rolePopup.changeValue(this.activeData)
        rolePopup.changeShowTreeKeys(showKeys)
      },
      async addRole ({isEnable, Privilege, Remark, RoleName}) {
        Privilege = privilegeOr(Privilege)
        this.setGlobalLoading(true)
        const {code, msg} = await addRoleManage({isEnable, Privilege, Remark, RoleName})
        this.setGlobalLoading(false)
        this._$queryMessage({msg, code})
        if (this.isOK(code)) {
          this.$refs.rolePopup.close()
        }
      },
      async modifyRole ({isEnable, Privilege, Remark, RoleName}) {
        Privilege = privilegeOr(Privilege)
        this.setGlobalLoading(true)
        const {code, msg} = await modifyManage({isEnable, Privilege, Remark, RoleName, RoleSerial: this.activeData.RoleSerial})
        this.setGlobalLoading(false)
        this._$queryMessage({msg, code})
        if (this.isOK(code)) {
          this.$refs.rolePopup.close()
        }
      },
      platPrivilege(trees, arr) {
        trees.forEach((item) => {
          if (item.children) {
            this.platPrivilege(item.children, arr)
          } else {
            arr.push(item)
          }
        })
      },
      _initData () {
        this.queryTitle = ['RoleSerial', 'RoleName', 'StartTime', 'EndTime']
        this.tableTitle = ['CreateTime', 'RoleSerial', 'RoleName', 'IsEnable', 'Creator', 'Remark']
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~common/style/mixin.scss";
  .table-container {
    display: flex;
    .table-box {
      flex: 1;
      position: relative;
      .table {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }
    }
    .tree-container {
      flex: 250px 0;
      width: 250px;
      transition: all .5s;
      @media screen and (max-width: 1250px) {
        width: 0;
        flex: 0;
        opacity: 0;
      }
    }
    .tree-box {
      box-sizing: border-box;
      height: 645px;
      @include querybox;
      margin-left: 0;
      overflow-y: auto;
    }
  }
</style>
