import { reqWrap } from './utils'

export const getStoreManage = function({BigMerchantID, StoreSerial, StoreName, AuditStatus, ActiveStatus, ArrivalWay}) {
  const rqParams = {
    FunCode: 65033,
    BigMerchantID,
    StoreSerial,
    StoreName,
    AuditStatus,
    ActiveStatus,
    ArrivalWay
  }
  return reqWrap(rqParams)
}

export const modifyStore = function({BigMerchantID, StoreSerial, StoreName, StoreShortName, StoreType, StaffName}) {
  const rqParams = {
    FunCode: 65037,
    StaffID: StoreName,
    BigMerchantID,
    StoreSerial,
    StoreName,
    StoreShortName,
    StoreType
  }
  return reqWrap(rqParams)
}

export const registerStore = function({BigMerchantID, StoreName, StoreShortName, StoreType, StaffName}) {
  const rqParams = {
    FunCode: 65035,
    BigMerchantID,
    StoreName,
    StoreShortName,
    StoreType,
    StaffID: StaffName
  }
  return reqWrap(rqParams)
}

export const resetPwd = function({StoreSerial}) {
  const rqParams = {
    FunCode: 65195,
    MerchantID: StoreSerial
  }
  return reqWrap(rqParams)
}

export const auditStore = function({StoreSerial, AuditStatus, AuditRemark, StaffName}) {
  const rqParams = {
    FunCode: 65037,
    StaffID: StaffName,
    StoreSerial,
    AuditStatus,
    AuditRemark
  }
  return reqWrap(rqParams)
}

export const activeStore = function({StoreSerial, ActiveStatus, ActiveRemark, StaffName}) {
  const rqParams = {
    FunCode: 65037,
    StaffID: StaffName,
    ActiveStatus,
    ActiveRemark,
    StoreSerial
  }
  return reqWrap(rqParams)
}

export const sendOpenEmail = function({StoreSerial}) {
  const rqParams = {
    FunCode: 65211,
    MerchantID:StoreSerial
  }
  return reqWrap(rqParams)
}


export const updatePWMerchant = function ({StoreSerial,StaffName,ConfirmPwd,NewLoginPwd,OldLoginPwd,OriPlatSerial}) {
  const rqParams = {
    FunCode: 65037,
    StoreSerial,
    StaffName,
    ConfirmPwd,
    NewPayPwd:NewLoginPwd,
    PayPWD:OldLoginPwd,
    OriPlatSerial
  }
  return reqWrap(rqParams)
}