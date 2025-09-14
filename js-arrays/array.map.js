const peoples = [
  { name: 'luis', age: 10 },
  { name: 'mike', age: 20 },
  { name: 'will', age: 45 }
]

const addId = peoples.map((value, k) => ({id: k+1, ...value}))
console.log(addId)
