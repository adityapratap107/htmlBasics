const inputVal = document.getElementById('inputbox');
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', onSubmitPress);
const listItems = document.getElementById('list_container');
listItems.addEventListener('click', onDeletePress);

const filter = document.getElementById("filter");
filter.addEventListener('keyup', filterItems)
// filter items
function filterItems(e) {
    // convert to lowercase
    let text = e.target.value.toLowerCase();
    // console.log(text)
    let items = listItems.getElementsByTagName('li');  // returns the html list
    // console.log(items);
    // convert htmllist to an array
    // console.log('Array_item', Array.from(items))
    Array.from(items).forEach(function(item) {
        // console.log('item', item)
        let itemName = item.firstChild.textContent;
        console.log('itemName:', itemName);
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display='flex';
            item.style.display='space-between';
        } else {
            item.style.display ='none';
        }
    })
}

function onDeletePress(e) {
    console.log('delete_event:', e)
    if(e.target.classList.contains('delete')) {
        if(confirm("Are you sure?")) {
            let li = e.target.parentElement;
            listItems.removeChild(li);
        }
        console.log(1)  
    }
}

function onSubmitPress() {
    console.log('input value:', inputVal.value)
    let li = document.createElement('li');
    li.className = 'line';
    li.id = "list";
    li.appendChild(document.createTextNode(inputVal.value));
    listItems.appendChild(li);

    let delBtn = document.createElement("button");
    delBtn.className = "btn_danger delete";
    delBtn.id = 'danger_btnId';
    li.appendChild(delBtn);
    delBtn.appendChild(document.createTextNode("X"));
}
