// simple for loop
function simpleForLoop() {

    let demo = document.getElementById("demo");
    let text = "";
    for(let i =0; i<5; i++) {
        text += i + "<br>";
    }
    demo.innerHTML = text;
}


function forInLoop () {
    let forin = document.getElementById("forin");
    const person = {fname:"a", lname:"b", age:25};
    let text = "";
    for (let x in person) {
      text += person[x] + " ";
    }
    forin.innerHTML = text;
}

function forEachLoop() {
    let foreach = document.getElementById("foreach");
    const person = ["a", "b",25];
    let text = "";
    person.forEach(function (item) {
        text += item + " "
        
    })
    foreach.innerHTML = text
}

function doWhile() {
    let dowhile = document.getElementById("dowhile");
    let text = "";
    let i = 0;
    do {
    text += i + "<br>";
    i++;
    }
    while (i < 5);
    dowhile.innerHTML = text;
}