<template>
   <div class="collect">
       <ul class="collect-box">
           <li v-for="(item, index) in collectData" :key="index" class="collect-item">
              <svg-icon :icon-class="item.icon" class="iconSVg"></svg-icon>
              <p class="title"> {{item.msg}}</p>
              <p class="text">{{item.val | modifyVal}}</p>
           </li>
       </ul>
        <!-- <div>
            <p>温馨提示</p>
            <p>支持所有商户的数据汇总查询，也可选择单个商户进行查询</p>
        </div> -->
    </div>
</template>
<script>
export default {
    data() {
            return {
                collectData: {
                    InSuccessNums: {
                        icon: 'InSuccessNums',
                        name: 'InSuccessNums',
                        msg: '代收成功笔数',
                        val: 0
                    },
                    InSuccessAmount: {
                        icon: 'InSuccessAmount',
                        name: 'InSuccessAmount',
                        msg: '代收成功金额',
                        val: 0
                    },
                    InChargeAmount: {
                        icon: 'InChargeAmount',
                        name: 'InChargeAmount',
                        msg: '代收手续费',
                        val: 0
                    },
                    RechargeNums: {
                        icon: 'RechargeNums',
                        name: 'RechargeNums',
                        msg: '充值成功笔数',
                        val: 0
                    },
                    RechargeAmount: {
                        icon: 'RechargeAmount',
                        name: 'RechargeAmount',
                        msg: '充值成功金额',
                        val: 0
                    },
                    RechargeFeeAmount: {
                        icon: 'RechargeFeeAmount',
                        name: 'RechargeFeeAmount',
                        msg: '充值手续费',
                        val: 0
                    },
                    OutSuccessNums: {
                        icon: 'OutSuccessNums',
                        name: 'OutSuccessNums',
                        msg: '代付成功笔数',
                        val: 0
                    },
                    OutSuccessAmount: {
                        icon: 'OutSuccessAmount',
                        name: 'OutSuccessAmount',
                        msg: '代付成功金额',
                        val: 0
                    },
                    OutChargeAmount: {
                        icon: 'OutChargeAmount',
                        name: 'OutChargeAmount',
                        msg: '代付手续费',
                        val: 0
                    },
                    WithdrawNums: {
                        icon: 'WithdrawNums',
                        name: 'WithdrawNums',
                        msg: '提现成功笔数',
                        val: 0
                    },
                    WithdrawAmount: {
                        icon: 'WithdrawAmount',
                        name: 'WithdrawAmount',
                        msg: '提现成功金额',
                        val: 0
                    },
                    WithdrawFeeAmount: {
                        icon: 'WithdrawFeeAmount',
                        name: 'WithdrawFeeAmount',
                        msg: '提现手续费',
                        val: 0
                    },
                    PaymentNums: {
                        icon: 'PaymentNums',
                        name: 'PaymentNums',
                        msg: '代付退汇笔数',
                        val: 0
                    },
                    PaymentAmount: {
                        icon: 'PaymentAmount',
                        name: 'PaymentAmount',
                        msg: '代付退汇金额',
                        val: 0
                    },
                    RefundNums: {
                        icon: 'RefundNums',
                        name: 'RefundNums',
                        msg: '退款笔数',
                        val: 0
                    },
                    RefundAmount: {
                        icon: 'RefundAmount',
                        name: 'RefundAmount',
                        msg: '退款成功金额',
                        val: 0
                    },
                    NetWorth: {
                        icon: 'NetWorth',
                        name: 'NetWorth',
                        msg: '交易净值',
                        val: 0
                    },
                    empty1: {

                    },
                    empty2: {

                    },
                    empty3: {

                    },
                    empty4: {

                    }
            }
        }
    },
    props: {
        CollectVal: {
            type: Object,
            required: true
        }
    },
    filters: {
      modifyVal (val) {
        return (!isNaN(val) && (+val).toFixed(2)) || val
      }
    },
    watch: {
        CollectVal(newdata) {
            Object.keys(this.collectData).forEach((key) => {
                this.collectData[key].val = newdata[key] || newdata[this.collectData[key].name]
            })
        }
    }
}
</script>
<style lang="scss" scoped >
@import "~common/style/variable.scss";
@import "~common/style/mixin.scss";
    .collect{
        @include querybox;
        padding: 0px;
        .collect-box{
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            text-align: center;
           .collect-item{
               width: 244px;
               height: 105px;
               border: 1px solid $border-color;
               padding-top: 15px;
               box-sizing: border-box;
               .title{
                   margin:5px 0;
                   color:$color-text-s;
                   font-size: $font-size-medium;
               }
               .text{
                  font-size: $font-size-medium;
                  font-weight: bold;

               }
           }

        }
    }

    .iconSVg {
      font-size: 32px;
      color: #0083c9;
    }
</style>
