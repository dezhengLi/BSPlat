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
        default: () => ([])
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
        isShowPopup: false,
        pickerOptions: null
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
      titleFieldLen(){
          return this.titleField.length
      },
      // 判断头部字段的个数，大于8个选择宽度大的弹框
      // isChangeCls () {
      //   return this.titleFieldLen < CTR_COLUMN_LEN
      // }
      isChangeCls () {
          if(typeof this.titleField[0]=="object"||typeof this.titleField[0]=="number"){

              return this.titleFieldLen>CTR_COLUMN_LEN
          }else{
           
           return this.titleFieldLen < CTR_COLUMN_LEN
          }
        
      }
    },
      created () {
      this._initPickerOptions()
    },
    //    beforeUpdate () {
    //   this._initPickerOptions()
    // },
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
        // const newRenderData = this.titleField.reduce((r, k) => {
        //   // 防止空白占位符
        //   if (k === '') {
        //     return r
        //   }
        //   return Object.assign({}, r, {
        //     [k]: '' 
        //   })
        // }, {})
        let newRenderData ={}
          if(this.titleField.title){
               newRenderData = this.titleField.info.reduce((r, k) => {
                // 防止空白占位符
                if (k === '') {
                  return r
                }
                return Object.assign({}, r, {
                  [k]: ''
                })
              }, {})
          }else{
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
      },
      //
       _initPickerOptions () {
         console.log(this.renderData)
         console.log(this.titleField)
        let queryArr = this.titleField
          .filter(key => key.match(/date|time/i))
          .sort()
        this.pickerOptions = Object.assign({}, {
          [queryArr[1]]: {
            disabledDate: time => {
              return time > this.renderData[queryArr[0]]
            }
          },
          [queryArr[0]]: {
            disabledDate: time => {
              return time < this.renderData[queryArr[1]]
            }
          }
        })
      }
    },
    render () {
      console.log(this)
      const { titleField, renderData, readonly, isChangeCls, pickerOptions } = this
       console.log(titleField)
       console.log(renderData)
      return (

        <el-dialog
          visible={this.isShowPopup}
          width={isChangeCls ? '550px' : '900px'}
          beforeClose={this.closePopup}
          class={{'c-common--popup': true, 'column--popup': isChangeCls}}
        >            
              <div>
             { typeof this.titleField[0]=="object"||typeof this.titleField[0]=="number"?
                    
                this.titleField.map(items=>{
                  return <div>
                            <div><span>{items.title}</span><span>:</span></div>
                            <div class="dcommonpopup">
                              <el-form
                                label-width="152px"
                                label-suffix="："
                                inline
                              >
                                {readonly
                                    ? this._renderReadonlyCtr(items.info, renderData)
                                    : this._renderInputCtr(items.info, renderData, pickerOptions)}
                              </el-form>
                            </div>
                          </div>
                }):                
                 <el-form
                    label-width="152px"
                    label-suffix="："
                    inline
                  >
                    {readonly
                        ? this._renderReadonlyCtr(titleField, renderData)
                        : this._renderInputCtr(titleField, renderData,pickerOptions)}
                  </el-form>                   
             }
          </div> 
          
          
          <div slot="footer">
            {readonly
              ? null
              : <el-button onClick={this.confirm}>提 交</el-button>}
            <el-button onClick={this.closePopup}>关 闭</el-button>
          </div>
        </el-dialog>

        // <el-dialog
        //   visible={this.isShowPopup}
        //   width={isChangeCls ? '550px' : '900px'}
        //   beforeClose={this.closePopup}
        //   class={{'c-common--popup': true, 'column--popup': isChangeCls}}
        // >
        //   <el-form
        //     label-width="150px"
        //     label-suffix="："
        //     inline
        //   >
        //     {readonly
        //         ? this._renderReadonlyCtr(titleField, renderData)
        //         : this._renderInputCtr(titleField, renderData,pickerOptions)}
        //   </el-form>
        //   <div slot="footer">
        //     {readonly
        //       ? null
        //       : <el-button onClick={this.confirm}>提 交</el-button>}
        //     <el-button onClick={this.closePopup}>关 闭</el-button>
        //   </div>
        // </el-dialog>
        //  <el-dialog
        //   visible={this.isShowPopup}
        //   width={isChangeCls ? '550px' : '900px'}
        //   beforeClose={this.closePopup}
        //   class={{'c-common--popup': true, 'column--popup': isChangeCls}}
        // > 
          
        //   {
        //     this.titleField.map(items=>{
        //        return <div>
        //                 <div><span>{items.title}</span><span>:</span></div>
        //                 <div class="dcommonpopup">
        //                   <el-form
        //                     label-width="150px"
        //                     label-suffix="："
        //                     inline
        //                   >
        //                     {readonly
        //                         ? this._renderReadonlyCtr(items.info, renderData)
        //                         : this._renderInputCtr(items.info, renderData, pickerOptions)}
        //                   </el-form>
        //                 </div>
        //               </div>
        //     })
        //   }

        //   <div slot="footer">
        //     {readonly
        //       ? null
        //       : <el-button onClick={this.confirm}>提 交</el-button>}
        //     <el-button onClick={this.closePopup}>关 闭</el-button>
        //   </div>
        // </el-dialog>
      )
    }
  }
</script>
<style scoped>
   .dcommonpopup{
       border:1px solid #ececec;
       margin:10px 0px;
       padding-top:15px;
   }
</style>
