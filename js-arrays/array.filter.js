const arrayNumbers = [50, 40, 24, 5, 6, 2, 10, 11, 91];

const arrayNumberByFilter = arrayNumbers.filter(value => value > 10);
console.log(arrayNumberByFilter)

const printInterateOfArrayNumberByFilter =arrayNumbers.filter((value, index, array) => {
  console.log(`value: ${value}, index: ${index} and Array: ${array}`)
  return value > 10;
}) 

console.log(printInterateOfArrayNumberByFilter)
