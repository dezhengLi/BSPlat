import { reqWrap } from './utils'

export const getkeymanage = function({StoreSerial}) {
    const rqParams = {
        FunCode: 65149,
        StoreSerial
    }
    return reqWrap(rqParams)
}

export const updateWorkInfo = function({MerchantID}) {
    const rqParams = {
        FunCode: 65147,
        StoreSerial: MerchantID,
        Md5Flag: 1
    }
    return reqWrap(rqParams)
}

export const updateMD5Info = function({MerchantID}) {
    const rqParams = {
        FunCode: 65147,
        StoreSerial: MerchantID,
        Md5Flag: 0
    }
    return reqWrap(rqParams)
}
