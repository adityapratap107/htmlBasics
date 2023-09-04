// // 1. Given a year, report if it is a leap year
// const isLeapYear = (year) => year % 4 === 0;
// console.log(isLeapYear(2024))


// // 2. write a javascript program to compare two objects to determine if the first one contains the same properties as the second one 
// // (which may also have additional properties)
// const obj1 = {a: 1, b:2, c:3};
// const obj2 = {a: 1, b:2, c:3};

// const objEquals = (a,b) => {
//     // console.log(Object.keys(a))
//     // console.log(Object.values(a))
//     return Object.keys(a).every(key => b[key])
// }

// console.log(objEquals(obj1, obj2));



// // 3. generate a random hexadecimal color code
// const getRandomHexNumber = () => Math.floor(Math.random() * 16).toString(16);  // because we want base 16 numbers
// const getRandomHexColor = () => '#' + Array.from({length: 6}).map(getRandomHexNumber).join('')

// console.log(getRandomHexColor());
// console.log(getRandomHexColor());
// console.log(getRandomHexColor());
// console.log(getRandomHexColor());
// console.log(getRandomHexColor());


// // 4. Write a javascript function that returns a passed string with letters in alphabetical order
// // Example string: 'webmaster'
// // Expected Output: 'abeemrstw'
// const alphabeticalOrder = (str) => str.split('').sort((a,b) => a > b ? 1 : -1).join('')
// console.log(alphabeticalOrder('webmaster'))


// // 5. Write a javascript function that accepts a string as a parameter and counts the number of vowels within the string.
// const countVowels = (str) => {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     return str.split('').filter(char => vowels.indexOf(char) > -1).length
    

// }
// console.log(countVowels("aditya"))


// function vowelcount(str){
//     var vowel_list='aeiouAEIOU';
//     var v_count=0;
//     for(var x=0;x<str.length;x++){
//         if(vowel_list.indexOf(str[x]!==-1)){
//             v_count+=1;

//         }
//     }
//     return v_count;
// };
// console.log(vowelcount("Aaashu"));



// 6. write a javascript function to get the unique characters from string
// const findUnique = (str) => {
//     let uniqueStr = "";
//     for(let i=0; i<str.length; i++) {
//         if(uniqueStr.includes(str[i]) === false) {
//             uniqueStr += str[i]
//         }
//     }
//     return uniqueStr
// };
// console.log(findUnique("aabbccd"));

// using set
// const findUnique = (str) =>{
//     const uniqueCharSet = new Set();
//     for(const char of str) {
//         uniqueCharSet.add(char)
//     }
//     return Array.from(uniqueCharSet).join('')
// } 
// console.log(findUnique("aabbccc"));


// // 7. Write a javascript function to find the first not repeated character
// // Example string: 'abacddbec'
// // Expected output: 'e'


// // get non repeated characters
// const getNonRepeatedCharacters = (str) => str.split("").filter((item, index, arr) => arr.filter(arrItem => arrItem ===item).length ===1)
// console.log(getNonRepeatedCharacters("abacddbec"))


// // logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.
// // 
// function transformToObjects(numberArray) {
//     // Todo: Add your logic
//     // should return an array of objects
    
//     return numberArray.map(num => {
//       return {val: num}  
//     })
// }

// console.log(transformToObjects([1,2,3]))



// array destructuring
// const [firstName, lastName] = ["myName", "lastmyName"];
// console.log(firstName)

// object destructuring
// const user = {
//     name: "abc",
//     age: 31,
// };

// const {name: firstName, age: myAge} = user;
// console.log(firstName, myAge)




// // write a js function to make possible combinations of string..
// // d o g do dg o dog
// // str.length = 3 
// // 0,1,2
// let str = "dog";

// function combinations(str) {
//     let emptyArr = [];
//     for(let i = 0; i < str.length; i++) {
//         for(let j = i +1; j< str.length + 1; j++) {
//             emptyArr.push(str.slice(i,j));
//         };
//     };
//     console.log(emptyArr)
// }

// combinations("dog")





// // Program to find first non repeating character from string
// // aabbe
// // e
// function named(str){
//     for(let i = 0; i<str.length; i++) {
//       let char = str.charAt(i);
//       if(str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
//           return char;
//       }
//     }
//      return null
//  }
 
//  let res = named("afaebbe");
//  console.log(res);



// Program to check whether a given string is pallindrome or not
// const palindromicString = (str) => {
//     let smallStr = str.toLowerCase();
//     if(smallStr === str.split('').reverse().join('')) {
//         return true
//     } else {
//         return false;
//     }
// }
const palindromicString = (str) => str.toLowerCase() === str.split('').reverse().join("");
console.log(palindromicString("racecar"));