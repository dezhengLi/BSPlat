import { reqWrap } from './utils'

export const getPassInfomanage = function({CusBankID}) {
    const rqParams = {
        FunCode: 65095,
        PageSiz: 60,
        CusBankID
    }
    return reqWrap(rqParams)
}

export const alterPassInfo = function({CusBankID,CusBankType,CusBankName,CusBankShortName,CurrCode,PlatRechargeAccNo,PlatRechargeAccName,RechargeIDType,RechargeIDCard,PlatWithDrawAccNo,PlatWithDrawAccName,WithDrawIDType,WithDrawIDCard,PlatPayAccNo,PlatPayAccName}) {
    const rqParams = {
        FunCode: 65097,
        CusBankID,
        CusBankType,
        CusBankName,
        CusBankShortName,
        CurrCode,
        PlatRechargeAccNo,
        PlatRechargeAccName,
        RechargeIDType,
        RechargeIDCard,
        PlatWithDrawAccNo,
        PlatWithDrawAccName,
        WithDrawIDType,
        WithDrawIDCard,
        PlatPayAccNo,
        PlatPayAccName
    }
    return reqWrap(rqParams)
}

export const balancePassInfo = function({CusBankID}) {
    const rqParams = {
        FunCode: 65213,
        CusBankID
    }
    return reqWrap(rqParams)
}