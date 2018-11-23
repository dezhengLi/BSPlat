import Vue from 'vue'
import Router from 'vue-router'
import * as types from 'common/config/privilege.types'
import {privilegeOr} from 'common/js/utils'

Vue.use(Router)

// {
//   path: '/about',
//     name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }

export const routerMap = [{
  path: '/',
  name: 'Layout',
  redirect: 'collect',
  component: () => import('views/layout/layout'),
  children: [{
    path: 'collect',
    component: () => import('views/home/home')
  }, {
    path: encodeURIComponent('/角色管理'),
    component: () => import('views/role-manage/role-manage'),
    privilege: privilegeOr([types.RoleInfo_Query, types.RoleInfo_Add, types.RoleInfo_Modify])
  }, {
    path: encodeURIComponent('/用户管理'),
    component: () => import('views/user-manage/user-manage'),
    privilege: privilegeOr([types.UserInfo_Query, types.UserInfo_Add, types.UserInfo_Modify, types.MerchantPayPWD_Reset, types.UserInfo_Delete])
  }, {
    path: encodeURIComponent('/员工管理'),
    component: () => import('views/staff-manage/staff-manage'),
    privilege: privilegeOr([types.StaffInfo_Query, types.StaffInfo_Add, types.StaffInfo_Modify, types.StaffInfo_Delete])
  }, {
    path: encodeURIComponent('/商户管理'),
    component: () => import('views/merchant-manage/merchant-manage'),
    privilege: privilegeOr([types.MerchantInfoList_Query, types.MerchantInfo_Register, types.MerchantInfo_Modify, types.MerchantPayPwd_Modify, types.MerchantPayPWD_Reset, types.MerchantInfo_Cancel, types.MerchantInfo_ToEmail])
  }, {
    path: encodeURIComponent('/门店管理'),
    component: () => import('views/store-manage/store-manage'),
    privilege: privilegeOr([types.StoreInfo_Query, types.StoreInfo_Add, types.StoreInfo_Modify, types.StorePayPwd_Modify, types.StorePayPWD_Reset, types.Store_ToEmail])
  }, {
    path: encodeURIComponent('/提现管理'),
    component: () => import('views/withdraw-manage/withdraw-manage'),
    privilege: privilegeOr([types.MerchantWithdrawApp_Query, types.MerchantWithdrawApp_Add, types.MerchantWithdrawApp_Confirm])
  }]
}]

