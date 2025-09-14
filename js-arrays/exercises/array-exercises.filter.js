// Retorne os usuarios que tem o nome com 5 letras ou mais
// Retorne os usuarios com mais de 50 anos
// Retone o usuario cujo o nome termina com a
const arrayWithUsers = [
  {name: "luis", age: 15},
  {name: "marcos", age: 55},
  {name: "rubi", age: 32},
  {name: "matheus", age: 19},
  {name: "kleber", age: 61},
  {name: "maria", age: 74}
]

const usersByNameOverFive = arrayWithUsers.filter((value) => value.name.length >= 5);
const usersByAgeOverFifty = arrayWithUsers.filter((value) => value.age > 50);
const usersByEndLetter = arrayWithUsers.filter((value) => value.name.endsWith('a'));

console.log("Array with users: ", arrayWithUsers)
console.log("Users with name over five letters: ", usersByNameOverFive)
console.log("Users with age over fifty years old: ", usersByAgeOverFifty)
console.log("Users with name ending with the letter 'a': ", usersByEndLetter)

