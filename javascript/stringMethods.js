// charAt
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

// concat
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));

// endswith
const str3 = 'Cats are the best!';
console.log(str3.endsWith('best!'));

// includes
const sentence2 = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence2.includes(word) ? 'is' : 'is not'} in the sentence`);

// indexOf
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);

// lastIndexOf
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);

// match method
const paragraph2 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph2.match(regex);
console.log(found);

// replace method
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));

const p2 = 'Mr Blue has a blue house and a blue car.';
const regex2 = /blue/g;
console.log(p2.replace(regex2, 'red'));

// slice method
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31))

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"


// split method
const newStr = 'The quick brown fox jumps over the lazy dog.';

const words = newStr.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = newStr.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = newStr.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


// startsWith
const mystr = 'Saturday night plans';

console.log(mystr.startsWith('Sat'));
// Expected output: true

console.log(mystr.startsWith('Sat', 3));
// Expected output: false


const a = 'Mozilla';

console.log(a.substring(1, 3));
// Expected output: "oz"

console.log(a.substring(2));
// Expected output: "zilla"



// toLowerCase
const sentence3 = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence3.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."


// toUpperCase
const sentence4 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence4.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


// toString
const stringObj = new String('foo');
console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"


// trim method 
const greeting = '   Hello world!   ';
console.log(greeting);
// Expected output: "   Hello world!   ";
console.log(greeting.trim());
// Expected output: "Hello world!";

// trimStart
const greeting2 = '   Hello world!   ';
console.log(greeting2);
// Expected output: "   Hello world!   ";
console.log(greeting2.trimStart());
// Expected output: "Hello world!   ";

// trimEnd
const greeting3 = '   Hello world!   ';
console.log(greeting3);
// Expected output: "   Hello world!   ";
console.log(greeting3.trimEnd());
// Expected output: "   Hello world!";


// valueOf
const stringObj2 = new String('foo');
console.log(stringObj2);
// Expected output: String { "foo" }
console.log(stringObj2.valueOf());
// Expected output: "foo"


