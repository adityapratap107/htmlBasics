// // 1. write a javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together.
// //  The string length must be 3 or more, if not, the original string is returned.

// const createString = (str) => str.length > 3 ? str.slice(0,3) + str.slice(-3) : str;
// console.log(createString("Hellothere"));
// console.log(createString("abcdefghi"));


// // 2. write a javascript program to extract the first half of a string of even length.
// const extractString = (str) => str.substring(0,str.length / 2);
// console.log(extractString("HelloWorld"));


// // 3. write a javascript program to concatenate two strings except their first character.
// const addTwoStrings = (str1, str2) => str1.slice(1) + str2.slice(1);
// console.log(addTwoStrings("john","wick"));


// // 4. Given two values, write a javascript program to find out which one is nearest to 100
// const nearestValue = (num1, num2) => (100 - num1) > (100 - num2) ? num2 : num1;
// console.log(nearestValue(96, 98))


// // 5. Write a javascript program to check a given string contains 2 to 4 occurences of a specified character.
// const countChars = (str, char) => str.split('').filter(ch => ch === char).length;
// const contains2To4 = (str, char) => countChars(str, char) >= 2 && countChars(str,char) <=4;
// console.log(contains2To4("aditya", 'a'))


// // 6. Write a javascript program to find the number of even digits in an array of integers
// const countEvenCharacters = (arr) => arr.filter(num => num % 2 === 0).length;
// console.log(countEvenCharacters([1,2,3,4,5,6,7,8]))


// // 7. write a javascript program to find the number of even values upto a given number
// const countEvenCharacters = (arr) => arr.filter(num => num % 2 === 0).length;

// const createArrayOfNumbers = (num) => {
//     const returnArray = [];
//     for(let i = 1; i <= num; i++) {
//         returnArray.push(i);
//     }
//     return returnArray;
// }
// console.log(countEvenCharacters(createArrayOfNumbers(8)))


// // 8. Write a javascript program to check whether a given array of integers is sorted in ascending order
// const isAscending = (arr) => {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i+1] < arr[i]) {
//             return false
//         }
//     }
//     return true;
// }

// console.log(isAscending([1,2,3,4,5,6]));
// // console.log(isAscending([9,1,2,3,4,5,6]));


// // 9. Write a javascript program to get the largest even number from an array of integers using Math.max
// const largestEvent = (arr) => Math.max(...arr.filter(num => num % 2 === 0));
// console.log(largestEvent([1,2,3,4,5,6]));


// // 10. Write a javascript program to replace the first digit in a string (should contain at least digit) with $ character
// const replaceFirstDigit = (str) => str.replace(/[0-9]/, '$')
// console.log(replaceFirstDigit('Abcccg1gjde'))


