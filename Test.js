console.log("Running test")

const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML = "Hello world!<br>";


/*
    function addParagraph() {
      const content = document.getElementById("content");
      const p = document.createElement("p");
      p.textContent = "New paragraph added at " + new Date().toLocaleTimeString();
      content.appendChild(p);
    }

    window.addEventListener("scroll", () => {
      // Check if user is at the bottom
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (scrolledToBottom) {
        addParagraph();
      }
    });
*/

/****************************
Functions
****************************/
function writeLine(){
  // Add a line to the html page
  OUTPUT.innerHTML += "<p>Less code matters</p>";
}

function displayWelcome(_name){
  OUTPUT.innerHTML += "<p>Welcome to the page "+_name+"</p>";
}


function calculatePay(_hours){
  // The pay calculation is complex
  // so we hide it in a function
  let pay = _hours * 18.80; // Training wage
  pay = pay - (pay * 0.105);// tax deduction
  pay = pay - (pay * 0.04); // kiwisaver
  pay = pay + 10; // bonus
  return pay;
}


function displayWelcome(_name, _age){
  OUTPUT.innerHTML += "<p>Welcome to the page "+_name+"</p>";
  OUTPUT.innerHTML += "<p>You are "+_age+" years old</p>";
}
function start(){
let mondayPay = calculatePay(8);
let tuesdayPay = calculatePay(6);

OUTPUT.innerHTML += "This week's pay:<br>"
OUTPUT.innerHTML += "Monday: $"+mondayPay+"<br>";
OUTPUT.innerHTML += "Tuesday: $"+tuesdayPay+"<br>";
displayWelcome("Mr Bob");

let userName = "Ms Alice"
displayWelcome("Ms Alice", 16);
let name = "Ms Alice";
let age = 16;
let isAwake = true;




let userAge = 16;
}
function getFormInput(){
  const FORM_NAME_FIELD = document.getElementById("userName");
  let userName = FORM_NAME_FIELD.value;
  OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";

  const FORM_AGE_FIELD = document.getElementById("userAge");
  let userAge = FORM_AGE_FIELD.value;
    OUTPUT.innerHTML += "<p>You are "+userAge+" years old</p>";
    userAge = Number(userAge) +3;
    OUTPUT.innerHTML += "<p>You are "+userAge+" years old</p>";



  const FORM_CHOOSE_FIELD = document.getElementById("choose");

let classArray = ["Alice", "Bob", "Kaia", "Olivia", "Aroha", "Josh"];

let choice = FORM_CHOOSE_FIELD.value;

OUTPUT.innerHTML = "You chose: "+classArray[choice]+"<br>";

// Bye bye Olivia
classArray.splice(3,1); //removes 1 item at index 3

for(let i=0; i<classArray.length; i++){
  output.innerHTML += "Person "+ i +": "+classArray[i]+"<br>";
}
//fruits.splice(2, 1);

output.innerHTML += "<br><br><br>";
}
  console.log()
  console.log("=-=-=-=-=-")


//Counting down
for(let i=10; i>=0; i--){
  console.log("Current count: "+i);
}
  console.log()
  console.log("=-=-=-=-=-")


//Skip counting in threes
for(let i=0; i<=30; i=i+3){
  console.log("Current count: "+i);
}
  console.log("=-=-=-=-=-")
  console.log()

//counting from -25 to 50 in 5s
for(let i=-25; i<=50; i=i+5){
  console.log("Current count: "+i);
}

/****************************
Main Code



const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML += "<p>First Paragraph line.</p>";
OUTPUT.innerHTML += "<p>Second Paragraph line.</p>";
OUTPUT.innerHTML += "<p>Third Paragraph line.</p>";

OUTPUT.innerHTML += "<img src='cute_cat.jpg' alt='A cute cat'>";
****************************/

var user = {
  name: "Mr Bob",
  age: 99
}

console.log("User name: "+user.name);

user.age = 15;

var users = [
  {
    name: "Mr Bob",
    age: 99
  },
  {
    name: "Ms Alice",
    age: 16
  },
  {
    name: "Kaia",
    age: 15
  }
]

users.push({
  name: "Olivia",
  age: 15
})

console.log(users[1].name);

users[2].age = 14;

for(let i=0; i<users.length; i++){
  console.log("User "+i+" is "+users[i].name+" and is "+users[i].age+" years old.");
}