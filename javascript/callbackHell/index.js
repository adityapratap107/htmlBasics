// const cart = ["Shoes", "Pants", "Tshirts"];

// api.createOrder(cart, function() {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.updateWallet()
//         });
//     })
// })


const cart = ["Shoes", "Pants", "Tshirts"];

api.createOrder(cart, function() {
    api.proceedToPayment()
})
