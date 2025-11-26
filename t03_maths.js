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

console.log("Hi "+userName);
console.log("As of "+ currentYear +", you are "+ userAge +" years old.");
answer = currentYear - userAge;
console.log("You were born in "+ answer);
answer = userAge + 10;
console.log("In 10 years you will be "+ answer +" years old.");
console.log("You have "+ pocketMoney +" dollars");
pocketMoney = pocketMoney / 2;
console.log("You spend half of your money, now you have $"+ pocketMoney);
pocketMoney = pocketMoney + 5;
console.log("Then you get $5, now you have $"+ pocketMoney);


/****************************
Functions
****************************/