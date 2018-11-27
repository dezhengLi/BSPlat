import { reqWrap } from './utils'
import { retdayTime } from 'common/js/utils'

export const getmerchantSettle = function({MerchantID,CusBankID,StartTime,EndTime}) {
  const rqParams = {
    FunCode: 65197,
    MerchantID,
    CusBankID,
    StartDate:retdayTime(StartTime),
    EndDate:retdayTime(EndTime),

  }
  return reqWrap(rqParams)
}