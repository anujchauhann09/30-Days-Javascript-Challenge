// Activity 1: Understanding Closures

function outerFunc() {
    const name = 'Anuj Chauhan'

    return function innerFunc() {
        return name
    }
}
const innerFunc = outerFunc()
console.log(innerFunc())

function outerCounter() {
    let counter = 0

    return function innerCounter() {
        return (++counter)
    }
}
const innerCounter = outerCounter()
console.log(innerCounter())
console.log(innerCounter())
console.log(innerCounter())

// Activity 2: Practical Closures

function createUniqueIdGenerator() {
    let id = 0

    return function() {
        id++
        return (id)
    }
}
const generateUniqueId = createUniqueIdGenerator()
console.log(generateUniqueId())
console.log(generateUniqueId())
console.log(generateUniqueId())

function user() {
    const userName = 'anuj chauhan'

    return function() {
        return `Good morning ${userName}`
    }
}

const user1 = user()
console.log(user1())

// Activity 4: Closures in Loops

// const functionsArray = [];

// for (var i = 0; i < 5; i++) {
//     (function(index) {
//         functionsArray.push(function() {
//             console.log(index);  
//         });
//     })(i);
// }

// functionsArray.forEach(fn => fn());


const functionsArray = [];

for (let i = 0; i < 5; i++) {
    functionsArray.push(function() {
        console.log(i); 
    });
}

functionsArray.forEach(fn => fn());

// Activity 4: Module Pattern

function createItemManager() {
    let items = [];

    function addItem(item) {
        items.push(item);
    }

    function removeItem(item) {
        items = items.filter(existingItem => existingItem !== item);
    }

    function listItems() {
        return items.slice();  
    }

    return {
        add: addItem,
        remove: removeItem,
        list: listItems
    };
}

const manager = createItemManager();

manager.add('Apple');
manager.add('Banana');
manager.add('Cherry');

console.log(manager.list()); 

manager.remove('Banana');

console.log(manager.list());

// Activity 5: Memoization

function memoize(fn) {
    const cache = new Map(); // Cache to store previously computed results

    return function(arg) {
        if (cache.has(arg)) {
            console.log('Returning from cache');
            return cache.get(arg);
        }

        const result = fn(arg); // Compute the result if not in cache
        cache.set(arg, result); // Store the result in cache
        return result;
    };
}

// Example function to memoize
function square(x) {
    return x * x; // Compute square of the number
}

// Memoize the square function
const memoizedSquare = memoize(square);

// Usage example
console.log(memoizedSquare(4)); // Computes and stores result: 16
console.log(memoizedSquare(4)); // Returns from cache: 16
console.log(memoizedSquare(5)); // Computes and stores result: 25
console.log(memoizedSquare(5)); // Returns from cache: 25

function memoize(fn) {
    const cache = new Map(); // Cache to store previously computed results

    return function(arg) {
        if (cache.has(arg)) {
            console.log('Returning from cache');
            return cache.get(arg);
        }

        const result = fn(arg); // Compute the result if not in cache
        cache.set(arg, result); // Store the result in cache
        return result;
    };
}

// Function to compute factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}

// Memoize the factorial function
const memoizedFactorial = memoize(factorial);

// Usage example
console.log(memoizedFactorial(5)); // Computes and stores result: 120
console.log(memoizedFactorial(5)); // Returns from cache: 120
console.log(memoizedFactorial(6)); // Computes and stores result: 720
console.log(memoizedFactorial(6)); // Returns from cache: 720


