import { reqWrap } from './utils'

export const queryBalanceApi = function({MerchantID}) {
    const rqParams = {
      FunCode: 65049,
      StoreSerial:MerchantID
    }
    return reqWrap(rqParams)
  }

  export const otherBalanceApi = function({StoreSerial}) {
    const rqParams = {
      FunCode: 65049,
      StoreSerial
    }
    return reqWrap(rqParams)
  }

  export const queryDBbalanceApi = function({StoreSerial}) {
    const rqParams = {
      FunCode: 65135,
      StoreSerial
    }
    return reqWrap(rqParams)
  }