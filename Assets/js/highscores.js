var $score = document.querySelector("#score");
var $list = document.querySelector("#highscores");
var $back = document.querySelector("#back");
var $clear = document.querySelector("#clear");
var list = JSON.parse(localStorage.getItem("highscores"));
var intials = JSON.parse(localStorage.getItem("intials"));

final = [];

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

$back.addEventListener("click", function(event) {
    window.location.href = "./index.html";
});

$clear.addEventListener("click", function(event) {
    localStorage.clear();
    $list.textContent = " ";
});