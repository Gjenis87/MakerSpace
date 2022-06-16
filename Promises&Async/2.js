// Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is 1, return a promise rejected 2 seconds later and give the data "not zero" (in a string)
// If data is 1, return a promise rejected 2 seconds later and give the data "not zero" (in a string)
// If data is not 0 or 1, return a promise rejected instantly and give the data "not zero or one" (in a string)

function det2(data) {
  return new Promise((resolve, reject) => {
    if (typeof data !== "number") {
      reject("error");
      return;
    }
    if (data === 0) {
      setTimeout(() => {
        reject("zero");
      }, 1000);
      return;
    }
    if (data === 1) {
      setTimeout(() => {
        reject("not zero");
      }, 2000);
      return;
    }
    reject("not zero or one");
  });
}

det2(1)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
