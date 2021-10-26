/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
     const len2 = nums2.length;
     const res = [];
    for(let i in nums1){
        let flag = -1;
        for( let j = nums2.indexOf(nums1[i]);j < len2;j++){
            if(nums1[i] < nums2[j]){
                flag = nums2[j];
                break;
            } 
        }
        res.push(flag)
    }
    return res
}; 
var nextGreaterElement2 = function(nums1, nums2) {
    const stack = [];
    const map = new Map();
   for(let i=nums2.length - 1; i>=0; i--){
       let num = nums2[i]
       while(stack&&num>stack[stack.length - 1]){
           stack.pop();
       }
       map.set(num, stack.length?stack[stack.length-1]:-1)
       stack.push(num)
   }
   const res = new Array(nums1.length).fill(0).map((_, i)=>{
        return map.get(nums1[i])
   })
   return res
}; 
const nums1 = [4,1,2], nums2 = [1,3,4,2];
console.log(nextGreaterElement2(nums1, nums2))
// console.log(nums1.map(item=>{
//     console.log(item)
//     return item
// }))
