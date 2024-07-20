// Activity 1: Template Literals

let name = `Anuj Chauhan`
let age = 57
let str = `My name is ${name} and my age is ${age}`
console.log(str)

let str2 = `This is multi
line
string`
console.log(str2)

// Activity 2: Destructuring

const arr = [1, 2, 3, 4, 5]
const [a, b] = arr
console.log(`First element is ${a} and second element is ${b}`)

const book = {
    title: 'DSA',
    author: 'Anuj Chauhan',
    year: 2019
}
const {title, author} = book
console.log(`The title of book is ${title} and author is ${author}`)

// Activity 3: Spread and Rest Operators

const arr2 = [10, 20, ...arr]
console.log(arr2)

function sum(...theArgs) {
    let total = 0;
    for(const arg of theArgs)
        total += arg

    return total;
}
console.log(sum(1, 2, 3, 4, 5))

// Activity 4: Default Parameter

function product(num1, num2 = 1) {
    return (num1 * num2)
}
console.log(product(20, 5))
console.log(product(20))

// Activity 5: Enhanced Object Literals

let name2 = 'Anuj Chauhan'
let color = 'White'
let age2 = 23
function speak() {
    return `${name2} can speak!!`
}

let obj = {name2, color, age2, speak}
console.log(obj)
console.log(obj.speak())

let name3 = 'Albert Chauhan'
let title2 = 'DSA is Easy'
let price = 569

let book2 = {
    name3,
    title2,
    price
}
console.log(book2)

