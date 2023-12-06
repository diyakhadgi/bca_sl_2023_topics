// defining array
let places = ["Kathmandu", "Lalitpur", "Pokhara", "Butwal"]
const gender = ["Male", "Female", "Others"]

// accessing array elements with indexing
console.log(places[0])
console.log(places[1])
console.log(places[3])
console.log(gender[2])

// since array is an object so we can define it using array()
let lakes = new Array("Phewa", "Begnas", "Rara", "Tilicho")
console.log(lakes)

//array properties and methods
// properties

// length - return length of an array
console.log(places.length)
console.log(gender.length)
console.log(lakes.length)

// methods
// 1. push - append an element in an Array
// example
let days = ["Sunday", "Monday"]
console.log(days)
days.push("Tuesday")
console.log(days)
days.push("Wednesday")
console.log(days)

// 2. pop - removes last index element from an array
let capital = ["Kathmandu", "New Delhi", "Beijing", "Dhaka"]
console.log(capital)
capital.pop  

// 3. shift() - removes element of first index
let movies = ["Animal", "The marvels", "Barbie", "dimag kharab", "batman"]
movies.shift()
console.log(movies)

// unshift() - add an Element at the beginning of the array 

movies.unshift("Hello")
console.log(movies)