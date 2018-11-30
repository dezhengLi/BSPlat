import { reqWrap } from './utils'
import {retTime} from '../common/js/utils'
export const getPayPassManage = function({MerchantID}) {
    const rqParams = {
        FunCode: 65137,
        PageSiz: 60,
        MerchantID: MerchantID == '' ? this.$store.getters.username : MerchantID
    }
    return reqWrap(rqParams)
}

    // // 获取时间hh：mm：ss
    // function retTime(obj) {
    //     let hh = obj.getHours() >= 10 ? obj.getHours() : '0' + obj.getHours()
    //     let mm = obj.getMinutes() >= 10 ? obj.getMinutes() : '0' + obj.getMinutes()
    //     let ss = obj.getSeconds() >= 10 ? obj.getSeconds() : '0' + obj.getSeconds()
    //     return hh + ':' + mm + ':' + ss
    // }

export const addPayPassManage = function({ArrivalWay, MerchantID, PayTypeName, PayType, SubMerchantID, CusBankName, IsAllow, ControlFlag, LessAmount, MaxAmount, MaxTotalAmount, StartTime, EndTime, MoneyFee, FeeMode, LessFee}) {
    const rqParams = {
        FunCode: 65139,
        ArrivalWay,
        MerchantID,
        PayTypeName,
        PayType,
        SubMerchantID,
        CusBankID: CusBankName,
        IsAllow,
        ControlFlag,
        LessAmount,
        MaxAmount,
        MaxTotalAmount,
        StartTime: retTime(StartTime),
        EndTime: retTime(EndTime),
        MoneyFee,
        FeeMode,
        LessFee
    }
    return reqWrap(rqParams)
}

export const modifyPayPass = function({ArrivalWay, MerchantID, PayType, SubMerchantID, CusBankID, IsAllow, ControlFlag, LessAmount, MaxAmount, MaxTotalAmount, StartTime, EndTime, MoneyFee, FeeMode, LessFee}) {
    console.log(StartTime)
    const rqParams = {
         FunCode: 65141,
         ArrivalWay,
         MerchantID,
         PayType,
         SubMerchantID,
         CusBankID,
         IsAllow,
         ControlFlag,
         LessAmount,
         MaxAmount: MaxAmount.split(',').join(''),
         MaxTotalAmount: MaxTotalAmount.split(',').join(''),
         StartTime: retTime(StartTime),
         EndTime: retTime(EndTime),
         MoneyFee,
         FeeMode,
         LessFee
     }
     return reqWrap(rqParams)
 }

 export const DeletePayPass = function({ArrivalWay, MerchantID, PayType}) {
    const rqParams = {
        FunCode: 65143,
        ArrivalWay,
        MerchantID,
        PayType
    }
    return reqWrap(rqParams)
}
