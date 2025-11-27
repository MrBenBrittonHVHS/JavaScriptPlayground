/****************************
 * Introduction
 * Using arrays
****************************/
console.log("Running t11_Arrays.js")

/****************************
Variables
****************************/
let userName = "Mr Bob";
let userAge = 15;
let currentYear = 2025;
let pocketMoney = 3;
let answer; // a temporary variable for calculations
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");// the OUTPUT connects to the webpage

let chocolateRatingList = ["You loath chocolate",
"Chocolate is meh",
"Chocolate is pretty good",
"Chocolate is the best thing EVER!!!!",];
/****************************
Main Code
****************************/

// No code runs on startup, it only runs when a button is pressed

/****************************
Functions
****************************/

// Task 12 (updated from Task 11, Task 06)
// The greetUser function takes four arguments, then displays a personalised welcome message for that user
// The opinion about chocolate is selected from an array
function greetUser(_name, _age, _pocketMoney, _userRating) {
    OUTPUT.innerHTML = "";

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

    // Decide whether the user can afford a chocolate bar
    if (_pocketMoney >= 4){
        OUTPUT.innerHTML += "A chocolate bar costs $4<br>You CAN afford a chocolate bar<br>"
    }else{
        OUTPUT.innerHTML += "A chocolate bar costs $4<br>You CANNOT afford a chocolate bar<br>"
    }

    // Display the user's chocolate rating
    OUTPUT.innerHTML += "You think " + chocolateRatingList[_userRating] + "<br>";

}

// Task 8
// The start function is called when the "Start" button is pressed
// It calls the greetUser function twice with different data
function start() {
    OUTPUT.innerHTML = "";
    greetUser("Mr Bob", 99, 3);
    greetUser("Ms Alice", 15, 16);
}

// Task 12 (updated from task 10, task 9)
// The getFormInput function is called when the "Submit" button is pressed
// It calls the greetUser function with the data from the form to create a personalised message
function getFormInput() {
    const FORM_NAME_FIELD = document.getElementById("userName");
    userName = FORM_NAME_FIELD.value;

    const FORM_AGE_FIELD = document.getElementById("userAge");
    userAge = Number(FORM_AGE_FIELD.value);

    const FORM_MONEY_FIELD = document.getElementById("userMoney");
    userMoney = Number(FORM_MONEY_FIELD.value);

    const FORM_RATING_FIELD = document.getElementById("chocolateRating");
    userRating = Number(FORM_RATING_FIELD.value);

    greetUser(userName, userAge, userMoney, userRating);
}
