/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray1 = function(nums) {
    let pre=0,max = nums[0]
    nums.map(item => {
        pre = Math.max(item, pre+item)
        max = Math.max(max, pre)
    })
    return max
};
class Status{
    constructor(left, right, middle, i){
        this.leftSum = left
        this.rightSum = right
        this.middleSum = middle
        this.iSum = i
    }
}
const pushUp = (left, right) => {
    const iSum = left.iSum + right.iSum
    const leftSum = Math.max(left.leftSum, left.iSum+right.leftSum)
    const rightSum = Math.max(right.rightSum, right.iSum+left.rightSum)
    const middleSum = Math.max(Math.max(left.middleSum, right.middleSum), right.leftSum + left.rightSum)
    return new Status(leftSum, rightSum, middleSum, iSum)
}
const getInfo = (nums, left, right) =>{
    console.log({left, right});
    if(right===left) return new Status(nums[left],nums[left],nums[left],nums[left])
    const middle = (right+left) >> 1
    const leftSub = getInfo(nums, left, middle)
    const rightSub = getInfo(nums, middle+1, right)
    return pushUp(leftSub, rightSub)
}
var maxSubArray = function(nums) {
    return getInfo(nums,0,nums.length-1).middleSum
}
const nums = [-2,1,5,4]
console.log(maxSubArray(nums));