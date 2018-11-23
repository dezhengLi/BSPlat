<template lang="pug">
  div(class="datasumbox-box")
    el-tabs(v-model="activeName")
      el-tab-pane(label="支付入账金额" name="InMoneyAmtSum")
      el-tab-pane(label="支付入账笔数" name="InMoneyNumSum")
      el-tab-pane(label="代付出账金额" name="OutMoneyAmtSum")
      el-tab-pane(label="代付出账笔数" name="OutMoneyNumSum")
    linechart(:x-axis="xAxis" :chart-data="linechartData")
</template>

<script>
  import linechart from './linechart.vue'

  export default {
    components: {linechart},
    props: {
      MerchantRecent: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        activeName: 'InMoneyAmtSum',
        xAxis: [],
        linechartObj: {
          InMoneyAmtSum: [],
          InMoneyNumSum: [],
          OutMoneyAmtSum: [],
          OutMoneyNumSum: []
        },
        linechartData: []
      }
    },
    watch: {
      MerchantRecent () {
        let keyNames = this.linechartObj
        let xAxis = this.xAxis
        for (let i = 0, len = this.MerchantRecent.length; i < len; i++) {
          let item = this.MerchantRecent[i]
          xAxis.push(item.TradeDate)
          for (let key in keyNames) {
            keyNames[key].push(item[key].replace(/,/g, ''))
          }
        }
        this._changeLinechart()
      },
      activeName () {
        this._changeLinechart()
      }
    },
    methods: {
      _changeLinechart () {
        this.linechartData.splice(0, this.linechartData.length)
        this.linechartData.push(...this.linechartObj[this.activeName])
      }
    }
  }
</script>

<style lang="scss">
  @import "~common/style/variable";
  @import "~common/style/mixin";
  .datasumbox-box {
    @include querybox;
  }
</style>
