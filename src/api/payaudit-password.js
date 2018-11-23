import { reqWrap } from './utils'

export const UPauditPassWD = function({pass,checkPass,oldpass,OriPlatSerial}) {
    const rqParams = {
      FunCode: 65167,
      OriPlatSerial,
      OldPassword:oldpass,
      NewPassword:pass,
      ConfirmPwd:checkPass
    }
    return reqWrap(rqParams)
  }

   // 密钥请求
 export const getKey = function () {
  const rqParams = {
    FunCode: 65169
  }
  return reqWrap(rqParams)
}