<template lang="pug">
  div(class="homecollect")
    base-info(:data="merchantInfo")
    data-collect(ref="dataCollect")
    data-sum-box(:merchant-recent="MerchantRecentSum")
</template>

<script>
  import { mapMutations } from 'vuex'
  import { BaseInfo, DataCollect, DataSumBox } from './components'
  import { getHomeInfo } from 'api/home'
  import requestMixin from 'common/mixins/requestMixin'
  import * as types from 'src/store/mutations-type'
  import { ERR_OK } from '../../common/config/api.config'

  export default {
    mixins: [requestMixin],
    components: {DataSumBox, BaseInfo, DataCollect},
    data () {
      return {
        merchantInfo: {},
        MerchantRecentSum: []

      }
    },
    created () {
      this._initDataRender()
    },
    methods: {
      async _initDataRender () {
        // const rsp = await Promise.all([getHomeInfo(), getCollectData()])
        this.setGlobalLoading(true)

        const {code, data, msg} = await getHomeInfo()
        this.setGlobalLoading(false)
        this._$queryMessage({code, msg})
        if (code === ERR_OK) {
          this.merchantInfo = data['MerchantInfo']

          this.MerchantRecentSum = data['MerchantRecentSum']
          this.$refs.dataCollect._requestDataDispose(data['MerchantRecentSum'][0])
        }
      },
      ...mapMutations({
        setGlobalLoading: types.SET_GLOBAL_LOADING
      })
    }
  }
</script>
