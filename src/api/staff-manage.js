import { reqWrap } from './utils'

export const getStaffManage = function ({ StaffID, StaffName, StaffDuty }) {
  const rqParams = {
    FunCode: 65153,
    StaffID,
    StaffName,
    StaffDuty
  }
  return reqWrap(rqParams)
}

export const registerStaff = function ({StaffName, StaffPhone, StaffDuty}) {
  const rqParams = {
    FunCode: 65155,
    StaffName,
    StaffPhone,
    StaffDuty
  }
  return reqWrap(rqParams)
}

export const modifyStaff = function ({StaffID, StaffName, StaffPhone, StaffDuty}) {
  const rqParams = {
    FunCode: 65157,
    StaffID,
    StaffName,
    StaffPhone,
    StaffDuty
  }
  return reqWrap(rqParams)
}
