// Menu items with prices
const MENU_ITEMS = {
  1: { name: "Satay Chicken", price: 12.90 },
  2: { name: "Hokkien Mee", price: 12.90 },
  3: { name: "Fried Kuai Teow", price: 12.90 },
  4: { name: "Combination Noodles", price: 13.90 }
};

// Order storage
let ORDER = [];

// Get form field references
const NAME_FIELD = document.getElementById("nameField");
const MENU_CHOICE_FIELD = document.getElementById("menuChoiceField");
const QUANTITY_FIELD = document.getElementById("quantityField");
const PAYMENT_FIELD = document.getElementById("paymentField");
const ORDER_LIST_DISPLAY = document.getElementById("orderListDisplay");
const RECEIPT_SECTION = document.getElementById("receiptSection");
const RECEIPT_CONTENT = document.getElementById("receiptContent");

// Add item to order
function addToOrder() {
  const CUSTOMER_NAME = NAME_FIELD.value.trim();
  const MENU_CHOICE = parseInt(MENU_CHOICE_FIELD.value);
  const QUANTITY = parseInt(QUANTITY_FIELD.value);

  // Validation
  if (!CUSTOMER_NAME) {
    alert("Please enter your name");
    return;
  }

  if (!MENU_CHOICE || MENU_CHOICE < 1 || MENU_CHOICE > 4) {
    alert("Please select a valid item (1-4)");
    return;
  }

  if (!QUANTITY || QUANTITY < 1) {
    alert("Please enter a valid quantity");
    return;
  }

  // Get menu item
  const ITEM = MENU_ITEMS[MENU_CHOICE];
  const ITEM_TOTAL = ITEM.price * QUANTITY;

  // Add to order array
  ORDER.push({
    itemNumber: MENU_CHOICE,
    itemName: ITEM.name,
    price: ITEM.price,
    quantity: QUANTITY,
    total: ITEM_TOTAL
  });

  // Update display
  updateOrderDisplay();

  // Clear menu choice and quantity for next item
  MENU_CHOICE_FIELD.value = "";
  QUANTITY_FIELD.value = "1";
}

// Update order display
function updateOrderDisplay() {
  if (ORDER.length === 0) {
    ORDER_LIST_DISPLAY.innerHTML = '<p style="color: #999;">No items added yet</p>';
    return;
  }

  let HTML = "";
  ORDER.forEach((item, index) => {
    HTML += `<div class="order-item">
      <span>${item.itemName} (x${item.quantity})</span>
      <span>$${item.total.toFixed(2)}</span>
    </div>`;
  });

  ORDER_LIST_DISPLAY.innerHTML = HTML;
}

// Calculate order total
function calculateTotal() {
  let TOTAL = 0;
  ORDER.forEach((item) => {
    TOTAL += item.total;
  });
  return TOTAL;
}

// Clear the entire order
function clearOrder() {
  if (ORDER.length === 0) {
    alert("No items to clear");
    return;
  }

  if (confirm("Are you sure you want to clear the entire order?")) {
    ORDER = [];
    updateOrderDisplay();
    RECEIPT_SECTION.classList.remove("show");
  }
}

// Place order and show receipt
function placeOrder() {
  const CUSTOMER_NAME = NAME_FIELD.value.trim();
  const PAYMENT_AMOUNT = parseFloat(PAYMENT_FIELD.value);
  const ORDER_TOTAL = calculateTotal();

  // Validation
  if (!CUSTOMER_NAME) {
    alert("Please enter your name");
    return;
  }

  if (ORDER.length === 0) {
    alert("Please add at least one item to your order");
    return;
  }

  if (!PAYMENT_AMOUNT || PAYMENT_AMOUNT < 0) {
    alert("Please enter a valid payment amount");
    return;
  }

  if (PAYMENT_AMOUNT < ORDER_TOTAL) {
    alert(`Insufficient payment. Total is $${ORDER_TOTAL.toFixed(2)}, but you only paid $${PAYMENT_AMOUNT.toFixed(2)}`);
    return;
  }

  // Generate receipt
  generateReceipt(CUSTOMER_NAME, PAYMENT_AMOUNT, ORDER_TOTAL);

  // Show receipt
  RECEIPT_SECTION.classList.add("show");
}

// Generate receipt HTML
function generateReceipt(CUSTOMER_NAME, PAYMENT_AMOUNT, ORDER_TOTAL) {
  const CURRENT_DATE = new Date();
  const DATE_STRING = CURRENT_DATE.toLocaleDateString();
  const TIME_STRING = CURRENT_DATE.toLocaleTimeString();
  const CHANGE = PAYMENT_AMOUNT - ORDER_TOTAL;

  let RECEIPT_HTML = `
    <div style="margin-bottom: 10px;">
      <div>Date: ${DATE_STRING}</div>
      <div>Time: ${TIME_STRING}</div>
      <div style="border-bottom: 1px solid #333; margin: 10px 0;"></div>
      <div>Customer: ${CUSTOMER_NAME}</div>
      <div style="border-bottom: 1px solid #333; margin: 10px 0;"></div>
    </div>

    <div style="margin-bottom: 10px;">
  `;

  // Add order items
  ORDER.forEach((item) => {
    const LINE_TOTAL = item.price * item.quantity;
    RECEIPT_HTML += `
      <div class="receipt-item">
        <span>${item.itemName}</span>
        <span>$${item.price.toFixed(2)}</span>
      </div>
      <div class="receipt-item" style="padding-left: 20px; color: #666; margin-bottom: 5px;">
        <span>x${item.quantity}</span>
        <span>$${LINE_TOTAL.toFixed(2)}</span>
      </div>
    `;
  });

  RECEIPT_HTML += `
    </div>

    <div class="receipt-total">
      <span>SUBTOTAL:</span>
      <span>$${ORDER_TOTAL.toFixed(2)}</span>
    </div>

    <div class="receipt-item">
      <span>Amount Paid:</span>
      <span>$${PAYMENT_AMOUNT.toFixed(2)}</span>
    </div>

    <div class="receipt-change">
      CHANGE: $${CHANGE.toFixed(2)}
    </div>

    <div style="text-align: center; margin-top: 10px; font-style: italic; color: #666;">
      Thank you for your order!
    </div>
  `;

  RECEIPT_CONTENT.innerHTML = RECEIPT_HTML;
}

// Close receipt
function clearReceipt() {
  RECEIPT_SECTION.classList.remove("show");
  ORDER = [];
  updateOrderDisplay();
  NAME_FIELD.value = "";
  MENU_CHOICE_FIELD.value = "";
  QUANTITY_FIELD.value = "1";
  PAYMENT_FIELD.value = "";
  NAME_FIELD.focus();
}

// Optional: Allow clicking menu items to select them
document.addEventListener("DOMContentLoaded", function () {
  const MENU_ITEMS_LIST = document.getElementById("menuList");
  
  MENU_ITEMS_LIST.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const ITEM_NUMBER = event.target.getAttribute("data-item");
      MENU_CHOICE_FIELD.value = ITEM_NUMBER;
      MENU_CHOICE_FIELD.focus();
    }
  });
});

