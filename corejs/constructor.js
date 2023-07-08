// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob)
//     this.fullName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
// };

// const person1 = new Person("abc", "def", "2-3-1993");
// console.log(person1);
// // console.log(person1.fullName());
// // console.log(person1.getBirthYear());



// Alternate way

function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob)
};

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

const person1 = new Person("abc", "def", "2-3-1993");
console.log(person1);
