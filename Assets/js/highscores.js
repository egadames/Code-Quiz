// Declaring the variables
var $score = document.querySelector("#score");
var $list = document.querySelector("#highscores");
var $back = document.querySelector("#back");
var $clear = document.querySelector("#clear");
var list = JSON.parse(localStorage.getItem("highscores"));
var intials = JSON.parse(localStorage.getItem("intials"));
final = [];

//This pulls the highscore from the local storage and loads into the array.
// This creates a new line item that will contain the highscores.
if(list){
    for (var i = 0; i < list.length; i++) {
        final[i] = i + 1 + ". " + intials[i] + " - " + list[i];
        var li = document.createElement("li");
        li.textContent = final[i];
        $list.appendChild(li);
    }
}else {
    $list.textContent = " ";
}

// This is the event listener that will send the user back to the starting page
$back.addEventListener("click", function(event) {
    window.location.href = "./index.html";
});

// This will clear the highscore list when the user clicks on the button.
$clear.addEventListener("click", function(event) {
    localStorage.clear();
    $list.textContent = " ";
});