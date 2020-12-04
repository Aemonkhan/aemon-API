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
// var arr = [2, 4, 6, 8];
// const newArr = arr.map(
//     (item) => {
//         return item * item
//     }
// )
// console.log(newArr)
// var arr1 = [4, 9];
// const newArr1 = arr1.map(
//     (no) => {
//         return Math.sqrt(no)
//     }
// )
// console.log(newArr1)
// var str = ['aemon', 'habiba', 'kulsum'];
// const newOne = str.map(
//     (value, i) => {

//         return `${i} + ${value}`;
//     }
// )
// console.log(newOne)
var teachers = ['faiza', 'ali', 'zia', 'inzamam']
var students = ['kulsoom', 'aiman', 'komal', 'tooba']
var ages = [18, 20, 16, 21];
// var sub = [200, 100, 50, 20]
// var toFind = 'aiman'
// var a = students.find(
//     (item, index) => {
//         return item == toFind
//     }
// )
// console.log(a)
// var fine = 'aiman'
// var b = students.includes('aiman')
// console.log(b)
// var c = ages.filter(
//     (item, index) => {
//         return item >= 18
//     }
// )
// console.log(c)
// var newArr = 'faiza'
// var a = teachers.includes('faiza'
// )
// console.log(a)
// if (a == true) {
//     const b = students.map(
//         (item, i) => {
//             return item + ' ' + 'will have the class'
//         }
//     )
//     console.log(b)
// }
var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10
};
plan1.price = 5
// console.log(plan1)
delete plan1.transfer
plan1.features = [1, 2]
plan1.membersonly = false;

var propertyExists = "market" in plan1;
console.log(propertyExists)
console.log(plan1)
// var x = plan1.name

// console.log(x)
// alert("The cost of the " + plan1.name + " package is $" + plan1.price + " per month.");
function Plan(name, price, space, transfer, pages) {
    this.name = name;
    this.price = price;
    this.space = space;
}
var plan5 = new Plan('aemon', 50, 100, 5, 2)
console.log(plan5)
