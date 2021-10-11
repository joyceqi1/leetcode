function deepCopy(obj){
    if(!obj) return obj
    if(!obj instanceof Object) return obj
    if(obj instanceof Function) {
        return obj.apply(this,arguments)
    }
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof RegExp) return new RegExp(obj.source,obj.flags)
    const res = Array.isArray(obj)?[]:{}
    for(let item of Object.keys(obj)){
        if(obj[item] instanceof Object){
            res[item] = deepCopy(obj[item])
        } else{
            res[item] = obj[item]
        }
    }
    return res
}
a={
    'a':1,
    'arr':[1,'2',3],
    'date':new Date(),
    'reg': new RegExp('[a-z]'),
    'obj': {
        'a':1,
    'arr':[1,'2',3],
    'date':new Date(),
    'reg': new RegExp('[a-z]'),
    }
}
console.log(deepCopy(a))