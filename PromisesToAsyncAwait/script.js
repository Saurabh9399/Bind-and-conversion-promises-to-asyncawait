// promise to async await convert
function myPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("resolved"), 5000);
  });
}

myPromise().then((v) => console.log(v));

async function getValue() {
  const v = await myPromise();
  console.log(v);
}

// array reduce
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// accumulator will collect the sum and
// currentValue will have value of each element at a time.

console.log(sum);
