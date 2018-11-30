import { reqWrap } from './utils'
import { retdayTime } from 'common/js/utils.js'


export const getreconcile = function({CusBankID, PlatTradeTime}) {
  const rqParams = {
    FunCode: 65205,
    CusBankID,
    EndDate: retdayTime(PlatTradeTime)

  }
  return reqWrap(rqParams)
}

export const subreconcile = function({CusBankID, PlatTradeTime,PageID}) {
    const rqParams = {
      FunCode: 65205,
      CusBankID,
      PageID,
      EndDate: retdayTime(PlatTradeTime)
  
    }
    return reqWrap(rqParams)
  }