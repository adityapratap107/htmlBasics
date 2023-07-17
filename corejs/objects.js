// function checkNumber(val) {
//     if(isNaN(val)) {
//         return isNaN;
//     } else {
//         console.log("it's number");
//         return val
//     }

// }

// console.log(typeof checkNumber("23"), checkNumber("23"));



// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN("name"));
// console.log(Number.isNaN("2"));

// console.log(Number.isNaN("aditya")) 



// array destructuring
// const person = {
//     name: "abc",
//     age: 32,
//     gender: 'male'
// };

// const {name, age, gender} = person;
// console.log(age)


// const sum = (num1, num2) => num1 + num2;

// console.log(sum(2,3));


const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)


const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }

  const updateVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(updateVehicle)