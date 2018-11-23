import { ERR_OK } from 'common/config/api.config'
// 弹框提示信息
export default {
  methods: {
    _$queryMessage (rsp) {
      this.$message({
        type: rsp.code === ERR_OK ? 'success' : 'error',
        message: rsp.msg
      })
    }
  }
}
