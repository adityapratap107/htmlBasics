// concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


// copywithin
const myarr = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(myarr.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(myarr.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]



// entries method
const myarr2 = ['a', 'b', 'c'];
const iterator1 = myarr2.entries();
console.log(iterator1.next().value);
// Expected output: Array [0, "a"]
console.log(iterator1.next().value);
// Expected output: Array [1, "b"]



// every method
const isBelowThreshold = (currentValue) => currentValue < 40;
const array4 = [1, 30, 39, 29, 10, 13];
console.log(array4.every(isBelowThreshold));
// Expected output: true


// fill method
const array5 = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]




// filter method
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);


// find method 
const arr3 = [5, 12, 8, 130, 44];
const found = arr3.find(element => element > 10);
console.log(found);
// Expected output: 12



// findIndex
const myarr3 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(myarr3.findIndex(isLargeNumber));
// Expected output: 3

// FindLast
const array8 = [5, 12, 50, 130, 44];
const found2 = array8.findLast((element) => element > 45);
console.log(found2);

// findLastIndex
const myarr4 = [5, 12, 50, 130, 44];
const isLargeNumber2 = (element) => element > 45;
console.log(myarr4.findLastIndex(isLargeNumber2));
// Expected output: 3
// Index of element with value: 130

// forEach
const myarr8 = ['a', 'b', 'c'];
myarr8.forEach(element => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// from
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]


// map
const latestarr = [1, 4, 9, 16];
// Pass a function to map
const map1 = latestarr.map(x => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]


// pop method
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// Expected output: "tomato"
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// push method
const animals1 = ['pigs', 'goats', 'sheep'];
const count = animals1.push('cows');
console.log(count);
// Expected output: 4
console.log(animals1);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

// slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// some method
const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// Expected output: true


// splice method 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


const p2 = 'Mr Blue has a blue house and a blue car.';
const regex2 = /blue/g;
console.log(p2.replace(regex2, 'red'));
