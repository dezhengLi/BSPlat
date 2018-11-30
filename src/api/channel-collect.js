import { reqWrap } from './utils'
import { retdayTime } from 'common/js/utils'

export const getchannelCollect = function({CusBankID, StartTime, EndTime}) {
  const rqParams = {
    FunCode: 65203,
    CusBankID,
    StartDate: retdayTime(StartTime),
    EndDate: retdayTime(EndTime)

  }
  return reqWrap(rqParams)
}



export const subchannelCollect = function({CusBankID, PageID, StartTime, EndTime}) {
  const rqParams = {
      FunCode: 65203,
      CusBankID,
      PageID,
      StartDate: retdayTime(StartTime),
      EndDate: retdayTime(EndTime)
  }
  return reqWrap(rqParams)
}