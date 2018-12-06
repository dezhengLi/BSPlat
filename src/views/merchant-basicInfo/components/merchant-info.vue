<template>
        <div class="base-info">
             <h3 class="title">基本信息</h3>
             <ul class="items">
                <li class="item" v-for="(item,key) in info" :key="key">
                    <span class="tip">{{item.label}}</span>
                    <span class="text">{{item.val}}</span>
                </li>
             </ul>
        </div>
</template>
<script>
import {TST_OPTIONS} from "common/config/constants.js"
export default {
    props: {
    Merchantdata: {
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
          name: 'MerchantType',
          label: '商户类型',
          val: ''
        },
        {
          name: 'MerchantID',
          label: '商户编号',
          val: ''
        },
        {
          name: 'IndustryType',
          label: '行业类别',
          val: ''
        },
        {
          name: 'ServiceTelNo',
          label: '客服电话',
          val: ''
        },
        {
          name: 'ManagerName',
          label: '负责人',
          val: ''
        },
        {
          name: 'ManagerPhoneNo',
          label: '负责人手机',
          val: ''
        },
        {
          name: 'Email',
          label: '邮箱',
          val: ''
        },
        {
          name: 'Province',
          label: '省份',
          val: ''
        },
        {
          name: 'City',
          label: '城市',
          val: ''
        },
        {
          name: 'Address',
          label: '商户地址',
          val: ''
        }
      ]
    }
  },
    watch: {
    Merchantdata (newData) {
      this.info.forEach((item) => {
        item.val = newData[item.name] || ''
        if(item.name=='MerchantType'){
             item.val=TST_OPTIONS[item.name][newData[item.name]]
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import "~common/style/variable.scss";
@import "~common/style/mixin.scss";
.base-info {
  @include querybox;
  padding: 0px;
  .title {
    height: 40px;
    line-height: 40px;
    font-size: $font-size-medium;
    padding-left:20px;
  }
  .items {
    width: 1708px;
    display: flex;
    flex-wrap: wrap;
    font-size: $font-size-medium;
    margin-top: 10px;
    margin: 0;
  }
  .item {
    height: 40px;
    flex-basis:50%;
    display: flex;
    line-height: 40px;
    border: 1px solid $border-color;
    box-sizing: border-box;
  }
  .tip {
    display: inline-block;
    padding-left:20px;
    text-align: left;
    flex-basis:166px;
    color: black;
  }
  .text{
      flex:1;
  }
}
</style>
