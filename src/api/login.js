import { reqWrap } from './utils'
import md5 from 'md5'

export const LoginPlat = function ({username, password}) {
  const rqParams = {
    FunCode: 65001,
    LoginCode: username,
    LoginPwd: md5(password).toLocaleUpperCase(),
    LoginAddr: returnCitySN.cname,
    LoginIP: returnCitySN.cip
  }
  return reqWrap(rqParams)
}
