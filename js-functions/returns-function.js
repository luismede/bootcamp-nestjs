// Return
function sayPhrase(start) {
  function sayRest(rest) {
    return start + ' ' + rest;
  }
  return sayRest;
}

const say = sayPhrase('Olá');
console.log(say('Mundo!'))

function createMulti(m) {
  return function(n) {
    return n * m;
  }
}

const duplicate = createMulti(2);
console.log(duplicate(3)); // Expected result: 6
