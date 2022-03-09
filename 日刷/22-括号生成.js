/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const res = [];
    const reg = /\(\)/, str1 = '()()',str2 = '(())'
    let str = '()'
    if(n===1) return [str]
    
    for(let i=0;i<n;i++){
        let match = str.match(reg)
        if(match){
            let index = match.index
            let left = str.slice(0,index), right = str.slice(index+2);
            res.push(left + str1 + right)
            res.push(left + str2 + right)
        }
        
    }
};
const n=3;
// console.log(generateParenthesis(n))