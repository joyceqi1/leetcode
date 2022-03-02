/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    let len = cost.length
    let lst = [0,0]
    function innerMin(n){
        if(typeof lst[n] === 'number'){
            return lst[n]
        }
        lst[n] = Math.min(innerMin(n-1)+cost[n-1], innerMin(n-2)+cost[n-2])
        return lst[n]
    }
    return innerMin(len)
};
const cost = [1,100,1,1,1,100,1,1,100,1]
console.log(minCostClimbingStairs(cost));