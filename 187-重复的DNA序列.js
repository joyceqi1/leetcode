var findRepeatedDnaSequences = function(s) {
    let arr = [];
    let map = new Map();
    let len = s.length;
    if (len <= 10){
        return arr
    }
    for(i=0;i<=s.length - 10;++i){
        let tmp = s.slice(i,i+10)
        map.set(tmp, (map.get(tmp) || 0) + 1)
        if(map.get(tmp) > 1){
            arr.push(tmp)
        }
    }
    return arr
};
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))