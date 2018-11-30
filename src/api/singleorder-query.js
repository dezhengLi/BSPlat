import { reqWrap } from './utils'

export const getsingleorder = function({PlatOrderID, ThirdSerial, OrderID, PlatSerial}) {
  const rqParams = {
    FunCode: 65061,
    PlatOrderID,
    PageSize: 60,
    OrderID,
    ThirdSerial,
    PlatSerial

  }
  return reqWrap(rqParams)
}

export const OrderStatusSync = function({PlatSerial}) {
    const rqParams = {
      FunCode: 65131,
      PlatSerial

    }
    return reqWrap(rqParams)
  }

  export const supplySingleorder = function({PlatSerial}) {
    const rqParams = {
      FunCode: 65133,
      PlatSerial

    }
    return reqWrap(rqParams)
  }

  export const paymentSingleorder = function ({StoreSerial, OrderID, PlatSerial, ReexchangeRemark, PayAuditPwd, OriPlatSerial, ExecuteType, ExecuteStatus}) {
    const rqParams = {
      FunCode: 65165,
      MerchantID: StoreSerial,
      OrderID,
      PlatSerial,
      Remark: ReexchangeRemark,
      PayAuditPwd,
      OriPlatSerial,
      ExecuteType,
      ExecuteStatus
    }
    return reqWrap(rqParams)
  }

  export const refundSingleorder = function ({StoreSerial, OrderID, PlatSerial, RefundRemark, PayAuditPwd, OriPlatSerial, ExecuteType, ExecuteStatus}) {
    const rqParams = {
      FunCode: 65193,
      MerchantID: StoreSerial,
      OrderID,
      PlatSerial,
      Remark: RefundRemark,
      PayAuditPwd,
      OriPlatSerial,
      ExecuteType,
      ExecuteStatus
    }
    return reqWrap(rqParams)
  }

  export const TraceSingleorder = function({PlatSerial}) {
    const rqParams = {
      FunCode: 65187,
      OrderID: PlatSerial

    }
    return reqWrap(rqParams)
  }
