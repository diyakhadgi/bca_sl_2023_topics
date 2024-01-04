// DOM - Element 
// getElementById() - we can access HTML element by attribute i.e id
// example
const title = document.getElementById("title")
const content = document.getElementById("content") 
const button = document.getElementById("button") 

// changing HTML Content
title.innerHTML = "HTML DOM - JS"
content.innerHTML = "JS DOM | HTML Element property"

// here innerHTML property is use to manipulate data inside
// HTML Element

// style property
button.style.color = "cadetblue"
button.style.fontFamily = "monospace"
button.style.backgroundColor = "black"
button.style.border = "0"
button.style.cursor = "pointer"
button.style.padding = "5px"
button.style.boxShadow = "1px"
button.style.borderRadius = "25px"

// classList property
// add() and remove() method
button.classList.add("button")