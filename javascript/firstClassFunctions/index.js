// function statement
// function a() {
//     console.log('a called')
// }

// function expression - 
// let b = function() {
//     console.log('b called')
// }

// difference bw function statement and function expression is hoisting
// a();
// b();
// function a() {
//     console.log('a called')
// }

// let b = function() {
//     console.log('b called')
// }

// anonymous function
// function () {

// }

// named function expression
// let c = function abc() {
//     console.log('abc called!!')
// }
// c();

// cannot call abc outside
// let d = function abc() {
//     console.log('abc called!!')
// }
// abc()

// access inside abc declaration
// let d = function abc() {
//     console.log(abc)
// }
// d()


// arguments and parameters
// let x = function abc(param1, param2) {
//     console.log(param1 + param2)
// }
// x(10,20);


// first class functions

// let y = function (param) {
//     console.log(param)
// }
// y(function() {
//     console.log('anonymous function!');
// })

// or
// let y = function (param) {
//     console.log(param)
// }
// function named() {
//     console.log('named function!');
// }
// y(named)

// return a function from a function
let y = function (param) {
    return param;
}

function named() {
    console.log('named function')
}

const yVal = y(named);
console.log(yVal)
