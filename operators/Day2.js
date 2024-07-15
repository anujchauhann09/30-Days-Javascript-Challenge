// Activity 1: Arithmetic Operations

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2)
    // return num1 + num2
}
addTwoNumbers(19, 19)

function subTwoNumbers(num1, num2) {
    console.log(num1 - num2)
    // return num1 - num2
}
subTwoNumbers(19, 19)
function mulTwoNumbers(num1, num2) {
    console.log(num1 * num2)
    // return num1 * num2
}
mulTwoNumbers(19, 19)

function divTwoNumbers(num1, num2) {
    console.log(num1 / num2)
    // return num1 / num2
}
divTwoNumbers(19, 19)

function remOfTwoNumbers(num1, num2) {
    console.log(num1 % num2)
    // return num1 % num2
}
remOfTwoNumbers(19, 19)

// Activity 2: Assignment Operators

let num1 = 20
num1 += 20
console.log(num1)

let num2 = 20
num2 -= 20
console.log(num2)

// Activity 3: Comparision Operators

function compTwoNumbers(num1, num2) {
    /*
    if(num1 > num2)
        console.log(`${num1} is greater than ${num2}`)
    else
        console.log(`${num2} is greater than ${num1}`)
    */

    num1 > num2 ? console.log(`${num1} is greater than ${num2}`): console.log(`${num2} is greater than ${num1}`)
}
compTwoNumbers(20, 21)

function compTwoNumbers2(num1, num2) {
    /*
    if(num1 >= num2)
        console.log(`${num1} is greater than or equal to ${num2}`)
    else
        console.log(`${num2} is greater than or equal to ${num1}`)
    */

    num1 > num2 ? console.log(`${num1} is greater than or equal to ${num2}`): console.log(`${num2} is greater than or equal to ${num1}`)
}
compTwoNumbers2(20, 20)

function compTwoNumbers3(num1, num2) {
    if(num1 == num2)
        console.log(`${num1} is equal to ${num2} but both data is of different type`)
    if(num1 === num2)
        console.log(`${num1} is equal to ${num2} but both data is of same type`)
}
compTwoNumbers3(20, '20')
compTwoNumbers3(20, 20)

// Activity 4: Logical Operators

if((10 > 9) && (9 < 10))
    console.log(`In && operator, all conditions should be true`)

if((10 > 9) || (11 < 10))
    console.log(`In || operator, any one conditions should be true`)

if((10 > 9) && !(11 < 10))
    console.log(`! operator use to make true->false or false->true`)

// Activity 5: Ternary Operator

19 < 0 ? console.log(`Number is negative`) : console.log(`Number is positive`)

// Feature Request:

// 1. Arithmetic Operations Script

const userInput = `+` // Assuming user wants to do addition

switch (userInput) {
    case `+`:
        // can take input/numbers from user, but below I am taking by myself 
        console.log(19 + 20)
        break;
    case `-`:
        // can take input/numbers from user, but below I am taking by myself 
        console.log(19 - 20)
        break;
    case `*`:
        // can take input/numbers from user, but below I am taking by myself 
        console.log(19 * 20)
        break;
    case `/`:
        // can take input/numbers from user, but below I am taking by myself 
        console.log(19 / 20)
        break;
    default:
        console.log(`Invalid Input, Please enter valid input!!!`)
        break;
}

// 2. Comparision and Logical Operators Script

function compTwoNumbers4(num1, num2) {
    if((num1 > num2) && (num2 < num1))
        console.log(`${num1} is greater than ${num2}`)

    if((num1 >= num2) || (num2 <= num1))
        console.log(`${num1} is greater than or equal to ${num2}`)

    if((num1 === num2) || !(num1 == num2))
        console.log(`${num1} is equal to ${num2}`)
}
compTwoNumbers4(32, 23)
compTwoNumbers4(23, 23)
compTwoNumbers4(23, '23')

// 3. Ternary Operator Script

function checkSign(num) {
    num < 0 ? console.log(`${num} is negative`) : console.log(`${num} is positive`)
}
checkSign(-2)
checkSign(2)