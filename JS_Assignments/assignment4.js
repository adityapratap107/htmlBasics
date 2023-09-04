// // Write a JavaScript function to calculate the sum of two numbers.  
// function add(num1, num2) {
//     console.log(num1+ num2)
// }
// add(3,2)


// // 2. Write a JavaScript program to find the maximum number in an array. 
// function maxNumber(arr) {
//     console.log(Math.max(...arr))
// }
// maxNumber([40,200,60,100])


// // 3. Write a JavaScript program to reverse a given string. 
// function reverseString (str){
//     console.log(str.split('').reverse().join(''))
// }
// reverseString("aditya")


// // 4. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
// const evenNumbers = (arr) => arr.filter(item => item % 2 == 0) 
// console.log(evenNumbers([1,2,3,4,5,6]));


// // 5.  Write a JavaScript program to calculate the factorial of a given number.
// const factorialNumber = (num) => {
//     if(num == 0 || num == 1) {
//         return 1;        
//     } else {
//         return num * factorialNumber((num - 1))
//     }
// };
// console.log(factorialNumber(5));

// factorialNumber(5) => 5 * factorialNumber(4)
//                       5 * 4 * factorialNumber(3)
//                       5 * 4 * 3 * factorialNumber(2)
//                       5 * 4 * 3 * 2 * factorialNumber(1)
//                       5 * 4 * 3 * 2 * 1



// // 6. Write a JavaScript function to check if a given number is prime. 
// const isPrime = (num) => {
//     if(num === 1) {
//         return "Not Prime";
//     } else if (num > 1) {
//         for(let i = 2; i < num ; i++) {
//             if (num % i == 0) {
//                 return "Not Prime"
//             } else {
//                 return "Prime"
//             }
//         }
//     }
// };
// console.log(isPrime(13))


// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
const fibonnaciSequence = (num) => {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    console.log(n1);
    console.log(n2);
    nextTerm = n1 + n2;
    for(let i = 1; i <= num; i++) {
        console.log(nextTerm);
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}

fibonnaciSequence(8)