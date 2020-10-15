var list = document.querySelectorAll(".key");
var result = 5;
console.log(list)
var input = document.getElementById("input");

for(var i=0;i<list.length;i++){
    if(i==7){
        list[7].addEventListener('click',(e)=>{
            input.innerText = result;
        })
    }
    else if(i==16){
        list[16].addEventListener('click',(e)=>{
            input.innerText =" "
        })
    }
    else{
        list[i].addEventListener('click',(e)=>{
            input.innerText = input.innerText+e.target.innerText
        })
    }
}
