const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Inside which Html element do we put the javascript ??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1,
  },

  {
    question:
      "What is the correct syntax for referring to an external script called 'ppp.js'?",

    choice1: "<script href = 'ppp.js'>",
    choice2: "<script name = 'ppp.js'>",
    choice3: "<script src = 'ppp.js'>",
    choice4: "<script file = 'ppp.js'>",
    answer: 3,
  },

  {
    question: "How do you write 'hello world' in an alert box?",
    choice1: "msgbox('Hello World');",
    choice2: "alertbox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4
  }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

const getNewQuestion = () => {
    
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return;
    }
    
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();