import { ParseTime } from 'common/js/utils'

export const LOADING_INITIAL = {
  background: 'rgba(255,255,255,.4)',
  target: 'body'
}

export const TST_NAME = {
  OldLoginPwd: '旧支付密码',
  NewLoginPwd: '新支付密码',
  ConfirmPwd: '确认支付密码',
  Auditor: '审核人',
  AuditTime: '审核时间',
  AuditRemark: '审核备注',
  Activator: '激活人',
  ActiveTime: '激活时间',
  ActiveRemark: '激活备注',
  AuditStatus: '审核状态',
  ActiveStatus: '激活状态',
  IndustryType: '行业类别',
  ServiceTelNo: '客服电话',
  ManagerPhoneNo: '手机号码',
  Email: '邮箱',
  City: '城市',
  MerchantShortName: '商户简称',
  CardType: '证件类型',
  CardNum: '证件号码',
  ManagerName: '负责人',
  MerchantStatus: '商户状态',
  WebSite: '官网地址',
  Province: '省份',
  Address: '地址',
  IsEnable: '是否启用',
  Creator: '创建人',
  RoleSerial: '角色编号',
  RoleName: '角色名称',
  StoreSerial: '门店编号',
  StartTime: '开始时间',
  EndTime: '结束时间',
  StartDate: '开始时间',
  EndDate: '结束时间',
  StartTradeDate: '开始时间',
  EndTradeDate: '结束时间',
  ExecuteType: '交易类型',
  PayType: '支付类型',
  PayTypeName: '支付类型名称',
  ExecuteStatus: '交易状态',
  OrderID: '订单号',
  PlatSerial: '平台流水号',
  ThirdSerial: '第三方流水号',
  BankSerial: '银行流水号',
  PlatOrderID: '商户单号',
  StoreName: '商户名称',
  Amt: '交易金额',
  Charge: '手续费',
  CurrCode: '币种',
  SubmitTime: '提交时间',
  FinishTime: '完成时间',
  StaffName: '所属员工',
  RealAmount: '实际交易金额',
  Subject: '商品名称',
  BankAccountName: '银行账户名称',
  BankAccountNo: '银行账户',
  BankID: '开户行',
  Remark: '备注',
  OperatorID: '操作员编号',
  MerchantID: '商户编号',
  MerchantName: '商户名称',
  MerchantType: '商户类型',
  AgencyID: '代理商编号',
  AgencyName: '代理商名称',
  CurrentBalance: '期末余额',
  PlatTradeTime: '交易时间',
  TradeDate: '日期',
  OutmoneyThreShold: '保证金',
  OutMoneyThreshold: '保证金',
  UpdateTime: '更新时间',
  CommissionInCome: '手续费收益',
  CusBankID: '渠道编号',
  Balance: '期初余额',
  LessFee: '单笔最低手续费',
  LessAmount: '单笔最小金额',
  MaxAmount: '单笔最大金额',
  MaxTotalAmount: '单日最大金额',
  MoneyFee: '手续费',
  FeeMode: '计费方式',
  ArrivalWay: '到账方式',
  DealText: '处理信息',
  CusBankName: '渠道名称',
  CreateTime: '创建时间',
  SubMerchantID: '子商户编号',
  SubMerchantName: '子商户名称',
  SubMerchantType: '子商户类型',
  ControlFlag: '收款控制标志',
  OrderDate: '订单日期',
  OrderTime: '订单时间',
  Fee: '手续费分成',
  Amount: '金额',
  ApplicationDate: '提交时间',
  FreezeBalance: '冻结余额',
  AvailableBalance: '可用余额',
  WithdrawAccountNo: '银行账号',
  WithdrawAccountName: '账户名称',
  WithdrawBankID: '开户行',
  WithdrawAccProp: '账户属性',
  WithdrawAccType: '账户类型',
  WithdrawAccCardType: '开户证件类型',
  WithdrawAccCardNum: '开户证件编号',
  WithdrawSubBranchBankName: '开户支行名称',
  WithdrawSubBranchBankID: '开户支行联行号',
  PlatSubmitTime: '提交时间',
  Summary: '备注',
  BankDealText: '处理描述',
  MoneyType: '资金类型',
  UserSerial: '用户账号',
  LoginCode: '用户账户',
  UserType: '用户类型',
  OnLineStatus: '在线状态',
  LoginTime: '登录时间',
  LogOutTime: '登出时间',
  LoginPwd: '登录密码',
  LoginOutTime: '登出时间',
  LoginIP: '登录IP',
  LoginAddr: '登录地址',
  UserStatus: '用户状态',
  TelNo: '电话号码',
  UserPWD: '用户密码',
  UserPWDAgent: '确认密码',
  BigMerchantID: '大商户编号',
  StaffID: '员工编号',
  StaffDuty: '职务',
  StaffPhone: '电话号码',
  DepartName: '所属部门',
  StoreShortName: '门店简称',
  StoreType: '门店类型',
  BigMerchantName: '大商户名称',
  ApplicationCode: '申请人',
  PayAuditPwd: '审核密码',
  PayPWD: '支付密码',
  TransferMethod: '提现方式',
  IsAllowIn: '收款是否开启',
  LessInAmount: '单笔最小收款金额（人民币）',
  MaxInAmount: '单笔最大收款金额（人民币）',
  MaxTotalInAmount: '单日收款限额（人民币）',
  IsAllowOut: '付款是否开启',
  OutControlFlag: '付款控制标志',
  LessOutAmount: '单笔最小付款金额（人民币）',
  MaxOutAmount: '单笔最大付款金额（人民币）',
  MaxTotalOutAmount: '单日付款限额（人民币）',
  InControlFlag: '收款控制标志',
  OutMoneyFee: '付款手续费（元/笔）',
  WithdrawFee: '提现手续费（元/笔）',
  InMoneyFee: '收款手续费（‰/笔）',
  RechargeFee: '充值手续费（‰/笔）',
  IsAllow: '是否开启',
  InStartTime: '收款开始时间',
  InEndTime: '收款结束时间',
  OutStartTime: '付款开始时间',
  OutEndTime: '付款结束时间',
  FrozenAmount: '冻结金额',
  IsPaymentAudit: '代付是否审核',
  WithdrawBranchBankName: '分行名称',
  WithdrawTel: '银行预留手机号',
  MaxWithdrawAmount: '单日提现限额（人民币）',
  CurrentTradeDate: '当前工作日',
  NextTradeDate: '下一个工作日',
  NotifyUrl: '交易结果通知地址',
  ReturnUrl: '交易返回地址',
  OutMoneyThreshold: '提现阀值（人民币）',
  OutmoneyThreShold:'提现阀值',
  StartCheckTime: '对账开始时间',
  StartSettleTime: '结算开始时间',
  StartClearTime: '清算开始时间',
  ConfirmDate: '审核日期',
  ConfirmOperatorCode: '审核员编号',
  OperatorCode: '操作员编号',
  PlatRechargeAccNo: '	平台充值账号',
  PlatWithDrawAccNo: '平台提现银行账号',
  PlatPayAccNo: '平台付款账号(结算)',
  CusBankShortName: '渠道简称',
  CusBankType: '渠道类型',
  PlatRechargeAccName: '平台充值账户名称',
  RechargeIDType: '充值证件类型',
  RechargeIDCard: '充值证件号',
  PlatWithDrawAccName: '平台提现账户名称',
  WithDrawIDType: '提现证件类型',
  WithDrawIDCard: '提现证件号',
  PlatPayAccName: '平台付款账户名称',
  IsAuto: '是否自动签到签退',
  AutoSignInStartTime: '自动签到开始时间	',
  AutoSignOutStartTime: '自动签退开始时间',
  SignInStatus: '状态',
  ForceSignInDate: '强制签到时间',
  ForceSignOutDate: '强制签退时间',
  NextSignInDate: '下一次签到日期',
  IsInvalid: '	启用状态',
  InAmount: '支付入账金额',
  RechargeAmount: '充值入账金额',
  OutAmount: '代付出账金额',
  WithdrawAmount: '提现出账金额',
  AccountProp: '账户属性',
  SubBranchBankName: '支行名称',
  SubBranchBankID: '支行联行号',
  ReexchangeRemark: '退汇备注',
  RefundRemark: '退款备注',
  WorkKey: '工作密钥',
  Md5Key: 'MD5密钥',
  MerchantTypeA: '商户类型',
  UnsettledAmount: '未入账金额',
  TransitAmount: '在途资金',
  CurrentBalances: '当前余额',
  WithdrawalAmount: '提现金额',
  AuditStatuso: '审核状态',
  NetWorth: '	划账金额',
  InAmt: '总入账金额',
  InChargeAmt: '总入账手续费用',
  InNums: '总入账笔数',
  OutAmt: '总出账金额',
  OutChargeAmt: '总出账手续费用',
  OutNums: '	总出账笔数',
  GrossAmount: '总划账金额',
  BankAmount: '银行交易金额',
  PlatAmount: '平台交易金额',
  ErrType: '错误类型',
  AdjustStatus: '调整状态',
  PlatCharge:'平台手续费',
  PayStatus:'订单状态',
  ListBankID:'银行列表',
  rechargeAmt:'充值金额'

}

