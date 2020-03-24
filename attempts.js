// These are the variables pulled from the HTMl. They are the checked boxes and the buttom.
var $question1 = document.getElementById("question1");
// 
var $questionTitle = document.getElementById("questionsTitle");
var $answer1 = document.getElementById("answer1");
var $answer2 = document.getElementById("answer2");
var $answer3 = document.getElementById("answer3");
var $answer4 = document.getElementById("answer4");
var $coding = document.getElementById("start");
// var index = 0;
var myQuestions = 
	{
		question0: "What is 10/2?",
		answers0: ['3','5','115'],
    // answer0: '1',
    question1: "What is 3?",
		answers1: ['0','4','11'],
    // answer1: '2',
    question2: "What is 10?",
		answers2: ['3','7','8'],
    // answer2: '3',
    question3: "What is 2?",
		answers3: ['9','6','11'],
		// answer3: '2'
	}
;

var keys = Object.values(myQuestions)
console.log(keys.length)

// function questionIndex(index){
//   index = index; 
//   if(index < 4) {
//       index++;
//   } else {
//       index = 0;
//   // loadEnd();
//   }
//   loadQuestion();
// }

secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    // timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      "GAME OVER MOTHERFUCKER!!!";
    }

  }, 1000);
}

function loadQuestion(index){
  $coding.textContent = " ";
  setTime();
  console.log(index);
  $questionTitle.textContent = (keys[index]);
  console.log(keys[index]);
  $answer1.textContent = (keys[index+1][0]);
  console.log(keys[index+1][0]);
  $answer2.textContent = (keys[index+1][1]);
  console.log(keys[index+1][1]);
  $answer3.textContent = (keys[index+1][2]);
  console.log(keys[index+1][2]);
  // debugger;
  
  loadQuestion1(2);
  
}

function loadQuestion1(index){
  $questionTitle.textContent = " ";
  console.log(index);
  $questionTitle.textContent = (keys[index]);
  console.log(keys[index]);
  $answer1.textContent = (keys[index+1][0]);
  console.log(keys[index+1][0]);
  $answer2.textContent = (keys[index+1][1]);
  console.log(keys[index+1][1]);
  $answer3.textContent = (keys[index+1][2]);
  console.log(keys[index+1][2]);
  loadQuestion2(4);
}

function loadQuestion2(index){
  $questionTitle.textContent = " ";
  console.log(index);
  $questionTitle.textContent = (keys[index]);
  console.log(keys[index]);
  $answer1.textContent = (keys[index+1][0]);
  console.log(keys[index+1][0]);
  $answer2.textContent = (keys[index+1][1]);
  console.log(keys[index+1][1]);
  $answer3.textContent = (keys[index+1][2]);
  console.log(keys[index+1][2]);
  
}

$coding.addEventListener('click', function(event) {
  // event.stopPropagation();
  loadQuestion(0);
})
  



// var $question2 = document.getElementById("question2");
// var $question3 = document.getElementById("question3");
// var $question4 = document.getElementById("question4");
// var $question5 = document.getElementById("question5");