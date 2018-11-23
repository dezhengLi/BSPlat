import { reqWrap } from './utils'
import { ParseTime } from 'common/js/utils'

export const getRoleManageData = function ({StartTime, EndTime, ...params}) {
  const rqParams = {
    FunCode: 65005,
    StartTime: new ParseTime(StartTime).formatTime,
    EndTime: new ParseTime(EndTime).formatTime,
    ...params
  }
  return reqWrap(rqParams)
}

export const addRoleManage = function ({isEnable, Privilege, Remark, RoleName}) {
  const rqParams = {
    FunCode: 65007,
    Privilege,
    isEnable,
    Remark,
    RoleName
  }
  return reqWrap(rqParams)
}

export const modifyManage = function ({isEnable, Privilege, Remark, RoleName, RoleSerial}) {
  const rqParams = {
    FunCode: 65009,
    Privilege,
    isEnable,
    Remark,
    RoleName,
    RoleSerial
  }
  return reqWrap(rqParams)
}
