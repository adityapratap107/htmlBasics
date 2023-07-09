// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

setTimeout(() =>{
    console.log('hii!!!')
}, 3000)

// setTimeout(function() {
//     console.log('hey')
// }, timeout);

setInterval(() => {
    console.log('hey')
}, 1000);