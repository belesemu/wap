function foo(){
    console.log("new")
    console.log("hello ")
    return function (){
        console.log(1111);
    }
}
setTimeout(foo(),5000);


function sum(n1,n2){
    console.log(n1+n2)
}
setTimeout(sum(1,2),5000)//gives error first it will sum it then after 5 sec will have uindefined value
setTimeout(sum,5000,2,3)// this it the right way to do it
setTimeout(sum,5000,2,3,5)// this it the right way to do it

function sum(n1,n2){
    return n1+n2;
    // the javascript engine wiull ingnoe it,  like amaxon if u write back to amazo they wont axcute it just ignote it
}

// what is function reference and function call
