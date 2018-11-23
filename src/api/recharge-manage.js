import { reqWrap } from './utils'
import { ParseTime } from 'common/js/utils'

// 查询
export const getRechargeData = function ({StartTime, EndTime, ...params}) {
    const rqParams = {
      FunCode: 65085,
      StartTime: new ParseTime(StartTime).formatTime,
      EndTime: new ParseTime(EndTime).formatTime,
      ...params
    }
    return reqWrap(rqParams)
  }
 // 新增
  export const addRecharge = function ({BigMerchantID, StoreSerial, Amt, Remark, PayAuditPwd, OrderID, OriPlatSerial }) {
    const rqParams = {
      FunCode: 65081,
      BigMerchantID,
      StoreSerial,
      Amt,
      Remark,
      PayAuditPwd: PayAuditPwd,
      OrderID: OrderID,
      OriPlatSerial
    }
    return reqWrap(rqParams)
  }
 // 密钥请求
  export const getKey = function () {
    const rqParams = {
      FunCode: 65169
    }
    return reqWrap(rqParams)
  }
