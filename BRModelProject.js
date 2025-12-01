var order = [];
var name = "";
// The current menu arrays
// To add an item or change a price you only need to add it to the array
/*
const MENU = [
  { item: 'Satay Chicken', price: 12.90 },
  { item: 'Hokkien Mee', price: 12.90 },
  { item: 'Fried Kuai Teow', price: 12.90 },
  { item: 'Combination Noodles', price: 13.90 },
]
  */
const MENU_NAMES = [
  'Satay Chicken',
  'Hokkien Mee',
  'Fried Kuai Teow',
  'Combination Noodles',
  'poop'
]
const MENU_PRICES = [
  12.90,
  12.90,
  12.90,
  13.90,
  2
]

// Connect to the HTML elements we will need later
const MENU_DISPLAY = document.getElementById("menuDisplay");
const RECEIPT_DISPLAY = document.getElementById("receiptDisplay");
const MENU_CHOICE = document.getElementById("menuChoice");
const CASH_INPUT = document.getElementById("cashField");
const NAME_INPUT = document.getElementById("nameField");
const ORDER_FORM = document.getElementById("placeOrderForm");

// Display the menu from the menu array
displayMenu();
function displayMenu() {

  MENU_DISPLAY.innerHTML = "";
  // With Objects
  /*
    for (i = 0; i < MENU.length; i++) {
  MENU_DISPLAY.innerHTML += i + " - " + MENU[i].item + " $" + MENU[i].price + "<br>";
  }
  */
  // With arrays
  for (i = 0; i < MENU_NAMES.length; i++) {
    MENU_DISPLAY.innerHTML += i + " - " + MENU_NAMES[i] + " $" + MENU_PRICES[i] + "<br>";
  }
  // Set the max value for menu choice to the number of items on the array (Could be evidence for Exceeding)
  MENU_CHOICE.max = MENU_NAMES.length - 1;
}

// Place the order
function placeOrder() {

  // If there are no items in the order, warn customer
  if (order.length == 0){
    RECEIPT_DISPLAY.innerHTML += "Please order some food!"
  }else if (ORDER_FORM.checkValidity() === true) {
  // If the form is not valid, do not add to the order
    RECEIPT_DISPLAY.innerHTML = "";
    var total = 0;
    var cash = CASH_INPUT.value;
    var name = NAME_INPUT.value;

    RECEIPT_DISPLAY.innerHTML += "Welcome " + name + " Thanks for your order<br>"

    // go through the order, write the reciept
    // the index of each item is stored in the order array
    // Use this to get the name and price
    for (i = 0; i < order.length; i++) {
      var item = order[i];
      // With Objects
      /*
        RECEIPT_DISPLAY.innerHTML += MENU[item].item + " $" + MENU[item].price + "<br>";
        total += MENU[item].price
       */

      // With Arrays
      RECEIPT_DISPLAY.innerHTML += MENU_NAMES[item] + " $" + MENU_PRICES[item] + "<br>";
      total += MENU_PRICES[item]
    }
    RECEIPT_DISPLAY.innerHTML += "Total: $" + total + "<br>";
    RECEIPT_DISPLAY.innerHTML += "Cash: $" + cash + "<br>";
    var change = cash - total;
    RECEIPT_DISPLAY.innerHTML += "<hr>";

    // Check whether the customer has enough cash. If not, refuse
    if (total > cash) {
      RECEIPT_DISPLAY.innerHTML += "I'm sorry, you don't have enough money. Come back when you're rich."
    } else {
      RECEIPT_DISPLAY.innerHTML += "Change: $" + change + "<br><br><br>";
      RECEIPT_DISPLAY.innerHTML += "Please make another order<br>";
      order = [];
      CASH_INPUT.value = '';
      NAME_INPUT.value = '';
    }
  }
}

//Add an item to the order
function addItem() {
  // Only process the order if the form is valid
  const ITEM_FORM = document.getElementById("addItemForm");
  if (ITEM_FORM.checkValidity() === true) {
    order.push(Number(MENU_CHOICE.value));
    console.log(order)
  }
}