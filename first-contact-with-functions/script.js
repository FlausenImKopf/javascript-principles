// Welcome Messages for Jane and Marc
function welcomeMsg(name) {
  return "Welcome " + name;
}
console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

// Gross Price Functions
function calcGrossPrice(price, tax) {
  return price * tax + price;
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

//Add Positive Function
function addPositive(num1, num2) {
  return Math.abs(num1) + Math.abs(num2);
}
console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
