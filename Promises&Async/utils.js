const calculate = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      reject("Values should be number");
      return;
    }

    setTimeout(() => {
      resolve(num1 + num2);
    }, randomDelay());
  });
};

const decrease = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      reject("Values should be number");
      return;
    }
    setTimeout(() => {
      resolve(num1 - num2);
    }, randomDelay());
  });
};

const randomDelay = () => {
  return Math.floor(Math.random() * 3210);
};

const store = [
  { name: "pants", qty: 142 },
  { name: "sunglasses", qty: 73 },
  { name: "jacket", qty: 25 },
  { name: "t-shirt", qty: 98 },
];
function checkStore(name, quantity) {
  return new Promise((resolve, reject) => {
    for (const item of store) {
      if (item.name === name) {
        if (item.qty >= quantity) {
          resolve(`${name} is available!`);
        }
        reject(`The maximum amount you can order is ${item.qty}`);
      }
    }
    reject(`We don't have a product called ${name}`);
  });
}
module.exports = { calculate, randomDelay, checkStore };
