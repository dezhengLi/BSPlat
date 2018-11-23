<template>
    <div class="pay-message">
        <h3>支付通道信息</h3>
        <div>
            <el-table
                :data="ShowMessagedata"
                style="width: 100%"
                height="500px">
                <el-table-column v-for="(item,indexs) in info" :key="indexs"
                    :prop="item.name"
                    :label='item.label'
                    width="168">
                </el-table-column>
            </el-table>
            <el-pagination
                :current-page.sync="page"
                :page-size="PAGE_SIZE"
                :total="PayMessagedata.RowCount"
                layout="total, prev, pager, next, jumper"
            />
        </div>
    </div>
</template>
<script>
    const PAGE_SIZE = 11
    export default {
      props: {
            PayMessagedata: {
            type: Object,
            default: () => ({
                 PayTypeInfoList: [],
                 RowCount: 0
                })
          }
      },
      data() {
        return {
            info: [
            {
            name: 'MerchantID',
            label: '商户编号'
            }, {
            name: 'CusBankName',
            label: '渠道名称'
            }, {
            name: 'PayTypeName',
            label: '支付类型名称'
            }, {
            name: 'PayType',
            label: '支付类型'
            }, {
            name: 'ArrivalWay',
            label: '到账方式'
            }, {
            name: 'LessAmount',
            label: '单笔最小限额'
            }, {
            name: 'MaxAmount',
            label: '单笔最大限额'
            }, {
            name: 'MaxTotalAmount',
            label: '单日限额'
            }, {
            name: 'MoneyFee',
            label: '手续费'
            }, {
            name: 'FeeMode',
            label: '计费方式'
            }],
            page: 1,
            PayTypeInfoList: []

        }
      },
     created () {
      this.PAGE_SIZE = PAGE_SIZE
     },
      computed: {
          // 每一页内容的数据渲染
          ShowMessagedata() {
             const result = []
              if (this.PayTypeInfoList.length === 0) {
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
            let cd = this.PayTypeInfoList[start]
            if (!cd) {
                break
            }
            result.push(cd)
            }
            return result
            }
       },
    // 这是实现的第二种方式
    //   methods:{
    //       Showdata(){
    //          const result = []
    //         //  console.log(this.PayMessagedata)
    //         //  console.log(this.PayMessagedata.PayTypeInfoList)
    //         //  this.PayTypeInfoList  = this.PayMessagedata.PayTypeInfoList
    //          console.log(this.PayTypeInfoList)
    //          console.log(this.PayTypeInfoList.length)
    //           if (this.PayTypeInfoList.length ===0) {
    //             return result
    //             }
    //         // if(this.PayTypeInfoList===undefined){

    //         //     return result

    //         // }
    //         const page = this.page
    //         let start = 0
    //         let end = PAGE_SIZE
    //         if (page > 1) {
    //         start = PAGE_SIZE * (page - 1)
    //         end = PAGE_SIZE * page
    //         }
    //         for (; start < end; start++) {
    //         let cd = this.PayTypeInfoList[start]
    //         console.log(!cd)
    //         if (!cd) {
    //             break
    //         }
    //         result.push(cd)

    //         }
    //         console.log(result)
    //         return result
    //         }
    //   },
    // 侦查父组件传过来的值赋值
      watch: {
          PayMessagedata(newdata) {
              this.PayTypeInfoList = newdata.PayTypeInfoList
          }
      }
 }
</script>
<style scoped lang="scss">
@import "~common/style/variable.scss";
@import "~common/style/mixin.scss";
.pay-message {
  @include querybox;
  height: 535px;

}
</style>
