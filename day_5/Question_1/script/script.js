expense = [700, 1000, 2000, 1500]
income = [30000, 3000, 300]

const tds = 0.01

// Total Income
let totalincome = income.reduce((acc, curr) => acc + curr)
console.log("Total income " +totalincome)


// TDS value calculated
const tdsvalue = calTDS(income)
function calTDS(total) {
    const sum = total.reduce((acc, curr) => acc + curr)
    return sum * tds
}
console.log("total tds of total income " + tdsvalue)

// Remaining income after TDS
let remaining = totalincome - tdsvalue
console.log("Income after tds is deduceted: " +remaining)

const PF = 0.10
// PF calculated 
function calPF(remaining){    
    return remaining * PF
}
const pfValue = calPF(remaining)
console.log("Total PF of remaning income " +pfValue)

// Income after PF deducted
const afterpf = remaining - pfValue
console.log("Total INcome after deducting PF " +afterpf)

let totalexp = expense.reduce((acc,curr)=>acc + curr)
console.log("Total expense: " +totalexp)

const afterexp = afterpf - totalexp
console.log("Total income after expense "+afterexp)