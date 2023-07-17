// function x() {
//     console.log('x called');
// }

// function y(xFun) {
//     xFun();
// }

// y(x);




// // We have array of radius of 4 circles
// const radius = [3,1,2,4];

// // Task - calculate area of these 4 circles
// const calculateArea = function (radius) {
//     let output = [];
//     for(let i = 0; i < radius.length; i++) {
//         let area = Math.PI * radius[i] * radius[i]
//         output.push(area)
//     }
//     return output;
// };
// let areaRes = calculateArea(radius)
// console.log(areaRes);


// const calculateCircumference = function (radius) {
//     let output = [];
//     for(let i = 0; i < radius.length; i++) {
//         let area = 2 * Math.PI * radius[i];
//         output.push(area)
//     }
//     return output;
// }
// console.log(calculateCircumference(radius))




// optimized way of writing above code -

const radius = [3,1,2,4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};


// const calculate = function (radiusArr, logic) {
//     const output = [];
//     for(let i=0;i<radiusArr.length; i++) {
//         output.push(logic(radiusArr[i]));
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));


// exactly similar to map
// console.log(radius.map(area));

// Now if we want to show our calculate function like map in suggestion
// calculate will availablke on all arrays you see
// Array.prototype.calculate = function (radiusArr, logic) {
//     const output = [];
//     for(let i=0;i<radiusArr.length; i++) {
//         output.push(logic(radiusArr[i]));
//     }
//     return output;
// }

// console.log(radius.calculate(radius, area))


Array.prototype.calculate = function (logic) {
    const output = [];
    for(let i=0;i<this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area))