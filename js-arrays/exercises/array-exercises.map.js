const peoples = [
  { name: 'luis', age: 10 },
  { name: 'mike', age: 20 },
  { name: 'will', age: 45 }
]

const names = peoples.map(value => value.name);
const removeKeyName = peoples.map((value) => { 
  delete value.name 
  return value
} )

const removeKeyName2 = peoples.map(value => ({ age: value.age}) )


// Name return undefined because we use map for remove the key name
const addId = peoples.map((value, index) => ({id: index, ...value}))

console.log(addId)
console.log(removeKeyName)
console.log(removeKeyName2)
console.log("Names: ", names);
console.log(peoples)


