// defining elements
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const passkey = document.getElementById("passkey");
const errorMsg = document.getElementById("errorMsg");
const showForm = document.getElementById("showForm");

// defining button
const btnReg = document.getElementById("btnReg");

// adding event listner to button
// btnReg.addEventListener("click", function () {
//     console.log("data submitted")
// })

// submit event 
btnReg.addEventListener("click", function (event) {
    if (firstname.value === "" || lastname.value === "" ||
        username.value === "" || passkey.value === "") {
        event.preventDefault()
        errorMsg.innerHTML = "All fields are required"
    }
})

// user submit event on form 
regForm.addEventListener("submit", (event) => {
    console.log("Form is submitted")
})

// arrow function example
// shorter form of function

// ordinary function 
function showMessage() {
    return "Hello! How are you?"
}

// arrow function 
const msg = () => {
    return "Hello! How are you?"
}

// displaying form with event and hidden property
// of element
// showForm.addEventListener("click", () => {
//     regForm.hidden = false
// })

// to toggle form 
showForm.addEventListener("click", () => {
    regForm.hidden = !regForm.hidden
})