export const TST_OPTIONS = {
  PayStatus: {
		"01": "未支付",
		"02": "已支付",
		"03": "已关闭",
		"04": "支付失败",
		"05": "支付超时",
	},
  AdjustStatus: {
		'0': '初始化（未调整）',
		'1': '已调整',
		'2': '调整失败',
		'3': '不需要调整',
		'4': '需要人工调整'
	},
  ErrType: {
		'0': '初始化（未对账）',
		'1': '对账成功',
		'2': '银行和平台都成功，金额不一致',
		'3': '平台缺少',
		'4': '银行成功，平台失败',
		'5': '银行成功，平台处理中',
		'6': '平台成功，银行不成功',
		'7': '平台处理中，银行不成功',
		'8': '银行成功，平台处理中，金额不一致',
		'9': '银行成功，平台失败，金额不一致',
		'10': '平台成功，资金操作失败'
	},
  AccountProp: {'0': '对私', '1': '对公'},
  IsInvalid: {'0': '未启用', '1': '启用'},
  IsPaymentAudit: {'0': '否', '1': '是'},
  SubMerchantType: { '0': '综合账户', '1': '出金专户', '2': '入金专户' },
  IsEnable: { '0': '启用', '1': '未启用' },
  UserType: { '0': '商户用户', '1': '个人用户' },
  ExecuteType: {
    '1': '出金（代付出账）',
    '2': '入金（支付入账）',
    '3': '充值入账',
    '4': '提现出账',
    '5': '手续费结转',
    '6': '客损资金',
    '7': '代付退汇',
    '8': '订单退款',
    '9': '利息转入'
  },
  PayType: {
    '0101': '单笔代付',
    '0102': '批量代付',
    '0201': '快捷支付',
    '0202': '网关B2C支付',
    '0203': '微信扫码支付',
    '0204': '支付宝扫码支付',
    '0205': '微信App支付',
    '0206': '支付宝App支付',
    '0207': '微信公众号支付',
    '0208': '快捷支付H5版',
    '0209': '微信Wap支付',
    '0210': '支付宝Wap支付',
    '0211': '无卡支付',
    '0212': 'QQ钱包Wap支付',
    '0213': '微信公众号扫码支付',
    '0214': '京东扫码支付',
    '0215': '一码付',
    '0216': '银行卡充值',
    '0217': 'QQ钱包扫码支付',
    '0218': '银联在线',
    '0219': '银联扫码',
    '0220': '支付宝服务支付',
    '0221': '代扣',
    '0222': '认证支付',
    '0223': '网银B2B支付',
    '0301': '商户B2C充值',
    '0302': '商户B2B充值',
    '0401': '代付退汇',
    '0402': '代收退款',
    '0403': '投诉退款',
    '0404': '手续费结转',
    '0405': '利息转入',
    '0501': '其它'
  },
  CurrCode: { '01': '人民币', '02': '港币', '03': '美元' },
  Sex: { '0': '男', '1': '女' },
  ExecuteStatus: {
    '01': '未支付',
    '02': '已支付',
    '03': '已关闭',
    '04': '支付失败',
    '05': '订单超时',
    '06': '已退款',
    '07': '已退汇'
  },
  CheckFileType: { '1': '入账', '2': '出账' },
  StoreType: { '1': '直营商户', '2': '加盟商户' },
  ActiveStatus: {
    '0': '未激活',
    '1': '已激活',
    '2': '已冻结',
    '3': '收款受限',
    '4': '付款受限'
  },
  AuditStatus: {
    '0': '未审核',
    '1': '审核中',
    '2': '审核通过',
    '3': '审核拒绝',
    '4': '超时未处理',
    '5': '已审核退汇',
    '6': '退汇中'
  },
  AuditStatuso: {
    '2': '审核通过',
    '3': '审核拒绝'
  },
  ArrivalWay: { '0': '非结算到卡', '1': 'T+1', '2': 'D+1', '3': 'D+0' },
  channelNumber: {
    '1': '联通支付代付通道',
    '2': '华融支付',
    '3': '威富通支付1',
    '4': '诺维支付',
    '5': '厦门银行',
    '6': '威富通支付2',
    '7': '南粤银行',
    '8': '恒丰银行',
    '9': '民生银行'
  },
  CusBankName: {
    '1': '联通支付代付通道',
    '2': '华融支付',
    '3': '威富通支付1',
    '4': '诺维支付',
    '5': '厦门银行',
    '6': '威富通支付2',
    '7': '南粤银行',
    '8': '恒丰银行',
    '9': '民生银行'
  },
  CusBankType: { '0': '非三方存管', '1': '三方存管' },
  IsAllowIn: { '0': '未开启', '1': '开启' },
  IsAllow: { '0': '未开启', '1': '开启' },
  InControlFlag: { '0': '未控制', '1': '控制' },
  MoneyType: {
    0: '入金',
    1: '出金',
    2: '充值',
    3: '提现',
    4: '充值手续费',
    5: '提现手续费',
    6: '入金手续费',
    7: '出金手续费',
    8: '代付退汇',
    9: '手续费结转',
    10: '客损资金',
    11: '订单退款',
    12: '利息'
  },
  ControlFlag: { '0': '未控制', '1': '控制' },
  IsAllowOut: { '0': '未开启', '1': '开启' },
  OutControlFlag: { '0': '未控制', '1': '控制' },
  IsAuto: { '0': '否', '1': '是' },
  TransferMethod: { '0': '线下', '1': '线上' },
  SignInStatus: { '0': '初始化', '1': '已签到', '2': '已签退' },
  CusAccessNum: { '0': '非三方存管', '1': '三方存管' },
  FeeMode: { '0': '按比率收(‰/笔)', '1': '每笔固定(元/笔)' },
  OnLineStatus: { '0': '已下线', '1': '在线' },
  UserStatus: { '0': '已注销', '1': '正常' },
  MerchantStatus: { '0': '已注销', '1': '正常' },
  WithdrawAccProp: { '0': '私人账户', '1': '对公账户' },
  WithdrawAccType: { '00': '银行卡', '01': '存折', '02': '信用卡' },
  MerchantType: {
    '0': '大商户',
    '1': '直营商户',
    '2': '加盟商户',
    '3': '顶级代理',
    '4': '一级代理',
    '5': '二级代理',
    '6': '三级代理',
    '7': '个人用户',
    '8': '普通商户'
  },

  CardType: {
    '0': '身份证',
    '1': '户口簿',
    '2': '护照',
    '3': '军官证',
    '4': '士兵证',
    '5': '港澳居民来往内地通行证',
    '6': '台湾同胞来往内地通行证',
    '7': '临时身份证',
    '8': '外国人居留证',
    '9': '警官证',
    A: '组织机构代码证',
    B: '三证合一',
    C: '其他证件'
  },
  WithdrawAccCardType: {
    '0': '身份证',
    '1': '户口簿',
    '2': '护照',
    '3': '军官证',
    '4': '士兵证',
    '5': '港澳居民来往内地通行证',
    '6': '台湾同胞来往内地通行证',
    '7': '临时身份证',
    '8': '外国人居留证',
    '9': '警官证',
    A: '组织机构代码证',
    B: '三证合一',
    C: '其他证件'
  },
  RechargeIDType: {
    '0': '身份证',
    '1': '户口簿',
    '2': '护照',
    '3': '军官证',
    '4': '士兵证',
    '5': '港澳居民来往内地通行证',
    '6': '台湾同胞来往内地通行证',
    '7': '临时身份证',
    '8': '外国人居留证',
    '9': '警官证',
    A: '组织机构代码证',
    B: '三证合一',
    C: '其他证件'
  },
  WithDrawIDType: {
    '0': '身份证',
    '1': '户口簿',
    '2': '护照',
    '3': '军官证',
    '4': '士兵证',
    '5': '港澳居民来往内地通行证',
    '6': '台湾同胞来往内地通行证',
    '7': '临时身份证',
    '8': '外国人居留证',
    '9': '警官证',
    A: '组织机构代码证',
    B: '三证合一',
    C: '其他证件'
  },
  BankID: {
    '4172210': '沈阳市商业银行',
    '4184930': '洛阳市商业银行',
    '4192310': '辽阳市商业银行',
    '4202220': '大连市商业银行',
    '4213050': '苏州市商业银行',
    '4221210': '石家庄市商业银行',
    '4233310': '杭州市商业银行',
    '4243010': '南京市商业银行',
    '4263380': '金华市商业银行',
    '4278810': '乌鲁木齐市商业银行',
    '4283370': '绍兴市商业银行',
    '4296510': '成都市商业银行',
    '4302240': '抚顺市商业银行',
    '4314730': '临沂市商业银行',
    '4325250': '宜昌市商业银行',
    '4332350': '葫芦岛市商业银行',
    '4341100': '天津市商业银行',
    '4354910': '郑州市商业银行',
    '4368710': '银川市商业银行',
    '4375850': '珠海市商业银行',
    '4384530': '淄博市商业银行',
    '4392270': '锦州市商业银行',
    '4403610': '合肥市商业银行',
    '4416530': '重庆市商业银行',
    '4422610': '哈尔滨市商业银行',
    '4437010': '贵阳市商业银行',
    '4447910': '西安市商业银行',
    '4453020': '无锡市商业银行',
    '4462260': '丹东市商业银行',
    '4478210': '兰州市商业银行',
    '4491610': '太原市商业银行',
    '4504520': '青岛市商业银行',
    '4512420': '吉林市商业银行',
    '4523060': '南通市商业银行',
    '4533120': '扬州市商业银行',
    '4544240': '九江市商业银行',
    '4554732': '日照市商业银行',
    '4562230': '鞍山市商业银行',
    '4571260': '秦皇岛市商业银行',
    '4588510': '西宁市商业银行',
    '4593450': '台州市商业银行',
    '4603110': '盐城市商业银行',
    '4615510': '长沙银行',
    '4624580': '潍坊市商业银行',
    '4634280': '赣州市商业银行',
    '4643970': '泉州银行',
    '4652280': '营口市商业银行',
    '4667310': '昆明市商业银行',
    '4672290': '阜新市商业银行',
    '4683040': '常州市商业银行',
    '4693080': '淮安市商业银行',
    '4703350': '嘉兴市商业银行',
    '4713620': '芜湖市商业银行',
    '4721460': '廊坊市商业银行',
    '4733450': '台州市泰隆城市信用社',
    '4741900': '呼和浩特市商业银行',
    '4753360': '湖州市商业银行',
    '4773650': '马鞍山商业银行',
    '4786110': '南宁商业银行',
    '4791920': '包头商业银行',
    '4803070': '连云港商业银行',
    '4814650': '威海商业银行',
    '4823660': '淮北商业银行',
    '4836560': '攀枝花商业银行',
    '4021000': '农信社(北京)',
    '4025510': '农信湖南',
    '4256020': '东莞银行',
    '4843680': '安庆商业银行',
    '4866570': '泸州商业银行',
    '4871620': '大同商业银行',
    '4885050': '三门峡城市信用社',
    '4901380': '张家口商业银行',
    '14012900': '上海市农村信用社',
    '14023052': '昆山市农村信用社',
    '14033055': '常熟市农村信用社',
    '14045840': '深圳市农村信用社',
    '14055810': '广州市农村信用社',
    '14063317': '杭州市萧山区农村信用社',
    '14075882': '南海市农村信用社',
    '14085883': '顺德市农村信用社',
    '14097310': '昆明市农村信用社',
    '14105210': '武汉市农村信用社',
    '14113030': '徐州市市郊农村信用社',
    '14136530': '重庆市农村信用社',
    '14144520': '青岛农村信用社',
    '14156020': '东莞农村信用社',
    '14163056': '张家港市农村商业银行',
    '14173930': '厦门市农村信用社',
    '14181000': '北京农村信用联社',
    '14191100': '天津市农村信用社',
    '14203320': '宁波鄞州农村合作银行',
    '14215881': '佛山市三水区农村信用社',
    '14226510': '成都市农村信用社',
    '14231440': '沧州市农村信用社',
    '14243000': '江苏省农村信用社',
    '510': '永亨银行(中国)有限公司',
    '512': '永隆银行',
    '531': '花旗银行(中国)有限公司',
    '532': '美国银行有限公司',
    '533': '摩根大通银行(中国)有限公司',
    '561': '三菱东京日联银行(中国)有限公司',
    '563': '日本三井住友银行股份有限公司',
    '564': '瑞穗实业银行(中国)有限公司',
    '565': '日本山口银行股份有限公司',
    '591': '韩国外换银行股份有限公司',
    '593': '友利银行(中国)有限公司',
    '594': '韩国产业银行',
    '595': '新韩银行(中国)有限公司',
    '596': '韩国中小企业银行有限公司',
    '597': '韩亚银行(中国)有限公司',
    '621': '华侨银行(中国)有限公司',
    '622': '大华银行(中国)有限公司',
    '623': '星展银行(中国)有限公司',
    '631': '泰国盘谷银行(大众有限公司)',
    '641': '奥地利中央合作银行股份有限公司',
    '651': '比利时联合银行股份有限公司',
    '652': '比利时富通银行有限公司',
    '661': '荷兰银行',
    '662': '荷兰安智银行股份有限公司',
    '671': '渣打银行',
    '672': '英国苏格兰皇家银行公众有限公司',
    '691': '法国兴业银行(中国)有限公司',
    '694': '法国东方汇理银行股份有限公司',
    '695': '法国外贸银行股份有限公司',
    '711': '德国德累斯登银行股份公司',
    '712': '德意志银行(中国)有限公司',
    '713': '德国商业银行股份有限公司',
    '714': '德国西德银行股份有限公司',
    '715': '德国巴伐利亚州银行',
    '716': '德国北德意志州银行',
    '4024210': '江西农信社',
    '14144500': '山东农信社',
    '4023610': '农信安徽',
    '102': '中国工商银行',
    '103': '中国农业银行',
    '104': '中国银行',
    '105': '中国建设银行',
    '201': '国家开发银行',
    '202': '中国进出口银行',
    '203': '中国农业发展银行',
    '301': '交通银行',
    '302': '中信银行',
    '303': '中国光大银行',
    '304': '华夏银行',
    '305': '中国民生银行',
    '306': '广东发展银行',
    '307': '深圳发展银行',
    '308': '招商银行',
    '309': '兴业银行',
    '310': '上海浦东发展银行',
    '313': '城市商业银行',
    '314': '农村商业银行',
    '315': '恒丰银行',
    '316': '浙商银行',
    '317': '农村合作银行',
    '318': '渤海银行',
    '319': '徽商银行',
    '401': '城市信用社',
    '402': '农村信用社',
    '403': '中国邮政储蓄银行',
    '501': '汇丰银行',
    '502': '东亚银行',
    '503': '南洋商业银行',
    '504': '恒生银行(中国)有限公司',
    '505': '中国银行(香港)有限公司',
    '506': '集友银行有限公司',
    '507': '创兴银行有限公司',
    '509': '星展银行(中国)有限公司',
    '732': '意大利联合圣保罗银行股份有限公司',
    '741': '瑞士信贷银行股份有限公司',
    '742': '瑞士银行',
    '751': '加拿大丰业银行有限公司',
    '752': '加拿大蒙特利尔银行有限公司',
    '761': '澳大利亚和新西兰银行集团有限公司',
    '771': '摩根士丹利国际银行(中国)有限公司',
    '775': '联合银行(中国)有限公司',
    '776': '荷兰合作银行有限公司',
    '781': '厦门国际银行',
    '782': '法国巴黎银行(中国)有限公司',
    '785': '华商银行',
    '787': '华一银行',
    '969': '(澳门地区)银行',
    '989': '(香港地区)银行',
    '3020000': '中信实业银行',
    '4012900': '上海银行',
    '4023930': '厦门市商业银行',
    '4031000': '北京银行',
    '4044560': '烟台市商业银行',
    '4053910': '福州市商业银行',
    '4062410': '长春市商业银行',
    '4073140': '镇江市商业银行',
    '4094510': '济南市商业银行',
    '4105840': '深圳平安银行',
    '4115010': '焦作市商业银行',
    '4123330': '温州市商业银行',
    '4135810': '广州市商业银行',
    '4145210': '武汉市商业银行',
    '4162640': '齐齐哈尔市商业银行',
    '4025350': '湖北农信社',
    '3136650': '乐山商行',
    '3138820': '昆仑银行',
    '313433': '上饶银行'
  },
  ListBankID: {
    '4172210': '沈阳市商业银行',
    '4184930': '洛阳市商业银行',
    '4192310': '辽阳市商业银行',
    '4202220': '大连市商业银行',
    '4213050': '苏州市商业银行',
    '4221210': '石家庄市商业银行',
    '4233310': '杭州市商业银行',
    '4243010': '南京市商业银行',
    '4263380': '金华市商业银行',
    '4278810': '乌鲁木齐市商业银行',
    '4283370': '绍兴市商业银行',
    '4296510': '成都市商业银行',
    '4302240': '抚顺市商业银行',
    '4314730': '临沂市商业银行',
    '4325250': '宜昌市商业银行',
    '4332350': '葫芦岛市商业银行',
    '4341100': '天津市商业银行',
    '4354910': '郑州市商业银行',
    '4368710': '银川市商业银行',
    '4375850': '珠海市商业银行',
    '4384530': '淄博市商业银行',
    '4392270': '锦州市商业银行',
    '4403610': '合肥市商业银行',
    '4416530': '重庆市商业银行',
    '4422610': '哈尔滨市商业银行',
    '4437010': '贵阳市商业银行',
    '4447910': '西安市商业银行',
    '4453020': '无锡市商业银行',
    '4462260': '丹东市商业银行',
    '4478210': '兰州市商业银行',
    '4491610': '太原市商业银行',
    '4504520': '青岛市商业银行',
    '4512420': '吉林市商业银行',
    '4523060': '南通市商业银行',
    '4533120': '扬州市商业银行',
    '4544240': '九江市商业银行',
    '4554732': '日照市商业银行',
    '4562230': '鞍山市商业银行',
    '4571260': '秦皇岛市商业银行',
    '4588510': '西宁市商业银行',
    '4593450': '台州市商业银行',
    '4603110': '盐城市商业银行',
    '4615510': '长沙银行',
    '4624580': '潍坊市商业银行',
    '4634280': '赣州市商业银行',
    '4643970': '泉州银行',
    '4652280': '营口市商业银行',
    '4667310': '昆明市商业银行',
    '4672290': '阜新市商业银行',
    '4683040': '常州市商业银行',
    '4693080': '淮安市商业银行',
    '4703350': '嘉兴市商业银行',
    '4713620': '芜湖市商业银行',
    '4721460': '廊坊市商业银行',
    '4733450': '台州市泰隆城市信用社',
    '4741900': '呼和浩特市商业银行',
    '4753360': '湖州市商业银行',
    '4773650': '马鞍山商业银行',
    '4786110': '南宁商业银行',
    '4791920': '包头商业银行',
    '4803070': '连云港商业银行',
    '4814650': '威海商业银行',
    '4823660': '淮北商业银行',
    '4836560': '攀枝花商业银行',
    '4021000': '农信社(北京)',
    '4025510': '农信湖南',
    '4256020': '东莞银行',
    '4843680': '安庆商业银行',
    '4866570': '泸州商业银行',
    '4871620': '大同商业银行',
    '4885050': '三门峡城市信用社',
    '4901380': '张家口商业银行',
    '14012900': '上海市农村信用社',
    '14023052': '昆山市农村信用社',
    '14033055': '常熟市农村信用社',
    '14045840': '深圳市农村信用社',
    '14055810': '广州市农村信用社',
    '14063317': '杭州市萧山区农村信用社',
    '14075882': '南海市农村信用社',
    '14085883': '顺德市农村信用社',
    '14097310': '昆明市农村信用社',
    '14105210': '武汉市农村信用社',
    '14113030': '徐州市市郊农村信用社',
    '14136530': '重庆市农村信用社',
    '14144520': '青岛农村信用社',
    '14156020': '东莞农村信用社',
    '14163056': '张家港市农村商业银行',
    '14173930': '厦门市农村信用社',
    '14181000': '北京农村信用联社',
    '14191100': '天津市农村信用社',
    '14203320': '宁波鄞州农村合作银行',
    '14215881': '佛山市三水区农村信用社',
    '14226510': '成都市农村信用社',
    '14231440': '沧州市农村信用社',
    '14243000': '江苏省农村信用社',
    '510': '永亨银行(中国)有限公司',
    '512': '永隆银行',
    '531': '花旗银行(中国)有限公司',
    '532': '美国银行有限公司',
    '533': '摩根大通银行(中国)有限公司',
    '561': '三菱东京日联银行(中国)有限公司',
    '563': '日本三井住友银行股份有限公司',
    '564': '瑞穗实业银行(中国)有限公司',
    '565': '日本山口银行股份有限公司',
    '591': '韩国外换银行股份有限公司',
    '593': '友利银行(中国)有限公司',
    '594': '韩国产业银行',
    '595': '新韩银行(中国)有限公司',
    '596': '韩国中小企业银行有限公司',
    '597': '韩亚银行(中国)有限公司',
    '621': '华侨银行(中国)有限公司',
    '622': '大华银行(中国)有限公司',
    '623': '星展银行(中国)有限公司',
    '631': '泰国盘谷银行(大众有限公司)',
    '641': '奥地利中央合作银行股份有限公司',
    '651': '比利时联合银行股份有限公司',
    '652': '比利时富通银行有限公司',
    '661': '荷兰银行',
    '662': '荷兰安智银行股份有限公司',
    '671': '渣打银行',
    '672': '英国苏格兰皇家银行公众有限公司',
    '691': '法国兴业银行(中国)有限公司',
    '694': '法国东方汇理银行股份有限公司',
    '695': '法国外贸银行股份有限公司',
    '711': '德国德累斯登银行股份公司',
    '712': '德意志银行(中国)有限公司',
    '713': '德国商业银行股份有限公司',
    '714': '德国西德银行股份有限公司',
    '715': '德国巴伐利亚州银行',
    '716': '德国北德意志州银行',
    '4024210': '江西农信社',
    '14144500': '山东农信社',
    '4023610': '农信安徽',
    '102': '中国工商银行',
    '103': '中国农业银行',
    '104': '中国银行',
    '105': '中国建设银行',
    '201': '国家开发银行',
    '202': '中国进出口银行',
    '203': '中国农业发展银行',
    '301': '交通银行',
    '302': '中信银行',
    '303': '中国光大银行',
    '304': '华夏银行',
    '305': '中国民生银行',
    '306': '广东发展银行',
    '307': '深圳发展银行',
    '308': '招商银行',
    '309': '兴业银行',
    '310': '上海浦东发展银行',
    '313': '城市商业银行',
    '314': '农村商业银行',
    '315': '恒丰银行',
    '316': '浙商银行',
    '317': '农村合作银行',
    '318': '渤海银行',
    '319': '徽商银行',
    '401': '城市信用社',
    '402': '农村信用社',
    '403': '中国邮政储蓄银行',
    '501': '汇丰银行',
    '502': '东亚银行',
    '503': '南洋商业银行',
    '504': '恒生银行(中国)有限公司',
    '505': '中国银行(香港)有限公司',
    '506': '集友银行有限公司',
    '507': '创兴银行有限公司',
    '509': '星展银行(中国)有限公司',
    '732': '意大利联合圣保罗银行股份有限公司',
    '741': '瑞士信贷银行股份有限公司',
    '742': '瑞士银行',
    '751': '加拿大丰业银行有限公司',
    '752': '加拿大蒙特利尔银行有限公司',
    '761': '澳大利亚和新西兰银行集团有限公司',
    '771': '摩根士丹利国际银行(中国)有限公司',
    '775': '联合银行(中国)有限公司',
    '776': '荷兰合作银行有限公司',
    '781': '厦门国际银行',
    '782': '法国巴黎银行(中国)有限公司',
    '785': '华商银行',
    '787': '华一银行',
    '969': '(澳门地区)银行',
    '989': '(香港地区)银行',
    '3020000': '中信实业银行',
    '4012900': '上海银行',
    '4023930': '厦门市商业银行',
    '4031000': '北京银行',
    '4044560': '烟台市商业银行',
    '4053910': '福州市商业银行',
    '4062410': '长春市商业银行',
    '4073140': '镇江市商业银行',
    '4094510': '济南市商业银行',
    '4105840': '深圳平安银行',
    '4115010': '焦作市商业银行',
    '4123330': '温州市商业银行',
    '4135810': '广州市商业银行',
    '4145210': '武汉市商业银行',
    '4162640': '齐齐哈尔市商业银行',
    '4025350': '湖北农信社',
    '3136650': '乐山商行',
    '3138820': '昆仑银行',
    '313433': '上饶银行'
  },
  WithdrawBankID: {
    '4172210': '沈阳市商业银行',
    '4184930': '洛阳市商业银行',
    '4192310': '辽阳市商业银行',
    '4202220': '大连市商业银行',
    '4213050': '苏州市商业银行',
    '4221210': '石家庄市商业银行',
    '4233310': '杭州市商业银行',
    '4256020': '东莞银行',
    '4263380': '金华市商业银行',
    '4278810': '乌鲁木齐市商业银行',
    '4283370': '绍兴市商业银行',
    '4296510': '成都市商业银行',
    '4302240': '抚顺市商业银行',
    '4314730': '临沂市商业银行',
    '4325250': '宜昌市商业银行',
    '4332350': '葫芦岛市商业银行',
    '4341100': '天津市商业银行',
    '4354910': '郑州市商业银行',
    '4368710': '银川市商业银行',
    '4375850': '珠海市商业银行',
    '4384530': '淄博市商业银行',
    '4392270': '锦州市商业银行',
    '4403610': '合肥市商业银行',
    '4416530': '重庆市商业银行',
    '4422610': '哈尔滨市商业银行',
    '4437010': '贵阳市商业银行',
    '4447910': '西安市商业银行',
    '4453020': '无锡市商业银行',
    '4462260': '丹东市商业银行',
    '4478210': '兰州市商业银行',
    '4484220': '南昌市商业银行',
    '4491610': '太原市商业银行',
    '4504520': '青岛市商业银行',
    '4512420': '吉林市商业银行',
    '4523060': '南通市商业银行',
    '4533120': '扬州市商业银行',
    '4544240': '九江市商业银行',
    '4554732': '日照市商业银行',
    '4562230': '鞍山市商业银行',
    '4571260': '秦皇岛市商业银行',
    '4588510': '西宁市商业银行',
    '4593450': '台州市商业银行',
    '4603110': '盐城市商业银行',
    '4615510': '长沙市商业银行',
    '4624580': '潍坊市商业银行',
    '4634280': '赣州市商业银行',
    '4643970': '泉州银行',
    '4652280': '营口市商业银行',
    '4667310': '昆明市商业银行',
    '4672290': '阜新市商业银行',
    '4683040': '常州市商业银行',
    '4693080': '淮安市商业银行',
    '4703350': '嘉兴市商业银行',
    '4713620': '芜湖市商业银行',
    '4721460': '廊坊市商业银行',
    '4733450': '台州市泰隆城市信用社',
    '4741900': '呼和浩特市商业银行',
    '4753360': '湖州市商业银行',
    '4773650': '马鞍山商业银行',
    '4786110': '南宁商业银行',
    '4791920': '包头商业银行',
    '4803070': '连云港商业银行',
    '4814650': '威海商业银行',
    '4823660': '淮北商业银行',
    '4836560': '攀枝花商业银行',
    '4021000': '农信社(北京)',
    '4243010': '南京银行',
    '4025510': '农信湖南',
    '4843680': '安庆商业银行',
    '4856590': '绵阳商业银行',
    '4866570': '泸州商业银行',
    '4871620': '大同商业银行',
    '4885050': '三门峡城市信用社',
    '4901380': '张家口商业银行',
    '14012900': '上海市农村信用社',
    '14023052': '昆山市农村信用社',
    '14033055': '常熟市农村信用社',
    '14045840': '深圳市农村信用社',
    '14055810': '广州市农村信用社',
    '14063317': '杭州市萧山区农村信用社',
    '14075882': '南海市农村信用社',
    '14085883': '顺德市农村信用社',
    '14097310': '昆明市农村信用社',
    '14105210': '武汉市农村信用社',
    '14113030': '徐州市市郊农村信用社',
    '14136530': '重庆市农村信用社',
    '14144500': '山东省市农村信用社',
    '14144520': '青岛农村信用社',
    '14156020': '东莞农村信用社',
    '14163056': '张家港市农村商业银行',
    '14173930': '厦门市农村信用社',
    '14181000': '北京农村信用联社',
    '14191100': '天津市农村信用社',
    '14203320': '宁波鄞州农村合作银行',
    '14215881': '佛山市三水区农村信用社',
    '14226510': '成都市农村信用社',
    '14231440': '沧州市农村信用社',
    '14243000': '江苏省农村信用社',
    '510': '永亨银行(中国)有限公司',
    '512': '永隆银行',
    '531': '花旗银行(中国)有限公司',
    '532': '美国银行有限公司',
    '533': '摩根大通银行(中国)有限公司',
    '561': '三菱东京日联银行(中国)有限公司',
    '563': '日本三井住友银行股份有限公司',
    '564': '瑞穗实业银行(中国)有限公司',
    '565': '日本山口银行股份有限公司',
    '591': '韩国外换银行股份有限公司',
    '593': '友利银行(中国)有限公司',
    '594': '韩国产业银行',
    '595': '新韩银行(中国)有限公司',
    '596': '韩国中小企业银行有限公司',
    '597': '韩亚银行(中国)有限公司',
    '621': '华侨银行(中国)有限公司',
    '622': '大华银行(中国)有限公司',
    '623': '星展银行(中国)有限公司',
    '631': '泰国盘谷银行(大众有限公司)',
    '641': '奥地利中央合作银行股份有限公司',
    '651': '比利时联合银行股份有限公司',
    '652': '比利时富通银行有限公司',
    '661': '荷兰银行',
    '662': '荷兰安智银行股份有限公司',
    '671': '渣打银行',
    '672': '英国苏格兰皇家银行公众有限公司',
    '691': '法国兴业银行(中国)有限公司',
    '694': '法国东方汇理银行股份有限公司',
    '695': '法国外贸银行股份有限公司',
    '711': '德国德累斯登银行股份公司',
    '712': '德意志银行(中国)有限公司',
    '713': '德国商业银行股份有限公司',
    '714': '德国西德银行股份有限公司',
    '715': '德国巴伐利亚州银行',
    '716': '德国北德意志州银行',
    '4024210': '江西农信社',
    '4023610': '农信安徽',
    '102': '中国工商银行',
    '103': '中国农业银行',
    '104': '中国银行',
    '105': '中国建设银行',
    '201': '国家开发银行',
    '202': '中国进出口银行',
    '203': '中国农业发展银行',
    '301': '交通银行',
    '302': '中信银行',
    '303': '中国光大银行',
    '304': '华夏银行',
    '305': '中国民生银行',
    '306': '广东发展银行',
    '307': '深圳发展银行',
    '308': '招商银行',
    '309': '兴业银行',
    '310': '上海浦东发展银行',
    '313': '城市商业银行',
    '314': '农村商业银行',
    '315': '恒丰银行',
    '316': '浙商银行',
    '317': '农村合作银行',
    '318': '渤海银行',
    '319': '徽商银行',
    '401': '城市信用社',
    '402': '农村信用社',
    '403': '中国邮政储蓄银行',
    '501': '汇丰银行',
    '502': '东亚银行',
    '503': '南洋商业银行',
    '504': '恒生银行(中国)有限公司',
    '505': '中国银行(香港)有限公司',
    '506': '集友银行有限公司',
    '507': '创兴银行有限公司',
    '509': '星展银行(中国)有限公司',
    '732': '意大利联合圣保罗银行股份有限公司',
    '741': '瑞士信贷银行股份有限公司',
    '742': '瑞士银行',
    '751': '加拿大丰业银行有限公司',
    '752': '加拿大蒙特利尔银行有限公司',
    '761': '澳大利亚和新西兰银行集团有限公司',
    '771': '摩根士丹利国际银行(中国)有限公司',
    '775': '联合银行(中国)有限公司',
    '776': '荷兰合作银行有限公司',
    '781': '厦门国际银行',
    '782': '法国巴黎银行(中国)有限公司',
    '785': '华商银行',
    '787': '华一银行',
    '969': '(澳门地区)银行',
    '989': '(香港地区)银行',
    '3020000': '中信实业银行',
    '4012900': '上海银行',
    '4023930': '厦门市商业银行',
    '4031000': '北京银行',
    '4044560': '烟台市商业银行',
    '4053910': '福州市商业银行',
    '4062410': '长春市商业银行',
    '4073140': '镇江市商业银行',
    '4083320': '宁波市商业银行',
    '4094510': '济南市商业银行',
    '4105840': '深圳平安银行',
    '4115010': '焦作市商业银行',
    '4123330': '温州市商业银行',
    '4135810': '广州市商业银行',
    '4145210': '武汉市商业银行',
    '4162640': '齐齐哈尔市商业银行',
    '4025350': '湖北农信社',
    '3136650': '乐山商行',
    '3138820': '昆仑银行',
    '313433': '上饶银行'
  }
}

