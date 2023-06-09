function sum(arr) {
    return arr.filter(element => element > 20)
        .reduce((acc, curr) => acc + curr, 0);
}

const getNewArray = function(arr) {
    return arr.filter(element => element.length >= 5 && element.includes('a'));
}
const numbers = [0,1,5,10, 15, 25, 30, 35];
console.log(sum(numbers));

const strings = ['air', 'water', 'sand', 'fire', 'sun','Ethiopia'];
console.log(getNewArray(strings));

function askPassword(ok,fail){
    let password = prompt("Password?",'');
    if (password=='rockstar') ok();
    else fail();
    }
let user ={
        name : 'john',
        loginOk(){
        alert('${this.name} logged in');
        },
        loginFail(){
        alert('${this.name} failed to log in');
        },
        };
// output
1.askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
John logged in
2.askPassword(() => user.loginOk.call(user), ()=> user.loginFail.call(user));
John logged in
3.askPassword(() => user.loginOk.apply(user), ()=> user.loginFail.apply(user));
John failed to log in

4.askPassword(() => user.loginOk(), ()=> user.loginFail());
John failed to log in
