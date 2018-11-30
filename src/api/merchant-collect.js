import { reqWrap } from './utils'
import { retdayTime } from 'common/js/utils'

export const getmerchantCollect = function({MerchantID, CusBankID, StartTime, EndTime}) {
  const rqParams = {
    FunCode: 65199,
    MerchantID,
    CusBankID,
    StartDate: retdayTime(StartTime),
    EndDate: retdayTime(EndTime)

  }
  return reqWrap(rqParams)
}


export const submerchantCollect = function({MerchantID,CusBankID, PageID, StartTime, EndTime}) {
  const rqParams = {
      FunCode: 65199,
      MerchantID,
      CusBankID,
      PageID,
      StartDate: retdayTime(StartTime),
      EndDate: retdayTime(EndTime)
  }
  return reqWrap(rqParams)
}