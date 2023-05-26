// const options = document.querySelectorAll('buttons')
// const buttonValue = options.value
// const questionsDisplay = document.getElementsByClassName('.questions')
// const options = document.getElementsByClassName('.options')
// const prev = document.getElementsByClassName('.prev')
// const next = ('.next')

// async function loadtTiviaQuiz(){
   
//     try {
//         const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy')
//         const jsonData = await response.json();
//     showQuestion(jsonData.response[0]);

//       function loadQuestion(jsonData){
//         let correctAnswer = jsonData.correct_answers;
//         let incorrectAnswer = jsonData.incorrect_answers;
//         let optionList = incorrectAnswer;
//         optionList.splice(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer;
//         console.log(optionList)
//         // showQuestion(jsonData.results[0])
//        }

// console.log(jsonData.results[0]);
//     } catch (error) {
//         console.log(error)
//     }
// }

// loadTriviaQuiz()








const questionsDisplay = document.getElementsByClassName('.questions')
const question = document.getElementById('question')
const options = document.getElementsByClassName('.options')
const check = document.getElementById('check_ans')
const play = document.getElementById('play_again')
let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;
let CorrectScore = document.getElementById('correct-score');
let _totalQuestion = document.getElementById('total-question')


document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    _totalQuestion.textContent = totalQuestion;
    CorrectScore.textContent = CorrectScore
})

async function loadQuestion(){
    const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy')
        const data = await response.json();
        
    showQuestion(data.results[0]);
}

function showQuestion(data){
    let correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    // console.log(incorrectAnswer)
    let optionList = incorrectAnswer;
    optionList.splice(Math.floor(Math.random()* incorrectAnswer.length + 1), 0, correctAnswer)
    questionsDisplay.innerHTML = `${data.question} <br> <span class = "category">${data.category}</span>`;
    
    options.innerHTML = `
    ${optionList.map((option,  index) => `
    <li>${index + 1}. <span>${option}</span></li>
    `).join('')}
    `;
    // console.log(incorrectAnswer)
}

// loadQuestion();




//PSEUDO CODE
//get question
//display question on designated ares
//choose an answer
//compare chosen answer to actual answer
//notify seccess for correct answer
//notify failure for wrong answer
//next button to go to the nxt question
//after choosing answer go to next question
//on answering final question, display the number of correct answers side by side total
//number of questions