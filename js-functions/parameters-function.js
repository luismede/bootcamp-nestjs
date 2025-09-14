function testingArguments(a, b) {
  let total = 0;
  console.log(arguments)
  for (const argument in arguments) {
    console.log(arguments[argument]);
    total += arguments[argument];
  }
  console.log('Total: ' + total);
}

testingArguments(1,2,3,4,5)

function testingArguments2(a,b,c,d,e) {
  console.log(arguments);
  console.log('Parameter d and e: ', d,e);
}
testingArguments2(1,2,3);

function testinArguments3(a,b, c = 2) {
  // Depreceated mode define a deafult argument:
  // b = b || 0;
  return a + b + c;
}
console.log('Testing Arguments 3: ', testinArguments3(2, 3)); // Expected result: NaN, 2 + undefined || a + b + c (2) = result´

function spreadObj({ name, age, isMember }) {
  console.log(name, age, isMember);
}

spreadObj({ name: 'Mike', age: 13, isMember: true })

function spreadObjWithData(...data) { 
  console.log(data)
}

spreadObj({name: 'Will', age: 19, isMember: false })

function spreadArray([...data]) {
  let sum = 0;
  for (const item of data) {
    sum += item + 1;
  }
  return sum
}
console.log('Spread Array: ',  spreadArray([1,2,3]))

// Using rest operator (...)
const mathOperations = function (op, acumulator, ...data) {
  for (const item of data) {
      if (op == '+') acumulator += item;
      else if (op == '-') acumulator -= item;
      else if (op == '/') acumulator /= item;
      else if (op == '*') acumulator *= item;
      else 'Sorry! This operator is not available.'

    }
  return acumulator;
}

console.log(mathOperations('*', 1, 1,2,3,4,5))
