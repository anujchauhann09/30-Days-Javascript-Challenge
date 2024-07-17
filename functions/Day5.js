// Activity 5: Function Declaration

function checkEvenOdd(num) {
    num & 1 ? console.log(`${num} is odd`) : console.lofg(`${num} is even`)
}
checkEvenOdd(13)

function calcSquare(num) {
    return (num * num)
}
console.log(calcSquare(12))

// Activity 2: Function Expression

function findMax(num1, num2) {
    num1 > num2 ? console.log(`{num1} is maximum`) : console.log(`${num2} is maximum`)
}
findMax(12, 14)

function concatenateString(str1, str2) {
    return (str1 + str2)
}
console.log(concatenateString('anuj ', 'chauhan'))

// Activity 3: Arrow Functions

const sum = (num1, num2) => ((num1 + num2))
console.log(sum(13, 12))

const checkChar = (str, char) => {
    for(let i = 0; i < str.length; i++) {
        if(str[i] == char)
            return true
    }
    return false
}
checkChar('anuj', 'o') ? console.log(`Yes, It contain a specific character`) : console.log(`No, It doesn't contain a specific character`)

// Activity 4: Function Parameters and Default Values

const product = (num1, num2 = 12) => {
    return (num1 * num2)
}
console.log(product(12))

const person = (name, age = 69) => {
    return `Hello ${name}, even you are ${age} but you are aging like wine fine`
}
console.log(person('anuj'))

// Activity 5: Higher-Order Functions

function callFunctionNTimes(fn, n) {
    for(let i = 1; i <= n; i++)
        fn()
}
const sayNamaste = () => console.log(`Namaste`)
callFunctionNTimes(sayNamaste, 5)

function composeFunctions(fn1, fn2, value) {
    const firstResult = fn1(value)
    const finalResult = fn2(firstResult)
    return finalResult
}
const add = x => x + 8
const sub = x => x - 10
const result = composeFunctions(add, sub, 18)
console.log(result) 