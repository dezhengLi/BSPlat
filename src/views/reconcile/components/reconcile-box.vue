<template>
    <div class="checkStatusBox">
        <div class="checkStatusxBoxStatus">
            <span>对账状态：</span>
            <ul class="reconcile-nav">
                <li v-for="(item, index) in checking" :key="index" class="reconcile-list">{{item}}</li>
            </ul>
        </div>
         <div class="checkStatusxBoxAmount">
            <ul class="checkStatusAmountItem">
                <li>
                    <span> </span>
                    <span>平台</span>
                    <span>银行</span>
                    <span>差额</span>
                </li>
                <li>
                    <span>收款金额</span>
                    <span _key="PlatInAmount">0.00</span>
                    <span _key="BankInAmount">0.00</span>
                    <span _key="InDiffAmount">0.00</span>
                </li>
                <li>
                    <span>收款笔数</span>
                    <span _key="PlatInCount">0</span>
                    <span _key="BankInCount">0</span>
                    <span _key="InDiffCount">0</span>
                </li>
                <li>
                    <span>付款金额</span>
                    <span _key="PlatOutAmount">0.00</span>
                    <span _key="BankOutAmount">0.00</span>
                    <span _key="OutDiffAmount">0.00</span>
                </li>
                <li>
                    <span>付款笔数</span>
                    <span _key="PlatOutCount">0</span>
                    <span _key="BankOutCount">0</span>
                    <span _key="OutDiffCount">0</span>
                </li>
                <li>
                    <span>净值</span>
                    <span _key="PlatNetWorth">0.00</span>
                    <span _key="BankNetWorth">0.00</span>
                    <span _key="DiffWorth">0.00</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           checking:['初始状态（未对账）','对账文件已就绪','对账文件已下载','对账文件下载失败','对账成功','有单边账'] 
        }
    }
}
</script>
<style lang="scss" >
  @import "~common/style/variable.scss";
  @import "~common/style/mixin.scss";
  .checkStatusBox{
      @include querybox;
      padding-left: 40px;
            .checkStatusxBoxStatus{
                display: flex;
                line-height: 26px;
                color: #1f1f1f;
                font-size: 14px;
                    .reconcile-nav{
                        display:flex;
                        margin-left:20px;
                            .reconcile-list{
                                width: 259.17px;
                                height: 26px;
                                border: 1px solid #ececec;
                                text-align: center;
                                box-sizing: border-box;
                                
                            }
                    }
         }
         .checkStatusxBoxAmount{
             margin-top: 20px;
             .checkStatusAmountItem{
                 display:flex;
                 li{
                     width: 287.67px;
                     height: 101px;
                     display: flex;
                     flex-direction: column;
                    //  border: 1px solid #ececec;
                    &:nth-child(1){
                        width: 201px;
                        height: 101px;
                        span{
                          border-left: 1px solid #c2c2c2;
                           
                        }
                    }
                    &:nth-child(1),
                     &:nth-child(2),
                      &:nth-child(3),
                       &:nth-child(4),
                        &:nth-child(5),
                         &:nth-child(6){
                          span:nth-child(1){
                              border-top: 1px solid #c2c2c2;
                          }   
                         }
                     span{
                         display: block;
                         border-bottom: 1px solid #c2c2c2;
                         border-right: 1px solid #c2c2c2;
                         height:25px;
                         box-sizing: border-box;
                         line-height: 26px;
                         color: #1f1f1f;
                         font-size: 14px;
                         text-align: center;
                         
                     }
                 }
             }
         }
  }
  
</style>

