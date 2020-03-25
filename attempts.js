// These are the variables pulled from the HTMl. They are the checked boxes and the buttom.
var $questionTitle = document.getElementById("questionsTitle");
var $answersList = document.querySelector("#answers-list");
var $start = document.getElementById("startQuiz");
var $coding = document.getElementById("start");
var index = 0;
var $finalTitle = document.getElementById("finalTitle");
var todoInput = document.querySelector("#final-text");
var todoForm = document.querySelector("#final-form");
var $finalList = document.querySelector("#final-list");

var myQuestions = {
  question0: "Commonly used data types DO NOT include?",
  answers0: ["strings", "booleans", "alerts", "numbers"],
  // answer0: '2',
  question1: "The condition in an if/else statement is enclosed within ______?",
  answers1: ["quotes", "curly brackets", "parenthesis", "square brackets"],
  // answer1: '2',
  question2: "Arrays in Javascript can be used to store _____?",
  answers2: ["numbers and strings", "other arrays", "booleans", "all of the above"],
  // answer2: '3',
  question3: "String values must be enclosed within _____ when being assigned to variables?",
  answers3: ["commas", "curly brackets", "quotes", "parentheses"],
  // answer3: "2",
  question4: "A very useful tool used during development and debugging for printing content to the debugger is:?",
  answers4: ["Javascript", "terminal/bash", "for loops", "console.log"],
  // answer4: "3"
};

var values = Object.values(myQuestions);

var count = 0;
var score = 0;

function checkAnswer() {
  // if(count === 5){
  //   finalScreen();
  // }

  var element = event.target;
  var response = element.parentElement.getAttribute('data-index');
  var statement = document.createElement("li");
  if (count === 0 && response == 2) {
    $answersList.textContent = ("YOU ARE RIGHT");
    score++;
  } else if (count === 1 && response == 2) {
    $answersList.textContent = ("YOU ARE RIGHT");
    score++;
  } else if (count === 2 && response == 3) {
    $answersList.textContent = ("YOU ARE RIGHT");
    score++;
  } else if (count === 3 && response == 2) {
    $answersList.textContent = ("YOU ARE RIGHT");
    score++;
  } else if (count === 4 && response == 3) {
    $answersList.textContent = ("YOU ARE RIGHT");
    score++;
  } else {
    $answersList.textContent = "YOU ARE WRONG!!! YOU SUCK";
  }
  
  setTimeout( function(){
    // here add the code (or call a function) to be executed after pause
    count++;
    index +=2;
    loadQuestion();
   }, 500 );

   return(score);
}

function loadQuestion() {
  if (count === 5) {
    finalScreen();
  } else {
  $coding.textContent = " "; 
  $questionTitle.textContent = values[index];
  $answersList.textContent =" ";
  for (var i = 0; i < 4; i++) {
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.textContent = values[index + 1][i];
    li.setAttribute('data-index', i)
    button.addEventListener("click", checkAnswer);
    $answersList.appendChild(li);
    li.appendChild(button);
  }
  }
}

function finalScreen(){
  $answersList.textContent = " ";
  $questionTitle.textContent = " "; 
  $finalTitle.textContent = "ALL DONE";
  var finalLi = document.createElement("li");
  var submit = document.createElement('button');
  var label = document.createElement('label');
  var input = document.createElement("input");
  finalLi.textContent = "your score is " + score;
  label.textContent = " Enter Intials";
  submit.textContent = "Submit"
  submit.setAttribute('href', "./highscores.html")
  $finalList.appendChild(finalLi)
  $finalList.appendChild(label);
  $finalList.appendChild(input);
  $finalList.appendChild(submit);
}
// /* <div class="finals">
// <form id="final-form" method="POST">
//   <!-- <label for="final-text">Add a final:</label>
//   <input type="text" placeholder="What needs to be done?" name="final-text" id="final-text" /> -->
// </form>
// <!-- <p>final Count: <span id="final-count">0</span></p>
// <ul id="final-list"></ul> -->
// </div> */


$start.addEventListener("click", loadQuestion);


// secondsLeft = 10;

// function setTime() {
//   var timerInterval = setTimeout(function() {
//     secondsLeft--;

//     // if(secondsLeft === 0) {
//     //   clearInterval(timerInterval);
//     //   // $questionTitle.textContent = " ";
//     //   // "GAME OVER MOTHERFUCKER!!!";
//     // }
//   }, 10000);
// }