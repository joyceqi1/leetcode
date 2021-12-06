/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
   let res = ''
   for(let item of s){
     if(item!==' '){
      res += item
     }else{
      k -= 1
      if(k>0){
        res += item
      }else{
        return res
      }
     }
   }
   return res
  // return s.split(' ').reduce((pre, next, index)=>{
  //   if(index < k){
  //     return pre + ' ' + next
  //   }
  //   return pre
  // })
};
const s = "Hello how are you Contestant", k = 4
console.log(truncateSentence(s, k))