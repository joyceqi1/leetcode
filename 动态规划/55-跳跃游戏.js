/**
 * @param {number[]} nums
 * @return {boolean}
 */
function jump (nums) {
    const len = nums.length
    for (let i = len - 1; i >= 0; i--) {
        if (nums[i] > len - i) {
            return true
        }
    }
    return false
}
var canJump1 = function (nums) {
    const len = nums.length
    if (len === 1) return true
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] === 0 && !jump(nums.slice(0, i))) {
            return false
        }
    }
    return true
};
function canJump (nums) {
    let max = 0,len = nums.length
    if(len === 1) return true
    for (let i = 0; i < len && i <= max; i++) {
        max = Math.max(nums[i] + i, max)
        if (max >= len - 1) return true
    }
    return false
}
const nums = [1, 0, 0]
console.log(canJump(nums));