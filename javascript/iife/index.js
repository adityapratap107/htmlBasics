(function showData () {
    console.log('data can be shown.')
})();

(() => {
    console.log('this is arrow function')
})();

((name) => {
    console.log(`my name is ${name}`)
})("John")