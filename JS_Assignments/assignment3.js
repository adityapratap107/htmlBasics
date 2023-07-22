// 1. Given a year, report if it is a leap year
// const isLeapYear = (year) => year % 4 === 0;
// console.log(isLeapYear(2024))


// 2. write a javascript program to compare two objects to determine if the first one contains the same properties as the second one 
// (which may also have additional properties)
// const obj1 = {a: 1, b:2, c:3};
// const obj2 = {a: 1, b:2, c:3};

// const objEquals = (a,b) => {
//     // console.log(Object.keys(a))
//     // console.log(Object.values(a))
//     return Object.keys(a).every(key => b[key])
// }

// console.log(objEquals(obj1, obj2));



// 3. generate a random hexadecimal color code
const getRandomHexNumber = () => Math.floor(Math.random() * 16).toString(16);  // because we want base 16 numbers
const getRandomHexColor = () => '#' + Array.from({length: 6}).map(getRandomHexNumber).join('')

console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());



