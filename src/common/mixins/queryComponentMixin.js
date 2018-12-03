import { mapMutations } from 'vuex'
import TableQuery from 'components/table-query'
import TableContent from 'components/table-content'
import NavPanel from 'components/nav-panel'
import SumPanel from 'components/sum-panel'
import SumhPanel from 'components/sumh-panel'
import * as types from 'src/store/mutations-type'
import labelMixin from './labelMixin'
import { isOK } from 'api/utils'

export default {
  mixins: [labelMixin],
  components: { TableQuery, TableContent, NavPanel, SumPanel, SumhPanel},
  data () {
    return {
      historyQuery: {},
      tableData: {
        count: 0,
        requestData: [],
        otherData: [],
        objData:{}
      },
      activeData: null
    }
  },
  computed: {
    isActiveData () {
      return !!this.activeData
    }
  },
  methods: {
    isOK: isOK,
    // 共用的请求查询数据
    async getQueryData (params) {
      this.$store.commit(types.SET_GLOBAL_LOADING, true)
      console.log(params)
      // console.log(this.requestFunc(params))
      const { code, data, msg } = await this.requestFunc(params)
      console.log(data)
      this.$store.commit(types.SET_GLOBAL_LOADING, false)
      this._$queryMessage({ code, msg })
      console.log(this.FunKey)
      console.log(this.getFunKey)
      console.log(!this.FunKey && this.getFunKey)
      if (!this.FunKey && this.getFunKey) {
        this.FunKey = this.getFunKey(data)
      }
      // if (isOK(code)) {
      //   this.historyQuery = params
      //   this.tableData.requestData = data[this.FunKey]
      //   this.tableData.count = data['RowCount'] || data[this.FunKey].length
      // }
      if (isOK(code)) {
        this.historyQuery = params
        if (this.FunKey.length == 2) {
          this.tableData.requestData = data[this.FunKey[0]]
          // this.tableData.otherData = data[this.FunKey[1]]
           if(data[this.FunKey[1]].constructor===Array){
            this.tableData.otherData = data[this.FunKey[1]]
           }else{
            this.tableData.objData = data[this.FunKey[1]]
           }

          this.tableData.count = data['RowCount'] || data[this.FunKey[0]].length
        } else {
          this.tableData.requestData = data[this.FunKey]
          this.tableData.count = data['RowCount'] || data[this.FunKey].length
        }
      }
    },
    async updateData (params) {
      this.setGlobalLoading(true)
      const { data } = await this.requestFunc(params)
      this.setGlobalLoading(false)
      // const len = data[this.FunKey].length
      let len = null
      if (this.FunKey.length == 2) {
         len = data[this.FunKey[0]].length
         console.log(len)
      } else {
        len = data[this.FunKey].length
        console.log(len)
      }

      const { PageID, PageSize = 60 } = params
      // const dataAr = data[this.FunKey]
      let dataAr = []
      if (this.FunKey.length == 2) {
         dataAr = data[this.FunKey[0]]
      } else {
         dataAr = data[this.FunKey]
      }

      const start = (PageID - 1) * PageSize
      for (let i = 0; i < len; i++) {
        this.tableData.requestData[i + start] = dataAr[i]
      }
      this.tableData.requestData.push()
      this.tableData.count = data['RowCount'] || len
    },
    dataReq (PageID) {
      this.updateData(Object.assign({ PageID }, this.historyQuery))
    },
    getActiveData (row) {
      this.activeData = row
    },
    // nav-panel框里的类型点击
    triggerPanel (item) {
      const { fcName } = item
      // console.log(this[fcName])
      // console.log(this[fcName]())
      this[fcName] && this[fcName]()
      // this[item.fcName]()
      // console.log(this[item.fcName]())
    },
    ...mapMutations({
      setGlobalLoading: types.SET_GLOBAL_LOADING
    })
  }
}
