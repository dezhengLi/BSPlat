import { reqWrap } from './utils'
import { ParseTime } from 'common/js/utils'

export const getWithdrawManage = function({MerchantID, StoreSerial, OrderID, StartTime, EndTime}) {
  const rqParams = {
    FunCode: 65079,
    BigMerchantID:MerchantID,
    StoreSerial,
    OrderID,
    StartTime: new ParseTime(StartTime).formatTime,
    EndTime: new ParseTime(EndTime).formatTime
  }
  return reqWrap(rqParams)
}

export const addWithdraw = function ({MerchantID, StoreSerial, WithdrawalAmount, Remark, PayPWD, OrderID,OriPlatSerial }) {
  const rqParams = {
    FunCode: 65075,
    BigMerchantID:MerchantID,
    StoreSerial,
    Amt: WithdrawalAmount,
    OriPlatSerial,
    Remark,
    PayPWD,
    OrderID
  }
  return reqWrap(rqParams)
}

export const auditWithdraw = function ({AuditStatus, TransferMethod, BankSerial, Remark, PlatSerial}) {
  const rqParams = {
    FunCode: 65077,
    TransferMethod,
    AuditStatus,
    BankSerial,
    Remark,
    PlatSerial
  }
  return reqWrap(rqParams)
}
