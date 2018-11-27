import { reqWrap } from './utils'

export const getParamManage = function({StoreSerial}) {
    const rqParams = {
        FunCode: 65087,
        PageSiz: 60,
        BigMerchantID: StoreSerial
    }
    return reqWrap(rqParams)
}

export const alterParamManage = function({City,Province,IsAllowIn,InControlFlag,LessInAmount,MaxInAmount,MaxTotalInAmount,IsAllowOut,OutControlFlag,LessOutAmount,FrozenAmount,WithdrawBranchBankName,WithdrawSubBranchBankID,WithdrawSubBranchBankName,MaxOutAmount,MaxTotalOutAmount,OutStartTime,OutEndTime,OutMoneyFee,WithdrawFee,InMoneyFee,RechargeFee,MaxWithdrawAmount,StoreSerial,BigMerchantID,TradeDate,NextTradeDate,NotifyUrl,ReturnUrl,WithdrawAccountNo,WithdrawAccountName,WithdrawBankID,WithdrawAccProp,WithdrawAccType,WithdrawAccCardType,WithdrawAccCardNum,IsPaymentAudit,WithdrawTel}) {
    const rqParams = {
        FunCode: 65089,
        City,
        Province,
        IsAllowIn,
        InControlFlag,
        LessInAmount,
        MaxInAmount,
        MaxTotalInAmount,
        IsAllowOut,
        OutControlFlag,
        LessOutAmount,
        FrozenAmount,
        WithdrawBranchBankName,
        WithdrawSubBranchBankID,
        WithdrawSubBranchBankName,
        MaxOutAmount,
        MaxTotalOutAmount,
        OutStartTime,
        OutEndTime,
        OutMoneyFee,
        WithdrawFee,
        InMoneyFee,
        RechargeFee,
        MaxWithdrawAmount,
        StoreSerial,
        BigMerchantID,
        TradeDate,
        NextTradeDate,
        NotifyUrl,
        ReturnUrl,
        WithdrawAccountNo,
        WithdrawAccountName,
        WithdrawBankID,
        WithdrawAccProp,
        WithdrawAccType,
        WithdrawAccCardType,
        WithdrawAccCardNum,
        IsPaymentAudit,
        WithdrawTel
    }
    return reqWrap(rqParams)
}
