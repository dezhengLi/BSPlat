import md5 from 'md5'
import { reqWrap } from './utils'
import { ParseTime } from 'common/js/utils'

export const getUserManageData = function ({StartTime, EndTime, ...params}) {
  const rqParams = {
    FunCode: 65013,
    StartTime: new ParseTime(StartTime).formatTime,
    EndTime: new ParseTime(EndTime).formatTime,
    ...params
  }
  return reqWrap(rqParams)
}

export const registerUser = function ({ UserSerial, UserType, StoreSerial, IsEnable, TelNo, RoleSerial, UserPWD }) {
  const rqParams = {
    FunCode: 65015,
    UserPWD: md5(UserPWD).toUpperCase(),
    UserSerial,
    UserType,
    StoreSerial,
    IsEnable,
    TelNo,
    RoleSerial
  }
  return reqWrap(rqParams)
}

export const modifyUser = function ({ LoginCode, UserType, StoreSerial, IsEnable, TelNo, RoleSerial }) {
  const rqParams = {
    FunCode: 65017,
    UserSerial: LoginCode,
    UserType,
    StoreSerial,
    IsEnable,
    TelNo,
    RoleSerial
  }
  return reqWrap(rqParams)
}

export const resetPassword = function ({ UserSerial }) {
  const rqParams = {
    FunCode: 65019,
    UserSerial
  }
  return reqWrap(rqParams)
}

export const cancelUser = function ({ Remark, UserSerial }) {
  const rqParams = {
    FunCode: 65021,
    UserSerial,
    Remark
  }
  return reqWrap(rqParams)
}
