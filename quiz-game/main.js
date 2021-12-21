const quizDB = [
    {
        question: " Q1: What is the correct HTML element for inserting a line break",
        a: "<lb>",
        b: "<break>",
        c: "<br>",
        d: "<b>",
        ans: "ans3"
    },
    {
        question: " Q2: The correct sequence of HTML tags for starting a webpage is ",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        ans: "ans4"   
    },

    {
        question: " Q3:Which of the following tag is used for inserting the largest heading in HTML ",
        a: "<h3>",
        b: "<h1>",
        c: "<h6>",
        d: "<h5>",
        ans: "ans2"
    },
    {
        question: "Q4: The <hr> tag in HTML is used for ",
        a: "new line",
        b: "vertical ruler",
        c: "new paragraph",
        d: "horizontal ruler",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');
let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList =  quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    

}
loadQuestion();
 
const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showscore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length} !!👌🏼</h3>
            <button class="btn" onclick ="location.reload()"> Play Again 👍🏼</button>
        `;

        showscore.classList.remove('scorearea');
    }

});