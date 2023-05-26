const questionsDisplay = document.getElementsByClassName('.questions')
const options = document.getElementsByClassName('.options')
const check = document.getElementById('check_ans')
const play = document.getElementById('play_again')
let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;
let CorrectScore = document.getElementsByClassName('.score');
let _totalQuestion = document.getElementById('total-question')


document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    totalQuestion.textContent = totalQuestion;
    CorrectScore.textContent = CorrectScore
})

async function loadQuestion(){
    const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy')
        const data = await response.json();
        
    showQuestion(data.results[0]);
}

//to display questions and options

function showQuestion(data){
    let correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    console.log(incorrectAnswer)
    let optionList = incorrectAnswer;
    //using the math object to randomly inject right answer into option lists
    optionList.splice(Math.floor(Math.random()* incorrectAnswer.length + 1), 0, correctAnswer)
   



    question.innerHTML = `${data.question} <br> <span class = "category">${data.category}</span>`;
    options.innerHTML = `
    ${optionList.map((option,  index) => `
    <li>${index + 1}. <span>${option}</span></li>
    `).join('')}
    `;
    selectOption();
    // console.log(incorrectAnswer)
}

//selecting options
function selectOption(){
options.querySelectorAll('li').forEach((option) => {
    option.addEventListener('click', () => {
        if(options.querySelector('.selected')){
            const activeOption = options.querySelector('.selected');
            activeOption.classList.remove('selected');

        }
        option.classList.add('selected')
    })
});
}


