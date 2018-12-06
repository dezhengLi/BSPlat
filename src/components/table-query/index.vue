<script>
// 开始时间和结束时间
  import {INPUT_INITDATA} from 'common/config/constants'
  import queryCtrMixin from 'common/mixins/queryCtrMixin'

  export default {
    mixins: [queryCtrMixin],
    props: {
      pr: {
        type: String,
        default: '0'
      },
      queryTitle: {
        type: Array,
        default: () => ([])
      },
      initData: {
        type: Array,
        default: () => ([])
      }
    },
    data () {
      return {
        queryData: null,
        pickerOptions: null
      }
    },
    created () {
      this._initQueryData()
      this._initPickerOptions()
    },
    methods: {
      // 查询方法
      emitQuery () {
        this.$emit('handleQuery', this.queryData)
      },
      // 请求的数据
      _initQueryData () {
        console.log(this.initData)
        let propertyInitData = Object.assign({}, INPUT_INITDATA, this.initData)
        console.log(propertyInitData)
        // c代表queryTitle
        this.queryData = Object.assign({}, this.queryTitle.reduce((p, c) => (
          Object.assign({}, p, {
            [c]: propertyInitData[c] || ''
          })
        ), {}))
        console.log(this.queryData)
        // 给表格的参数内容
        this.$emit('exportQuery', this.queryData)
      },
      // 时间
      _initPickerOptions () {
        let queryArr = this.queryTitle
          .filter(key => key.match(/date|time/i))
          .sort()
        this.pickerOptions = Object.assign({}, {
          [queryArr[1]]: {
            disabledDate: time => {
              return time > this.queryData[queryArr[0]]
            }
          },
          [queryArr[0]]: {
            disabledDate: time => {
              return time < this.queryData[queryArr[1]]
            }
          }
        })
      },
      _changeVal (val, key) {
        this.queryData[key] = val
      }
    },
    render () {
      const { pr, queryTitle, queryData, pickerOptions } = this
      return (
        <div class="c-tablequery--container">
          <el-form style={{ paddingRight: pr }} label-width="120px" class="form-box">
            {this._renderInputCtr(queryTitle, queryData, pickerOptions, true)}
            <el-form-item label-width="50px">
              <el-button onClick={this.emitQuery}>查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      )
    }
  }
</script>

<style lang="scss">
  @import "~common/style/variable.scss";
  @import "~common/style/mixin.scss";
  .c-tablequery--container {
    .form-box {
      display: flex;
      flex-flow: row wrap;
      padding-top: 22px;
      @include querybox;
    }
    .el-form-item {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
</style>
