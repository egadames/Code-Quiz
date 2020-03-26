// These are the variables pulled from the HTMl. They are the checked boxes and the buttom.
var $questionTitle = document.getElementById("questionsTitle");
var $answersList = document.querySelector("#answers-list");
var $start = document.getElementById("startQuiz");
var $coding = document.getElementById("start");
var $finalTitle = document.getElementById("finalTitle");
var $finalList = document.querySelector("#final-list");
var index = 0;
var count = 0;
var score = 0;



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

function checkAnswer(event) {
  var element = event.target;
  var response = element.parentElement.getAttribute('data-index');
  var statement = document.createElement("li");

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
  }

  
  // This allows the text informing if right or wrong to remain on the screen before going to the next question.
  setTimeout( function(){
    count++;
    index +=2;
    loadQuestion();
   }, 500 );

   return(score);
}

function loadQuestion() {
  console.log(count);
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
    // debugger;
    var highscores;
    event.preventDefault();
    var submitText = input.value;
    var currentScore = {Intials: submitText, score: score};
    console.log(currentScore);
  
    if (localStorage.getItem('highscores')) {
      console.log(localStorage.getItem('highscores'))
      highscores = JSON.parse(localStorage.getItem('highscores'));
      highscores.push(currentScore);
      localStorage.setItem("highscores", JSON.stringify(highscores));
    } else{
      console.log("creating string")
      highscores = [];
      highscores.push(currentScore);
      localStorage.setItem("highscores", JSON.stringify(highscores));
    }
    window.location.href = "./highscores.html";
  });
}

$start.addEventListener("click", loadQuestion);
