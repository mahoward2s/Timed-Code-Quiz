// pull in page objects
let highscoreDiv = document.querySelector("#highscore");
let quizTimerEl = document.querySelector("#quizTimer");
let quesTimerEl = document.querySelector("#quesTimer");
let mainEl = document.querySelector("#details");
let timerTab = document.querySelector("#timers");


// let questionEl = document.querySelector("#question")
// let answersListEl = document.querySelector("#answer-list")

// variables
var test = false;
var score = 0;
var quiz = {};
var quizType = "";

var quizDuration = 0;
var quizSecElapsed = 0;
var quizInterval;

var questionDuration = 15;
var questionSecElapsed = 0;
var questionInterval;

// draw instruction
init();

// var startButton = document.querySelector("#startQuiz");

// function to display instructions
function init() {
  clearDetails();
  reset();

  // puts information in main header
  let heading = document.createElement("p");
  heading.setAttribute("id", "main-heading");
  heading.textContent = "This quiz will test your knowledge of fundamental Javascript";

  // provides instructions for quiz
  let instructions = document.createElement("p");
  instructions.setAttribute("id", "instructions");
  instructions.textContent = "When you click Start Quiz the timed quiz will begin.  Once the quiz begins you will have 15 seconds per question to read and answer the question correctly.  If you answer the question correctly the time will continue to countdown every second.  If you answer a question incorrectly; you will automatically be docked 20 seconds on the timer.  If your question timer runs out you will be docked 20 seconds on the timer.  Try your best to get the highest score!"
  
  // creates Start Quiz Button
  let startJsQuiz = document.createElement("button");
  startJsQuiz.setAttribute("id", "startJSQuiz");
  startJsQuiz.setAttribute("class", "btn btn-secondary");
  startJsQuiz.textContent= "Start Quiz";

  // places information into instruction box and click event
  mainEl.appendChild(heading);
  mainEl.appendChild(instructions);
  mainEl.appendChild(startJsQuiz);

  startJsQuiz.addEventListener("click", function () {
    quizType = "Javascript";
    playQuiz(jsQuestions);
  });
}

// function to clear details element of all children
function clearDetails() {
  mainEl.innerHTML = "";
}

function reset() {
  quizType = "";
  score = 0;

  quizDuration = 0;
  quizSecElapsed = 0;
  quizInterval;

  questionDuration = 15;
  questionSecElapsed = 0;
  questionInterval;
}

//start quiz
function playQuiz(questionSet) {
  if (test) { console.log("--- playQuiz ---"); }
  // select questions
  
  quiz = setUpQuestions(questionSet);

  // displays timer
  timerTab.setAttribute("style", "visibility: visible;");

  // Start timer here
  quizDuration = quiz.length * 15;
  if (test) { console.log("duration g,q:",quizDuration,questionDuration); }

  startQuizTimer();
  renderTime();

  //go to first question
  presentQuestion();
}

// function to get question
function setUpQuestions(arr) {
  if (test) {console.log("--- setUpQuestions ---");}

  let ranQuest = [];

  for (let i=0; i<arr.length; i++) {
    ranQuest.push(arr[i]);
  }
  return ranQuest;
}

// function to present question
function presentQuestion() {
  if (test) {console.log("--- presentQuestion ---");}

  //reset time to answer question
  questionSecElapsed = 0;

  // checks for no more questions and exits
  if ( quiz.length === 0 ) {
    endOfQuiz();
    return;
  }

  // Brings question timer

  //sets current object
  curQuestion = quiz.pop();

  //clears html to place questions
  clearDetails();
   
  // add question to screen
  //build out display for new item
  let question = document.createElement("h1");
  // adds data value
  question.setAttribute("question", curQuestion.title);
  question.textContent = curQuestion.title;
  mainEl.appendChild(question);

  // create list as container to listen for answers
  let choiceBox = document.createElement("ul");
  choiceBox.setAttribute("id","choiceBox");
  mainEl.appendChild(choiceBox);

  //adds answers to screen
  for( let i=0; i<curQuestion.choices.length; i++ ) {
    // creates variable for each choice item
    let listChoice = document.createElement("li");
    // adds data value
    listChoice.setAttribute("choice-value", curQuestion.choices[i]);
    listChoice.setAttribute("id","questionNum-"+i);
    listChoice.textContent = curQuestion.choices[i];
    //add choice to page
    choiceBox.appendChild(listChoice);
  }

  if (test) { console.log("cur", curQuestion);}

  // get answer from user
  choiceBox.addEventListener("click", function (){
    scoreAnswer(curQuestion);
  });
}

function scoreAnswer(cur) {
  if (test) { console.log("--- scoreAnswer ---");}
 // ensure that the event on the li
  var e = event.target;
  if ( e.matches("li")) {
    let selectedItem = e.textContent;
    if (test) { console.log("selectedItem quiz " + selectedItem); }
    if ( selectedItem === cur.answer ) {
      score += questionDuration - questionSecElapsed;
    } else {
      if (test) { console.log("wrong answer");}
      //penelty for being wrong
      quizDuration -= 20;
    }
  if (test) { console.log("selected ",selectedItem);}
    showAnswers(cur);
    // presentQuestion();
  }
}

