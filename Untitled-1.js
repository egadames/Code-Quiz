var $score = document.querySelector("#score");
var $list = document.querySelector("#highscores");
var $back = document.querySelector("#back");
var $clear = document.querySelector("#clear");
// var list = JSON.parse(localStorage.getItem("highscores"));
var list = localStorage.getItem("highscores");

// var shit = Object.values(list);
// var fuck = Object.keys(list);
// var damn = Object.entries(list);


var words = list.split(',');
console.log(words);

for (var i = 0; i < words.length; i++) {
    var li = document.createElement("li");
    li.textContent = words[i];
    $list.appendChild(li);
}
// var words = list.split(',');
// console.log(typeof words);

// var shit = Object.values(words);

// // build the index
// for (var x in obj) {
//     index.push(x);
//  }


// var fuck = Object.keys(words);
// console.log(fuck);
// var damn = Object.entries(words)

// for (var i = 0; i < words.length; i++) {
//     console.log(words[i]);
//     var li = document.createElement("li");
//     li.textContent = words[i];
//     $list.appendChild(li);
//     }

// $back.addEventListener("click", function() {;
//     $score.textContent = " ";
//     for (var i = 0; i < 4; i++) {
//       button.textContent = values[index + 1][i];
//       li.setAttribute("data-index", i);    
//       $answersList.appendChild(li);
//       li.appendChild(button);
//     }
// })

// console.log(typeof list);
// console.log(list);
