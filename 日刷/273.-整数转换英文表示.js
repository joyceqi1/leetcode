var numberToWords = function(num) {
    const singles = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];
    let arr = [];
    if(num === 0){
        return 'Zero'
    }
    let str = num + '', length = str.length, teensFlag = false, thousandsFlag = false
    for(let i of str){
        if(i!=='0'){
            thousandsFlag = true
        }
        if(length%3 === 0) {
            arr.push(singles[parseInt(i)])
            if(i!=='0'){
                arr.push('Hundred')
            }
        }else if(length%3 === 1){
            if(!teensFlag){
                arr.push(singles[parseInt(i)])
            }else{
                arr.push(teens[parseInt(i)])
            }
            if(thousandsFlag){
                arr.push(thousands[(length-1)/3])
                thousandsFlag = false
            }
            teensFlag = false
        } else {
            if(i === '1'){
                teensFlag = true
            }else{
                arr.push(tens[parseInt(i)])
            }
        }
        length -= 1
    }
    arr = arr.filter((item)=>{
        if(item!=='') return item
    })
    return arr.join(' ');
};
console.log(numberToWords(1000))