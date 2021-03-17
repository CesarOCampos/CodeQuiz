//global values
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startquiz = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");


// Quiz questions
var questions = [{
        question: "The first Thanksgiving was celebrated by Native Americans and who else?",
        answerA: "Pilgrims",
        answerB: "Indians",
        answerC: "Spaniards",
        answerD: "Islanders",
        correctAnswer: "a"
    },
    {
        question: "When did Thomas Edison invent the light bulb?",
        answerA: "1911",
        answerB: "1857",
        answerC: "1898",
        answerD: "1879",
        correctAnswer: "d"
    },
    {
        question: "How long does the earth take to revolve around the sun?",
        answerA: "7 days",
        answerB: "88 days",
        answerC: "365 days",
        answerD: "350 days",
        correctAnswer: "c"
    },
    {
        question: "The what was the name of the last Queen of France?",
        answerA: "Janna",
        answerB: "Marie Antoinette",
        answerC: "Elizabeth",
        answerD: "Cleopatra",
        correctAnswer: "b"
    },
];

var finalQuestionIndex = questions.length;
var currentQuestionIndex = 0;
var timeRemaining = 60;
var timerInterval;
var score = 0;
var correct

//renders questions
function generateQuizQuestion() {
    gameoverDiv.style.display = "none";
    while (currentQuestionIndex === finalQuestionIndex) {
        return Score();
    }
    var currentQuestion = questions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    answerA.innerHTML = currentQuestion.answerA;
    answerB.innerHTML = currentQuestion.answerB;
    answerC.innerHTML = currentQuestion.answerC;
    answerD.innerHTML = currentQuestion.answerD;
};

//starts quiz and renders the question and timer begins counting
function startQuiz() {
    gameoverDiv.style.display = "none";
    startquiz.style.display = "none";
    generateQuizQuestion();

    timerInterval = setInterval(function() {
        timeRemaining--;
        quizTimer.textContent = "Time left: " + timeRemaining;

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            Score();
        }
    }, 1000);
    quizBody.style.display = "block";
}
//keeps track of score when time runs out
function Score() {
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + questions.length + " correct!";
}

// saves highscore with a name 
submitScoreBtn.addEventListener("click", function highscore() {
    if (highscoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
    } else {
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name: currentUser,
            score: score
        };

        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }
});

//clears highscores and stores new values
function generateHighscores() {
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i = 0; i < highscores.length; i++) {
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

// This function displays the high scores page while hiding all of the other pages from 
function showHS() {
    startquiz.style.display = "none"
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";
    generateHighscores();
}

//clears highscore board
function clearhs() {
    localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}

//allows to replay
function replay() {
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startquiz.style.display = "flex";
    timeRemaining = 76;
    score = 0;
    currentQuestionIndex = 0;
}

function check(answer) { //checks each answer
    correct = questions[currentQuestionIndex].correctAnswer;
    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();

    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestion();
    } else {
        Score();
    }
}
startquiz.addEventListener("click", startQuiz); //starts the quiz