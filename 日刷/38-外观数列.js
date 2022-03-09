var countAndSay = function(n) {
    if(n===1){
        return '1'
    }
    let arr = countAndSay(n-1)
    // let arr = '1'
    let len = arr.length
    let res = ''
    let pre = 0, prod=1 
    for(let i=0;i<len;i++){
        if(!arr[prod] || arr[prod]!==arr[pre]){
            res += (prod-pre) +arr[pre]
            pre = prod
        }
        prod += 1

    }
    return res
};
console.log(countAndSay(5))
// console.log(count('1123'))