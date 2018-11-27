import { reqWrap } from './utils'

export const getsignInoutmanage = function({CusBankID}) {
    const rqParams = {
        FunCode: 65103,
        PageSiz: 60,
        CusBankID
    }
    return reqWrap(rqParams)
}

export const altersignInout = function({CusBankID,IsAuto,AutoSignInStartTime,AutoSignOutStartTime,TradeDate,NextTradeDate}) {
    const rqParams = {
        FunCode: 65105,
        CusBankID,
        IsAuto,
        AutoSignInStartTime,
        AutoSignOutStartTime,
        TradeDate,
        NextTradeDate
    }
    return reqWrap(rqParams)
}

export const signInmanage = function({CusBankID}) {
    const rqParams = {
        FunCode: 65107,
        CusBankID
    }
    return reqWrap(rqParams)
}

export const signOutmanage = function({CusBankID}) {
    const rqParams = {
        FunCode: 65109,
        CusBankID
    }
    return reqWrap(rqParams)
}