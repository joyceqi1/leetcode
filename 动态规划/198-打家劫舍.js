/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let res = []
    const len = nums.length
    switch (len) {
        case 1:
            return nums[0]
            break
        case 2:
            return Math.max(nums[0], nums[1])
            break
        case 3:
            return Math.max(nums[0] + nums[2], nums[1])
            break
        default:
            res = [nums[0], Math.max(nums[0], nums[1]), Math.max(nums[0] + nums[2], nums[1])]
            for (let i = 3; i < len; i++) {
                res[i] = Math.max(res[i - 2], res[i - 3]) + nums[i]
            }
            return Math.max(res[len - 1], res[len - 2])
    }
};
const nums = [1,3,1]
console.log(rob(nums));