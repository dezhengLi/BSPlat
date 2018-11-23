import { TST_NAME, TST_OPTIONS } from 'common/config/constants'
// 获取表的类型名和选项类型
export default {
  methods: {
    getLabel (key) {
      return TST_NAME[key] || key
    },
    getValue (k, v) {
      const option = TST_OPTIONS[k]
      return (option && option[v]) || v
    }
  }
}
