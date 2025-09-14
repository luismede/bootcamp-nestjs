const peoples = [
  { name: 'luis', age: 10 },
  { name: 'mike', age: 20 },
  { name: 'will', age: 45 }
]

const avgAge = peoples.reduce((acumultator, value) => {
  return acumultator += value.age;
}, 0) / peoples.length;

console.log(avgAge)

const sumAge = peoples.reduce((acumultator, value) => {
  return acumultator += value.age;
}, 0)
console.log(sumAge)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumNumbersIfIsEven = numbers.reduce((acumultator, value) => {
  if (value % 2 == 0) acumultator += value;
  return acumultator;
}, 0)
console.log(sumNumbersIfIsEven)

const old = peoples.reduce((acumultator, value) => {
  if (acumultator.age> value.age) return acumultator;
  return value;
})

console.log(old)
