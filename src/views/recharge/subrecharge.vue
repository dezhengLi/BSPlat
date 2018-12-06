
<script>
import queryCtrMixin from 'common/mixins/queryCtrMixin'
export default {
    mixins: [queryCtrMixin],
    props:{
            titleField: {
            type: Array,
            default: () => ([])
        },
       initData: {
        type: Array,
        default: () => ([])
      }
    },
    data(){
        return{
           queryData: null,
           options: [1,2]
        }
    },
    created () {
      this._initQueryData()
      
      
    },
    methods: {
        recharge(){
           this.$emit('rechargeMoney', this.queryData)
        },
        _initQueryData () {
        let propertyInitData = Object.assign({}, this.initData)
        this.queryData = Object.assign({}, this.titleField.reduce((p, c) => (
          Object.assign({}, p, {
            [c]: propertyInitData[c] || ''
          })
        ), {}))
      },
      _changeVal (val, key) {
        this.queryData[key] = val
      }
    },
    render(){
     console.log(this)
         const { titleField, queryData, pickerOptions ,options} = this
        return(
            <div>
                  <el-form
                    label-width="152px"
                    label-suffix="：" 
                    >
                        <el-form-item >
                           <div class="recharge-Box">
                              {this._renderInputCtr(titleField,queryData)}
                            </div>
                        </el-form-item>
                        <el-form-item label="支付方式" class="recharge-type">
                            <el-select v-model="value" disabled placeholder="网银支付" value="">
                               {options.map(item=>(
                                   <el-option key={item} label="" value={item} />
                               ))}    
                            </el-select>
                        </el-form-item>   
                        <el-form-item>
                            <el-button type="primary" onClick={this.recharge}>充值</el-button>                     
                        </el-form-item> 
                    </el-form>
            </div>
        )
    }
}
</script>

<style lang="scss" scoped>
@import "~common/style/variable.scss";
@import "~common/style/mixin.scss";
  .roleManage-container{
      display: flex;
      justify-content: center;
      align-content: center;
      .password-box{
          margin-top:100px;
          .el-form-item__content{
              .recharge-Box{
                  margin-left:-152px;
                  .el-form-item{
                      margin-bottom: 10px;
                  }
              }
          }
          .recharge-type{
              margin-top:-20px;
          }
          
      }
  }

</style>