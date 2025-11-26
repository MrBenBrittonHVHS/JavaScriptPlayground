console.log("Running test")

const output = document.getElementById("JavaScriptOutput");
output.innerHTML = "Hello world!<br>";


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
  output.innerHTML += "<p>Less code matters</p>";
}

function displayWelcome(_name){
  output.innerHTML += "<p>Welcome to the page "+_name+"</p>";
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
  output.innerHTML += "<p>Welcome to the page "+_name+"</p>";
  output.innerHTML += "<p>You are "+_age+" years old</p>";
}
function start(){
let mondayPay = calculatePay(8);
let tuesdayPay = calculatePay(6);

output.innerHTML += "This week's pay:<br>"
output.innerHTML += "Monday: $"+mondayPay+"<br>";
output.innerHTML += "Tuesday: $"+tuesdayPay+"<br>";
displayWelcome("Mr Bob");

let userName = "Ms Alice"
displayWelcome("Ms Alice", 16);
let name = "Ms Alice";
let age = 16;
let isAwake = true;




let userAge = 16;
}
function getFormInput(){
  const formNameField = document.getElementById("userName");
  let userName = formNameField.value;
  output.innerHTML = "<p>Your name is "+userName+"</p>";
  const formAgeField = document.getElementById("userAge");
  let userAge = formAgeField.value;
    output.innerHTML += "<p>You are "+userAge+" years old</p>";
    userAge = Number(userAge) +3;
    output.innerHTML += "<p>You are "+userAge+" years old</p>";



  const formChooseField = document.getElementById("choose");

let classArray = ["Alice", "Bob", "Kaia", "Olivia", "Aroha", "Josh"];
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
****************************/
