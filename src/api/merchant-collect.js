import { reqWrap } from './utils'
import { retdayTime } from 'common/js/utils'

export const getmerchantCollect = function({MerchantID,CusBankID,StartTime,EndTime}) {
  const rqParams = {
    FunCode: 65199,
    MerchantID,
    CusBankID,
    StartDate:retdayTime(StartTime),
    EndDate:retdayTime(EndTime),

  }
  return reqWrap(rqParams)
}