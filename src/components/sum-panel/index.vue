<template>
  <div>
    <ul class="sum-panel-group">
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
        <span>{{sumData.SumAvailableBalance}}</span>
      </li>
      <li>
        <span>{{sumData.SumCommissionInCome}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
      export default {
            data:function(){
                return{
                  sumarr:[],
                  getsumData:this.sumData
                }
            },
            props: {
            sumData: {
                type: Object,
                default: () => ({

                })
            }
            }
          //  computed: {
          //       showSumdata(){
          //           const sumarr=[]
          //           const getkey=Object.keys(this.showdata[0])
          //           for(key in this.sumData[0]){
          //               for(let i=0; i<=getkey.lenght;i++){
          //                   if(key.vauleOf(getkey[i])!=-1){
          //                     sumarr.push= this.showdata[0][i]=this.sumData[0].key
          //                   }
          //               }
          //           }
          //           return sumarr
          //       }
          //   }

          //  computed: {
          //       showSumdata(){
                      
          //             for(key in this.sumData[0]){
          //               sumarr.push(this.sumData[0].key)
          //             } 
          //             console.log(this.sumarr)
          //             return this.sumarr
          //       }
          //  }
  }
    
</script>
<style lang="scss">
 @import "~common/style/variable";
 .sum-panel-group{
   padding-left:320px;
   height: 40px;
    display: flex;
    flex-flow: row wrap;
    font-size: 15px;
    align-items: center;
    border-bottom: 1px solid $border-color;
    li{
      width:134px;
     color: #58595d;
    }
 }

</style>
