// Activity 1: Variable Declaration

var number = 19
console.log(number)

let str = 'Hey there, I am using Github'
console.log(str)

// Activity 2: Constant Declaration

const flag = true;
console.log(flag)

// Activity 3: Data Types

let num = 16
let str2 = 'Anuj Chauhan'
let flag2 = false
let obj = {
    name: "xyz",
    email: "xyz@gmail.com"
}
let arr = [1,3,4,5,1]
console.log(typeof(num))
console.log(typeof(str2))
console.log(typeof(flag2))
console.log(typeof(obj))
console.log(typeof(arr))

// Activity 4: Reassigning Variables

let variable = 20
console.log(variable)
variable = 30
console.log(variable)

// Activity 5: Understanding const

try {
    const value = 32
    value = 39
    console.log(value)
} catch (error) {
    console.log(error)
}

// Feature Request

// 1) Variable Types Console Log

let num2 = 16
let str3 = 'Anuj Chauhan'
let flag3 = false
let obj2 = {
    name: "xyz",
    email: "xyz@gmail.com"
}
let arr2 = [1,3,4,5,1]
console.log(`Value is ${num2} and Type of ${num2} is ${typeof(num)}`)
console.log(`Value is ${str3} and Type of ${str3} is ${typeof(str3)}`)
console.log(`Value is ${flag3} and Type of ${flag3} is ${typeof(flag3)}`)
console.log(`Value is ${JSON.stringify(obj2)} and Type of ${obj2} is ${typeof(obj2)}`)
console.log(`Value is ${arr2} and Type of ${arr2} is ${typeof(arr2)}`)

// 2) Reassignment Demo

let demoOfLet = 'Let Value'
console.log(demoOfLet)
const demoOfConst = 'Const Value'
console.log(demoOfConst)
demoOfLet = 'Reassigning Let Value'
console.log(demoOfLet)
try {
    demoOfConst = 'Reassigning Const Value'
    console.log(demoOfConst)
} catch (error) {
    console.log('Cant Reassign Value in Constant Variable')
}