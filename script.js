const questions = [
{
    question: "Which language runs in a browser?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript"
},
{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Home Tool Markup Language",
        "Hyper Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
},
{
    question: "What does CSS stand for?",
    options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
},
{
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Oracle"],
    answer: "Netscape"
},
{
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["print", "show", "let", "input"],
    answer: "let"
},
{
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "##", "<!--", "**"],
    answer: "//"
},
{
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<head>", "<h1>", "<heading>"],
    answer: "<h1>"
},
{
    question: "Which CSS property changes text color?",
    options: ["background", "font-size", "color", "text-style"],
    answer: "color"
},
{
    question: "Which method is used to display output in the browser console?",
    options: [
        "print()",
        "console.log()",
        "display()",
        "write()"
    ],
    answer: "console.log()"
},
{
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    answer: "==="
}
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const scoreText = document.getElementById("score");
const nextBtn = document.getElementById("next");

function loadQuestion(){

    question.innerText =
    questions[currentQuestion].question;

    options.innerHTML = "";

    questions[currentQuestion].options.forEach(option => {

        let btn = document.createElement("button");

        btn.innerText = option;

        btn.classList.add("option");

        btn.onclick = () => checkAnswer(btn, option);

        options.appendChild(btn);
    });
}

function checkAnswer(btn, option){

    let correctAnswer =
    questions[currentQuestion].answer;

    if(option === correctAnswer){

        btn.classList.add("correct");
        score++;

    }else{

        btn.classList.add("wrong");
    }

    scoreText.innerText =
    "Score: " + score;
}

nextBtn.onclick = () => {

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();

    }else{

        question.innerText = "Quiz Finished!";
        options.innerHTML = "";
        scoreText.innerText =
        "Final Score: " + score;
        nextBtn.style.display = "none";
    }
};

loadQuestion();