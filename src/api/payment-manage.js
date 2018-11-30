import { reqWrap } from './utils'
import { ParseTime } from 'common/js/utils'

export const getpaymentmanage = function({AuditStatus, StoreSerial, OrderID, StartTime, EndTime}) {
  const rqParams = {
    FunCode: 65163,
    PageID: 1,
    AuditStatus: AuditStatus === '' ? -1 : AuditStatus,
    StoreSerial,
    OrderID,
    StartTime: new ParseTime(StartTime).formatTime,
    EndTime: new ParseTime(EndTime).formatTime
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

 // 新增
 export const addpayment = function ({OrderID, MachineIP, MerchantID, BankAccountName, BankID, BankAccountNo, Province, AccountProp, City, WithdrawTel, BranchBankName, CardType, SubBranchBankName, CardNum, SubBranchBankID, AvailableBalance, Amt, Summary, PayPWD, OriPlatSerial}) {
  const rqParams = {
    FunCode: 65225,
    OrderID,
    MachineIP,
    MerchantID,
    BankAccountName,
    BankID,
    BankAccountNo,
    Province,
    AccountProp,
    City,
    Tel: WithdrawTel,
    BranchBankName,
    CardType,
    SubBranchBankName,
    CardNum,
    SubBranchBankID,
    AvailableBalance,
    Amt: Number(Amt),
    Summary,
    PayPWD,
    OriPlatSerial
  }
  return reqWrap(rqParams)
}

export const auditpayment = function ({PlatSerial, Remark, PayAuditPwd, OriPlatSerial, AuditStatus }) {
  const rqParams = {
    FunCode: 65161,
    PlatSerial,
    Remark,
    PayAuditPwd: PayAuditPwd,
    OriPlatSerial,
    AuditStatus
  }
  return reqWrap(rqParams)
}
