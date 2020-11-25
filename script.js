//Variables//
var startQuiz = document.querySelector (".startButton")
var instructions = document.querySelector (".Instructions")
var secondsLeft = 240;
var highScore = 


//Form//
//Questions//
//Timer//
function setTime() {
    var timerInterval = setInterval(function (){
        secondsLeft--;
        timerInterval.textContent = secondsLeft + "Seconds Left In Quiz";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

//Local Storage//
//high score//

//Start Quiz Button//
startQuiz.addEventListener('click', function(){
    
    
})