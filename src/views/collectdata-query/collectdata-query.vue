<template>
  <div class="roleManage-container">
    <table-query :query-title="queryTitle" @handleQuery="getCollectData"/>
    <DataCollect :CollectVal=this.collect></DataCollect>
    <div class="warning">
      <p class="text1">温馨提示</p>
      <p class="text2">支持所有商户的数据汇总查询，也可选择单个商户进行查询</p>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import * as types from 'src/store/mutations-type'
  import requestMixin from 'common/mixins/requestMixin'
  import queryComponentMixin from 'common/mixins/queryComponentMixin'
  import commonPanelMixin from 'common/mixins/common-panel-method.js'
  import {getcollectdata} from 'api/collectdata-query'
  import  DataCollect from './components/data-collect.vue' 
  import { ERR_OK } from '../../common/config/api.config'
  export default {
    mixins: [requestMixin, queryComponentMixin, commonPanelMixin],
    components: {DataCollect},
    created() {
      this.historyQuery = {}
      this._initData()
      },
     data(){
       return{
         collect:{}
       }
     },

     methods: {
          
        async getCollectData (params) {
            this.setGlobalLoading(true)
            const {code, data, msg} = await getcollectdata(params)
            this.setGlobalLoading(false)
            this._$queryMessage({code, msg})
            if (code === ERR_OK) {
              this.collect=data
              console.log(this.collect)
            }
          },
            
            ...mapMutations({
                setGlobalLoading: types.SET_GLOBAL_LOADING
              }),
           
            _initData() {
              this.queryTitle = ['StoreSerial', 'StartTime', 'EndTime', 'CusBankID','PayType','ExecuteType','CurrCode']
              }
      }
  }
 
</script>
<style lang="scss" scoped>
 .warning{
   margin-left:20px;
   .text1{
     margin-left: 10px;
     color:red;
     margin-bottom: 10px;
     font-size: 14px;
   }
   .text2{
     font-size: 14px;
   }
 }
</style>

   

