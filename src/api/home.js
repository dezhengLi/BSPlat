import { reqWrap } from './utils'
import { ParseTime } from 'common/js/utils'

export const getHomeInfo = function () {
  const rqParams = {
    FunCode: 65071
  }
  return reqWrap(rqParams)
}

export const getCollectData = function ({ StartTime, EndTime, CurrCode }) {
  const rqParams = {
    FunCode: 65057,
    StartTime: new ParseTime(StartTime).format().formatTime,
    EndTime: new ParseTime(EndTime).format().formatTime,
    CurrCode
  }
  return reqWrap(rqParams)
}
