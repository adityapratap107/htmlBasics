// 1 write a javascript program to check two numbers and returns true if one of the number is 100 or if the sum of two numbers is 100
// const checkNumbers = (num1, num2) => {
//     if(num1 === 100 || num2 === 100) {
//         return true;
//     } else if((num1 + num2 )=== 100) {
//         return true;
//     } else {
//         return false
//     }
// }
// console.log(checkNumbers(20,50));


// 2 write a js program to get the extension of a file name
// const getExtension = (fileName) => fileName.slice(fileName.lastIndexOf('.'));
// console.log(getExtension("filename.txt"));


// 3 Write a JS program to replace every character in a given string with the character following it in alphabet
// const replaceCharactersForward = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('')
// console.log(replaceCharactersForward("aditya"));


// 4 Write a JS program to get the current date. 
// Expected Output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// const formatDate = (date = new Date()) => {
//     const days = date.getDate();
//     let months = date.getMonth() + 1;
//     const years = date.getFullYear();
//     // return `${days}-${months}-${years}`
//     // return `${months}-${days}-${years}`
//     // return `${months}/${days}/${years}`
//     return `${days}/${months}/${years}`
// }
// console.log(formatDate());