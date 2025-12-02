/****************************
Introduction
String Handling
****************************/
console.log("Running t16 validation.js")


/****************************
Variables
****************************/
let userName = "Mr Bob";
let userAge = 15;
let currentYear = 2025;
let pocketMoney = 3;
let answer; // a temporary variable for calculations
let shoppingList = [];
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
    OUTPUT.innerHTML += "Then you get $3, now you have $" + _pocketMoney + "<br>";

    // Decide whether the user can afford a chocolate bar
    if (_pocketMoney >= 4) {
        OUTPUT.innerHTML += "A chocolate bar costs $4<br>You CAN afford a chocolate bar<br>"
    } else {
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

// Task 17 (updated from Task 16, Task 12, task 10, task 9)
// The getFormInput function is called when the "Submit" button is pressed
// It calls the greetUser function with the data from the form to create a personalised message
// But only if the form is valid
function getFormInput() {
    const WELCOME_FORM = document.getElementById("welcomeForm");
    const FORM_NAME_FIELD = document.getElementById("userName");
    userName = FORM_NAME_FIELD.value;
    userName = userName.trim();//Get rid of whitespace around the name
    if (WELCOME_FORM.checkValidity() === false||userName.length<3) {
        OUTPUT.innerHTML = "Please fill out all fields correctly.<br>";
    } else {
        // process the form normally...
        const AGE_FIELD = document.getElementById("userAge");
        userAge = Number(AGE_FIELD.value);

        const MONEY_FIELD = document.getElementById("userMoney");
        userMoney = Number(MONEY_FIELD.value);

        const RATING_FIELD = document.getElementById("chocolateRating");
        userRating = Number(RATING_FIELD.value);

        greetUser(userName, userAge, userMoney, userRating);
    }
}

// Task 16 (updated from Task 13)
// The singSong function is called when the "Sing!" button is pressed
// It gets the number of verses to sing from the form
// But only if the form is valid
function singSong() {
    const SONG_FORM = document.getElementById("songForm");

    if (SONG_FORM.checkValidity() === false) {
        OUTPUT.innerHTML = "Please fill out all fields correctly.<br>";
    } else {
        // process the form normally...
        const VERSES_FIELD = document.getElementById("formVerses");
        let verses = VERSES_FIELD.value;

        //Sing 99 bottles of <age apprpriate beverage> on the wall the number of times specified in the form
        OUTPUT.innerHTML = "";
        for (let i = verses; i > 0; i--) {
            OUTPUT.innerHTML += i + " bottles of &lt;age appropriate beverage&gt; on the wall! <br>";
            OUTPUT.innerHTML += i + " bottles of &lt;age appropriate beverage&gt;!<br>";
            OUTPUT.innerHTML += "Take one down, pass it around, " + (i - 1) + " bottles of &lt;age appropriate beverage&gt; on the wall!<br><br>";
        }
    }
}

// Task 16 (updated from Task 14)
// The addToList function is called when the "Add to List" button is pressed
// It gets the item from the form and adds it to the shopping list array
// But only if the form is valid
function addToList() {
    const SHOPPING_FORM = document.getElementById("shoppingForm");
    if (SHOPPING_FORM.checkValidity() === false) {
        OUTPUT.innerHTML = "Please fill out all fields correctly.<br>";
    } else {
        // process the form normally...
        const SHOPPING_FIELD = document.getElementById("formshopping");
        let itemToAdd = SHOPPING_FIELD.value;
        shoppingList.push(itemToAdd);
        OUTPUT.innerHTML = itemToAdd + " added to the list<br>";
    }
}

// Task 14
// Uses a loop to display all items in the shopping list array
function displayList() {
    OUTPUT.innerHTML = "These are the items on your shopping list:<br>";
    for (let i = 0; i < shoppingList.length; i++) {
        OUTPUT.innerHTML += "- " + shoppingList[i] + "<br>";
    }
}