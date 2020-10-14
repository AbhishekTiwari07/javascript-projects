const data = [
    {
        question: 'What is Lord Voldemort’s real name?',
        a:"Tom Marvelo Riddle",
        b:"Tommy Riddle",
        c:"Lord Voldemort",
        d:"JUZo",
        correct: 'a',
    },
    {
        question: 'What’s the LAST line of the book, "Harry Potter and the Sorcerer’s Stone"',
        a:"Goodbye!",
        b:"Happy Ending",
        c:"Bye bye",
        d:"Jhakass",
        correct: 'd',
    },
    {
        question: 'According to the Dursleys, how did Harry’s parents die?',
        a:"Storm",
        b:"War",
        c:"Voldemort",
        d:"Accident",
        correct: 'd',
    },
    {
        question: 'What does S.P.E.W. stand for?',
        a:"Nothing",
        b:"Society for ....",
        c:"Society for ...",
        d:"SOciety for ..",
        correct: 'c',
    },
    {
        question: 'What is Dumbledore’s full name?',
        a:"DoorDumble",
        b:"Albus",
        c:"I dont know",
        d:"JUZo",
        correct: 'd',
    },
    {
        question: 'What is the symbol for the Ravenclaw house?',
        a:"Crow",
        b:"Hawk",
        c:"Raven",
        d:"Eagle",
        correct: 'a',
    },
    {
        question: 'Dumbledore has a scar above his left knee. It’s a perfect map of what?',
        a:"London Underground",
        b:"London Cafe",
        c:"London Uptown",
        d:"London centrals",
        correct: 'a',
    },
    {
        question: 'How many Sickles are in a Galleon?',
        a:"15",
        b:"12",
        c:"17",
        d:"14",
        correct: 'c',
    },
    {
        question: 'What are the cores Garrick Ollivander uses in his wand-making?',
        a:"Monkey's tail",
        b:"Phonix feather",
        c:"Unicorn blood",
        d:"Pony Tail",
        correct: 'b',
    },
    {
        question: 'A person (in America) born into a wizarding family who cannot do magic is called…',
        a:"Muggle",
        b:"Mud-blood",
        c:"Mops",
        d:"No-Maj",
        correct: 'd',
    },

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
