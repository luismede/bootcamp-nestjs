const pi = Math.PI;

// 1. Function Declaration
function calculateArea1(radius) {
  return pi * radius**2;
}

// 2. Function express
const calculateArea2 = function (radius)  {
  return pi * radius**2;
}

// 3. Arrow Function
const calculateArea3 = (radius) => pi * radius**2;


console.log(`calculateArea1: ${calculateArea1(2).toFixed(2)};
calculateArea1(2)}`);
console.log(`calculateArea2: ${calculateArea2(3).toFixed(2) }` );
console.log(`calculateArea3: ${calculateArea3(1).toFixed(2) }`);

// pi * radius²
