const cart = ["Shoes", "Pants", "Tshirts"];
// createOrder(cart, function(orderId) {
//     proceedToPayment(orderId);
// })

// const promise  = createOrder(cart);
// promise.then(function(orderId) {
//     proceedToPayment(orderId);
// }) 


// const getData = fetch('https://jsonplaceholder.typicode.com/todos')
// // console.log(getData)
// getData.then(response => console.log(response.json()))



// createOrder(cart)
// .then(function (orderid) {
//     return proceedToPayment(orderid)
// }).then(function (paymentInfo) {
//     return showOrderSummary();
// }).then(function (price) {
//     return updateWallet();
// })


// createOrder(cart)
// .then((orderid) =>  proceedToPayment(orderid))
// .then((paymentInfo) => showOrderSummary())
// .then((price) => updateWallet());







// const promise = createOrder(cart);
// console.log(promise)
// promise.then(function (orderId) {
//     console.log(orderId)
// }).catch(err => {
//     console.log('myerror', err)
// })


// // producer
// // creating a promise
// function createOrder(cart) {
//     // promise contructor
//     const pr = new Promise(function(resolve, reject) {
//         // create order
//         // validate cart
//         // orderid
//         if(!validateCart(cart)) {
//             const err  = new Error("Cart is not valid");
//             reject(err)
//         }
//         // logic for createOrder
//         const orderId = "12345";
//         if(orderId) {
//             setTimeout(() => {
//                 resolve(orderId)
//             }, 3000);
//         }
//     });
//     return pr;
// }

// function validateCart(cart) {
//     // return false;
//     return true;
// }








 createOrder(cart)
.then(function (orderId) {
    console.log(orderId)
    return orderId;
})
.then(function (orderId) {
   return proceedToPayment(orderId);
})
.then(function (paymentinfo) {
    console.log("payment info -", paymentinfo)
})
.catch(err => {
    console.log(err.message)
})


// producer
// creating a promise
function createOrder(cart) {
    // promise contructor
    const pr = new Promise(function(resolve, reject) {
        // create order
        // validate cart
        // orderid
        if(!validateCart(cart)) {
            const err  = new Error("Cart is not valid");
            reject(err)
        }
        // logic for createOrder
        const orderId = "12345";
        if(orderId) {
            setTimeout(() => {
                resolve(orderId)
            }, 3000);
        }
    });
    return pr;
}

function validateCart(cart) {
    // return false;
    return true;
}

function proceedToPayment(orderid) {
    return new Promise( function(resolve, reject) {
        resolve("Payment successful!")
    });
}