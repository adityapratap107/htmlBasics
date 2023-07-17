//  function AddNumbers(a,b,c) {
//     return a + b + c;

//  }

//  const res = AddNumbers(2,4,5);
//  console.log(res)

//  using rest 
// function AddNumbers(a,b,c, ...other) {
//     console.log(other)
//     return a + b + c;
//  }

//  const res = AddNumbers(2, 4, 5, 7, 8);
//  console.log(res)

// spread -  break array into string
// var names = ["a","b","c","d"];
// function getNames(name1, name2, name3) {
//     console.log(name1, name2, name3);
// };
// getNames(names[0], names[1], names[2]);
// getNames(...names)





// on objects
// rest
let students = {
    name: 'abc',
    age: 37,
    hobbies: ["cricket","coding"]
};

// const {...rest} = students;
// console.log(rest);


// // spread
let newStudent = {
    ...students,
    age: 29
}

console.log(newStudent);
