// Create a function that returns a promise.
// The promise must resolve itself 2 seconds after the call to job and must provide hello world on resolve

function returnPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello world");
    }, 2000);
  });
}

function handleSuccess(params) {
  console.log(params);
}

returnPromise().then(handleSuccess);
