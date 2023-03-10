Quiz = [
    {
        question: "why was tuchel sacked as chelsea coach?",
        a: "He was a resist",
        b: "He refused to comply with the management",
        c: "He wasn't as good in his job",
        d: "He didn't get the wins despite getting all the players he needed",
        correct: "d"
    },{
        question: "what was the score line for the man united match against real socided",
        a: "won 0 : 1",
        b: "lost 0 : 1",
        c: "won 1 : 0",
        d: "lost 1 : 0",
        correct: "b"
    },{
        question: "why was Nigeria listed among countries with high crime rate ",
        a: "prevalence of yahoo boys",
        b: "our politicians embezzle money",
        c: "the  whites see our black color as threat",
        d: "we survived covid",
        correct: "a"
    },{
        question: "when was bitcoin launched?",
        a: "2006",
        b: "2008",
        c: "2009",
        d: "2007",
        correct: "c"
    },{
        question: "what month did the ASUU strike action begin?",
        a: "Febuary",
        b: "march",
        c: "october",
        d: "january",
        correct: "a"     
    }
]

const aText = document.getElementById("a-text")
const bText = document.getElementById("b-text")
const cText = document.getElementById("c-text")
const dText = document.getElementById("d-text")
const Question = document.getElementById("que")

const text = "This is a short Quiz"
const time = document.getElementById("time")
const topText = document.getElementById("top")
const startBtn = document.getElementById("startbtn")
const scoreBtn = document.getElementById("scorebtn")
const mainText = document.getElementById("main")
const NextBtn = document.getElementById("nextbtn")
const answerEls = document.querySelectorAll(".ans")
const PreviousBtn = document.getElementById("previousbtn")

let index = 0
let currentQuestion = 0
let answer
let score = 0

startQuiz()

function startQuiz () {
    getDeselected()
    Question.innerText = Quiz[currentQuestion].question
    aText.innerText = Quiz[currentQuestion].a
    bText.innerText = Quiz[currentQuestion].b
    cText.innerText = Quiz[currentQuestion].c
    dText.innerText = Quiz[currentQuestion].d
}

function getDeselected() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    });
}

function getSelected () {
    answerEls.forEach((answerEl) =>{
        if (answerEl.checked) {
            answer = answerEl.id
        } 
    })
    console.log(answer)
    return answer
}

function getScore () {
    let Answer = getSelected()
    if (Answer === Quiz[currentQuestion].correct) {
        score++
    }   
    return score
}

// scoreBtn.addEventListener("click", () => {
    
// })

PreviousBtn.addEventListener("click", () => {
    currentQuestion <= 0 ? currentQuestion = 0 : currentQuestion --
    startQuiz()
})

NextBtn.addEventListener("click", () => {
    getSelected()
    getScore()
    currentQuestion >= Quiz.length - 1 ? mainText.innerHTML = `
    <h2>you have finished, click the submit button</h2>
    <button onclick="mainText.innerText = score">get your score</button>
    ` : currentQuestion ++
    startQuiz()
})

function sliceText () {
    topText.innerText = text.slice(0, index)

    index > text.length - 1 ? index = 0 : index ++
}

setInterval(sliceText, 500);

let tim = 45
function startTime () {
    // for (let i = 0; i <= tim; i++){
    //     tim <= 0 ? tim = 0 : tim -= 1
    //     console.log(i)
    // }


    tim <= 0 ? tim = 0 : tim -= 1
    console.log(tim)
    
    time.innerText = tim
    setTimeout(startTime, 1000)
    // return tim
}

startBtn.addEventListener("click", () => startTime()
)

// function starts () {
//     const initialStart = document.createElement("div")
//     initialStart.innerHTML = 
//     `
//     `
//     initialStart.classList.add("startb")
//     mainText.appendChild(initialStart)

// }
