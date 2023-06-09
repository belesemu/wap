//Question 1 solutuon
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
// Question no 2

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
             console.log(this.title + ": " + student);
        }.bind(this));
}
};
group.showList();
// output
Our Group: John
Our Group: Pete
Our Group: Alice