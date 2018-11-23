import { default as axios } from 'axios'
import config from 'src/common/config/axios.config'
import { ERR_CALLBACK } from 'src/common/config/api.config'

const service = axios.create(config)

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  res => {
    return res
  },
  () => {
    return Promise.resolve(ERR_CALLBACK)
  }
)

export default service
