const btn = document.getElementById('btn_click').addEventListener('mousemove', buttonClick);
function buttonClick(e){
   document.getElementById('header_container').textContent = "New Header"
   console.log(e.target)
}



const box = document.getElementById('box')
box.addEventListener('mousemove', runEvent)

function runEvent(e) {
    box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)"
}