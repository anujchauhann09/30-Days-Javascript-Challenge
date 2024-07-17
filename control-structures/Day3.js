// Activity 1: If-Else Statements

function checkSign(num) {
    if(num > 0)
        console.log(`${num} is positive`)
    else if(num < 0)
        console.log(`${num} is negative`)
    else
    console.log(`${num} is zero`)
}
checkSign(19)

function checkEligibility(age) {
    if(age >= 18) 
        console.log(`You are eligible to vote`)
    else
        console.log(`You are not eligible to vote`)
}
checkEligibility(19)

// Activity 2: Nested If-Else Statements

function checkLargest(num1, num2, num3) {
    if(num1 > num2) {
        if(num1 > num3)
            console.log(`${num1} is largest number`)
        else 
            console.log(`${num3} is largest number`)
    }
    else {
        if(num2 > num3) 
            console.log(`${num2} is largest number`)
        else
            console.log(`${num3} is largest number`)
    }
}
checkLargest(19, 20, 21)

// Activity 3: Switch Case

const userInput = 2 // Assuming 2

switch (userInput) {
    case 1:
        console.log(`Monday`)
        break;
    case 2:
        console.log(`Tuesday`)
        break;
    case 3:
        console.log(`Wednesday`)
        break;
    case 4:
        console.log(`Thursday`)
        break;
    case 5:
        console.log(`Friday`)
        break;
    case 6:
        console.log(`Saturday`)
        break;
    case 7:
        console.log(`Sunday`)
        break;
    default:
        console.log(`Enter a valid number!!!`)
        break;
}

const userScore = 67
let grade = null

switch(true) {
    case (userScore > 85 && userScore <= 100):
        grade = 'A'
        break;
    case (userScore > 75 && userScore <= 85):
        grade = 'B'
        break;
    case (userScore > 60 && userScore <= 75):
        grade = 'C'
        break;
    case (userScore > 45 && userScore <= 60):
        grade = 'D'
        break;
    case (userScore < 45):
        grade = 'F'
        break;
    default: 
        console.log(`Enter a valid score!!!`)
}
console.log(`Your grade is ${grade}`)

// Activity 4: Conditional (Ternary) Operator

12 & 1 ? console.log(`Number is odd`) : console.log(`Number is even`)

// Activity 5: Combining Conditions

const year = 2016 

if(year % 4 == 0) {
    if(year % 100 != 0 || year % 400 == 0)
        console.log(`${year} is a leap year`)
    else
        console.log(`${year} is not a leap year`)
}
else 
    console.log(`${year} is not a leap year`)
