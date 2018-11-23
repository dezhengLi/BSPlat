<template>
  <div>
    <ul class="nav-panel-group">
      <li
        v-for="(item, key) in navData"
        :key="key"
        class="item"
        @click="panelTrigger(item)"
        
      >
        <svg-icon
          v-if="item.icon"
          :icon-class="item.icon"
        />
        <span>{{item.label}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      navData: {
        type: Array,
        default: () => ([])
      },
      currentActive: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      panelTrigger (item) {
        // 根据导出表格作出的判断
        if(item.fcName!='exporttable'){
            if (!item.noNeedData && !this.currentActive) {
              return this.$message({
                message: `请选择需要${item.label}的数据`
              })
            }
        }
        this.$emit('triggerPanel', item)
      }
    }
  }
</script>

<style lang="scss">
  @import "~common/style/variable";
  .nav-panel-group {
    display: flex;
    flex-flow: row wrap;
    font-size: 14px;
    align-items: center;
    border-bottom: 1px solid $border-color;
    .item {
      cursor: pointer;
      margin-bottom: 10px;
      padding: 0 15px;
      color: $color-text-s;
      height: 30px;
      line-height: 30px;
      & + .item {
        border-left: 1px solid $border-color;
      }
    }
  }
</style>
