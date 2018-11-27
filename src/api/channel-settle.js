import { reqWrap } from './utils'
import { retdayTime } from 'common/js/utils'

export const getchannelSettle = function({CusBankID,StartTime,EndTime}) {
  const rqParams = {
    FunCode: 65201,
    CusBankID,
    StartDate:retdayTime(StartTime),
    EndDate:retdayTime(EndTime),

  }
  return reqWrap(rqParams)
}