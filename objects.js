const obj = {'a':10,
    'b':3,
    'username':'bele',
    getuserName : function (){
    return this.username
    }}

const country = ['chian','us','canada','ethiopia','eritria','vietnam'];
const res = country.filter(function (elmt,index,arr){
    return elmt.includes('a')
})
console.log(res)

const num2 = [1,2,3,4];
num2.reduce(function (sum,elm,index,arr){


});
console.log(sum);