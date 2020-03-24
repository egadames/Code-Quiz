// These are the variables pulled from the HTMl. They are the checked boxes and the buttom.
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");
var Coding = document.querySelector("#start")


var questions = [
  ["What is 36 + 42", "64", "78", "76", "B"],
  ["What is 7 x 4?", "21", "27", "28", "C"],
  ["What is 16 / 4?", "4", "6", "3", "A"],
  ["What is 8 x 12?", "88", "112", "96", "C"]
  ];

  // chA = questions[pos][1];
  // chB = questions[pos][2];
  // chC = questions[pos][3];

  // h2El.textContent = "This HTML document was created using JavaScript and Chrome Dev Tools";

  // The coding start page
  Coding.textContent = "Coding Quiz Challenge";+
  

  var start = document.createElement('button');
  start.id = "button1";
  start.innerHTML = "Start the Quiz";
  start.style.background = "blue"; 
  document.body.append(start);



question1.textContent = "This HTML document was created using JavaScript and Chrome Dev Tools";
question1.setAttribute('type','button');
question1.setAttribute('name','sal');



// var generateBtn = document.querySelector("#generate");
// var secondsLeft = 60;

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }


// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function getlist(){
//   // Everytime the function is activated it starts with a blank list.
//   var list = "";

//   // The function performs various conditions checks to see if what 
//   // requirement is selected. If Checked, it will add to the variable list.
//   // Each condition will build upon the list variable until the correct list is created.

//     if(upperCheckbox.checked) {
//       list += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     }
//       if(numberCheckbox.checked) {
//       list += '0123456789';
//     }
//         if(lowerCheckbox.checked) {
//       list += 'abcdefghijklmnopqrstuvwxyz';
//     }
//         if(specialCheckbox.checked) {
//       list += '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';  
//     }
//     // Once all the conditions are completed the variable list is returned.
//     return(list)
//   }

// function sendQuestion(){
    
// }

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();

// // Add event passwordener to generate button
// generateBtn.addEventListener("click", setTime());