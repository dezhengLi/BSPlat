import { reqWrap } from './utils'
import {retTime} from '../common/js/utils'

export const getSysparamManageInfo = function() {
     const rqParams = {
        FunCode: 65091
     }
     return reqWrap(rqParams)
}

//  // 获取时间hh：mm：ss
//  function retTime(obj) {
//     let hh = obj.getHours() >= 10 ? obj.getHours() : '0' + obj.getHours()
//     let mm = obj.getMinutes() >= 10 ? obj.getMinutes() : '0' + obj.getMinutes()
//     let ss = obj.getSeconds() >= 10 ? obj.getSeconds() : '0' + obj.getSeconds()
//     return hh + ':' + mm + ':' + ss
    
// }

function retdayTime(obj) {
    let YY = obj.getFullYear() 
    let MM=obj.getMonth() + 1>=10? obj.getMonth()+ 1: '0'+(obj.getMonth()+ 1)
    let DD=obj.getDate() >=10? obj.getDate(): '0'+obj.getDate()
    return YY + '-' +MM+ '-' +DD
}


export const alterSysparamManage = function({IsAllowIn,InControlFlag,LessInAmount,MaxInAmount,MaxTotalInAmount,InStartTime,InEndTime,IsAllowOut,OutControlFlag,LessOutAmount,MaxOutAmount,MaxTotalOutAmount,OutStartTime,OutEndTime,OutMoneyFee,WithdrawFee,InMoneyFee,RechargeFee,MaxWithdrawAmount,StartCheckTime,StartSettleTime,StartClearTime,TradeDate,NextTradeDate}) {

    const rqParams = {
        FunCode: 65093,
        IsAllowIn,
        InControlFlag,
        LessInAmount,
        MaxInAmount:MaxInAmount.split(',').join(''),
        MaxTotalInAmount:MaxTotalInAmount.split(',').join(''),
        InStartTime:InStartTime.length===8?InStartTime:retTime(InStartTime),
        InEndTime:InEndTime.length===8?InEndTime:retTime(InEndTime),
        IsAllowOut,
        OutControlFlag,
        LessOutAmount,
        MaxOutAmount:MaxOutAmount.split(',').join(''),
        MaxTotalOutAmount:MaxTotalOutAmount.split(',').join(''),
        OutStartTime:OutStartTime.length===8?OutStartTime:retTime(OutStartTime),
        OutEndTime:OutEndTime.length===8?OutEndTime:retTime(OutEndTime),
        OutMoneyFee:OutMoneyFee.split(',').join(''),
        WithdrawFee:WithdrawFee.split(',').join(''),
        InMoneyFee:InMoneyFee.split(',').join(''),
        RechargeFee:RechargeFee.split(',').join(''),
        MaxWithdrawAmount:MaxWithdrawAmount.split(',').join(''),
        StartCheckTime:StartCheckTime.length===8?StartCheckTime:retTime(StartCheckTime),
        StartSettleTime:StartSettleTime.length===8?StartSettleTime:retTime(StartSettleTime),
        StartClearTime:StartClearTime.length===8?StartClearTime:retTime(StartClearTime),
        TradeDate:TradeDate.length===10?TradeDate:retdayTime(TradeDate),
        NextTradeDate:NextTradeDate.length===10?NextTradeDate:retdayTime(NextTradeDate)
      
    }
    return reqWrap(rqParams)
}
