//Question No 1
function b() {
    const y = 30;
    a();
    function a() {
        console.log(x, y);
    }
    var x = 10;
    console.log(x, y);
}
const x = 20;
var y = 40;
b();


//output
undefined 30
10 30

//Question No 2

function foo(x) {
    let m;
    console.log(x, y);
    if(x > 5){
        var y = 5;
        m = x + y;
    } else {
        let z = 10;
        m = z;
    }
    x = m;
    console.log(x, y);
}
// output
3 undefined
10 undefined
10

//Question No 3

function printNumbers(from, to) {
  let current = from;

  function printNext() {
    console.log(current);
    current++;

    if (current <= to) {
      setTimeout(printNext, 1000);
    }
  }

  printNext();
}

printNumbers(1, 7);
2
3
4
5
6
7
