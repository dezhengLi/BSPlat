<template>
  <div>
    <ul class="sumh-panel-group">
      <li>
        <span>汇总</span>
      </li>
      <li>
        <span>{{sumData.SumBalance}}</span>
      </li>
      <li>
        <span>{{sumData.SumInAmount}}</span>
      </li>
       <li>
        <span>{{sumData.SumRechargeAmount}}</span>
      </li>
      <li>
        <span>{{sumData.SumOutAmount}}</span>
      </li>
      <li>
        <span>{{sumData.SumWithdrawAmount}}</span>
      </li>
      <li>
        <span>{{sumData.SumCurrentBalance}}</span>
      </li>

      <li>
        <span>{{sumData.SumCommissionInCome}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
      export default {
            data: function() {
                return {
                  sumarr: [],
                  getsumData: this.sumData
                }
            },
            props: {
            sumData: {
                type: Object,
                default: () => ({

                })
            }
            }

 }

</script>
<style lang="scss">
 @import "~common/style/variable";
 .sumh-panel-group{
   padding-left:430px;
   height: 40px;
    display: flex;
    flex-flow: row wrap;
    font-size: 15px;
    align-items: center;
    border-bottom: 1px solid $border-color;
    li{
      width:140px;
     color: #58595d;
    }
 }

</style>
