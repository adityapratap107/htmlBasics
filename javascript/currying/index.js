// function addition(a,b,c) {
//     return a+b+c;
// }

// let res = addition(1,2,3);
// console.log(res)


// function Addition(a) {
//     return function(b) {
//         return function(c) {
//             return a+b+c;
//         }
//     }
// };
// let res = Addition(2);
// // console.log(res);

// let data = res(3);
// // console.log(data)

// let latestData = data(5);
// // console.log(latestData)

// let finalres = Addition(2)(3)(6)
// console.log(finalres)





let userObj = {
    name: "A",
    age: 34,
}

function userInfo(obj) {
    return function (userinfo) {
        return obj[userinfo];
    }
}
let res = userInfo(userObj);
console.log(res('name'))