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
