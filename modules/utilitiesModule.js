// Define constants
const MAX_VALUE = 100;
const MIN_VALUE = 0;

function formatString(str) {
    return str.trim().toUpperCase();
}

function isEven(num) {
    return num % 2 === 0;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;
}

export { MAX_VALUE, MIN_VALUE, formatString, isEven, generateRandomNumber };
