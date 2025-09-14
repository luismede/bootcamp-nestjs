// Default, deafult functions make it possible for it to occur 'hoisting'
console.log(`Wow, now i'm inside the hoisting: ${sayHello()}`)
function sayHello() {
  const message = 'This is a default function';
  return `Hello! ${message}`;
}
console.log(sayHello());

// Function express
const returnAplus2 = function (a) {
  return a + 2;
}
console.log(returnAplus2(2))

function mathOperationWithFunctionExpress (a) {
  const numbers = [1, 2, 3, 4];
  let sum = 0;
  for (number of numbers) {
    sum += a + number;
  }
  return sum;
}

console.log('Now, I used the function express as a parameter for my operations function: ' + mathOperationWithFunctionExpress(returnAplus2(2)));

// Arrow function
const isEven = (number) => number % 2 == 0;


console.log(`Return if number is even or not with a array funcion: ${isEven(3)}`); // Expected return: false

