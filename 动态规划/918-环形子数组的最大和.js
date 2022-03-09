/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubarraySumCircular = function(nums) {
    let pre = 0, max = nums[0]
    nums.map(item => {
        pre = Math.max(item, pre+item)
        max = Math.max(pre, max)
    })
    return max
};
const nums = [5,-3,5]
console.log(maxSubarraySumCircular(nums));