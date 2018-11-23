<template lang="pug">
  el-dialog(:visible.sync="isShow" class="role-manage-popup" width="600px" @beforeClose="close")
    el-form(label-width="100px" label-suffix="：" class="form-box")
      el-form-item(:label="getLabel('RoleName')" class="form-box-item")
        el-input(v-model="RoleName")
      el-form-item(:label="getLabel('IsEnable')" class="form-box-item")
        el-select(v-model="IsEnable")
          el-option(v-for="(label, val) in TST_OPTIONS['IsEnable']" :key="label" :label="label" :value="val")
      el-form-item(:label="getLabel('Remark')" class="form-box-item")
        el-input(type="textarea" v-model="Remark")
    div(class="privilege-container")
      el-tree(ref="roleTree" :data="privileges" show-checkbox default-expand-all node-key="privilege")
    div(slot="footer")
      el-button(@click="confirm") 提 交
      el-button(@click="close") 关 闭
</template>

<script>
  import labelMixin from 'common/mixins/labelMixin'
  import {TST_OPTIONS} from 'common/config/constants'

  const ADD_TYPES = Symbol('add')
  const MODIFY_TYPES = Symbol('modify')

  export default {
    mixins: [labelMixin],
    props: {
      privileges: {
        types: Array,
        default: () => ([])
      }
    },
    data() {
      return {
        isShow: false,
        RoleName: '',
        IsEnable: '0',
        Remark: ''
      }
    },
    created() {
      this.type = ADD_TYPES
      this.TST_OPTIONS = TST_OPTIONS
    },
    methods: {
      changeShowTreeKeys(arr) {
        this.$nextTick(() => {
          this.$refs.roleTree.setCheckedNodes(arr)
        })
      },
      changeType(type) {
        this.type = type === 'add' ? ADD_TYPES : MODIFY_TYPES
      },
      changeValue({RoleName, isEnable, Remark}) {
        this.RoleName = RoleName
        this.isEnable = isEnable
        this.Remark = Remark
      },
      confirm() {
        const {RoleName, IsEnable, Remark} = this
        let Privilege = new Set(this.$refs.roleTree.getCheckedKeys())
        Privilege.delete(void 0)
        Privilege = Array.from(Privilege)
        const sendMsg = {RoleName, IsEnable, Remark, Privilege}
        if (this.type === ADD_TYPES) {
          this.$emit('sendSubmitData', sendMsg)
        } else if (this.type === MODIFY_TYPES) {
          this.$emit('sendModifyData', sendMsg)
        }
      },
      show() {
        this.isShow = true
        this._clear()
      },
      close() {
        this.isShow = false
      },
      _clear() {
        this.RoleName = ''
        this.isEnable = '0'
        this.Remark = ''
      }
    }
  }
</script>

<style lang="scss">
  @import "~common/style/mixin";

  .role-manage-popup {
    .el-textarea__inner {
      width: 80%;
    }
    .privilege-container {
      @include querybox();
      margin: 0;
      height: 300px;
      overflow-y: auto;
    }
  }
</style>
