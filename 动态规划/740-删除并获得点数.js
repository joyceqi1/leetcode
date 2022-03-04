var deleteAndEarn = function (nums) {
    let maxVal = 0;
    for (const val of nums) {
        maxVal = Math.max(maxVal, val);
    }
    const sum = new Array(maxVal + 1).fill(0);
    for (const val of nums) {
        sum[val] += val;
    }
    return rob(sum);
};

const rob = (nums) => {
    const size = nums.length;
    let first = nums[0], second = Math.max(nums[0], nums[1]);
    for (let i = 2; i < size; i++) {
        let temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
}
const nums = [3, 7, 10, 5, 2, 4, 8, 9, 9, 4, 9, 2, 6, 4, 6, 5, 4, 7, 6, 10]
console.log(deleteAndEarn(nums));