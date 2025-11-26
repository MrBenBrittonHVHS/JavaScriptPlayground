/****************************
Variables
****************************/
console.log("Running t03_maths.js")

// Variables
let userName = "Mr Bob";
let userAge = 15;
let currentYear = 2025;
let pocketMoney = 3;
let answer; // a temporary variable for calculations
/****************************
Main Code
****************************/
const output = document.getElementById("spaceForJavaScriptOutput");

output.innerHTML = "Hi "+userName+"<br>";
output.innerHTML += "As of "+ currentYear +", you are "+ userAge +" years old."+"<br>";
answer = currentYear - userAge;
output.innerHTML += "You were born in "+ answer+"<br>";
answer = userAge + 10;
output.innerHTML += "In 10 years you will be "+ answer +" years old."+"<br>";
output.innerHTML += "You have "+ pocketMoney +" dollars"+"<br>";
pocketMoney = pocketMoney / 2;
output.innerHTML += "You spend half of your money, now you have $"+ pocketMoney+"<br>";
pocketMoney = pocketMoney + 5;
output.innerHTML += "Then you get $5, now you have $"+ pocketMoney+"<br>";


/****************************
Functions
****************************/