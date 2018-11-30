import { reqWrap } from './utils'
import { ParseTime } from 'common/js/utils'

export const getorderflow = function({CusBankID, MerchantName, StoreSerial, StartTime, EndTime, PayType, ExecuteType, ExecuteStatus}) {
  const rqParams = {
    FunCode: 65059,
    PageSize: 60,
    ExecuteStatus: ExecuteStatus === '' ? -1 : ExecuteStatus,
    CusBankID,
    MerchantName,
    StoreSerial,
    StartTime: new ParseTime(StartTime).formatTime,
    EndTime: new ParseTime(EndTime).formatTime,
    PayType,
    ExecuteType
  }
  return reqWrap(rqParams)
}

export const orderflowSync = function({PlatSerial}) {
    const rqParams = {
      FunCode: 65131,
      PlatSerial

    }
    return reqWrap(rqParams)
  }

  export const supplyOrderflow = function({PlatSerial}) {
    const rqParams = {
      FunCode: 65133,
      PlatSerial

    }
    return reqWrap(rqParams)
  }

  export const paymentOrderflow = function ({StoreSerial, OrderID, PlatSerial, ReexchangeRemark, PayAuditPwd, OriPlatSerial, ExecuteType, ExecuteStatus}) {
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

  export const refundOrderflow = function ({StoreSerial, OrderID, PlatSerial, RefundRemark, PayAuditPwd, OriPlatSerial, ExecuteType, ExecuteStatus}) {
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

  export const TraceOrderflow = function({PlatSerial}) {
    const rqParams = {
      FunCode: 65187,
      OrderID: PlatSerial

    }
    return reqWrap(rqParams)
  }

  export const getexporttable = function({CusBankID, MerchantName, StoreSerial, StartTime, EndTime, PayType, ExecuteType, ExecuteStatus}) {
    const rqParams = {
      FunCode: 65065,
      ExecuteStatus: ExecuteStatus === '' ? -1 : ExecuteStatus,
      CusBankID,
      MerchantName,
      StoreSerial,
      StartTime: new ParseTime(StartTime).formatTime,
      EndTime: new ParseTime(EndTime).formatTime,
      PayType,
      ExecuteType
    }
    return reqWrap(rqParams)
  }
