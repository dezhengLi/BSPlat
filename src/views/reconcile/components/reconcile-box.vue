<template>
    <div class="checkStatusBox">
        <div class="checkStatusxBoxStatus">
            <span>对账状态：</span>
            <ul class="reconcile-nav">
                <li v-for="(item, index) in checking" :key="index" class="reconcile-list" :class="{'active':index ==reconcileData.CheckStatus }">{{item}}</li>
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
                    <span v-for="(item, index) in info.InAmount" :key="index">{{item.val}}</span>
                </li>
                <li>
                    <span>收款笔数</span>
                    <span v-for="(item, index) in info.InCount" :key="index">{{item.val}}</span>
                </li>
                <li>
                    <span>付款金额</span>
                    <span v-for="(item, index) in info.OutAmount" :key="index">{{item.val}}</span>
                </li>
                <li>
                    <span>付款笔数</span>
                    <span v-for="(item, index) in info.OutCount" :key="index">{{item.val}}</span>
                </li>
                <li>
                    <span>净值</span>
                    <span v-for="(item, index) in info.Worth" :key="index">{{item.val}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           checking:['初始状态（未对账）','对账文件已就绪','对账文件已下载','对账文件下载失败','对账成功','有单边账'],
           info:{InAmount:[{name:'PlatInAmount',val:'0.00'},{name:'BankInAmount',val:'0.00'},{name:'InDiffAmount',val:'0.00'}],
                 InCount:[{name:'PlatInCount',val:'0'},{name:'BankInCount',val:'0'},{name:'InDiffCount',val:'0'}],
                 OutAmount:[{name:'PlatOutAmount',val:'0.00'},{name:'BankOutAmount',val:'0.00'},{name:'OutDiffAmount',val:'0.00'}], 
                 OutCount:[{name:'PlatOutCount',val:'0'},{name:'BankOutCount',val:'0'},{name:'OutDiffCount',val:'0'}],
                 Worth:[{name:'PlatNetWorth',val:'0.00'},{name:'BankNetWorth',val:'0.00'},{name:'DiffWorth',val:'0.00'}]
            }
        }
    },
    props:{
        reconcileData:{
             type: Object,
             default: () => ({})  
        }
    },
    watch:{
        reconcileData(newdata){
            for (let key in this.info) {
                if (this.info.hasOwnProperty(key)) {
                    for(let i=0;i<this.info[key].length;i++){
                        let keyname=this.info[key][i].name
                        this.info[key][i].val=newdata[keyname]
                    }
                    
                }
            }
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
                        .active {
                            background: #999;
                            color: white;
                            font-weight: bold;
                            }
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

