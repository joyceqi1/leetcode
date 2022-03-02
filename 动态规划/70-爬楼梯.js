/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let lst = [1, 2]
    function innerClimb (n) {
        if (!lst[n]) {
            lst[n] = innerClimb(n - 1) + innerClimb(n - 2)
        }
        return lst[n]
    }
    return innerClimb(n-1)
};
const n = 45
console.log(climbStairs(n));