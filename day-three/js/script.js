// control statement
// if statement
let num_one = 12
let num_two = 23

if (num_one + num_two == 35) {
    console.log("Correct")
    console.log("The result is: " + (num_one + num_two))
}  

if (num_one > num_two) {
    console.log(num_one + "is greater than " + num_two)
}

if (num_one < num_two) {
    console.log(num_one + " is smaller than " + num_two)
}

// if else statement
let country = "Nepal"
let country_code = "NP"

// check type of data
if (typeof(country) == typeof(country_code)) {
    console.log("Same")
} else {
    console.log("Not same")
}

// check value 
if (country === country_code) {
    console.log("only type is match")
}

if (country === "Nepal") {
    console.log("Match")
}

let password = "ashla";
if(typeof password != "string") {
    console.log("Incorrect input");
}

let college_name = "dav"
let college_location = "lalitpur"
if (college_name == "dav" & college_location == "lalitpur") {
    console.log("Correct information")
} else {
    console.log("Incorrect information")
}

let username = "mark"
let pin_code = 1234
if (username == "martin" | pin_code == 1234) {
    console.log("Username or pin invalid")
} else {
    console.log("Invalid credentials")
}

// if else if statement
let marks = 100
if (marks >= 0 & marks <= 39.99) {
    console.log("Fail")
} else if (marks >=40 & marks <= 59.99) {
    console.log("Third division")
} else if(marks >=60 & marks <= 64.99) {
    console.log("Second division")
} else if (marks >=65 & marks <=84.99) {
    console.log("First Division")
} else if( marks >=85 & marks <= 100) {
    console.log("Distinction")
} else if (marks > 100 | marks < 0) {
    console.log("Please enter value between 0-100")
}

let acc_no = "AC-001"
let pin = 5588
let acc_type = "savings"

if (acc_no !== "AC-001") {
    console.log("Welcome to NIC Asia Bank")
        if (pin === 5588) {
            console.log("Have a nice day")
            if (acc_type === "savings") {
                console.log("your account type is: savings")
            } else {
                console.log("Please contact at bank for your account type")
            } 
        } else {
            console.log("Invalid account number or pin code")
        } 
    }
    else {
            console.log("Account not available at the moment")
        }


// switch case
let day_number = 5

switch(day_number) {
    case 1: 
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break

    case 4:
        console.log("Wednesday")
        break
    
    case 5:
        console.log("Thursday")
        break

    case 6:
        console.log("Friday")
        break

    case 7:
        console.log("Saturday")
        break
}

// user type
let usertype = "admin"
switch(usertype) {
    case "admin" :
        //redirect to admin page
        // break
    case "user":
        // user page
        //break

    case "guest":
        // guest page
        //brek 

    default :
    //login page
}