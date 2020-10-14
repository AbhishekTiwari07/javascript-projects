const data = [
    {
        question: 'What is my name?',
        a:"Abhishek",
        b:"Tiwari",
        c:"Kuda",
        d:"JUZo",
        correct: 'b',
    },
    {
        question: 'What is my name2?',
        a:"Abhishek",
        b:"Tiwari",
        c:"Kuda",
        d:"JUZo",
        correct: 'c',
    }
]

var correctAnswers = 0
var currentQuestion = 0
var option

const question = document.getElementById("question")
const option_a = document.getElementById("option_a")
const option_b = document.getElementById("option_b")
const option_c = document.getElementById("option_c")
const option_d = document.getElementById("option_d")
const subButton = document.getElementById("button")

function display(){
    question.innerText = data[currentQuestion].question
    option_a.innerText = data[currentQuestion].a
    option_b.innerText = data[currentQuestion].b
    option_c.innerText = data[currentQuestion].c
    option_d.innerText = data[currentQuestion].d
}
display();
function checkAnswer(){
    option = document.querySelectorAll(".option")
    console.log(option[0].checked)
    for(var i=0;i<option.length;i++){
        console.log(i)
        if(option[i].checked){
            option[i].checked=false
            return option[i].id
        }
    }
    return undefined
}

function nextQuestion(){
    if(currentQuestion<data.length-1){
        currentQuestion++
        display()
    }
    else{
        let rank = undefined
        if(correctAnswers<data.length/2)
            rank = "novice"
        else {
            rank = "pro"
        }
        document.querySelector(".container").innerHTML = `
            <h1>Your Score is ${correctAnswers}/${data.length}</h1>
            <p>result : ${rank}</p>
        `
        document.querySelector(".container").setAttribute("style", "color:white;text-align:center;font-size:150%");
    }
}

function check(){
    let answer = checkAnswer()
    if(answer==data[currentQuestion].correct){
        correctAnswers++
    }
    nextQuestion()
}

subButton.addEventListener("click",check)
