// callback function 

// setTimeout(function() {
//     console.log("timer")
// },3000);

// function x(y) {
//     console.log("x called!")
//     y();
// }

// x(function y() {
//     console.log("y");
// })


function attachEventListener() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button clicked: ", ++count)
    })
}

attachEventListener();