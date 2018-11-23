import { reqWrap } from './utils'

export const getsubmerchantInfo = function({CusBankID}) {
    const rqParams = {
        FunCode: 65217,
        CusBankID: CusBankID === '' ? -1 : CusBankID
    }
    return reqWrap(rqParams)
}

export const addSubMerchant = function({CusBankID, SubMerchantID, SubMerchantName, SubMerchantType}) {
    const rqParams = {
        FunCode: 65227,
        CusBankID,
        SubMerchantID,
        SubMerchantName,
        SubMerchantType
    }
    return reqWrap(rqParams)
}

export const modifySubMerchant = function({CusBankID, SubMerchantID, SubMerchantName, SubMerchantType}) {
    const rqParams = {
        FunCode: 65229,
        CusBankID,
        SubMerchantID,
        SubMerchantName,
        SubMerchantType
    }
    return reqWrap(rqParams)
}

export const activeSubMerchant = function({CusBankID, SubMerchantID, IsInvalid}) {
    const rqParams = {
        FunCode: 65229,
        CusBankID,
        SubMerchantID,
        IsInvaid: IsInvalid
    }
    return reqWrap(rqParams)
}

export const DeleteSubMerchant = function({CusBankID, SubMerchantID}) {
    const rqParams = {
        FunCode: 65231,
        CusBankID,
        SubMerchantID
    }
    return reqWrap(rqParams)
}
