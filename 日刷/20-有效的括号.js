/**
 * @param {string} s
 * @return {boolean}
 * 栈解法
 */
 var isValid = function(s) {
    const arr = [];
    const map = {
        '[': ']',
        '{': '}',
        '(': ')'
    };
    const left = Object.keys(map), right = Object.values(map);
    for(let item of s){
        if(left.includes(item)){
            arr.push(item)
        }else if(right.includes(item)){
            if(arr.length&&item===map[arr[arr.length-1]]){
                arr.pop()
            }else{
                return false
            }
        }else{
            return false
        }
    }
    return arr.length===0?true:false
};

let s = "()[]{("
console.log(isValid(s))
