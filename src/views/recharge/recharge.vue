<template>

</template>
<script>
export default {
      created () {
      this._getMerchantInfo()
  },
    methods: {
        async _getMerchantInfo() {
            this.$commonPopup({

                titleField: ['AuditStatus', 'TransferMethod', 'BankSerial', 'Remark']
            })
        }
    }
}
</script>
