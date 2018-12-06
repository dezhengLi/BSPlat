<script>
  import queryCtrMixin from 'common/mixins/queryCtrMixin'
  import { queryBalanceApi ,otherBalanceApi,queryDBbalanceApi} from 'api/add-popups'
  import { ERR_OK } from '../../common/config/api.config'
  import requestMixin from 'common/mixins/requestMixin'
  const CTR_COLUMN_LEN = 8

  export default {
    mixins: [queryCtrMixin,requestMixin],
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
    data () {
      return {
        isShowPopup: false,
        queryBalanceData:{},
        queryDBbalanceData:{}
      }
    },
    computed: {
      validateRole () {
        return [].concat(this.validates)
      },
      // 头部字段的个数
      titleFieldLen() {
          return this.titleField.length
      },
      // 判断头部字段的个数，大于8个选择宽度大的弹框
      // isChangeCls () {
      //     if (typeof this.titleField[0] === 'object' || typeof this.titleField[0] === 'number') {
      //         return this.titleFieldLen > CTR_COLUMN_LEN
      //     } else {
      //      return this.titleFieldLen < CTR_COLUMN_LEN
      //     }
      // }
    },
    methods: {
     async queryBalance(){
          if(this.renderData.MerchantID!=''){
                const {data,code,msg}= await queryBalanceApi(this.renderData)
                  if(code === ERR_OK){
                        this.queryBalanceData=data.CurrentBalanceArray[0]
                      }else{
                        this._$queryMessage({code, msg})
                  }
          }else{
            this._$queryMessage({msg:"商户编号不能为空"})
             return false
          }         
      },
      async queryDBbalance(){
            if(this.renderData.StoreSerial!=''){
                const {data,code,msg}= await otherBalanceApi(this.renderData)
                const result = await queryDBbalanceApi(this.renderData) 
                if(code === ERR_OK){
                        this.queryBalanceData=data.CurrentBalanceArray[0]
                        this.queryDBbalanceData=result.data.WithDrawBankInfo
                      }else{
                        this._$queryMessage({code, msg})
                      }
            }else{
                this._$queryMessage({msg:"门店编号不能为空"})
                 return false
            }   
      },
      confirm () {
        if(this.renderData.WithdrawalAmount==""){
                         console.log(15)
                        this._$queryMessage({ msg:"提现金额:金额输入无效或大于可提现金额"})
                        this.showPopup ()
                        return false
                    }else if(this.renderData.WithdrawalAmount>this.queryBalanceData.AvailableBalance){
                        console.log(10)
                        this._$queryMessage({ msg:"提现金额:金额输入无效或大于可提现金额"})
                        this.showPopup ()
                        return false
                    }else if(this.queryBalanceData.AvailableBalance==undefined){
                        console.log(12)
                        this._$queryMessage({ msg:"提现金额:金额输入无效或大于可提现金额"})
                        this.showPopup ()
                        return false
                    }
        this.submitFc(this.renderData, this)
        this.closePopup()          
      },
      showPopup () {
        this.isShowPopup = true
      },
      // 关闭弹框
      closePopup () {
        this.isShowPopup = false
        this.readonly = false
        this.renderData = {}
        this.queryBalanceData={},
        this.queryDBbalanceData={}
      },
      _changeVal (v, k) {
        console.log(this.renderData)
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
          if (typeof this.titleField[0] === 'object' || typeof this.titleField[0] === 'number') {
               for(let i=0;i<this.titleField.length;i++){
                        const newData = this.titleField[i].info.reduce((r, k) => {
                        // 防止空白占位符
                        if (k === '') {
                          return r
                        }
                        return Object.assign({}, r, {
                          [k]: ''
                        })
                      }, {})
                 newRenderData=Object.assign({},newData,newRenderData)
              }
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
      const { titleField, renderData, readonly, isChangeCls,queryBalanceData,queryDBbalanceData } = this
      return (
        <el-dialog
          visible={this.isShowPopup}
          width='900px'
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
                                      <div class='form-icon'><span>{titleField[1].title}</span>
                                           <i class="el-icon-refresh" onClick={()=>this.queryBalance()}></i>
                                      </div>
                                      <div>
                                         {this._renderReadonlyCtr(titleField[1].info, queryBalanceData  )}
                                      </div>
                                  </div>
                                  <div class="form-box3" >
                                      <div class='form-icon'><span>{titleField[2].title}</span></div>
                                      <div>
                                         {this._renderReadonlyCtr(titleField[2].info, queryDBbalanceData)}
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
           <el-button onClick={this.confirm}>提 交</el-button>
           <el-button onClick={()=>this.queryDBbalance()}>查询</el-button>
          </div>
        </el-dialog>
              )
    }
  }  
</script>
<style lang="scss" scoped>
   .dcommonpopup{
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
              height:420px;
              flex-basis: 450px;
              border-right: 1px solid #ccc;
                    .form-icon{
                      margin:10px 0;                     
                          span{
                            font-weight: bold;
                            font-size: 15px;
                            line-height: 25px;
                          }
                          i{
                            font-size:25px;
                            color:#0083c9;
                            margin-left:300px;
                            cursor: pointer;
                          }
                    }             
            }
            .form-box3{
              display:flex;
              flex-direction: column;
              height:420px;
              width: 450px;
              padding-left: 20px;
                  .form-icon{
                      margin:10px 0 20px;                     
                          span{
                            font-weight: bold;
                            font-size: 15px;
                          }
                    }
            }           
       }
       .form-box4{
          .el-form-item__content{
               div{
                 &:nth-child(1){
                   margin-bottom: 10px;
                 }
               }
          }
       }

   }
</style>
