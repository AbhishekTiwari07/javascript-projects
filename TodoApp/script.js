
var task = document.getElementById("input")
function refresh(){
    task.value=" "
}

function append(){
    if(task.value){
    var list = document.createElement("LI")
    list.innerText = task.value;
    var temp = document.getElementById("task-list")
    list.addEventListener('click',(event)=>{
        event.preventDefault();
        list.classList.toggle('completed')
    })
    list.addEventListener('contextmenu',(event)=>{
        event.preventDefault();
        list.remove()
    })
    temp.appendChild(list)
    refresh()
    }
}