export default new Router({
  routes: [
    { path: '/login', component: () => import(/* webpackChunkName: "login" */ 'views/login/login.vue') },
    { path: '/404', component: () => import(/* webpackChunkName: "404" */ 'views/404.vue') },
    {
      path: '/',
      name: 'Layout',
      redirect: 'collect',
      component: () => import('views/layout/layout'),
      children: [{
        path: 'collect',
        component: () => import('views/home/home')
      }, {
        path: encodeURIComponent('/角色管理'),
        component: () => import('views/role-manage/role-manage'),
        privilege: privilegeOr([types.RoleInfo_Query, types.RoleInfo_Add, types.RoleInfo_Modify])
      }, {
        path: encodeURIComponent('/用户管理'),
        component: () => import('views/user-manage/user-manage'),
        privilege: privilegeOr([types.UserInfo_Query, types.UserInfo_Add, types.UserInfo_Modify, types.MerchantPayPWD_Reset, types.UserInfo_Delete])
      }, {
        path: encodeURIComponent('/员工管理'),
        component: () => import('views/staff-manage/staff-manage'),
        privilege: privilegeOr([types.StaffInfo_Query, types.StaffInfo_Add, types.StaffInfo_Modify, types.StaffInfo_Delete])
      }, {
        path: encodeURIComponent('/商户基本信息'),
        component: () => import('views/merchant-basicInfo/merchant-basicInfo'),
        privilege: privilegeOr([types.MerchantInfo_Query])
      }, {
        path: encodeURIComponent('/商户管理'),
        component: () => import('views/merchant-manage/merchant-manage'),
        privilege: privilegeOr([types.MerchantInfoList_Query, types.MerchantInfo_Register, types.MerchantInfo_Modify, types.MerchantPayPwd_Modify, types.MerchantPayPWD_Reset, types.MerchantInfo_Cancel, types.MerchantInfo_ToEmail])
      }, {
        path: encodeURIComponent('/门店管理'),
        component: () => import('views/store-manage/store-manage'),
        privilege: privilegeOr([types.StoreInfo_Query, types.StoreInfo_Add, types.StoreInfo_Modify, types.StorePayPwd_Modify, types.StorePayPWD_Reset, types.Store_ToEmail])
      }, {
        path: encodeURIComponent('/提现管理'),
        component: () => import('views/withdraw-manage/withdraw-manage'),
        privilege: privilegeOr([types.MerchantWithdrawApp_Query, types.MerchantWithdrawApp_Add, types.MerchantWithdrawApp_Confirm])
      }, {
        path: encodeURIComponent('/充值管理'),
        component: () => import('views/recharge-manage/recharge-manage'),
        privilege: privilegeOr([types.MerchantRechargeApp_Query, types.MerchantRechargeApp_Add])
      }, {
        path: encodeURIComponent('/商户参数管理'),
        component: () => import('views/merchant-param-manage/merchant-param-manage'),
        privilege: privilegeOr([types.MerchantParamConfig_Query, types.MerchantParamConfig_Modify])
      }, {
        path: encodeURIComponent('/系统参数管理'),
        component: () => import('views/sysparam-manage/sysparam-manage'),
        privilege: privilegeOr([types.SystemParamConfig_Query, types.SystemParamConfig_Modify])
      }, {
        path: encodeURIComponent('/支付通道管理'),
        component: () => import('views/paypass-manage/paypass-manage'),
        privilege: privilegeOr([types.MerchantPayInfo_Query, types.MerchantPayInfo_Add, types.MerchantPayInfo_Modify, types.MerchantPayInfo_Delete])
      }, {
        path: encodeURIComponent('/渠道信息管理'),
        component: () => import('views/passInfo-manage/passInfo-manage'),
        privilege: privilegeOr([types.CusBankInfo_Query, types.CusBankInfo_Modify, types.CusBankBalance_Query])
      },{
        path: encodeURIComponent('/渠道参数管理'),
        component: () => import('views/passparam-manage/passparam-manage'),
        privilege: privilegeOr([types.BankParamConfig_Query, types.BankParamConfig_Modify])
      },{
        path: encodeURIComponent('/签到签退管理'),
        component: () => import('views/signInout-manage/signInout-manage'),
        privilege: privilegeOr([types.BankSignInOut_Query, types.BankSignInOut_Modify, types.BankForceSignIn, types.BankForceSignOut])
      },{
        path: encodeURIComponent('/子商户管理'),
        component: () => import('views/submerchant-manage/submerchant-manage'),
        privilege: privilegeOr([types.SubMerchantManage_Query, types.SubMerchantManage_Add, types.SubMerchantManage_Modify, types.SubMerchantManage_Delete])
      },{
        path: encodeURIComponent('/当前余额查询'),
        component: () => import('views/currentbalance-query/currentbalance-query'),
        privilege: privilegeOr([types.MerchantCurrentBalance_Query])
      },{
        path: encodeURIComponent('/历史余额查询'),
        component: () => import('views/historybalance-query/historybalance-query'),
        privilege: privilegeOr([types.MerchantHisBalance_Query])
      },{
        path: encodeURIComponent('/充值'),
        component: () => import('views/recharge/recharge'),
        privilege: privilegeOr([types.MerchantRecharge_Add])
      },{
        path: encodeURIComponent('/汇总数据查询'),
        component: () => import('views/collectdata-query/collectdata-query'),
        privilege: privilegeOr([types.MerchantSummaryData_Query])
      },{
        path: encodeURIComponent('/订单流水查询'),
        component: () => import('views/orderflow-query/orderflow-query'),
        privilege: privilegeOr([types.MerchantTradeDetails_Query, types.OrderResult_Synchronise, types.OrderResult_Reissue, types.SingleOrder_ReturnRemittance, types.PaymentManage_Tuikuang, types.SerailOrder_Tracking])
      },{
        path: encodeURIComponent('/单笔订单查询'),
        component: () => import('views/singleorder-query/singleorder-query'),
        privilege: privilegeOr([types.MerchantSingleDetail_Query, types.OrderResult_Synchronise, types.OrderResult_Reissue, types.SingleOrder_ReturnRemittance,
          types.PaymentManage_Tuikuang, types.Order_Tracking])
      },{
        path: encodeURIComponent('/代付管理'),
        component: () => import('views/payment-manage/payment-manage'),
        privilege: privilegeOr([types.PaymentManage_Query, types.Merchant_Payment, types.PaymentManage_Audit])
      },{
        path: encodeURIComponent('/密钥管理'),
        component: () => import('views/keymanage-ment/keymanage-ment'),
        privilege: privilegeOr([types.MerchantKeyInfo_Query, types.MerchantWordKeyInfo_Modify, types.MerchantKeyInfo_Modify])
      },{
        path: encodeURIComponent('/修改支付密码'),
        component: () => import('views/pay-password/pay-password'),
        privilege: privilegeOr([types.MerchantPayPwdInfo_Modify])
      },{
        path: encodeURIComponent('/修改代付审核密码'),
        component: () => import('views/payaudit-password/payaudit-password'),
        privilege: privilegeOr([types.MerchantPayAuditPassword_Modify])
      }]
    }, { path: '*', redirect: '/404' }
  ]
})
