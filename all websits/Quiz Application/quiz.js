const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Jupiter", "Mars", "Venus"],
        correctAnswer: 1
    }
];

let currentQuestion = 0;
let score = 0;

document.getElementById('next-btn').addEventListener('click', showNextQuestion);
document.getElementById('retry-btn').addEventListener('click', restartQuiz);

// Show the next question or end the quiz
function showNextQuestion() {
    if (currentQuestion < questions.length) {
        displayQuestion(currentQuestion);
        currentQuestion++;
    } else {
        showScore();
    }
}

// Display question and answers
function displayQuestion(index) {
    const questionData = questions[index];
    document.getElementById('question').textContent = questionData.question;

    const answersList = document.getElementById('answers-list');
    answersList.innerHTML = '';  // Clear previous answers

    // Show answers
    questionData.answers.forEach((answer, i) => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.addEventListener('click', () => checkAnswer(i, questionData.correctAnswer));
        answersList.appendChild(li);
    });
}

// Check if selected answer is correct
function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    showNextQuestion();
}

// Show final score
function showScore() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('score-container').classList.remove('hidden');
    document.getElementById('score-text').textContent = `Your score: ${score}/${questions.length}`;
}

// Restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('score-container').classList.add('hidden');
    showNextQuestion();  // Start quiz from the beginning
}

// Start the quiz by displaying the first question
showNextQuestion();