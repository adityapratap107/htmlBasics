// console.log(document.getElementsByClassName(".item"))
// const ul = document.querySelector('.items');
// console.log(ul)
// ul.remove();

// const header = document.querySelector(".header");
// header.style.borderBottom = '2px solid black'

// const inputText = document.querySelector(".inputText");
// inputText.value = 'Hello World';

// const submit = document.querySelector('input[type="submit"]')
// submit.value= "SEND"

// const list = document.querySelector('.item:last-child');
// list.style.color = 'blue'

// const list2 = document.querySelector('.item:nth-child(2)');
// list2.style.color = 'red'

// returns nodelist
// const allList = document.querySelectorAll('.items');
// console.log('allList', allList[0])
// allList[0].style.backgroundColor = 'green';

// // style only odd elements
// const odd = document.querySelectorAll('.item:nth-child(odd)');
// console.log('odd', odd);
// for(let i=0; i< odd.length; i++) {
//     odd[i].style.color = 'pink'
// }




// traversing the dom


const itemlist = document.querySelector('.items');
console.log(itemlist)
itemlist.parentNode.style.backgroundColor = 'red';

// // if we want to access parent - parent node
// itemlist.parentNode.parentNode.style.backgroundColor = 'red';

// child nodes -- returns a nodelist
// console.log(itemlist.childNodes)
// itemlist.childNodes[0].style.backgroundColor = 'red';

// // children
// console.log(itemlist.children)
// itemlist.children[1].style.color = 'pink';

// // first elemnt child
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent = "hiii"

// // last element child
// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.textContent= "hello"

// console.log(itemlist.firstChild)
// // It includes the line break so it's kindof useless we have to write in same line

// const inputText = document.querySelector('.inputText');
// console.log(inputText.nextElementSibling)

// const submitbtn = document.querySelector('.submitbtn');
// console.log(submitbtn.previousElementSibling)




// // create elements
const newDiv = document.createElement('div');
// console.log(newDiv)
// // // // Add class
newDiv.className = "hello_div";

// // // // add id
newDiv.id = "hello_id"

// // // // set attribute
newDiv.setAttribute('title', 'This is title of div');
// console.log(newDiv)

// // // // appendChild
let newdivtext = document.createTextNode("hello world");
// console.log(newdivtext)
newDiv.appendChild(newdivtext)


let header = document.querySelector("header .header");
// console.log(header)
let h1 = document.querySelector(".header h1");

header.insertBefore(newDiv, h1)
