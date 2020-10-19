const run = document.getElementById("run")
const button = document.getElementById("button")
var load = 0;

function loading(){
    // if(load==100){
    //
    // }
    if(load<=200){
        load++;
        run.style.width = load+"px"
    }
    else{
        load=0
    }
}

button.addEventListener("click",()=>{
    setInterval(loading,50)
})
