const inputVal = document.getElementById('inputbox');
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', onSubmitPress)
const listItems = document.getElementById('list_container');
listItems.addEventListener('click', onDeletePress)

function onDeletePress(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm("Are you sure?")) {
            let li = e.target.parentElement;
            listItems.removeChild(li);
        }
        console.log(1)
    }
}

function onSubmitPress() {
    console.log(inputVal.value)
    const listItems = document.getElementById('list_container');
    let li = document.createElement('li');
    li.className = 'line';
    li.id = "list"
    li.appendChild(document.createTextNode(inputVal.value))
    listItems.appendChild(li);

    let delBtn = document.createElement("button");
    delBtn.className = "btn_danger delete";
    delBtn.id = 'danger_btnId';
    li.appendChild(delBtn);
    delBtn.appendChild(document.createTextNode("X"));
}
