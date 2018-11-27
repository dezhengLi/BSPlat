import service from 'common/js/api'
import { fileterObj } from 'common/js/utils'
import { ERR_CALLBACK, ERR_OK } from 'common/config/api.config'
import store from 'src/store'


export const reqWrap = function (params) {
  const rqParams = Object.assign({}, {
    LoginCode: store.getters.username
  }, params)

  return new Promise((resolve, reject) => {
    service({ method: 'POST', data: rqParams })
      .then(res => {
        resolve(wrapResInfo(res))
      })
      .catch(() => {
        return Promise.resolve(ERR_CALLBACK)
      })
  })
}

export const wrapResInfo = function (res) {
  if (res.status === 200) {
    const { data } = res

    const response = {
      code: data.RetCode,
      data: fileterObj(['RetCode', 'RetMsg'], data),
      msg: data.RetMsg
    }
    return response
  } else {
    return ERR_CALLBACK
  }
}

export const isOK = function (code) {
  return code === ERR_OK
}


 // 密钥请求
 export const getKey = function () {
  const rqParams = {
    FunCode: 65169
  }
  return reqWrap(rqParams)
}