function showAnswers(cur) {
  if (test) { console.log("--- showAnswer ---"); }
  if (test) { console.log("sa qanda",cur);}
  if (test) { console.log("selected ",selectedItem);}


  for (let i=0; i<cur.choices.length; i++) {
    if (test) { console.log("sa in for ",i);}

    let questid = "#questionNum-" + i;
    let questrow = document.querySelector(questid);

    if (test) { console.log("saf selected" + selectedItem + "<");}
    if (test) { console.log("saf color test >" +  cur.choices[i] +"<");}

    //Background Colors for Right and Wrong Answers
    if ( cur.choices[i] !== cur.answer ) {
      if (test) { console.log("color test false");}
      questrow.setAttribute("style","background-color: red");
    } else {
      if (test) { console.log("color test true");}
      questrow.setAttribute("style","background-color: green");
    }
  }
  // pause to see results
  setTimeout(presentQuestion,500);
}

// function that sets quiz timer
function setQuizTime() {
  if (test) { console.log("--- setQuizTime ---"); }
  if (test) { console.log("quizDuration " + quizDuration); }
  clearInterval(quizInterval);
  quizSeconds = quizDuration;
}


function renderTime() {

  quizTimerEl.textContent = quizDuration - quizSecElapsed;
  quesTimerEl.textContent = questionDuration - questionSecElapsed;

  if ( (questionDuration - questionSecElapsed) < 1 ) {
    // penalty for letting question timer run out
    quizDuration -= 20;
    if (test) { console.log("too slow"); }
    presentQuestion();
  } 

  if ( (quizDuration - quizSecElapsed) < 1 ) {
   endOfQuiz();
  }
}

function startQuizTimer () {
  if (test) { console.log("--- startQuizTimer ---"); }
  setQuizTime();

  quizInterval = setInterval(function() {
    quizSecElapsed++; 
    questionSecElapsed++; 
    renderTime();
  }, 1000);
}

function stopTime() {
  if (test) { console.log("--- stopTime --- ");}
  quizSeconds = 0;
  questionSeconds = 0;
  clearInterval(quizInterval);
}

// function for end of the quiz
function endOfQuiz() {
  if (test) { console.log("--- endOfQuiz ---"); }
  stopTime();
  clearDetails();

  timerTab.setAttribute("style", "visibility: hidden;");

  let heading = document.createElement("p");
  heading.setAttribute("id", "main-heading");
  heading.textContent = "QUIZ OVER - I hope you learned some Fundamental Javascript and set a new HIGH SCORE!!!";

  // creates elements with the instructions for the quiz and score
  let instructions = document.createElement("p");
  instructions.setAttribute("id", "instructions");
  instructions.textContent = " Your score is " + score; 

  // creates PLay Again Button
  let playAgain = document.createElement("button");
  playAgain.setAttribute("id", "playAgain");
  playAgain.setAttribute("class", "btn btn-secondary");
  playAgain.textContent = "Play Again";

  // creates input for user to add initials
  let par = document.createElement("p");

  let initialsLabel = document.createElement("label");
  initialsLabel.setAttribute("for","userInitials");
  initialsLabel.textContent = "Enter Initials: ";

  let initialsInput = document.createElement("input");
  initialsInput.setAttribute("id","userInitials");
  initialsInput.setAttribute("name","userInitials");
  initialsInput.setAttribute("minlength","3");
  initialsInput.setAttribute("maxlength","3");
  initialsInput.setAttribute("size","3");


  mainEl.appendChild(heading);
  mainEl.appendChild(instructions);
  mainEl.appendChild(initialsLabel);
  mainEl.appendChild(initialsInput);
  mainEl.appendChild(par);
  mainEl.appendChild(playAgain);

  playAgain.addEventListener("click", init);

  initialsInput.addEventListener("input", function() {
    initialsInput.value = initialsInput.value.toUpperCase();
    if ( initialsInput.value.length === 3 ) { 

      //create object for this score
      let thisScore = [ { type: quizType, name: initialsInput.value, score: score } ]; 

      //get highscores from memory
      let storedScores = JSON.parse(localStorage.getItem("highScores")); 
      if (test) { console.log("storedScore",storedScores); }

      if (storedScores !== null) { 
        storedScores.push(thisScore[0]); 
      } else {
        storedScores = thisScore;
      }

      localStorage.setItem("highScores", JSON.stringify(storedScores));
      highScores();
    }
  });
}

function highScores() {
  stopTime();
  clearDetails();

  timerTab.setAttribute("style", "visibility: hidden;");

  //get scores from local storage
  let storedScores = JSON.parse(localStorage.getItem("highScores")); 

  // heading for High Score
  let heading = document.createElement("h2");
  heading.setAttribute("id", "main-heading");
  heading.textContent = "Top 5 High Score Hall of Fame";

  mainEl.appendChild(heading);

  // Render a new li for each score
  if ( storedScores !== null ) {
    // sort scores
    storedScores.sort((a,b) => (a.score < b.score) ? 1: -1);

    // sets the number of scores to display to 5 or the number of quizzes taken. Which ever is less
    let numScores2Display = 5;
    if ( storedScores.length < 5 ) { 
      numScores2Display = storedScores.length; 
    }

    for (var i = 0; i < numScores2Display; i++) {
      var s = storedScores[i];

      var p = document.createElement("p");
      p.textContent = s.name + " " + s.score + " ( " + s.type + " )";
      mainEl.appendChild(p);
    }
  } else {
    var p = document.createElement("p");
    p.textContent =  "Your Initials Here!";
    mainEl.appendChild(p);
  }


  // creates button to start the quiz
  let playAgain = document.createElement("button");
  playAgain.setAttribute("id", "playAgain");
  playAgain.setAttribute("class", "btn btn-secondary");
  playAgain.textContent = "Play!";

  mainEl.appendChild(playAgain);

  playAgain.addEventListener("click", init);
}

highscoreDiv.addEventListener("click", highScores);