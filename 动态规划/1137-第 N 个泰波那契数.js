/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
     let lst = [0,1,1]
    function innerTrib(n){
        if(n<3){
            return lst[n]
        }else if(!lst[n]){
            lst[n] = innerTrib(n-1) + innerTrib(n-2) + innerTrib(n-3)
        }
        return lst[n]
    }
    return innerTrib(n)
};
const n = 25
console.log(tribonacci(n));