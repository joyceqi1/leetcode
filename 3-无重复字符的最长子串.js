/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    for(let i in s){
        map.set((map.get(s[i]) || 0)+1)
    }
};