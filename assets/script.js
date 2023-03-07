var quizData = [
    {
        question: "Which language runs in a web browser",
        a: "Java",
        b: 'HTML',
        c: 'CSS',
        d: "JavaScript",
        correct: 'd',
    },
    {
        question: 'What does CSS stand for?',
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cars Ships Snakes",
        d: "Cascading Simple Sheets",
        correct: 'b',
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hyperloop Machine Language",
        c: "Harry Munster Language",
        d: "Hungery Monster Large",
        correct: 'a',
    },
    {
        question: "Who created JavaScript?",
        a: "Brendan Eich",
        b: 'God',
        c: "Godzilla",
        d: "Brendan Frazer",
        correct: a

    },


];

var quiz= document.getElementById('quiz')
var answerEls = document.querySelectorAll('.answer')
var questionE1= document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitbtn = document.getElementById('submit')


var currentQuiz = 0
var score = 0



function loadQuiz(){
    deselectAnsers()

    var currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d

}

function deselectAnsers(){
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected(){
    var answerEls
    answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id
        }
    })
    return answer
}

submitbtn.addEventListener('click', () => {
    var answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else
        quizinnerHTML = 
        <h2> You Answered ${score}/${quizData.length} questions correctley</h2>

        <button >onclick="location.reload()" reload</button>


        
        
    }
})