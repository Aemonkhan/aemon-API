let foo = (a, ...b) => {
    // console.log(a)
    // console.log(b)
    var res1 = b.reduce(
        (a, b) => {
            return a - b
        })
    res1 = a - res1;
    console.log(res1)
    return res1
}
foo(60, 20, 10)
// let [a, b, c, d, ...e] = [10, 20, 30, 40, 5, 6, 7];
// console.log(e)
// function check(...op) {
//     console.log(op)
//     let [a, b, c] = op
//     console.log(a, b, c)
// }
// check(1, 2, 3)