// Activity 1: Array Creation and Access

let arr = [1, 2, 3, 4, 5]
console.log(arr)
for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

console.log()
console.log(`First element of array is ${arr[0]} and last element of array is ${arr[arr.length-1]}`)

// Activity 2: Array Methods (Basic)

arr.push(6)
console.log(arr)

arr.pop()
console.log(arr)

arr.shift(arr[0])
console.log(arr)

arr.unshift(1)
console.log(arr)

// Activity 3: Array Methods (Intermediate)

let arr2 = []
arr.map(element => arr2.push(element + element))
console.log(arr2)

const arr3 = arr.filter(element => element % 2 == 0)
console.log(arr3)

const arr4 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(arr4)

// Activity 4: Array Iteration 

console.log()
for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

console.log()
arr.forEach(element => {
    console.log(element)
});

// Activity 5: Multi-dimensional Arrays

console.log()
let newArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(newArray)

newArray.forEach((row) => {
    row.forEach(element => console.log(element))
} )
