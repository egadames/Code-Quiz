// These are the variables .
var $question = document.querySelector("#question");
var $questionTitle = document.getElementById("questionsTitle");
var $answersList = document.querySelector("#answers-list");
var $start = document.getElementById("startQuiz");
var $coding = document.getElementById("start");
var $finalTitle = document.getElementById("finalTitle");
var $finalList = document.querySelector("#final-list");
var $timer = document.querySelector(".time");
var index = 0;
var count = 0;
var score = 0;
var secondsElapsed = 75;

// THis is the objects that contains the questions and answers
var myQuestions = {
  question0: "Commonly used data types DO NOT include?",
  answers0: ["strings", "booleans", "alerts", "numbers"],

  question1: "The condition in an if/else statement is enclosed within ______?",
  answers1: ["quotes", "curly brackets", "parenthesis", "square brackets"],

  question2: "Arrays in Javascript can be used to store _____?",
  answers2: ["numbers and strings", "other arrays", "booleans", "all of the above"],

  question3: "String values must be enclosed within _____ when being assigned to variables?",
  answers3: ["commas", "curly brackets", "quotes", "parentheses"],

  question4: "A very useful tool used during development and debugging for printing content to the debugger is:?",
  answers4: ["Javascript", "terminal/bash", "for loops", "console.log"],

};

// This converts the objects and pulls out the values so they can be indexed later in the code
var values = Object.values(myQuestions);

function checkAnswer(event) {
// This is the event target and it will load a index so it be used in the logic later
  var element = event.target;
  var response = element.parentElement.getAttribute('data-index');

  // This is the logic to check if the user's response is correct
  // the count is to identify the question
  // response is the data-index labeled with each mouse click. They 
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
    console.log(secondsElapsed)
    if(secondsElapsed <= 10){
      console.log(secondsElapsed)
      stopTimer();
      return;
    }else{
      secondsElapsed -= 10;
    }
    
  }
  // This allows the text informing if right or wrong to remain on the screen before going to the next question.
  setTimeout( function(){
    checkTime();
    count++;
    index +=2;
    loadQuestion();
   }, 500 );

   return(score);
}

// This function is first created when the game is started and starts the timer.
function setTimer(){
  if (secondsElapsed > 0) {    
    interval = setInterval(function() {
      secondsElapsed--;
      $timer.textContent = secondsElapsed;
      checkTime();
    }, 1000);
}
  return(secondsElapsed);
}

// This is loaded every time with the timer and checks if it is below zero. 
function checkTime() {
  if (secondsElapsed <= 0) {
    secondsElapsed === 0;
    stopTimer();
  }
}

// This function once activated will end the timer and go to the final screen
function stopTimer() {
  clearInterval(interval);
  finalScreen();
}

// Everytime this is loaded it creates the questions and answers for each quiz.
function loadQuestion() {
  console.log(count);
  if (count === 5) {
    stopTimer();
    return;
  } else {
  $coding.textContent = " "; 
  $answersList.textContent =" ";
  $questionTitle.textContent = values[index];
  
  for (var i = 0; i < 4; i++) {
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.textContent = i + 1 + ". " + values[index + 1][i];
    li.setAttribute('data-index', i)
    button.addEventListener("click", checkAnswer);
    $answersList.appendChild(li);
    li.appendChild(button);
  }
}
}

// This is the high score screen that is loaded at the end of the game. This terminates the game 
// and loads the score into local storage.
function finalScreen(){
  $answersList.textContent = " ";
  $questionTitle.textContent = " "; 
  $finalTitle.textContent = "ALL DONE";
  var finalLi = document.createElement("li");
  finalLi.textContent = "your score is " + score;
  var submit = document.createElement('button');
  submit.textContent = "Submit";
  var label = document.createElement('label');
  label.textContent = " Enter Intials";
  var input = document.createElement("input");
  $finalList.appendChild(finalLi)
  $finalList.appendChild(label);
  $finalList.appendChild(input);
  $finalList.appendChild(submit);

  submit.addEventListener("click", function(event) {
    var highscores;
    var submitText = input.value;
    var currentScore = score;
    console.log(currentScore);
  
    if (localStorage.getItem('highscores')) {
      highscores = JSON.parse(localStorage.getItem('highscores'));
      highscores.push(currentScore);
      localStorage.setItem("highscores", JSON.stringify(highscores));
    } else{
      highscores = [];
      highscores.push(currentScore);
      localStorage.setItem("highscores", JSON.stringify(highscores));
    }

    if (localStorage.getItem('intials')) {
      intials = JSON.parse(localStorage.getItem('intials'));
      intials.push(submitText);
      localStorage.setItem("intials", JSON.stringify(intials));
    } else{
      intials = [];
      intials.push(submitText);
      localStorage.setItem("intials", JSON.stringify(intials));
    }
    window.location.href = "./highscores.html";
  });
}

// This is the event listener that is activated when the start game button is pressed. 
// It loads the first question screen and starts the game timer.

$start.addEventListener("click", function(event) {
  loadQuestion();
  setTimer();
});
  



