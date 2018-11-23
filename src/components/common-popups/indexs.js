import Vue from 'vue'
import commonPopup from './common-popup'
// 创建一个共用弹框构造器
const CommonPopupConstructor = Vue.extend(commonPopup)

let currentPopup, instance, mounted
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
    currentPopup = popupQueue.shift()
    console.log(currentPopup)
    // options 里{titleField: Array(7), submitFc: ƒ}
    let options = currentPopup.options
    console.log(options)
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        console.log(options[prop])
        instance[prop] = options[prop]
      }
    }
    console.log(currentPopup.resolve)
    instance.resolve = currentPopup.resolve
    console.log(instance.resolve)
    console.log(currentPopup.reject)
    instance.reject = currentPopup.reject
    console.log(instance.reject)
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
