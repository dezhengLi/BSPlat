import Vue from 'vue'
import commonPopup from './common-popup'
// 创建一个共用弹框构造器
const CommonPopupConstructor = Vue.extend(commonPopup)
// instance实例
let currentPopup, instance, mounted
// 一个弹框请求
let popupQueue = []

const showNextPopup = function () {
  // 挂载实例
  if (!instance) {
    instance = new CommonPopupConstructor({
      el: document.createElement('div')
    })
  }
  console.log(popupQueue)
  if (popupQueue.length > 0) {
    console.log(popupQueue)
    // currentPopup是一个对象，包含有options: {titleField，submitFc｝
    // 或options: {titleField: Array(16), renderData: {…}, fieldConfig: {…}, submitFc: ƒ}fieldConfig: {__ob__: Observer}renderData: ArrivalWay: 1ControlFlag: 1CreateTime: "2017-07-20 00:00:00"CusBankID: ""CusBankName: ""EndTime: "23:59:59"FeeMode: (...)IsAllow: (...)LessAmount: (...)LessFee: (...)MaxAmount: (...)MaxTotalAmount: (...)MerchantID: (...)MoneyFee: (...)PayType: (...)PayTypeName: (...)StartTime: (...)SubMerchantID: (...)UpdateTime: (...)__ob__: Observer {value: {…}, dep: Dep, vmCount: 0}get ArrivalWay: ƒ reactiveGetter()set ArrivalWay: ƒ reactiveSetter(newVal)get ControlFlag: ƒ reactiveGetter()set ControlFlag: ƒ reactiveSetter(newVal)get CreateTime: ƒ reactiveGetter()set CreateTime: ƒ reactiveSetter(newVal)get CusBankID: ƒ reactiveGetter()set CusBankID: ƒ reactiveSetter(newVal)get CusBankName: ƒ reactiveGetter()set CusBankName: ƒ reactiveSetter(newVal)get EndTime: ƒ reactiveGetter()set EndTime: ƒ reactiveSetter(newVal)get FeeMode: ƒ reactiveGetter()set FeeMode: ƒ reactiveSetter(newVal)get IsAllow: ƒ reactiveGetter()set IsAllow: ƒ reactiveSetter(newVal)get LessAmount: ƒ reactiveGetter()set LessAmount: ƒ reactiveSetter(newVal)get LessFee: ƒ reactiveGetter()set LessFee: ƒ reactiveSetter(newVal)get MaxAmount: ƒ reactiveGetter()set MaxAmount: ƒ reactiveSetter(newVal)get MaxTotalAmount: ƒ reactiveGetter()set MaxTotalAmount: ƒ reactiveSetter(newVal)get MerchantID: ƒ reactiveGetter()set MerchantID: ƒ reactiveSetter(newVal)get MoneyFee: ƒ reactiveGetter()set MoneyFee: ƒ reactiveSetter(newVal)get PayType: ƒ reactiveGetter()set PayType: ƒ reactiveSetter(newVal)get PayTypeName: ƒ reactiveGetter()set PayTypeName: ƒ reactiveSetter(newVal)get StartTime: ƒ reactiveGetter()set StartTime: ƒ reactiveSetter(newVal)get SubMerchantID: ƒ reactiveGetter()set SubMerchantID: ƒ reactiveSetter(newVal)get UpdateTime: ƒ reactiveGetter()set UpdateTime: ƒ reactiveSetter(newVal)__proto__: ObjectsubmitFc: ƒ submitFc(params, p)titleField: (16) ["MerchantID", "PayType", "PayTypeName", "CusBankName", "IsAllow", "SubMerchantID", "ControlFlag", "LessAmount", "MaxAmount", "MaxTotalAmount", "StartTime", "EndTime", "MoneyFee", "FeeMode", "ArrivalWay", "LessFee", __ob__: Observer]__proto__: Object__proto__: Object
    // shift()截取数值第一个返回
    currentPopup = popupQueue.shift()
    console.log(currentPopup)
    // options 里{titleField: Array(7), submitFc: ƒ}
    // 或编辑弹框{titleField: Array(16), renderData: {…}, fieldConfig: {…}, submitFc: ƒ}fieldConfig: {__ob__: Observer}renderData: ArrivalWay: 1ControlFlag: 1CreateTime: "2017-07-20 00:00:00"CusBankID: ""CusBankName: ""EndTime: "23:59:59"FeeMode: (...)IsAllow: (...)LessAmount: (...)LessFee: (...)MaxAmount: (...)MaxTotalAmount: (...)MerchantID: (...)MoneyFee: (...)PayType: (...)PayTypeName: (...)StartTime: (...)SubMerchantID: (...)UpdateTime: (...)__ob__: Observer {value: {…}, dep: Dep, vmCount: 0}get ArrivalWay: ƒ reactiveGetter()set ArrivalWay: ƒ reactiveSetter(newVal)get ControlFlag: ƒ reactiveGetter()set ControlFlag: ƒ reactiveSetter(newVal)get CreateTime: ƒ reactiveGetter()set CreateTime: ƒ reactiveSetter(newVal)get CusBankID: ƒ reactiveGetter()set CusBankID: ƒ reactiveSetter(newVal)get CusBankName: ƒ reactiveGetter()set CusBankName: ƒ reactiveSetter(newVal)get EndTime: ƒ reactiveGetter()set EndTime: ƒ reactiveSetter(newVal)get FeeMode: ƒ reactiveGetter()set FeeMode: ƒ reactiveSetter(newVal)get IsAllow: ƒ reactiveGetter()set IsAllow: ƒ reactiveSetter(newVal)get LessAmount: ƒ reactiveGetter()set LessAmount: ƒ reactiveSetter(newVal)get LessFee: ƒ reactiveGetter()set LessFee: ƒ reactiveSetter(newVal)get MaxAmount: ƒ reactiveGetter()set MaxAmount: ƒ reactiveSetter(newVal)get MaxTotalAmount: ƒ reactiveGetter()set MaxTotalAmount: ƒ reactiveSetter(newVal)get MerchantID: ƒ reactiveGetter()set MerchantID: ƒ reactiveSetter(newVal)get MoneyFee: ƒ reactiveGetter()set MoneyFee: ƒ reactiveSetter(newVal)get PayType: ƒ reactiveGetter()set PayType: ƒ reactiveSetter(newVal)get PayTypeName: ƒ reactiveGetter()set PayTypeName: ƒ reactiveSetter(newVal)get StartTime: ƒ reactiveGetter()set StartTime: ƒ reactiveSetter(newVal)get SubMerchantID: ƒ reactiveGetter()set SubMerchantID: ƒ reactiveSetter(newVal)get UpdateTime: ƒ reactiveGetter()set UpdateTime: ƒ reactiveSetter(newVal)__proto__: ObjectsubmitFc: ƒ submitFc(params, p)titleField: (16) ["MerchantID", "PayType", "PayTypeName", "CusBankName", "IsAllow", "SubMerchantID", "ControlFlag", "LessAmount", "MaxAmount", "MaxTotalAmount", "StartTime", "EndTime", "MoneyFee", "FeeMode", "ArrivalWay", "LessFee", __ob__: Observer]__proto__: Object__proto__: Object
    let options = currentPopup.options
    console.log(options)
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        console.log(options[prop])
        // 传给实例
        instance[prop] = options[prop]
      }
    }
    console.log(currentPopup.resolve)
    instance.resolve = currentPopup.resolve
    console.log(instance.resolve)
    console.log(currentPopup.reject)
    instance.reject = currentPopup.reject
    console.log(instance.reject)
    console.log(mounted)
    if (!mounted) {
      mounted = true
      document.body.appendChild(instance.$el)
    }
    instance.showPopup()
    // 表格的数据
    instance._initData()
  }
}

const CommonPopup = function (options) {
  popupQueue.push({
    options
  })

  showNextPopup()
}

export default CommonPopup
