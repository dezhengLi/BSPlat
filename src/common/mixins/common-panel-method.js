export default {
  methods: {
    data () {
      return {
        detailFieldName: null
      }
    },
    // 点击详情的方法
    detail () {
      this.$commonPopup({
        titleField: this.detailFieldName || Object.keys(this.activeData),
        renderData: this.activeData,
        readonly: true
      })
    },
    // 弹框的数据处理
    async popupHttpFc (params, p, fc, success) {
      this.setGlobalLoading(true)
      // console.log(fc(params))
      // console.log(params)
      const {code, data, msg} = await fc(params)
      this.setGlobalLoading(false)
      this._$queryMessage({ code, msg })
      if (this.isOK(code)) {
        p.closePopup()
      }
      success && success(data)
    }
  }
}
