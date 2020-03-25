// These are the variables pulled from the HTMl. They are the checked boxes and the buttom.
var $questionTitle = document.getElementById("questionsTitle");
var $answersList = document.querySelector("#answers-list");
var $start = document.getElementById("startQuiz");
var $coding = document.getElementById("start");
var index = 0;

var myQuestions = {
  question0: "What is 10/2?",
  answers0: ["3", "5", "115"],
  // answer0: '1',
  question1: "What is 3?",
  answers1: ["0", "4", "11"],
  // answer1: '2',
  question2: "What is 10?",
  answers2: ["3", "7", "8"],
  // answer2: '3',
  question3: "What is 2?",
  answers3: ["9", "6", "11"]
  // answer3: '2'
};

var values = Object.values(myQuestions);

function questionIndex() {
  index +=2;
  loadQuestion();
}

function loadQuestion() {
  $coding.textContent = " "; 
  $questionTitle.textContent = values[index];
  $answersList.textContent =" ";
  for (var i = 0; i < 3; i++) {
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.textContent = values[index + 1][i];
    button.addEventListener("click", questionIndex);
    $answersList.appendChild(li);
    li.appendChild(button);
  }
}

$start.addEventListener("click", loadQuestion);

