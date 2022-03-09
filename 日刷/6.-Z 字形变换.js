/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s
    }
    let list_length = numRows < s.length ? numRows : s.length
    let explanation = new Array(list_length)
    for (let i = 0; i < list_length; i++) {
        explanation[i] = new Array()
    }
    let col = 0, row = 0
    for (let i = 0; i < s.length; i++) {
        explanation[col][row] = s[i]
        if (col < numRows - 1 && row % (numRows - 1) === 0) {
            col += 1
        } else {
            col -= 1
            row += 1
        }
    }
    let res = explanation.map(item => {
        return item.reduce((sum, now) => {
            return sum + now
        })
    }).join('')
    return res
};
const s = "AB", numRows = 1
console.log(convert(s, numRows));