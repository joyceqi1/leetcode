// 对象扁平化
function objectFlat (obj) {
    let res = {}
    function flat (key, value) {
      if (Object(value) !== value||value instanceof Date||value instanceof RegExp) {
        // 判断是基本数据类型还是引用数据类型
        if (key) {
          res[key] = value
        }
      } else if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i ++) {
          flat(`${key}[${i}]`, value[i])
        }
        if (value.length === 0) {
          res[key] = []
        }
      } else {
        let objArr = Object.keys(value)
        objArr.forEach(item => {
          flat(key ? `${key}.${item}` : `${item}`, value[item])
        })
        if (objArr.length === 0 && key) {
          res[key] = {}
        }
      }
    }
    flat('', obj)
    return res
  }
a={
    'a':1,
    'arr':[1,'2',3],
    'date':new Date(),
    '': new RegExp('[a-z]'),
    'obj': {
        'a':1,
    'arr':[1,'2',3],
    'date':new Date(),
    'reg': new RegExp('[a-z]'),
    }
}
// console.log(objectFlat(a))
// 数组扁平化
function arrFlat (arr) {
    let res = []
    arr.map((item)=>{
        if(Array.isArray(item)){
            res.push(...arrFlat(item))
        }else{
            res.push(item)
        }
    })
    return res
}

arr = [1,[2,3], [3, [5,6]]]
console.log(arrFlat(arr))