<template lang="pug">
  div(class="data-collect")
    div(class="query-ctr")
      el-date-picker(v-model="queryData.StartTime" :picker-options="pickerOptions.StartTime" type="datetime" placeholder="选择日期时间")
      span 至
      el-date-picker(v-model="queryData.EndTime" :picker-options="pickerOptions.EndTime" type="datetime" placeholder="选择日期时间")
      span 币种：
      el-select(v-model="queryData.CurrCode")
        el-option(
          v-for="(label, val) in currCodeOptions"
          :key="val"
          :label="label"
          :value="val"
        )
      el-button(type="primary" class="query-button" @click="handleCollect") 查 询
    el-tabs(v-model="activeName")
      el-tab-pane(label="数据汇总" name="collect")
        ul(class="collect-box")
          li(v-for="(item, index) in collectData" :key="index" class="collect-item")
            svg-icon(:icon-class="item.icon" class="iconSVg")
            p(class="title") {{item.msg}}
            p(class="text") {{item.val | modifyVal}}
</template>

<script>
  import { mapMutations } from 'vuex'
  import * as types from 'src/store/mutations-type'
  import { getCollectData } from 'api/home'
  import requestMixin from 'common/mixins/requestMixin'
  import { ERR_OK } from '../../../common/config/api.config'
  import { ParseTime } from '../../../common/js/utils'
  import { TST_OPTIONS } from 'common/config/constants'

  export default {
    mixins: [requestMixin],
    data () {
      return {
        activeName: 'collect',
        collectData: {
          InMoneyAmtSum: {
            icon: 'InMoneyAmtSum',
            name: 'InSuccessAmount',
            msg: '支付入账总额',
            val: 0
          },
          InMoneyNumSum: {
            icon: 'InMoneyNumSum',
            name: 'InSuccessNums',
            msg: '支付入账总笔数',
            val: 0
          },
          OutMoneyAmtSum: {
            icon: 'OutMoneyAmtSum',
            name: 'OutSuccessAmount',
            msg: '代付出账总额',
            val: 0
          },
          OutMoneyNumSum: {
            icon: 'OutMoneyNumSum',
            name: 'OutSuccessNums',
            msg: '代付出账总笔数',
            val: 0
          }
        },
        pickerOptions: {
          currentDate: new Date(),
          StartTime: {
            disabledDate: time => time > this.queryData.EndTime
          },
          EndTime: {
            disableDate: time => (
              time < this.queryData.StartTime ||
                time > this.pickerOptions.currentDate
            )
          }
        },
        queryData: {
          StartTime: new ParseTime().format('{y}-{M}-{d} 00:00:00').time,
          EndTime: new ParseTime().format('{y}-{M}-{d} 23:59:59').time,
          CurrCode: '01'
        }
      }
    },
    created () {
      this.currCodeOptions = TST_OPTIONS.CurrCode
    },
    filters: {
      modifyVal (val) {
        return (!isNaN(val) && (+val).toFixed(2)) || val
      }
    },
    methods: {
      async handleCollect () {
        this.setGlobalLoading(true)
        const {code, data, msg} = await getCollectData(this.queryData)
        this.setGlobalLoading(false)
        this._$queryMessage({code, msg})
        if (code === ERR_OK) {
          this._requestDataDispose(data)
        }
      },
      _requestDataDispose (data) {
        Object.keys(this.collectData).forEach((key) => {
          this.collectData[key].val = data[key] || data[this.collectData[key].name]
        })
      },
      ...mapMutations({
        setGlobalLoading: types.SET_GLOBAL_LOADING
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/variable";
  @import "~common/style/mixin";

  .data-collect {
    position: relative;
    @include querybox;
    .query-ctr {
      position: absolute;
      right: 10px;
      top: 4px;
      z-index: 1;
      span {
        margin: 0 5px;
      }
    }
    .query-button {
      margin-left: 10px;
    }
    .collect-box {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      text-align: center;
    }
    .collect-item {
      flex: 1 1 25%;
      padding: 15px 0;
      p {
        margin-top: 10px;
        font-size: $font-size-medium;
      }
      .title {
        color: $color-text-s;
      }
      .text {
        font-weight: bold;
      }
    }
    .iconSVg {
      font-size: 32px;
      color: #0083c9;
    }
  }
</style>
