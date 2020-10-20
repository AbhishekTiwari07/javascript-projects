const keys = document.querySelectorAll(".alpha_keys")
const input = document.getElementById("input")
const clear = document.getElementById("backspace")
const shift = document.getElementById("shift")
const space = document.getElementById("space")
let capts = 1;
console.log(keys)
let string = []
string.push(input.value)
function print(){
    input.value=""
    for(var i=0;i<string.length;i++){
        input.value+=string[i]
    }
}

shift.addEventListener("click",()=>{
    if(capts==1){
    for(var i=0;i<keys.length;i++){
        keys[i].innerText = keys[i].innerText.toLowerCase()
        console.log(keys[i].innerText)
    }
    capts=0
    }
    else{
        for(var i=0;i<keys.length;i++){
            keys[i].innerText = keys[i].innerText.toUpperCase()
            console.log(keys[i].innerText)
        }
        capts=1
    }
})

space.addEventListener('click',()=>{
    string.push(" ")
    print()
})

clear.addEventListener('click',()=>{
    string.pop()
    print()
})

for(var i=0;i<keys.length;i++){
    keys[i].className = `alpha_keys key${i}`
    keys[i].addEventListener("click",(e)=>{
        string.push(e.target.innerText)
        print()
    })
}
print()
