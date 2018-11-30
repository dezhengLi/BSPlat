import { reqWrap } from './utils'

export const getpassparammanage = function({CusBankID}) {
    const rqParams = {
        FunCode: 65099,
        PageSiz: 60,
        CusBankID
    }
    return reqWrap(rqParams)
}
 function getNumber(num) {
    return num.split(',').join('')
 }

export const alterPassparam = function({CusBankID, CusBankName, IsAllowIn, InControlFlag, LessInAmount, MaxInAmount, MaxTotalInAmount, IsAllowOut, OutControlFlag, LessOutAmount, MaxOutAmount, MaxTotalOutAmount, OutStartTime, OutEndTime, OutMoneyFee, WithdrawFee, InMoneyFee, RechargeFee, MaxWithdrawAmount, StartCheckTime, StartSettleTime, StartClearTime, TradeDate, NextTradeDate}) {
    const rqParams = {
        FunCode: 65101,
        CusBankID,
        CusBankName,
        IsAllowIn,
        InControlFlag,
        LessInAmount: getNumber(LessInAmount),
        MaxInAmount: getNumber(MaxInAmount),
        MaxTotalInAmount: getNumber(MaxTotalInAmount),
        IsAllowOut,
        OutControlFlag,
        LessOutAmount: getNumber(LessOutAmount),
        MaxOutAmount: getNumber(MaxOutAmount),
        MaxTotalOutAmount: getNumber(MaxTotalOutAmount),
        OutStartTime,
        OutEndTime,
        OutMoneyFee,
        WithdrawFee,
        InMoneyFee,
        RechargeFee,
        MaxWithdrawAmount: getNumber(MaxWithdrawAmount),
        StartCheckTime,
        StartSettleTime,
        StartClearTime,
        TradeDate,
        NextTradeDate
    }
    return reqWrap(rqParams)
}
