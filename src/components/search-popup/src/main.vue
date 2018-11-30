<template>
  <el-dialog :visible.sync="isShowPopup" width="620px" class="search__popup">
    <div class="popup__query">
      <el-select v-model="searchKey" value="string" class="select">
        <el-option
          v-for="item in popupQuery"
          :key="item"
          :label="getLabel(item)"
          :value="item"
        />
      </el-select>
      <el-input v-model="searchVal" class="input"/>
      <el-button @click="queryData" type="primary">查 询</el-button>
    </div>
    <div class="popup__content">
      <table-content :table-title="popupCont" :table-data="tableData" @activeData="getActiveData" @dataReq="dataReq" class="table__box"></table-content>
    </div>
    <div slot="footer">
      <el-button @click="confirm">确 定</el-button>
      <el-button @click="close">关 闭</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import queryComponent from 'common/mixins/queryComponentMixin'
  import requestMixin from 'common/mixins/requestMixin'
  import { getSearchPopupData } from 'api/search-popup'
  import store from 'src/store'

  export default {
    name: 'SearchPopup',
    mixins: [requestMixin, queryComponent],
    props: {
      popupQuery: {
        type: Array,
        default: () => ([])
      },
      popupCont: {
        type: Array,
        default: () => ([])
      },
      defaultQueryKey: {
        type: String,
        default: ''
      },
      defaultQueryVal: {
        type: String,
        default: ''
      },
      FunCode: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      isShowPopup: false,
      searchKey: '',
      searchVal: ''
    }),
    created () {
      this.$store = store
    },
    watch: {
      FunCode (newCode, oldCode) {
        if (newCode !== oldCode) {
          this._clearData()
        }
      }
    },
    methods: {
      confirm () {
        const { activeData } = this
        if (!activeData) {
          this.$message({
            type: 'error',
            message: '请选定数据'
          })
        }
        console.log(activeData)
        console.log(this.resolve)
        this.resolve(activeData)
        this.isShowPopup = false
      },
      close () {
        this.isShowPopup = false
      },
      // 请求查询数据
      queryData () {
        this.getQueryData(this._getQueryParams())
      },
      getFunKey (obj) {
        let field = Object.keys(obj).find(val => {
          return val.toLowerCase().search('array|list') !== -1
        })
        return field
      },
      initSearch () {
        console.log(this)
        const { defaultQueryKey, defaultQueryVal, popupQuery } = this
        this.searchKey = defaultQueryKey || popupQuery[0]
        this.searchVal = defaultQueryVal
        this.requestFunc = getSearchPopupData
        this.$nextTick(() => {
          this.isShowPopup = true
        })
      },
      _clearData () {
        this.tableData = {
          count: 0,
          requestData: []
        }
      },
      // 请求查询数据的参数
      _getQueryParams () {
        const { FunCode, searchKey, searchVal } = this
        return {
          FunCode,
          [searchKey]: searchVal
        }
      }
    }
  }
</script>

<style lang="scss">
  .search__popup {
    .popup__query{
      display: flex;
    }
    .select {
      width: 150px;
    }
    .table__box {
      margin: 15px 0 0 0;
    }
  }
</style>
