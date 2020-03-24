var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        // code will go he
        var output = [];
	    var answers;

        for(var i=0; i<questions.length; i++){
            // first reset the list of answers
            answers = [];
            // for each available answer to this question...
            for(letter in questions[i].answers){
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}




//   answers.push(
//     '<label>' + '<input type="radio" name="question'+i+'" value="'+letter+'">'
//       + letter + ': '
//       + questions[i].answers[letter]
//     + '</label>'
//   );
//   choices.innerHTML = "<button> q1[0] </button>";

//   // var imgEl = document.createElement("img");

//   // imgEl.setAttribute("src", "images/image_1.jpg");
//   // mainEl.appendChild(imgEl);
// }
// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// 	function showQuestions(questions, quizContainer){
// 		// code will go here
// 	}

// 	function showResults(questions, quizContainer, resultsContainer){
// 		// code will go here
// 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}
// }


  
//  myQuestions = [
//   {
//     question: "Who invented JavaScript?",
//     answers: {
//       a: "Douglas Crockford",
//       b: "Sheryl Sandberg",
//       c: "Brendan Eich"
//     },
//     correctAnswer: 2
//   },
//   {
//     question: "Which one of these is a JavaScript package manager?",
//     answers: {
//       a: "Node.js",
//       b: "TypeScript",
//       c: "npm"
//     },
//     correctAnswer: 2
//   },
//   {
//     question: "Which tool can you use to ensure code quality?",
//     answers: {
//       a: "Angular",
//       b: "jQuery",
//       c: "RequireJS",
//       d: "ESLint"
//     },
//     correctAnswer: 3
//   }
// ];