/****************************
Variables
****************************/
console.log("Running t06_functions.js")

// Variables
let userName = "Mr Bob";
let userAge = 15;
let currentYear = 2025;
let pocketMoney = 3;
let answer; // a temporary variable for calculations
const output = document.getElementById("spaceForJavaScriptOutput");
output.innerHTML = "";
/****************************
Main Code
****************************/
greetUser("Mr Bob", 99, 3);
greetUser("Ms Alice", 15, 16);

/****************************
Functions
****************************/
function greetUser(_name, _age, _pocketMoney) {
    output.innerHTML += "Hi " + _name + "<br>";
    output.innerHTML += "As of " + currentYear + ", you are " + _age + " years old." + "<br>";
    answer = currentYear - _age;
    output.innerHTML += "You were born in " + answer + "<br>";
    answer = _age + 10;
    output.innerHTML += "In 10 years you will be " + answer + " years old." + "<br>";
    output.innerHTML += "You have " + _pocketMoney + " dollars" + "<br>";
    _pocketMoney = _pocketMoney / 2;
    output.innerHTML += "You spend half of your money, now you have $" + _pocketMoney + "<br>";
    _pocketMoney = _pocketMoney + 5;
    output.innerHTML += "Then you get $5, now you have $" + _pocketMoney + "<br><br>";
}
