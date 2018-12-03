<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
</template>

<script>
export default {
     data() {
      return {
        activeIndex: '1'
       
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(keyPath)
        console.log(key)
      }
    }
    // data: function() {
    //     return {
    //         isChangeCls: true
    //     }
    // },
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

//     render () {
//         return (
//         <el-dialog
//           visible={this.isShowPopup}
//           width='550px'
//           beforeClose={this.closePopup}
//           class={{'c-common--popup': true}}
//         >
//           <el-form
//             label-width="150px"
//             label-suffix="："
//             inline
//           >

//               <el-form-item label="活动名称" label-width="formLabelWidth">
//                     <el-input v-model="form.name" auto-complete="on"></el-input>
//               </el-form-item>

//           </el-form>
//           <div slot="footer">

//              <el-button >提 交</el-button>
//             <el-button >关 闭</el-button>
//           </div>
//         </el-dialog>
//         )
//     }
}
</script>
