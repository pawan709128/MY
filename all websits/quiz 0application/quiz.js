// Quiz data
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

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersListElement = document.getElementById('answers-list');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');  // Back Button
const scoreContainer = document.getElementById('score-container');
const quizContainer = document.getElementById('quiz-container');
const scoreText = document.getElementById('score-text');
const retryButton = document.getElementById('retry-btn');

nextButton.addEventListener('click', showNextQuestion);
backButton.addEventListener('click', showPreviousQuestion);  // Add event listener for back button
retryButton.addEventListener('click', restartQuiz);

// Function to display the next question
function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    } else {
        showScore();
    }

    // Show or hide the Back button based on the question index
    backButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
}

// Function to go back to the previous question
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }

    // Hide the back button if on the first question
    backButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
}

// Function to display the current question and its answers
function displayQuestion(index) {
    const currentQuestion = questions[index];
    questionElement.textContent = currentQuestion.question;

    // Clear the previous answers
    answersListElement.innerHTML = '';

    // Display answer options
    currentQuestion.answers.forEach((answer, i) => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.addEventListener('click', () => checkAnswer(i, currentQuestion.correctAnswer));
        answersListElement.appendChild(li);
    });

    // Hide the Next button initially
    nextButton.style.display = 'none';
}

// Function to check if the selected answer is correct
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        score++;
    }

    // Show the Next button after selecting an answer
    nextButton.style.display = 'block';
}

// Function to show the final score after all questions are answered
function showScore() {
    quizContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreText.textContent = `Your score: ${score}/${questions.length}`;
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove('hidden');
    scoreContainer.classList.add('hidden');
    showNextQuestion();  // Start the quiz from the first question
}

// Start the quiz by displaying the first question
showNextQuestion();
// Quiz data
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

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersListElement = document.getElementById('answers-list');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');  // Back Button
const scoreContainer = document.getElementById('score-container');
const quizContainer = document.getElementById('quiz-container');
const scoreText = document.getElementById('score-text');
const retryButton = document.getElementById('retry-btn');

nextButton.addEventListener('click', showNextQuestion);
backButton.addEventListener('click', showPreviousQuestion);  // Add event listener for back button
retryButton.addEventListener('click', restartQuiz);

// Function to display the next question
function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
        backButton.style.display = 'block'; // Show back button
    } else {
        showScore();
    }

    // Hide the Next button initially
    nextButton.style.display = 'none';
}

// Function to go back to the previous question
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
        backButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    }
}

// Function to display the current question and its answers
function displayQuestion(index) {
    const currentQuestion = questions[index];
    questionElement.textContent = currentQuestion.question;

    // Clear the previous answers
    answersListElement.innerHTML = '';

    // Display answer options
    currentQuestion.answers.forEach((answer, i) => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.addEventListener('click', () => checkAnswer(i, currentQuestion.correctAnswer));
        answersListElement.appendChild(li);
    });

    // Show the Next button after selecting an answer
    nextButton.style.display = 'block';
}

// Function to check if the selected answer is correct
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        score++;
    }

    // Show the Next button after selecting an answer
    nextButton.style.display = 'block';
}

// Function to show the final score after all questions are answered
function showScore() {
    quizContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreText.textContent = `Your score: ${score}/${questions.length}`;
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove('hidden');
    scoreContainer.classList.add('hidden');
    showNextQuestion();  // Start the quiz from the first question
}

// Start the quiz by displaying the first question
showNextQuestion();