export const INPUT_INITDATA = {
  StartTime: new ParseTime().format('{y}-{M}-{d} 00:00:00').time,
  EndTime: new ParseTime().format('{y}-{M}-{d} 23:59:59').time,
  PlatTradeTime:new ParseTime().format('{y}-{M}-{d} 00:00:00').time
}

export const SEARCH_POPUP = {
  StoreSerial: {
    FunCode: '65033',
    popupQuery: ['StoreSerial', 'MerchantName'],
    popupCont: ['StoreSerial', 'MerchantName'],
    retName: 'MerchantID'
  },
  MerchantID: {
    FunCode: '65123',
    popupQuery: ['MerchantID', 'MerchantName'],
    popupCont: ['MerchantID', 'MerchantName'],
    retName: 'MerchantID'
  },
  AgencyID: {
    // FunCode: '65179',
    FunCode: '65123',
    // popupQuery: ['AgencyID', 'AgencyName'],
    popupQuery: ['MerchantID', 'MerchantName'],
    popupCont: ['MerchantID', 'MerchantName'],
    retName: 'MerchantID'
  },
  CusBankID: {
    FunCode: '65145',
    popupQuery: ['CusBankID', 'CusBankName'],
    popupCont: ['CusBankID', 'CusBankName']
  },
  SubMerchantID: {
    FunCode: '65217',
    popupQuery: ['CusBankID'],
    popupCont: ['SubMerchantID', 'SubMerchantName', 'SubMerchantType'],
    retName: 'SubMerchantID'
  }
}
