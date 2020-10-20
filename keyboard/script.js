const keys = document.querySelectorAll(".alpha_keys")
const input = document.getElementById("input")
const clear = document.getElementById("backspace")
const shift = document.getElementById("shift")
const capts = 1;

let string = []

function print(){
    input.value=""
    for(var i=0;i<string.length;i++){
        input.value+=string[i]
    }
}

shift.addEventListener("click",()=>{
    if(capts==1){
    for(var i=0;i<keys.length;i++){
        keys[i].innerText = toLowerCase(keys[i].innerText)
    }
    capts=0
    }
})

clear.addEventListener('click',()=>{
    string.pop()
    print()
})

for(var i=0;i<keys.length;i++)
    keys[i].addEventListener("click",(e)=>{
        string.push(e.target.innerText)
        print()
    })

print()