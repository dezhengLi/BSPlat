import { reqWrap } from './utils'
import { retdayTime } from 'common/js/utils'

export const getreconcileAdjust = function({CusBankID, StartTime, EndTime}) {
  const rqParams = {
    FunCode: 65207,
    CusBankID,
    StartDate: retdayTime(StartTime),
    EndDate: retdayTime(EndTime)

  }
  return reqWrap(rqParams)
}

export const reconcileAdjust = function({PlatSerial}) {
  const rqParams = {
    FunCode: 65209,
    PlatSerial

  }
  return reqWrap(rqParams)
}

export const subreconcileAdjust = function({PageID,CusBankID, StartTime, EndTime}) {
  const rqParams = {
    FunCode: 65207,
    CusBankID,
    StartDate: retdayTime(StartTime),
    EndDate: retdayTime(EndTime),
    PageID
  }
  return reqWrap(rqParams)
}