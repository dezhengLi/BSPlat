import { reqWrap } from './utils'
import { ParseTime } from 'common/js/utils'

export const getWithdrawManage = function({BigMerchantID, StoreSerial, OrderID, StartTime, EndTime}) {
  const rqParams = {
    FunCode: 65079,
    BigMerchantID,
    StoreSerial,
    OrderID,
    StartTime: new ParseTime(StartTime).formatTime,
    EndTime: new ParseTime(EndTime).formatTime
  }
  return reqWrap(rqParams)
}

export const addWithdraw = function ({BigMerchantID, StoreSerial, WithdrawalAmount, Remark, PayPWD, OrderID }) {
  const rqParams = {
    FunCode: 65075,
    BigMerchantID,
    StoreSerial,
    Amt: WithdrawalAmount,
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
