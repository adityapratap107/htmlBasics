// function x() {
//     var a = 10;
//     setTimeout(() => {
//         console.log(a)
//     }, 3000);
//     console.log("Hello world")
// }

// x();



// function x() {
//     for(var i=1; i<=5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello world")
// }

// x();

// function x() {
//     for(let i=1; i<=5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello world")
// }

// x();


// to make it work with var
function x() {
    for(let i=1; i<=5; i++) {
        function close(val) {
            setTimeout(() => {
                console.log(val);
            }, val * 1000);
        }
        close(i)
    }
    console.log("Hello world")
}

x();

