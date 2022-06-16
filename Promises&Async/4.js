// Create a function in utils.js that will return a promise
// Function will accept 2 parameters (name,quantity)
// Within function create a for loop that with check given name of item and quantity is available in our store
// Handle if the given item name doesn't exist in our inventory
// Handle if given item is in our store and we have right amount of quantity
// Handle if given item is in our store and we dont have right amount of quantity

//In this file create a function that calls 5 promises at same time with different values in parameters

const utils = require("./utils.js");
async function check() {
  const item = utils.checkStore("pants", 50);
  const item1 = utils.checkStore("sunglasses", 30);
  const item2 = utils.checkStore("jacket", 25);
  const item3 = utils.checkStore("t-shirt", 30);
  return await Promise.all([item, item1, item2, item3]);
}
async function start() {
  try {
    const result = await check();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
start();