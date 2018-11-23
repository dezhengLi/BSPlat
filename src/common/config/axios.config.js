import qs from 'qs'

const axiosConfig = {
  baseURL: '/AgentPlat/gateway',
  // 请求后的数据处理
  transformRequest (req) {
    return qs.stringify(req)
  },
  paramsSerializer (params) {
    return qs.stringify(params)
  },
  responseType: 'json'
  // 超时设置 s
  // timeout
  // maxContentLength
  // validateStatus(status: number): boolean {
  //   return status >= 200 && status < 300
  // }
}

export default axiosConfig
