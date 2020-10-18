const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")
const space = document.getElementById("time")
const music = document.getElementById("music")
var ms=00,s=00;
var clicked = 0;
function count(){
    ms++
    if(ms<=99){
        if(s<=9)
            space.innerText = "0"+s
        else
            space.innerText=s
        if(ms<=9)
            space.innerText+= ":0"+ms
        else
            space.innerText+= ":"+ms
    }
    else {
        ms=0
        s++
        music.play()
    }
}

start.onclick=function(){
    clicked++;
    if(clicked==1)
        myVar = setInterval(count, 10)
}
stop.addEventListener("click",()=>{
    clicked=0
    clearInterval(myVar)
    music.pause()
})
reset.addEventListener("click",()=>{
    clicked = 0
    clearInterval(myVar)
    ms=0
    s=0
    space.innerText= "00:00"
})
