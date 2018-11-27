import * as types from './privilege.types'
import {privilegeOr} from 'common/js/utils'

export default [
  {
    label: '系统设置',
    icon: 'example',
    children: [
      {
        label: '权限管理',
        icon: 'example',
        children: [
          {
            path: encodeURIComponent('/角色管理'),
            label: '角色管理',
            icon: 'example',
            privilege: privilegeOr([types.RoleInfo_Query, types.RoleInfo_Add, types.RoleInfo_Modify])
          },
          {
            path: encodeURIComponent('/用户管理'),
            label: '用户管理',
            icon: 'example',
            privilege: privilegeOr([types.UserInfo_Query, types.UserInfo_Add, types.UserInfo_Modify, types.MerchantPayPWD_Reset, types.UserInfo_Delete])
          },
          {
            path: encodeURIComponent('/员工管理'),
            label: '员工管理',
            icon: 'example',
            privilege: privilegeOr([types.StaffInfo_Query, types.StaffInfo_Add, types.StaffInfo_Modify, types.StaffInfo_Delete])
          }
        ]
      }
    ]
  },
  {
    label: '商户管理',
    icon: 'example',
    children: [
      {
        path: encodeURIComponent('/商户基本信息'),
        label: '商户基本信息',
        icon: 'example',
        privilege: privilegeOr([types.MerchantInfo_Query])
      },
      {
        path: encodeURIComponent('/商户管理'),
        label: '商户管理',
        icon: 'example',
        privilege: privilegeOr([types.MerchantInfoList_Query, types.MerchantInfo_Register, types.MerchantInfo_Modify, types.MerchantPayPwd_Modify, types.MerchantPayPWD_Reset, types.MerchantInfo_Cancel, types.MerchantInfo_ToEmail])
      },
      {
        path: encodeURIComponent('/门店管理'),
        label: '门店管理',
        icon: 'example',
        privilege: privilegeOr([types.StoreInfo_Query, types.StoreInfo_Add, types.StoreInfo_Modify, types.StorePayPwd_Modify, types.StorePayPWD_Reset, types.Store_ToEmail])
      }
    ]
  },
  {
    label: '商户业务管理',
    icon: 'example',
    children: [
      {
        path: encodeURIComponent('/提现管理'),
        label: '提现管理',
        icon: 'example',
        privilege: privilegeOr([types.MerchantWithdrawApp_Query, types.MerchantWithdrawApp_Add, types.MerchantWithdrawApp_Confirm])
      },
      {
        path: encodeURIComponent('/充值管理'),
        label: '充值管理',
        icon: 'example',
        privilege: privilegeOr([types.MerchantRechargeApp_Query, types.MerchantRechargeApp_Add])
      }
    ]
  },
  {
    label: '商户业务控制',
    icon: 'example',
    children: [
      {
        path: encodeURIComponent('/商户参数管理'),
        label: '商户参数管理',
        icon: 'example',
        privilege: privilegeOr([types.MerchantParamConfig_Query, types.MerchantParamConfig_Modify])
      },
      {
        path: encodeURIComponent('/系统参数管理'),
        label: '系统参数管理',
        icon: 'example',
        privilege: privilegeOr([types.SystemParamConfig_Query, types.SystemParamConfig_Modify])
      },
      {
        path: encodeURIComponent('/支付通道管理'),
        label: '支付参数管理',
        icon: 'example',
        privilege: privilegeOr([types.MerchantPayInfo_Query, types.MerchantPayInfo_Add, types.MerchantPayInfo_Modify, types.MerchantPayInfo_Delete])
      }
    ]
  },
  {
    label: '渠道管理',
    icon: 'example',
    children: [
      {
        path: encodeURIComponent('/渠道信息管理'),
        label: '渠道信息管理',
        icon: 'example',
        privilege: privilegeOr([types.CusBankInfo_Query, types.CusBankInfo_Modify, types.CusBankBalance_Query])
      },
      {
        path: encodeURIComponent('/渠道参数管理'),
        label: '渠道参数管理',
        icon: 'example',
        privilege: privilegeOr([types.BankParamConfig_Query, types.BankParamConfig_Modify])
      },
      {
        path: encodeURIComponent('/签到签退管理'),
        label: '签到签退管理',
        icon: 'example',
        privilege: privilegeOr([types.BankSignInOut_Query, types.BankSignInOut_Modify, types.BankForceSignIn, types.BankForceSignOut])
      }, {
        path: encodeURIComponent('/子商户管理'),
        label: '子商户管理',
        icon: 'example',
        privilege: privilegeOr([types.SubMerchantManage_Query, types.SubMerchantManage_Add, types.SubMerchantManage_Modify, types.SubMerchantManage_Delete])
      }]
  },
  {
    label: '资金管理',
    icon: 'example',
    children: [
      {
        label: '余额查询',
        icon: 'example',
        children: [
          {
            path: encodeURIComponent('/当前余额查询'),
            label: '当前余额查询',
            icon: 'example',
            privilege: privilegeOr([types.MerchantCurrentBalance_Query])
          },
          {
            path: encodeURIComponent('/历史余额查询'),
            label: '历史余额查询',
            icon: 'example',
            privilege: privilegeOr([types.MerchantHisBalance_Query])
          }
        ]
      },
      {
        path: encodeURIComponent('/充值'),
        label: '充值',
        icon: 'example',
        privilege: privilegeOr([types.MerchantRecharge_Add])
      },
      {
        path: encodeURIComponent('/提现'),
        label: '提现',
        icon: 'example',
        privilege: privilegeOr([types.MerchantWithdraw_Add])
      }
    ]
  },
  {
    label: '交易管理',
    icon: 'example',
    children: [
      {
        path: encodeURIComponent('/汇总数据查询'),
        label: '汇总数据查询',
        icon: 'example',
        privilege: privilegeOr([types.MerchantSummaryData_Query])
      },
      {
        path: encodeURIComponent('/订单流水查询'),
        label: '订单流水查询',
        icon: 'example',
        privilege: privilegeOr([types.MerchantTradeDetails_Query, types.OrderResult_Synchronise, types.OrderResult_Reissue, types.SingleOrder_ReturnRemittance, types.PaymentManage_Tuikuang, types.SerailOrder_Tracking])
      },
      {
        path: encodeURIComponent('/单笔订单查询'),
        label: '单笔订单查询',
        icon: 'example',
        privilege: privilegeOr([types.MerchantSingleDetail_Query, types.OrderResult_Synchronise, types.OrderResult_Reissue, types.SingleOrder_ReturnRemittance,
        types.PaymentManage_Tuikuang, types.Order_Tracking])
      },
      {
        path: encodeURIComponent('/代付管理'),
        label: '代付管理',
        icon: 'example',
        privilege: privilegeOr([types.PaymentManage_Query, types.Merchant_Payment, types.PaymentManage_Audit])
      }
    ]
  },
  {
    label: '结算管理',
    icon: 'example',
    children: [
      {
        label: '商户日结',
        icon: 'example',
        children: [
          {
            path: encodeURIComponent('/商户结算管理'),
            label: '商户结算管理',
            icon: 'example',
            privilege: privilegeOr([types.MerchantDailySettleDetail_Query, types.MerchantSummaryData_Query])
          },
          {
            path: encodeURIComponent('/商户结算汇总'),
            label: '商户结算汇总',
            icon: 'example',
            privilege: privilegeOr([types.MerchantDailySettleDetail_Query, types.MerchantSummaryData_Query])
          }
        ]
      },
      {
        label: '渠道日结',
        icon: 'example',
        children: [
          {
            path: encodeURIComponent('/渠道结算明细'),
            label: '渠道结算明细',
            icon: 'example',
            privilege: privilegeOr([types.CusBankDailySettleDetail_Query])
          },
          {
            path: encodeURIComponent('/渠道结算汇总'),
            label: '渠道结算汇总',
            icon: 'example',
            privilege: privilegeOr([types.CusBankSummarySettle_Query])
          }
        ]
      }
    ]
  },
  {
    label: '对账管理',
    icon: 'example',
    children: [
      {
        path: encodeURIComponent('/对账查询'),
        label: '对账查询',
        icon: 'example',
        privilege: privilegeOr([types.CusBankCheckDetail_Query])
      },
      {
        path: encodeURIComponent('/差错账目查询'),
        label: '差错账目查询',
        icon: 'example',
        privilege: privilegeOr([types.CusBankWrongAccount_Query, types.CusBankWrongAccount_Adjust])
      }
    ]
  },
  {
    label: '安全中心',
    icon: 'example',
    children: [
      {
        path: encodeURIComponent('/密钥管理'),
        label: '密钥管理',
        icon: 'example',
        privilege: privilegeOr([types.MerchantKeyInfo_Query, types.MerchantWordKeyInfo_Modify, types.MerchantKeyInfo_Modify])
      },
      {
        path: encodeURIComponent('/修改支付密码'),
        label: '修改支付密码',
        icon: 'example',
        privilege: privilegeOr([types.MerchantPayPwdInfo_Modify])
      },
      {
        path: encodeURIComponent('/修改代付审核密码'),
        label: '修改代付审核密码',
        icon: 'example',
        privilege: privilegeOr([types.MerchantPayAuditPassword_Modify])
      }
    ]
  }
]
