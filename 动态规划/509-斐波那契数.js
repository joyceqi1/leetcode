/**
 * @param {number} n
 * @return {number}
 */
 var fib1 = function (n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
};
var fib = function (n) {
    let lst = [0, 1]
    function innerfib (n) {
        if (typeof lst[n] !=='number') {
            lst[n] = innerfib(n - 1) + innerfib(n - 2)
        }
        return lst[n]
    }
    return innerfib(n)
};
const n = 4
console.log(fib(n));