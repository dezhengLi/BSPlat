import {reqWrap} from './utils'

export const getMerchantManage = function ({MerchantID, MerchantName, MerchantType, AgencyID, AuditStatus, ActiveStatus, ArrivalWay}) {
  const rqParams = {
    FunCode: 65123,
    MerchantID,
    MerchantName,
    MerchantType,
    AgencyID,
    AuditStatus,
    ActiveStatus,
    ArrivalWay
  }
  return reqWrap(rqParams)
}

export const registerManage = function ({MerchantName, MerchantShortName, MerchantType, AgencyID, CardType, CardNum, IndustryType, ServiceTelNo, ManagerName, ManagerPhoneNo, Email, WebSite, Province, City, Address, ArrivalWay, BankAccountNo, BankAccountName, BankID, StaffName}) {
  const rqParams = {
    FunCode: 65125,
    StaffID: StaffName,
    MerchantName,
    MerchantShortName,
    MerchantType,
    CardType,
    CardNum,
    IndustryType,
    ServiceTelNo,
    ManagerName,
    ManagerPhoneNo,
    Email,
    Province,
    City,
    AgencyID,
    WebSite,
    Address,
    BankAccountName,
    BankAccountNo,
    BankID,
    ArrivalWay
  }
  return reqWrap(rqParams)
}

export const modifyManage = function ({MerchantID, MerchantType, MerchantStatus, MerchantName, MerchantShortName, IndustryType, ServiceTeNo, ManagerName, ManagerPhoneNo, Email, WebSite, Province, City, Address, CardType, CardNum, ArrivalWay, BankAccountNo, BankAccountName, BankID, StaffName, AgencyID, AgencyName, AuditStatus}) {
  const rqParams = {
    FunCode: 65127,
    MerchantID,
    MerchantType,
    MerchantStatus,
    MerchantName,
    MerchantShortName,
    IndustryType,
    ServiceTeNo,
    ManagerName,
    ManagerPhoneNo,
    Email,
    WebSite,
    Province,
    City,
    Address,
    CardType,
    CardNum,
    ArrivalWay,
    BankAccountNo,
    BankAccountName,
    BankID,
    StaffName,
    AgencyID,
    AgencyName,
    AuditStatus
  }
  return reqWrap(rqParams)
}

export const auditMerchant = function ({MerchantID, AuditStatus, AuditRemark, StaffName}) {
  const rqParams = {
    FunCode: 65127,
    MerchantID,
    AuditStatus,
    AuditRemark,
    StaffName
  }
  return reqWrap(rqParams)
}

export const sendOpenEmail = function ({MerchantID}) {
  const rqParams = {
    FunCode: 65211,
    MerchantID
  }
  return reqWrap(rqParams)
}

export const resetPwd = function ({MerchantID}) {
  const rqParams = {
    FunCode: 65129,
    MerchantID
  }
  return reqWrap(rqParams)
}

export const cancelMerchant = function ({MerchantID}) {
  const rqParams = {
    FunCode: 65129,
    MerchantID
  }
  return reqWrap(rqParams)
}

export const updatePWMerchant = function ({MerchantID, StaffName, ConfirmPwd, NewLoginPwd, OldLoginPwd, OriPlatSerial}) {
  const rqParams = {
    FunCode: 65127,
    MerchantID,
    StaffName,
    ConfirmPwd,
    NewPayPwd: NewLoginPwd,
    PayPWD: OldLoginPwd,
    OriPlatSerial
  }
  return reqWrap(rqParams)
}
