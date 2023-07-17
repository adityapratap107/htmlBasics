// let nameObj = {
//     firstname: "aditya",
//     lastname: "rana",
//     printFullName: function() {
//         console.log(this.firstname + " " + this.lastname);
//     }
// }

// nameObj.printFullName();


// let nameObj2 = {
//     firstname: "rohit",
//     lastname: "sharma"
// };

// // function borrowing
// nameObj.printFullName.call(nameObj2);







let nameObj = {
    firstname: "abc",
    lastname: "def",

}
let printFullName = function(homeTown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + homeTown + ", " + state);
}

// printFullName.call(nameObj, "Kurukshetra", "Haryana");


let nameObj2 = {
    firstname: "rohit",
    lastname: "sharma"
};

// call method
// printFullName.call(nameObj2, "Mumbai", "Maharashtra");

// apply method
// printFullName.apply(nameObj2, ["Mumbai", "Maharashtra"]);


// bind method
// let printMyName = printFullName.bind(nameObj2, "Mumbai", "Maharashtra");
// console.log(printMyName);
// printMyName();


// function currying

// let multiply = function (x, y) {
//     console.log(x*y);
// };

// let multiplyByTwo = multiply.bind(this, 2);
// let multiplyByTwo = multiply.bind(this, 2, 3);
// multiplyByTwo(5);

// let multiplyByTwo = multiply.bind(this, );
// multiplyByTwo(5,4);


// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5)


// with function closures
let multiply = function (x) {
    return function (y) {
        console.log(x*y)
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(4);
multiplyByThree(3);