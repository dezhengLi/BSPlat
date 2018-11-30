<script>
  import queryCtrMixin from 'common/mixins/queryCtrMixin'

  const CTR_COLUMN_LEN = 8

  export default {
    mixins: [queryCtrMixin],
    props: {
      // 验证规则
      validates: {
        type: Object,
        default: () => ({})
      },
      // 显示头部字段
      titleField: {
        type: Array,
        default: () => ([{title: '', info: []}, {title: '', info: []}, {title: '', info: []}, {title: '', info: []}])
      },
      // 渲染表格数据
      renderData: {
        type: Object,
        default: () => ({})
      },
      // 只读时为true
      readonly: {
        type: Boolean,
        default: false
      },
      submitFc: {
        type: Function,
        default: () => {}
      }
    },
    // data: () => ({
    //   isShowPopup: false,
    //   //
    //   pickerOptions: null

    // }),
    data () {
      return {
        isShowPopup: false

      }
    },
    computed: {
      validateRole () {
        return [].concat(this.validates)
      },
      // 头部字段的个数
      // titleFieldLen () {
      //   return this.titleField.length
      // },
      titleFieldLen() {
          return this.titleField.length
      },
      // 判断头部字段的个数，大于8个选择宽度大的弹框
      // isChangeCls () {
      //   return this.titleFieldLen < CTR_COLUMN_LEN
      // }
      isChangeCls () {
          if (typeof this.titleField[0] === 'object' || typeof this.titleField[0] === 'number') {
              return this.titleFieldLen > CTR_COLUMN_LEN
          } else {
           return this.titleFieldLen < CTR_COLUMN_LEN
          }
      }
    },

    methods: {
      confirm () {
        this.submitFc(this.renderData, this)
      },
      showPopup () {
        this.isShowPopup = true
      },
      // 关闭弹框
      closePopup () {
        this.isShowPopup = false
        this.readonly = false
        this.renderData = {}
      },
      _changeVal (v, k) {
        this.renderData[k] = v
      },
      // 表格的数据
      _initData () {
        this._initRenderData()
      },
      // r是一个对象
      _initRenderData () {
        // 生成一个初始对象

        let newRenderData = {}
          if (this.titleField.title) {
               newRenderData = this.titleField.info.reduce((r, k) => {
                // 防止空白占位符
                if (k === '') {
                  return r
                }
                return Object.assign({}, r, {
                  [k]: ''
                })
              }, {})
          } else {
               newRenderData = this.titleField.reduce((r, k) => {
                // 防止空白占位符
                if (k === '') {
                  return r
                }
                return Object.assign({}, r, {
                  [k]: ''
                })
              }, {})
          }

        this.renderData = Object.assign({}, newRenderData, this.renderData)
      }

    },
    render () {
      console.log(this)

      const { titleField, renderData, readonly, isChangeCls } = this
      console.log(titleField)
      console.log(renderData)
      return (

        <el-dialog
          visible={this.isShowPopup}
          width={isChangeCls ? '550px' : '900px'}
          beforeClose={this.closePopup}
          class={{}}
        >
              <div>

                      <div>

                            <div class="dcommonpopup">
                              <el-form
                                label-width="152px"
                                label-suffix="："
                                inline
                              >
                               <el-form-item label={titleField[0].title} class="form-box1">

                                  {this._renderInputCtr(titleField[0].info, renderData)}
                               </el-form-item>

                               <div class="form-Box">
                                  <div class="form-box2">
                                      <div><span>{titleField[1].title}</span></div>
                                      <div>
                                         {this._renderReadonlyCtr(titleField[1].info, renderData)}
                                      </div>
                                  </div>
                                  <div class="form-box3" >
                                      <div><span>{titleField[2].title}</span></div>
                                      <div>
                                         {this._renderReadonlyCtr(titleField[2].info, renderData)}
                                      </div>
                                  </div>
                               </div>
                               <el-form-item label={titleField[3].title} class="form-box4">

                                  {this._renderInputCtr(titleField[3].info, renderData)}
                               </el-form-item>
                              </el-form>
                            </div>
                       </div>

          </div>

          <div slot="footer">
            {readonly
              ? null
              : <el-button onClick={this.confirm}>提 交</el-button>}
            <el-button onClick={this.closePopup}>关 闭</el-button>
          </div>
        </el-dialog>
              )
    }
  }
  //  this._renderInputCtr(titleField[0].info, renderData)
</script>
<style lang="scss" scoped>
   .dcommonpopup{
       /* border:1px solid #ececec; */
       margin:10px 0px;
       padding-top:15px;
       display:flex;
       flex-direction: column;
       .form-box1{
         display:flex;
         height:50px;
         width: 850px;
       }
       .form-Box{
          display: flex;
          padding: 10px 0 10px;
          border-top: 1px solid #ccc;
          border-bottom:1px solid #ccc;
          margin-bottom: 10px;
                .form-box2{
              display:flex;
              flex-direction: column;
              height:372px;
              flex-basis: 450px;
              border-right: 1px solid #ccc;
            }
            .form-box3{
              display:flex;
              flex-direction: column;
              height:372px;
              width: 450px;
              padding-left: 20px;
            }
       }

   }
</style>
