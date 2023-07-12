// function a() {
//     console.log(b);
// }

// var b = 10;
// a();


// more complex example
// function a() {
//     c();
//     function c() {
//         console.log(b);
//     }
// }

// var b = 10;
// a();


// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();


function a() {
    var b = 10;
    c();
    function c() {
        // 
    }
}
a();
console.log(b);
