<template>
  <!-- <div class="c-table--container">
    <slot name="panel" />
    <el-table
      ref="table"
      :data="showData"
      height="550px"
      class="c-table-content"
      @row-click="rowClick"
    >
      <el-table-column
        v-for="key in tableTitle"
        :key="key"
        :prop="key"
        :label="getLabel(key)"
        :formatter="formatterContent"
      />
      <div slot="empty">
        <h3 style="font-size: 45px; font-weight: bold;">空</h3>
      </div>
    </el-table>
    <el-pagination
      :current-page.sync="page"
      :page-size="PAGE_SIZE"
      :total="tableData.count"
      layout="total, prev, pager, next, jumper"
      class="c-table--pagination"
      @current-change="paginationCurrentChange"
    />
  </div> -->
    <div class="c-table--container">
    <slot name="panel" />
    <el-table
      ref="table"
      :data="showData"
      height="550px"
      class="c-table-content"
      @row-click="rowClick"
    >
      <el-table-column
        v-for="key in tableTitle"
        :key="key"
        :prop="key"
        :label="getLabel(key)"
        :formatter="formatterContent"
      />
      <div slot="empty">
        <h3 style="font-size: 45px; font-weight: bold;">空</h3>
      </div>
    </el-table>
    <slot name='sum'></slot>
    <el-pagination
      :current-page.sync="page"
      :page-size="PAGE_SIZE"
      :total="tableData.count"
      layout="total, prev, pager, next, jumper"
      class="c-table--pagination"
      @current-change="paginationCurrentChange"
    />

  </div>
</template>

<script>

  import { TST_NAME, TST_OPTIONS } from 'common/config/constants'

  const PAGE_SIZE = 30
  const DATA_REQ_SIZE = 60
  const ROW_ACTIVE = 'active'
  export default {
    props: {
      tableData: {
        props: Object,
        default: () => ({
          requestData: [],
          count: 0
        })
      },
      tableTitle: {
        props: Array,
        default: () => ([])
      }
    },
    data () {
      return {
        page: 1
      }
    },
    computed: {
      // 控制一次显示的内容数
      showData () {
        const result = []
        console.log(this.tableData)
        const { requestData } = this.tableData
        if (requestData.length === 0) {
          return result
        }
        const page = this.page
        let start = 0
        let end = PAGE_SIZE
        if (page > 1) {
          start = PAGE_SIZE * (page - 1)
          end = PAGE_SIZE * page
        }
        for (; start < end; start++) {
          let cd = requestData[start]
          if (!cd) {
            break
          }
          result.push(cd)
        }
        console.log(result)
        return result
      }
    },

    created () {
      this.PAGE_SIZE = PAGE_SIZE
    },
    methods: {
      // 点击内容 row点击的那一个div，path是一个冒泡事件
      rowClick (row, event) {
        console.log(event)
        const path = event.path
        console.log(path)
        console.log(row)
        for (let i = 0, l = path.length; i < l; i++) {
          if (path[i].nodeName === 'TR') {
            this._toggleActiveCls(path[i], row)
            break
          }
        }
      },
      // 点击内容的切换class：'active'，获取内容值
      _toggleActiveCls (el, row) {
        let elCsList = el.classList
        if (elCsList.contains(ROW_ACTIVE)) {
          elCsList.remove(ROW_ACTIVE)
          this.$emit('activeData')
        } else {
          this._clearRowActiveCls()
          elCsList.add(ROW_ACTIVE)
          this.$emit('activeData', row)
        }
      },
      _clearRowActiveCls () {
        [...this.$refs.table.$el.querySelectorAll('tr.active')].forEach(function (el) {
          el.classList.remove(ROW_ACTIVE)
        })
      },
      paginationCurrentChange () {
        this.updatePageData()
      },
      getLabel (key) {
        return TST_NAME[key] || key
      },
      formatterContent (row, column, cellValue, index) {
        const property = column.property
        const options = TST_OPTIONS[property]
        return (options && options[cellValue]) || cellValue
      },
      updatePageData () {
        const { count, requestData } = this.tableData
        let dataSet = new Set(requestData)
        let len = dataSet.delete(undefined) && dataSet.size
        let page = this.page
        if (len < count && !requestData[(page - 1) * PAGE_SIZE]) {
          let PageID = Math.ceil(page * PAGE_SIZE / DATA_REQ_SIZE)
          this.$emit('dataReq', PageID)
        }
      }

    }
  }
</script>

<style lang="scss">
  @import "~common/style/variable.scss";
  @import "~common/style/mixin.scss";
  .c-table--container {
    box-sizing: border-box;
    @include querybox;
    .el-table__row {
      cursor: pointer;
      &:hover,
      &.active {
        td {
          background-color: #f1d987!important;
        }
      }
    }
  }
</style>
