//Questions for quiz

var jsQuestions = [
    //Question 1
    {
    title:'Inside which HTML element do we put the JavaScript',
    choices:['script', 'javascript', 'scripting', 'js'],
    answer:'script'
    },
    //Question 2
    {
    title:'What is the correct JavaScript syntax to change the content of the HTML element below?',
    '<p id="demo">This is a demonstration.</p>',
    choices:['#demo.innerHTML = "Hello World!";', 'document.getElementById("demo").innerHTML = "Hello World!";', 
    'document.getElement("p").innerHTML = "Hello World!";', 'document.getElementByName("p").innerHTML = "Hello World!";'],
    answer:'document.getElementById("demo").innerHTML = "Hello World!";',
    },
    //Question 3
    {
    title:'Where is the correct place to insert a JavaScript?',
    choices:['The <body> section', 'The <head> section', 'Both the <head> section and the <body> section are correct'],
    answer:'Both the <head> section and the <body> section are correct',
    },
    //Question 4
    {
    title:'What is the correct syntax for referring to an external script called "xxx.js"?',
    choices:['<script href="xxx.js">', '<script src="xxx.js">', '<script name="xxx.js">'],
    answer:'<script src="xxx.js">',
    },
    //Question 5
    {
    title:'The external JavaScript file must contain the <script> tag.',
    choices:['True', 'False'],
    answer:"False",
    },
    //Question 6
    {
    title:'How do you write "Hello World" in an alert box?',
    choices:['alert("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");'],
    answer:'alert("Hello World");',
    },
    //Question 7
    {
    title:'How do you create a function in JavaScript?',
    choices:['function:myFunction()', 'function myFunction()', 'function = myFunction()'],
    answer:'function myFunction()',
    },
    //Question 8
    {
    title:'How do you call a function named "myFunction"?',
    choices:['myFunction()', 'call function myFunction()', 'call myFunction()'],
    answer:'myFunction()',
    },
    //Question 9
    {
    title:'How to write an IF statement in JavaScript?',
    choices:['if (i == 5)', 'if i == 5 then', 'if i = 5', 'if i = 5 then'],
    answer:'if (i == 5)',
    },
    //Question 10
    {
    title:'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    choices:['if (i != 5)', 'if i =! 5 then', 'if i <> 5', 'if (i <> 5)'],
    answer:'if (i != 5)',
    },
    //Question 11
    {
    title:'How does a WHILE loop start?',
    choices:['while (i <= 10; i++)', 'while i = 1 to 10', 'while (i <= 10)'],
    answer:'while (i <= 10)',
    },
    //Question 12
    {
    title:'How does a FOR loop start?',
    choices:['for (i = 0; i <= 5; i++)', 'for (i <= 5; i++)', 'for (i = 0; i <= 5)', 'for i = 1 to 5'],
    answer:'for (i = 0; i <= 5; i++)',
    },
    //Question 13
    {
    title:'How can you add a comment in a JavaScript?',
    choices:["//This is a comment", "'This is a comment", "<!--This is a comment-->"],
    answer:"//This is a comment",
    },
    //Question 14
    {
    title:'How to insert a comment that has more than one line?',
    choices:["<!--This comment has more than one line-->", "//This comment has more than one line//", "/*This comment has more than one line*/"],
    answer:"/*This comment has more than one line*/",
    },
    //Question 15
    {
    title:'What is the correct way to write a JavaScript array?',
    choices:["var colors = ["red", "green", "blue"]","var colors = (1:"red", 2:"green", 3:"blue")", 
    "var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")", "var colors = "red", "green", "blue""],
    answer:"var colors = ["red", "green", "blue"]",
    },
    //Question 16
    {
    title:'How do you round the number 7.25, to the nearest integer?',
    choices:['Math.round(7.25)','Math.rnd(7.25)', 'round(7.25)', 'rnd(7.25)'],
    answer:'Math.round(7.25)',
    },
    //Question 17
    {
    title:'How do you find the number with the highest value of x and y?',
    choices:['Math.ceil(x, y)', 'ceil(x, y)', 'top(x, y)', 'Math.max(x, y)'],
    answer:'Math.max(x, y)',
    },
    //Question 18
    {
    title:'What is the correct JavaScript syntax for opening a new window called "w2" ?',
    choices:['w2 = window.open("http://www.w3schools.com");', 'w2 = window.new("http://www.w3schools.com");'],
    answer:'w2 = window.open("http://www.w3schools.com");',
    },
    //Question 19
    {
    title:'JavaScript is the same as Java.',
    choices:['True', 'False'],
    answer:'False',
    },
    //Question 20
    {
    title:"How can you detect the client's browser name?",
    choices:['client.navName', 'browser.name', 'navigator.appName'],
    answer:'navigator.appName',
    },
    //Question 21
    {
    title:'Which event occurs when the user clicks on an HTML element?',
    choices:['onclick', 'onmouseclick', 'onmouseover', 'onchange'],
    answer:'onclick',
    },
    //Question 22
    {
    title:'How do you declare a JavaScript variable?',
    choices:['var carName;', 'v carName;', 'variable carName;'],
    answer:'var carName;',
    },
    //Question 23
    {
    title:'Which operator is used to assign a value to a variable?',
    choices:['=', 'x', '*', '-'],
    answer:'=',
    },
    //Question 24
    {
    title:'What will the following code return: Boolean(10 > 9)',
    choices:['true', 'false', 'NaN'],
    answer:'true',
    },
    //Question 25
    {
    title:'Is JavaScript case-sensitive?',
    choices:['Yes', 'No'],
    answer:'Yes',
    }
]

//Got questions from W3schools