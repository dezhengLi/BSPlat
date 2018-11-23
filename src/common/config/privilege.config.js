import * as types from './privilege.types'

export default [{
  label: '首页',
  children: [{
    label: '商户平台首页',
    children: [{
      label: '查询',
      privilege: types.HomePage_Query
    }]
  }]
}, {
  label: '系统设置',
  children: [{
    label: '权限管理',
    children: [{
      label: '角色管理',
      children: [{
        label: '查询',
        privilege: types.RoleInfo_Query
      }, {
        label: '新增',
        privilege: types.RoleInfo_Add
      }, {
        label: '编辑',
        privilege: types.RoleInfo_Modify
      }]
    }, {
      label: '用户管理',
      children: [{
        label: '查询',
        privilege: types.UserInfo_Query
      }, {
        label: '新增',
        privilege: types.UserInfo_Add
      }, {
        label: '编辑',
        privilege: types.UserInfo_Modify
      }, {
        label: '重置密码',
        privilege: types.MerchantUserPWD_Reset
      }, {
        label: '注销',
        privilege: types.UserInfo_Delete
      }]
    }, {
      label: '员工管理',
      children: [{
        label: '查询',
        privilege: types.StaffInfo_Query
      }, {
        label: '新增',
        privilege: types.StaffInfo_Add
      }, {
        label: '编辑',
        privilege: types.StaffInfo_Modify
      }, {
        label: '删除',
        privilege: types.StaffInfo_Delete
      }]
    }]
  }]
}, {
  label: '商户管理',
  children: [{
    label: '商户基本信息',
    children: [{
      label: '查询',
      privilege: types.MerchantInfo_Query
    }]
  }, {
    label: '商户管理',
    children: [{
      label: '查询',
      privilege: types.MerchantInfoList_Query
    }, {
      label: '注册',
      privilege: types.MerchantInfo_Register
    }, {
      label: '编辑',
      privilege: types.MerchantInfo_Modify
    }, {
      label: '修改支付密码',
      privilege: types.MerchantPayPwd_Modify
    }, {
      label: '重置支付密码',
      privilege: types.MerchantPayPWD_Reset
    }, {
      label: '注销',
      privilege: types.MerchantInfo_Cancel
    }, {
      label: '发送开户邮件',
      privilege: types.MerchantInfo_ToEmail
    }]
  }, {
    label: '门店管理',
    children: [{
      label: '查询',
      privilege: types.StoreInfo_Query
    }, {
      label: '新增',
      privilege: types.StoreInfo_Add
    }, {
      label: '编辑',
      privilege: types.StoreInfo_Modify
    }, {
      label: '修改支付密码',
      privilege: types.StorePayPwd_Modify
    }, {
      label: '重置支付密码',
      privilege: types.StorePayPWD_Reset
    }, {
      label: '发送开户邮件',
      privilege: types.Store_ToEmail
    }]
  }]
}, {
  label: '商户业务管理',
  children: [{
    label: '提现管理',
    children: [{
      label: '查询',
      privilege: types.MerchantWithdrawApp_Query
    }, {
      label: '新增',
      privilege: types.MerchantWithdrawApp_Add
    }, {
      label: '审核',
      privilege: types.MerchantWithdrawApp_Confirm
    }]
  }, {
    label: '充值管理',
    children: [{
     label: '查询',
      privilege: types.MerchantRechargeApp_Query
    }, {
      label: '新增',
      privilege: types.MerchantRechargeApp_Add
    }]
  }]
}, {
  label: '商户业务控制',
  children: [{
    label: '商户参数管理',
    children: [{
      label: '查询',
      privilege: types.MerchantParamConfig_Query
    }, {
      label: '修改',
      privilege: types.MerchantParamConfig_Modify
    }]
  }, {
    label: '系统参数管理',
    children: [{
      label: '查询',
      privilege: types.SystemParamConfig_Query
    }, {
      label: '修改',
      privilege: types.SystemParamConfig_Modify
    }]
  }, {
    label: '支付通道管理',
    children: [{
      label: '查询',
      privilege: types.MerchantPayInfo_Query
    }, {
      label: '新增',
      privilege: types.MerchantPayInfo_Add
    }, {
      label: '编辑',
      privilege: types.MerchantPayInfo_Modify
    }, {
      label: '删除',
      privilege: types.MerchantPayInfo_Delete
    }]
  }]
}, {
  label: '渠道管理',
  children: [{
    label: '渠道信息管理',
    children: [{
      label: '查询',
      privilege: types.CusBankInfo_Query
    }, {
      label: '修改',
      privilege: types.CusBankInfo_Modify
    }, {
      label: '查询余额',
      privilege: types.CusBankBalance_Query
    }]
  }, {
    label: '渠道参数管理',
    children: [{
      label: '查询',
      privilege: types.BankParamConfig_Query
    }, {
      label: '修改',
      privilege: types.BankParamConfig_Modify
    }]
  }, {
    label: '签到签退管理',
    children: [{
      label: '查询',
      privilege: types.BankSignInOut_Query
    }, {
      label: '修改',
      privilege: types.BankSignInOut_Modify
    }, {
      label: '强制签到',
      privilege: types.BankForceSignIn
    }, {
      label: '强制签退',
      privilege: types.BankForceSignOut
    }]
  }, {
    label: '子商户管理',
    children: [{
      label: '查询',
      privilege: types.SubMerchantManage_Query
    }, {
      label: '新增',
      privilege: types.SubMerchantManage_Add
    }, {
      label: '编辑',
      privilege: types.SubMerchantManage_Modify
    }, {
      label: '删除',
      privilege: types.SubMerchantManage_Delete
    }]
  }]
}, {
  label: '资金管理',
  children: [{
    label: '余额查询',
    children: [{
      label: '当前余额查询',
      children: [{
        label: '查询',
        privilege: types.MerchantCurrentBalance_Query
      }]
    }, {
      label: '历史余额查询',
      children: [{
        label: '查询',
        privilege: types.MerchantHisBalance_Query
      }]
    }]
  }, {
    label: '充值',
    privilege: types.MerchantRecharge_Add
  }, {
    label: '提现',
    privilege: types.MerchantWithdraw_Add
  }]
}, {
  label: '交易管理',
  children: [{
    label: '汇总数据查询',
    children: [{
      label: '查询',
      privilege: types.MerchantSummaryData_Query
    }]
  }, {
    label: '订单流水查询',
    children: [{
      label: '查询',
      privilege: types.MerchantTradeDetails_Query
    }, {
      label: '订单状态同步',
      privilege: types.OrderResult_Synchronise
    }, {
      label: '补发通知',
      privilege: types.OrderResult_Reissue
    }, {
      label: '代付同汇',
      privilege: types.SingleOrder_ReturnRemittance
    }, {
      label: '退款',
      privilege: types.PaymentManage_Tuikuang
    }, {
      label: '订单追踪',
      privilege: types.SerailOrder_Tracking
    }]
  }, {
    label: '单笔订单查询',
    children: [{
      label: '查询',
      privilege: types.MerchantSingleDetail_Query
    },
    //   {
    //   label: '订单状态同步',
    //   privilege: types.OrderResult_Synchronise
    // }, {
    //   label: '补发通知',
    //   privilege: types.OrderResult_Reissue
    // }, {
    //   label: '代付退汇',
    //   privilege: types.SingleOrder_ReturnRemittance
    // }, {
    //   label: '退款',
    //   privilege: types.PaymentManage_Tuikuang
    // },
    {
      label: '订单追踪',
      privilege: types.Order_Tracking
    }]
  }, {
    label: '代付管理',
    children: [{
      label: '查询',
      privilege: types.PaymentManage_Query
    }, {
      label: '新增',
      privilege: types.Merchant_Payment
    }, {
      label: '审核',
      privilege: types.PaymentManage_Audit
    }]
  }]
}, {
  label: '结算管理',
  children: [{
    label: '商户日结',
    children: [{
      label: '商户结算明细',
      children: [{
        label: '查询',
        privilege: types.MerchantDailySettleDetail_Query
      }]
    }, {
      label: '商户结算汇总',
      children: [{
        label: '查询',
        privilege: types.MerchantSummarySettle_Query
      }]
    }]
  }, {
    label: '渠道日结',
    children: [{
      label: '渠道结算明细',
      children: [{
        label: '查询',
        privilege: types.CusBankDailySettleDetail_Query
      }]
    }, {
      label: '渠道结算汇总',
      children: [{
        label: '查询',
        privilege: types.CusBankSummarySettle_Query
      }]
    }]
  }]
}, {
  label: '对账管理',
  children: [{
    label: '对账查询',
    children: [{
      label: '查询',
      privilege: types.CusBankCheckDetail_Query
    }]
  }, {
    label: '差错账目查询',
    children: [{
      label: '查询',
      privilege: types.CusBankWrongAccount_Query
    }, {
      label: '调整',
      privilege: types.CusBankWrongAccount_Adjust
    }]
  }]
}, {
  label: '安全中心',
  children: [{
    label: '密钥管理',
    children: [{
      label: '查询',
      privilege: types.MerchantKeyInfo_Query
    }, {
      label: '更新工作密钥',
      privilege: types.MerchantWordKeyInfo_Modify
    }, {
      label: '更新MD5密钥',
      privilege: types.MerchantKeyInfo_Modify
    }]
  }, {
    label: '修改支付密码',
    children: [{
      label: '修改',
      privilege: types.MerchantPayPwdInfo_Modify
    }]
  }, {
    label: '修改代付审核密码',
    children: [{
      label: '修改',
      privilege: types.MerchantPayAuditPassword_Modify
    }]
  }]
}]
