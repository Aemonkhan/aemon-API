// arrow function
// function sum(){
//     var c= a + b;
//     console.log(c)
// }
// function sum1(a,b){
//     var c = a + b;
//     console.log(c)
// }
// function sum2(a=0,b=0){
// var c = a + b;
// return c
// }
// const sum = (a = 0, b = 0) => {
//     var c = a * b;
//     return c
// }
// console.log(sum(2, 5))
// const sum = (a = 0) => {
//     var c = ++a;
//     return c
// }
// console.log(sum(2))
var arr = [2, 4, 6, 8];
const newArr = arr.map(
    (item) => {
        return item * item
    }
)
console.log(newArr)
var arr1 = [4, 9];
const newArr1 = arr1.map(
    (no) => {
        return Math.sqrt(no)
    }
)
console.log(newArr1)
var str = ['aemon', 'habiba', 'kulsum'];
const newOne = str.map(
    (value, i) => {

        return `${i} + ${value}`;
    }
)
console.log(newOne)
