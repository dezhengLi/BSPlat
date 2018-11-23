import { reqWrap } from './utils'

export const getSearchPopupData = function ({FunCode, ...params}) {
  const rqParams = {
    FunCode,
    ...params
  }
  return reqWrap(rqParams)
}
