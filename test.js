str1 = "{\n  \"corr_bolus\" : 0.050000000000000003,\n  \"adjustmentType\" : 1,\n  \"bg\" : 6.833333333333333,\n  \"carb_bolus\" : 2.6500000000000004,\n  \"carb\" : 40,\n  \"iob\" : -0.050000000000000003\n}"
str2 = "{\n  \"corr_bolus\" : 0.15000000000000002,\n  \"adjustmentType\" : 1,\n  \"bg\" : 7.1111111111111107,\n  \"carb_bolus\" : 3.3000000000000003,\n  \"carb\" : 50,\n  \"iob\" : -0.15000000000000002\n}"

function cul(str){
  let obj = JSON.parse(str)
  let res = obj.carb_bolus + obj.corr_bolus + obj.carb*0.05
  return res
}
console.log(cul(str1))
console.log(cul(str2))