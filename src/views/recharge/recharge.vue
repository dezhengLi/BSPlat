
<script>
export default {
    data: function() {
        return {
            isChangeCls: true
        }
    },
//       created () {
//       this._getMerchantInfo()
//   },
//     methods:{
//         async _getMerchantInfo(){
//             this.$commonPopup({

//                 titleField: ['AuditStatus', 'TransferMethod', 'BankSerial', 'Remark'],
//             })
//         }
//     }

    render () {
        return (
        <el-dialog
          visible={this.isShowPopup}
          width='550px'
          beforeClose={this.closePopup}
          class={{'c-common--popup': true}}
        >
          <el-form
            label-width="150px"
            label-suffix="："
            inline
          >

              <el-form-item label="活动名称" label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="on"></el-input>
              </el-form-item>

          </el-form>
          <div slot="footer">

             <el-button >提 交</el-button>
            <el-button >关 闭</el-button>
          </div>
        </el-dialog>
        )
    }
}
</script>
