import { reqWrap } from './utils'

export const getMerchantInfo = function () {
    const rqParams = {
      FunCode: 65023
    }
    return reqWrap(rqParams)
  }

  export const getPayMessage = function ({MerchantID}) {
    const rqParams = {
      FunCode: 65137,
      MerchantID
    }
    return reqWrap(rqParams)
  }
