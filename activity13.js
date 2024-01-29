document.addEventListener(`DOMContentLoaded`, function() {
  fetch(`coffee.json`)
  .then((response) => response.json())
  .then((cofeemenu) => {
    const Coffee = cofeemenu.Coffee;
    const orderSelect = document.getElementById(`orderSelect`);

    Coffee.forEach((coffee) => {
      const option = document.createElement(`option`);
      option.value = coffee;
      option.text = coffee;
      orderSelect.appendChild(option);
    });
  })
  .catch((erorr) => {
    console.error(`Failed fetching Json Data:`, error);
  })
});


const orderStack = [];
const orderQueue = [];

function placeOrder() {
  const orderSelect = document.getElementById('orderSelect');
  const coffeeSelected = orderSelect.value.trim();

  if (coffeeSelected !== '') {
    orderStack.push(coffeeSelected);
    console.log(`Your ${coffeeSelected} Coffee is placed.`);
    orderSelect.value = '';
    updateOrderDisplay();
  } else {
    console.log(`Your choosen coffee order is not placed. Try Again`);
  }
}

function processOrder() {
  if (orderStack.length > 0) {
    const processedOrder = orderStack.pop();
    console.log(`Order Processed: ${processedOrder}\nThank You for Ordering!`);
    orderQueue.unshift(processedOrder);
    updateOrderDisplay();
  } else {
    console.log(`No pending orders to process`);
  }
}

function updateOrderDisplay() {
  const orderStackContainer = document.getElementById('orderStack');
  const orderQueueContainer = document.getElementById('orderQueue');

  orderStackContainer.innerHTML = `<strong>Order Stack (Last In, First Out):</strong><br>${orderStack.join(
    '<br>'
  )}`;
  orderQueueContainer.innerHTML = `<strong>Order Queue (First In, First Out):</strong><br>${orderQueue.join(
    '<br>'
  )}`;
}

// Initial update
updateOrderDisplay();



