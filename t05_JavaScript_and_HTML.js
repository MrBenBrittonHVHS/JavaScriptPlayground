/****************************
Introduction
Displaying output in an HTML page
****************************/
console.log("Running t05 JavaScript and HTML.js")

/****************************
Variables
****************************/
let userName = "Mr Bob";
let userAge = 15;
let currentYear = 2025;
let pocketMoney = 3;
let answer; // a temporary variable for calculations
const OUTPUT = document.getElementById("spaceForJavaScriptOutput"); // connect to the page element

/****************************
Main Code
****************************/

// Display a welcome message on the webpage using variables to supply the information 
OUTPUT.innerHTML = "Hi "+userName+"<br>";
OUTPUT.innerHTML += "As of "+ currentYear +", you are "+ userAge +" years old."+"<br>";
answer = currentYear - userAge;
OUTPUT.innerHTML += "You were born in "+ answer+"<br>";
answer = userAge + 10;
OUTPUT.innerHTML += "In 10 years you will be "+ answer +" years old."+"<br>";
OUTPUT.innerHTML += "You have "+ pocketMoney +" dollars"+"<br>";
pocketMoney = pocketMoney / 2;
OUTPUT.innerHTML += "You spend half of your money, now you have $"+ pocketMoney+"<br>";
pocketMoney = pocketMoney + 3;
OUTPUT.innerHTML += "Then you get $3, now you have $"+ pocketMoney+"<br>";


/****************************
Functions
****************************/