// Activity 1: Basic Recursion

function calcFactorial(num) {
    if(num == 1)
        return 1

    return num * calcFactorial(num-1)
}
console.log(calcFactorial(5))
console.log(calcFactorial(4))
console.log(calcFactorial(3))

function calcFibonacci(n) {
    if(n == 0)
        return 0
    if(n == 1)
        return 1

    return calcFibonacci(n-1) + calcFibonacci(n-2)
}
console.log(calcFibonacci(5))
console.log(calcFibonacci(6))

// Activity 2: Recursion with Arrays

function calcSum(arr, length, sum) {
    if(length === 1) {
        sum += arr[0]
        return sum
    }

    return arr[length-1] + calcSum(arr, length-1, sum)
}
const arr = [1, 2, 3, 4, 5]
console.log(calcSum(arr, arr.length, 0))

function findMax(arr, length, max) {
    if(length === 1) {
        if(arr[0] > max)
            max = arr[0]
        return max
    }

    if(arr[length-1] > max) 
        max = arr[length-1]

    max = findMax(arr, length-1, max)
    return max
}
console.log(findMax(arr, arr.length, 0))

// Activity 3: String Manipulation with Recursion

function reverseString(str, length, revStr) {
    if(length === 1) {
        revStr += str[0]
        return revStr
    }

    revStr = reverseString(str, length-1, revStr)
    revStr = str[length-1] + revStr 

    return revStr
}
const str = 'anujchauhan' // nahuahcjuna
let revStr = ''
console.log(reverseString(str, str.length, revStr))

function checkPalindrome(str2, length, revStr2) {
    if(length === 1) {
        revStr2 += str2[0]
        return revStr2
    }

    revStr2 = reverseString(str2, length-1, revStr2)
    revStr2 = str2[length-1] + revStr2

    return revStr2
}
const str2 = 'anujchauhan' // nahuahcjuna
let revStr2 = ''
str2 === revStr ? console.log(`The string is palindrome`) : console.log(`The string is not palindrome`)

// Activity 4: Recursive Search

function binarySearch(arr2, key, start, end) {
    if(start > end)
        return -1

    let mid = start + Math.floor((end - start) / 2);

    if(arr2[mid] === key)
        return mid;
    else if(arr2[mid] > key)
        return binarySearch(arr2, key, start, mid-1)
    else
        return binarySearch(arr2, key, mid+1, end)
}

const arr2 = [1, 4, 5, 7, 8, 9]
console.log(binarySearch(arr2, 8, 0, arr2.length-1))

function countOccurrences(arr3, length, target, count) {
    if(length === 1) {
        if(arr3[0] === target)
            count++
        return count
    }

    if(arr3[length-1] === target)
        count += 1

    return countOccurrences(arr3, length-1, target, count)
}

const arr3 = [1, 4, 5, 4, 2, 4, 6, 4]
console.log(countOccurrences(arr3, arr3.length, 4, 0))
console.log(countOccurrences(arr3, arr3.length, 3, 0))



