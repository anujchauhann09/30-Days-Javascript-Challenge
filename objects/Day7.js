// Activity 1: Object Creation and Access

let obj = {
    title: 'JavaScript',
    author: 'Anuj Chauhan',
    year: 2019
}
console.log(obj)

console.log(`${obj.title} by ${obj.author}`)

// Activity 2: Objects Methods

obj.func = () => {
    return `${obj.title} by ${obj.author}`
}
// console.log(obj['func']())
console.log(obj.func())

obj.updateYear = (year) => {
    obj.year = year
}
obj.updateYear(2020)
console.log(obj)

// Activity 3: Nested Objects

let library = {
    name: 'Dun Lbrary',
    address: 'Near Dun ISBT',
    books : [
        {
            title: 'JavaScript',
            author: 'Anuj Chauhan',
            year: 2021,
        }, 
        {
            title: 'LavaScript',
            author: 'Anish Chauhan',
            year: 2024,
        },
    ]
}
console.log(library)

console.log(`Library name is ${library.name} and title of all books are mentioned below: `)
library.books.map(element => console.log(element.title))

// Activity 4: The this keyword

// obj.getInfo = () => {
//     return `The book title is ${this.title} and year is ${this.year}`
// }
// Arrow functions do not have their own 'this' context; they inherit 'this' from the surrounding lexical context, which in this case is the global object. This results in 'this' being undefined inside the arrow function when not in the correct context.

obj.getInfo = function(){
    return `The book title is ${this.title} and year is ${this.year}`
}
console.log(obj.getInfo())

// Activity 5: Object Iteration

library.books.forEach(book => {
    console.log(`Book details :`)

    for(let key in book) {
        if(book.hasOwnProperty(key))
            console.log(`${key}: ${book[key]}`)
        // hasOwnProperty method is used to ensure that only the book's own properties are logged not inherited properties.
    }

    console.log(`------------------------`)
})

library.books.forEach(book => {
    console.log(`Book details :`)
    
    Object.keys(book).forEach(key => {
        console.log(`${key}: ${book[key]}`)
    })

    console.log(`------------------------`)
})

library.books.forEach(book => {
    console.log(`Book details :`)
    
    Object.values(book).forEach(value => {
        console.log(`${value}`)
    })

    console.log(`------------------------`)
})
