// function x() {
//     var a = 10;
//     function y() {
//         console.log(a)
//     }
//     y();
// }
// x();


// passing function as an argument
// function x() {
//     var a = 10;
// }
// x(function y() {
//     console.log(a)
// })


// return functions from functions
// function x() {
//     var a = 10;
//     function y() {
//         console.log(a)
//     }
//     return y;
// }

// let val = x();
// console.log(val)


// major example of closure
// function x() {
//     var a = 10;
//     function y() {
//         console.log(a)
//     }
//     return y;
// }

// let val = x();
// console.log(val)

// val();



// function x() {
//     var a = 10;
//     function y() {
//         console.log(a)
//     }
//     a = 30;
//     return y;
// }

// let val = x();
// console.log(val)

// val();




function x() {
    var b = 90;
    function y() {
        var a = 10;
        console.log(a, b);
    }
    a = 30;
    return y;
}

let val = x();
console.log(val)

val();


