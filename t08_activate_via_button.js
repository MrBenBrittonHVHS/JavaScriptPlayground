/****************************
Introduction
Run the functions when the button is pressed
****************************/
console.log("Running t08 activate via button.js")

/****************************
Variables
****************************/
let userName = "Mr Bob";
let userAge = 15;
let currentYear = 2025;
let pocketMoney = 3;
let answer; // a temporary variable for calculations
const OUTPUT = document.getElementById("spaceForJavaScriptOutput"); // the OUTPUT connects to the webpage

/****************************
Main Code
****************************/

// No code runs on startup, it only runs when a button is pressed

/****************************
Functions
****************************/

// Task 06
// The greetUser function takes three arguments, then displays a personalised welcome message for that user
function greetUser(_name, _age, _pocketMoney) {
    OUTPUT.innerHTML += "Hi " + _name + "<br>";
    OUTPUT.innerHTML += "As of " + currentYear + ", you are " + _age + " years old." + "<br>";
    answer = currentYear - _age;
    OUTPUT.innerHTML += "You were born in " + answer + "<br>";
    answer = _age + 10;
    OUTPUT.innerHTML += "In 10 years you will be " + answer + " years old." + "<br>";
    OUTPUT.innerHTML += "You have " + _pocketMoney + " dollars" + "<br>";
    _pocketMoney = _pocketMoney / 2;
    OUTPUT.innerHTML += "You spend half of your money, now you have $" + _pocketMoney + "<br>";
    _pocketMoney = _pocketMoney + 3;
    OUTPUT.innerHTML += "Then you get $3, now you have $"+ _pocketMoney+"<br>";
}

// Task 8
// The start function is called when the button is pressed
// It calls the greetUser function twice with different data
function start() {
    OUTPUT.innerHTML = "";
    greetUser("Mr Bob", 99, 3);
    greetUser("Ms Alice", 15, 16);
}