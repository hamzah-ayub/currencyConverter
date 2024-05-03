#! /usr/bin/env/ node

import inquirer from "inquirer"

const currency: any = {
    USD : 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
}

let data = await inquirer.prompt([
    {
        message: "Enter currency you want to convert: ",
        type: "list",
        name: "first_currency",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },

    {
        message: "Enter amount: ",
        type: "number",
        name: "amount"
    },

    {
        message: "Enter currency you want to convert to: ",
        type: "list",
        name: "second_currency",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']

    },
])

// console.log(data)

let fromAmount = currency[data.first_currency]
let toAmount = currency[data.second_currency]
let amount = data.amount


let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

// console.log(`fromAmount: ${fromAmount}`)
// console.log(`toAmount: ${toAmount}`)
// console.log(`amount: ${amount}`)
// console.log(`baseAmount: ${baseAmount}`)
console.log(`Converted Amount: ${convertedAmount}`)