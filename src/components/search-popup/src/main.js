import Vue from 'vue'
import searchPopup from './main.vue'

const defaults = {
  popupQuery: [],
  popupCont: [],
  defaultQueryKey: '',
  defaultQueryVal: '',
  FunKey: '',
  requestFunc: () => {}
}
// 创建一个共用搜索弹框构造器
const SearchPopupConstructor = Vue.extend(searchPopup)

let currentBox, instance
let boxQueue = []
// 挂载实例
const initInstance = () => {
  instance = new SearchPopupConstructor({
    el: document.createElement('div')
  })
}
// 弹出搜索框触发
const showNextBox = function () {
  if (!instance) {
    initInstance()
  }
  if (boxQueue.length > 0) {
    console.log(boxQueue)
    // currentBox里{options: {…}, resolve: ƒ, reject: ƒ}
    currentBox = boxQueue.shift()
    console.log(currentBox)
    // options里{popupQuery: Array(2), popupCont: Array(2), defaultQueryKey: "", defaultQueryVal: "", FunKey: "", …}
    let options = currentBox.options
    console.log(options)
    for (let prop in options) {
      console.log(prop)
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop]
        console.log(instance[prop])
      }
    }
    instance.resolve = currentBox.resolve

    instance.reject = currentBox.reject

    instance.initSearch()
    document.body.appendChild(instance.$el)
  }
}

const SearchPopup = function (options) {
  return new Promise((resolve, reject) => {
    boxQueue.push({
      options: Object.assign({}, defaults, options),
      resolve,
      reject
    })
    showNextBox()
  })
}

export default SearchPopup
export { SearchPopup }
