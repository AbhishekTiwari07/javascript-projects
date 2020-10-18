const box = document.getElementById("box")
var posL = 0
var posT = 0
var keyL = 0,keyT=0
function colorChange(){
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    box.style.backgroundColor = "rgb(" + r + "," + b + "," + g + ")"
}
function down(){
    posT++
}
function up(){
    posT--
}
function left(){
    posL++
}
function right(){
    posL--
}
function move(){
    setInterval(frame,1)
    function frame(){
        if(posL==1450)
            keyL=1
        else if(posL==0)
            keyL=0
        if(posT==650)
            keyT=1
        else if(posT==0)
            keyT=0
        if(keyL==0&&keyT==0){
            down()
            left()
        }
        else if(keyL==0&&keyT==1){
            up()
            left()
        }
        if(keyL==1&&keyT==0){
            down()
            right()
        }
        if(keyL==1&&keyT==1){
            up()
            right()
        }
        box.style.left = posL+"px"
        box.style.top = posT+"px"
    }
}
setInterval(colorChange,500)
box.addEventListener("click",move)
