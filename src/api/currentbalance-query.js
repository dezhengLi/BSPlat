import { reqWrap } from './utils'

export const getcurrentbalance = function({StoreSerial}) {
    const rqParams = {
        FunCode: 65049,
        PageSiz: 60,
        StoreSerial
    }
    return reqWrap(rqParams)
}

export const getsubcurrentbalance = function({StoreSerial,PageID}) {
    const rqParams = {
        FunCode: 65049,
        PageSiz: 60,
        StoreSerial,
        PageID
    }
    return reqWrap(rqParams)
}