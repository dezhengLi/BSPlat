<template>
    <div class="roleManage-container">
        <MerchantInfo :Merchantdata="MerchantInfo"></MerchantInfo>
         <payMessage :PayMessagedata="PayTypeInfodata"></payMessage>
    </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  import { getMerchantInfo, getPayMessage} from 'api/merchant-basicInfo'
  import MerchantInfo from './components/merchant-info.vue'
  import payMessage from './components/pay-message.vue'
  import requestMixin from 'common/mixins/requestMixin'
  import * as types from 'src/store/mutations-type'
  import { ERR_OK } from '../../common/config/api.config'
export default {
  mixins: [requestMixin],
  components: {MerchantInfo, payMessage},
  data() {
    return {
      MerchantInfo: {},
      MerchantID: null,
      PayTypeInfodata: {}

    }
  },
  created () {
      this._getMerchantInfo()
  },
// mounted() {
//    this._getMerchantInfo()
// },
  methods: {
      async _getMerchantInfo() {
        // 弹出遮罩层
         this.setGlobalLoading(true)
         const {code, data, msg} = await getMerchantInfo()
        //  this.MerchantID = data.MerchantInfo.MerchantID
         const result = await getPayMessage({MerchantID: this.$store.state.user})

        //  console.log(result)
        //  this.PayTypeInfoList = result.data
         // 遮罩层setGlobalLoading   取消遮罩层
         this.setGlobalLoading(false)
         // 弹框查询成功
         this._$queryMessage({code, msg})
         if (code === ERR_OK) {
          this.MerchantInfo = data['MerchantInfo']
          this.PayTypeInfodata = result.data
        }
      },

      ...mapMutations({
        setGlobalLoading: types.SET_GLOBAL_LOADING
      })
  }
}
</script>
<style scoped lang="scss">

</style>
