//Variables//
var startQuizButton = document.querySelector ("#startButton");
var instructionsEl = document.querySelector ("#Instructions");
var startTimeEl = 240;
var highScoreEl = document.querySelector ("#highscore");
var timer = document.querySelector ("#Timer");
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//Form//
//Questions//
//Timer//
function setTime() {
    var timerInterval = setInterval(function (){
        startTimeEl--;
        timerInterval.textContent = startTimeEl + "Seconds Left In Quiz";

        if(startTimeEl === 0) {
            clearInterval(timerInterval);
            sendMessage("Times Up!");
        }
    }, 1000);
}

//Local Storage//
//high score//

//Start Quiz Button//
startQuizButton.addEventListener('click', function(){
    {console.log("----hi-----");}
    
})


//Start Game
var quizStartEl = function () {
    var startTimeEl = setInterval (function(){
        document.getElementById ("#Timer").innerHTML = seconds + "s";

        if (distance <=0) {
            clearInterval(startTimeEl);
            document.getElementById("#Timer").innerHTML = "Times Up";
        }
    }, 1000);
} 
