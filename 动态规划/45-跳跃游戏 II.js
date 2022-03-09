/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let jumpStep = [0], len = nums.length, i = 0
    if (len === 1) return 0
    while (i < len) {
        if (i + nums[i] >= len - 1) return jumpStep[i] + 1
        for (let j = i + 1; j <= i + nums[i]; j++) {
            if (!jumpStep[j]) {
                jumpStep[j] = jumpStep[i] + 1
            }
        }
        i += 1
    }
};
var jump = function (nums) {
    let max=nums[0],len=nums.length,step=0
    if(len<=2) return len-1
    for(let i=1;i<len;i++){
        step += 1
        if(max >= len-1) return step
        let _max = max
        for(let j=i;j<=_max;j++){
            i = j
            max = Math.max(max, nums[j]+j)
            if(max >= len-1) return step+1
        }
    }
}
const nums = [1, 1,1,1]
console.log(jump(nums));