/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const len = wordDict.length
    function check (s) {
        let slen = s.length, res=false
        if (slen === 0) return true
        for (let i = 0; i < len; i++) {
            if (s.startsWith(wordDict[i])) {
                res ||= check(s.slice(wordDict[i].length, slen))
            }
        }
        return res
    }
    return check(s)
};
const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
console.log(wordBreak(s, wordDict));