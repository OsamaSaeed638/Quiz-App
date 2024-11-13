const questions = [
  {
    question: "HTML Stands for",
    options: [
      "Hyper Text Markup Language",
      "Hyper Tech Markup Language",
      "Hyper Touch Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "CSS Stands for",
    options: [
      "Cascoding Style Sheets",
      "Cascading Style Sheets",
      "Cascating Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "Which tag is used for the largest heading",
    options: ["<h6>", "<h2>", "<h1>"],
    correctAnswer: "<h1>"
  },
  // add additional questions here
];

let index = 0;
let score = 0;
let min = 1;
let sec = 30;
const timerElement = document.getElementById("timer");
const quesElement = document.getElementById("ques");
const opt1Element = document.getElementById("opt1");
const opt2Element = document.getElementById("opt2");
const opt3Element = document.getElementById("opt3");
const nextButton = document.getElementById("next-btn");

function startTimer() {
  const interval = setInterval(() => {
    timerElement.textContent = `${min}:${sec < 10 ? "0" + sec : sec}`;
    sec--;
    if (sec < 0) {
      min--;
      sec = 59;
    }
    if (min < 0) {
      clearInterval(interval);
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  if (index < questions.length) {
    const question = questions[index];
    quesElement.textContent = `Q: ${question.question}`;
    opt1Element.textContent = question.options[0];
    opt2Element.textContent = question.options[1];
    opt3Element.textContent = question.options[2];

    min = 1;
    sec = 30;
    index++;
  } else {
    endQuiz();
  }
}

function endQuiz() {
  alert(`Quiz Over! Your score: ${score}/${questions.length}`);
}

function enableNextButton() {
  nextButton.disabled = false;
}

function checkAnswer(selectedOption) {
  const question = questions[index - 1];
  if (question.options[selectedOption - 1] === question.correctAnswer) {
    score++;
  }
}

nextButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    checkAnswer(selectedOption.value);
    selectedOption.checked = false;
    nextButton.disabled = true;
    nextQuestion();
  }
});

startTimer();
