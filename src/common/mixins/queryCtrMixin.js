
import { SEARCH_POPUP, TST_OPTIONS } from 'common/config/constants'
import { inputTypes } from 'common/config/render-types.config'
import getLabelMixin from './labelMixin'

const { INPUT_INPUT, SEARCH_INPUT, TIME_INPUT, SELECT_INPUT, TEXT_AREA_INPUT } = inputTypes

export default {
  mixins: [getLabelMixin],
  props: {
    fieldConfig: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    // 点击可搜索的头部字段弹出的搜索框的方法
    activeSearchPopup (key) {
      const { popupQuery, popupCont, FunCode } = SEARCH_POPUP[key]
      if (!popupQuery) {
        return
      }
      // 调用搜索框search-popup里main.js里的方法
      this.$searchPopup({
        popupQuery,
        popupCont,
        FunCode
      }).then(params => {
        this._changeVal(params[key], key)
      })
    },
    _changeVal () {
      throw new Error('需要 _changeVal 函数来改变值的状态')
    },
    // 判断输入框类型
    _inputType (key) {
      let result = INPUT_INPUT
      if (SEARCH_POPUP[key]) {
        return SEARCH_INPUT
      } else if (key.toLocaleLowerCase().match(/time|date/)) {
        return TIME_INPUT
      } else if (TST_OPTIONS[key]) {
        return SELECT_INPUT
      } else if (key.match(/remark/ig)) {
        return TEXT_AREA_INPUT
      }
      return result
    },
    _textType (key) {
      return key.match(/pwd/ig)
        ? 'password'
        : 'text'
    },
    _renderInputCtr (queryTitle, queryData, pickerOptions, isAll) {
      console.log(this)
      const {_inputType, _textType, getValue, fieldConfig} = this
      return queryTitle.map((key) => {
        const type = _inputType(key)
        let result = null
        let val = queryData[key]
        if (key === '') {
          return <el-form-item />
        }
        if (fieldConfig[key] && fieldConfig[key].readonly) {
          result = <el-input value={getValue(key, val)} readonly/>
        } else if (type === INPUT_INPUT) {
          result = <el-input onChange={($event) => this._changeVal($event, key)} value={val} type={_textType(key)}/>
        } else if (type === SEARCH_INPUT) {
          result = (<el-input onChange={($event) => this._changeVal($event, key)} value={val}>
            <div slot="suffix" onClick={() => this.activeSearchPopup(key)}>
              <svg-icon class="searchIcon pointer" icon-class="search" />
            </div>
          </el-input>)
        } else if (type === SELECT_INPUT) {
          const options = TST_OPTIONS[key]
          const optionsKey = Object.keys(options)
          // val = isAll
          //   ? 'null'
          //   : val !== ''
          //     ? val
          //     : optionsKey[0]
          val = isAll
          ? val
          : val !== ''
            ? val
            : optionsKey[0]
          val = !isNaN(val) ? val.toString() : val
          // result = (
          //   <el-select v-model={val} onChange={($event) => this._changeVal($event, key)} value={val}>
          //     {isAll
          //       ? <el-option key="null" label="全部" value="null" />
          //       : null}
          //     {optionsKey.map(k => (
          //       <el-option key={k} label={options[k]} value={k} />
          //     ))}
          //   </el-select>
          // )
          result = (
            <el-select v-model={val} onChange={($event) => this._changeVal($event, key)} value={val}>
              {isAll
                ? <el-option key="" label="全部" value="" />
                : null}
              {optionsKey.map(k => (
                <el-option key={k} label={options[k]} value={k} />
              ))}
            </el-select>
          )
        } else if (type === TIME_INPUT && pickerOptions) {
              // } else if (type === TIME_INPUT) {
          result = (
            // <el-date-picker
            //   onInput={($event) => this._changeVal($event, key)}
            //   value={val}
            //   picker-options={pickerOptions[key]}
            //   type="datetime"
            // />
            <el-date-picker
            onInput={($event) => this._changeVal($event, key)}
            value={val}
            picker-options={pickerOptions[key]}
            type="datetime">

            </el-date-picker>
          )
        } else if (type === TEXT_AREA_INPUT) {
          result = <el-input type="textarea" row="3" onChange={($event) => this._changeVal($event, key)} value={val}></el-input>
        }
        return <el-form-item label={this.getLabel(key)}>{result}</el-form-item>
      })
    },
    _renderReadonlyCtr (queryTitle, queryData) {
      const { getValue } = this
      return queryTitle.map(k => (
        <el-form-item label={this.getLabel(k)}>
          <el-input value={getValue(k, queryData[k])} readonly/>
        </el-form-item>
    ))
    }
  }
}
