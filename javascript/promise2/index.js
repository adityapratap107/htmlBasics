// const ticket = new Promise( function(resolve, reject) {
//     const isBoarded = false;
//     if(isBoarded) {
//         resolve("You are in the flight")
//     } else {
//         reject("Your flight has been cancelled!")
//     }
// });

// ticket
// .then(data => console.log("data", data))
// .catch(err => console.log("oh no!", err))
// .finally(() =>  console.log("I will always be executed"))



function getCheese() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            // console.log("Here is the cheese", cheese);
            resolve(cheese)
        },3000)
    })
}

function makePizza(cheese) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const pizza =cheese +  "🍕";
            // console.log("Here is the pizza", pizza);
            resolve(pizza)
            // reject('Not able to make pizza!!')
        },3000)
    })
}

function makeBurger(pizza) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const burger = pizza + "🍔";
            // console.log("Here is the burger", burger);
            resolve(burger)
        },3000)
    })
}

// getCheese()
// .then((cheese) => {
//     console.log('here is the cheese', cheese)
//     return makePizza(cheese)
// })
// .then((pizza) => {
//     console.log('here is the pizza', pizza);
//     return makeBurger(pizza);
// })
// .then((burger) => {
//     console.log('here is the burger', burger);
// }).catch(e => {
//     console.log('error occured')
// })

async function orderPizza() {
    try {

    const cheese = await getCheese();
    console.log('here is the cheese', cheese)
    const pizza = await makePizza(cheese);
    console.log('here is the pizza', pizza);
    const burger = await makeBurger(pizza);
    console.log('here is the burger', burger)
    }
    catch(err) {
        console.log('err', err)
    }
}
orderPizza();


