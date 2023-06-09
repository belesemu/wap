let x = 1 ;
function foo(y){
    return function (z){
        return x+y+z;
    }
}
let res = foo(4)
console.dir(res)