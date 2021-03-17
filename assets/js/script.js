//global elements
var questionsEl = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//create the questions for the quiz
var questions = [{
        question: "The first Thanksgiving was celebrated by Native Americans and what other group of people?",
        choices: ["[Pilgrims]", "[Indians]", "[Spaniards]", "[Islanders]"],
        answer: "[Pilgrims]",
        userAnswer: "",
        outcome: false,
        time: 0
    },
    {
        question: "When did Thomas Edison invent the light bulb?",
        choices: ["1879", "1857", "1898", "1799"],
        answer: "1879",
        userAnswer: "",
        outcome: false,
        time: 0
    },
    {
        question: "How long does the earth take to revolve around the sun?",
        choices: ["365 Days", "88 Days", "24 hours", "7 days"],
        answer: "Variable",
        userAnswer: "",
        outcome: false,
        time: 0
    },
    {
        question: "The what was the name of the last Queen of France?",
        choices: ["Elizabeth", " Marie Antoinette", "Cleopatra", "Janna"],
        answer: " Marie Antoinette",
        userAnswer: "",
        outcome: false,
        time: 0
    }
];
var timeleft;
var timeLeft;
var numcorrect;
var score;

function createQuestion() {
    var time

    function beginQuiz() {
        // var time = 0
        // var displayTime = document.getElementById(Timer);

        // function startQuiz() {
        //     startButton
        // }
    }

    function Timer() {
        var timeLeft = 90;
        var timeInterval = setInterval(function() {
            if (timeLeft > 1) {
                timerEl.textContent = timeLeft + ' seconds remaining';
                timeLeft--;
            } else if (timeLeft === 1) {
                timerEl.textContent = timeLeft + ' second remaining';
                timeLeft--;
            } else {
                timerEl.textContent = '';
                clearInterval(timeInterval);
                //displayMessage();
            }
        }, 1000);
    }

    function questionEl() {}

    function score() {}
}

beginQuiz.addEventListener("click", start);
//beginQuiz();