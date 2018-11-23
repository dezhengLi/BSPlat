<template lang="pug">
  div(class="base-info")
    h3(class="title") 基本信息
    ul(class="items")
      li(v-for="(item, key) in info" :key="key" class="item")
        span(class="tip") {{item.label}}：
        span(class="text")  {{item.val}}
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      info: [
        {
          name: 'MerchantName',
          label: '商户名称',
          val: ''
        },
        {
          name: 'MerchantShortName',
          label: '商户简称',
          val: ''
        },
        {
          name: 'Province',
          label: '商户地址',
          val: ''
        },
        {
          name: 'ManagerPhoneNo',
          label: '联系电话',
          val: ''
        },
        {
          name: 'Email',
          label: '联系邮箱',
          val: ''
        }
      ]
    }
  },
  watch: {
    data (newData) {
      this.info.forEach((item) => {
        item.val = newData[item.name] || ''
      })
    }
  }
}
</script>

<style lang="scss">
@import "~common/style/variable.scss";
@import "~common/style/mixin.scss";
.base-info {
  @include querybox;
  .title {
    font-size: $font-size-medium;
  }
  .items {
    display: flex;
    flex-flow: row wrap;
    font-size: $font-size-small;
    margin-top: 10px;
  }
  .item {
    flex: 1 1 50%;
    line-height: 25px;
  }
  .tip {
    display: inline-block;
    width: 100px;
    text-align: right;
    color: $color-text-s;
  }
}
</style>
