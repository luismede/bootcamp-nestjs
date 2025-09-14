const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20]

// 1
const sum = numbers.reduce((acumulator, value) => acumulator+= value)
console.log(sum)

// 2
const evens = numbers.filter(value => value % 2 == 0)
console.log(evens)

// 3
const double = numbers.map(value => value * 2)
console.log(double) 
