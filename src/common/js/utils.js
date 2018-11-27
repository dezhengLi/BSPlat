
export const fileterObj = (filters, handleObj) => (
  Object.keys(handleObj).reduce((prevObj, filt) => {
    const newObj = Object.assign({}, prevObj)
    if (filters.indexOf(filt) === -1) {
      newObj[filt] = handleObj[filt]
    }
    return newObj
  }, {})
)

export class ParseTime {
  constructor (time = new Date()) {
    this.time = time
    this.formatTime = null
    this.format()
  }

  format (format = '{y}-{M}-{d} {h}:{m}:{s}') {
    const data = this.time
    const dayFormat = ['一', '二', '三', '四', '五', '六', '日']
    const formatObj = {
      y: data.getFullYear(),
      M: data.getMonth() + 1,
      d: data.getDate(),
      h: data.getHours(),
      m: data.getMinutes(),
      s: data.getSeconds(),
      a: data.getDay()
    }
    Object.keys(formatObj).forEach(function(key) {
      let value = Reflect.get(formatObj, key)
      if (key === 'a') {
        value = dayFormat[value - 1]
      } else if (value < 10) {
        value = `0${value}`
      }
      Reflect.set(formatObj, key, value)
    })

    this.formatTime = format.replace(/{(y|M|d|h|m|s|a)+}/g, (r, key) => Reflect.get(formatObj, key))
    this.time = new Date(this.formatTime)
    return this
  }
}

// const complementBits = function (str, n) {
//   while (n > 0) {
//     str = '0' + str
//     n--
//   }
//   return str
// }

// 按位与
const bitwiseAnd = function(a, b) {
  let [min, max] = [a, b].sort(function(p, n) {
    return p.length > n.length
  })
  // min = complementBits(min, max.length - min.length)
  min = min.padStart(max.length, 0)
  let result = ''
  for (let i = 0, l = max.length; i < l; i++) {
    result += (
      min[i] === '1' && max[i] === '1'
        ? 1
        : 0
    )
  }
  return result
}

// 按位或
const bitwiseOr = function(a, b) {
  let [min, max] = [a, b].sort(function(p, n) {
    return p.length > n.length
  })
  // min = complementBits(min, max.length - min.length)
  min = min.padStart(max.length, 0)
  let result = ''
  for (let i = 0, l = max.length; i < l; i++) {
    result += (
      min[i] === '1' || max[i] === '1'
        ? 1
        : 0
    )
  }
  return result
}

const HexAndBinaryObj = {
  '0': '0000',
  '1': '0001',
  '2': '0010',
  '3': '0011',
  '4': '0100',
  '5': '0101',
  '6': '0110',
  '7': '0111',
  '8': '1000',
  '9': '1001',
  'A': '1010',
  'B': '1011',
  'C': '1100',
  'D': '1101',
  'E': '1110',
  'F': '1111',

  '0000': '0',
  '0001': '1',
  '0010': '2',
  '0011': '3',
  '0100': '4',
  '0101': '5',
  '0110': '6',
  '0111': '7',
  '1000': '8',
  '1001': '9',
  '1010': 'A',
  '1011': 'B',
  '1100': 'C',
  '1101': 'D',
  '1110': 'E',
  '1111': 'F'
}

const hexToBinary = function(hex) {
  hex = hex.split('')
  return hex.reduce(function(result, c) {
    return result + HexAndBinaryObj[c]
  }, '')
}

const binaryToHexReg = new RegExp('\\d{4}', 'g')
const binaryToHex = function(binary) {
  // RegExp
  return binary.replace(binaryToHexReg, function(p) {
    return HexAndBinaryObj[p]
  })
}

export const privilegeOr = function(privileges) {
  const binaryPrivilege = privileges.reduce(function(result, c) {
    return bitwiseOr(result, hexToBinary(c))
  }, '0')
  return binaryToHex(binaryPrivilege)
}

const privilegeValidate = function (privilege, authority) {
  privilege = hexToBinary(privilege)
  authority = hexToBinary(authority)
  return bitwiseAnd(privilege, authority).includes('1')
}

export const privilegeFilter = function (trees, privilege) {
  for (let i = trees.length - 1; i >= 0; i--) {
    const item = trees[i]
    const childPrivilege = item.privilege
    const children = item.children
    if (children) {
      privilegeFilter(children, privilege)
    }
    if ((childPrivilege && !privilegeValidate(childPrivilege, privilege)) ||
      (children && children.length === 0)) {
      trees.splice(i, 1)
    }
  }
}

export const deepCopy = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

// 获取时间hh：mm：ss
export const retTime=function(obj){
  let hh = obj.getHours() >= 10 ? obj.getHours() : '0' + obj.getHours()
  let mm = obj.getMinutes() >= 10 ? obj.getMinutes() : '0' + obj.getMinutes()
  let ss = obj.getSeconds() >= 10 ? obj.getSeconds() : '0' + obj.getSeconds()
  return hh + ':' + mm + ':' + ss
}



export const retdayTime=function (obj) {
  let YY = obj.getFullYear() 
  let MM=obj.getMonth() + 1>=10? obj.getMonth()+ 1: '0'+(obj.getMonth()+ 1)
  let DD=obj.getDate() >=10? obj.getDate(): '0'+obj.getDate()
  return YY + '-' +MM+ '-' +DD
}


