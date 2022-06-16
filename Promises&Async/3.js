// Given function should be converted to Async/Await
// Should have handled error and success

const utils = require("./utils.js");

// utils
//   .calculate(1, 2)
//   .then((result1) => {
//     return utils.decrease(result1, 2);
//   })
//   .then((result2) => {
//     console.log(result2);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function calculate() {
  try {
    const mbledhja = await utils.calculate(2, 3);
    const result = await utils.decrease(mbledhja, 3);
    console.log(result);
    return;
  } catch (err) {
    console.log(err);
  }
}
calculate();
