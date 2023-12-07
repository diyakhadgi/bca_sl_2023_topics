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

// 5. splice() - add and /or remove element from specified index 
let languages = ["Java", "Javascript", "Php"]

// this method takes 3 arguments 
// 1st - position 
// 2nd - number elements want to remove
// 3rd - elements can be more than one 

// to add element - set 2nd argument 
console.log(languages)
languages.splice(1, 0, "python") // 0 doesnt remove anything

// to remove element - set 2nd argument greater than 0 
console.log(languages)
languages.splice(1, 2, "dart") // 1 removes python from index 1 and adds dart
console.log(languages)

// 6. slice() - to break array into another piece
console.log("Slice example")
let province = ["Bagmati", "Koshi", "Sudur Paschim", "Karnali"]
let province_two = province.slice(0,3) //index two samma
console.log(province)
console.log(province_two) 

// 7. concat - to merge one or more array without mutating primary
// array 
let group_one = ["red", "blue"] 
let group_two = ["green", "yellow"] 
let groups = group_one.concat(group_two)
console.log(groups)

// 8.flat() - converts multi-dimensional array to single flat array
let cities = [["KTM","POKHARA"],["BUTWAL","HETAUDA","JHAPA"]]
let cities_nepal = cities.flat()
console.log(cities)
