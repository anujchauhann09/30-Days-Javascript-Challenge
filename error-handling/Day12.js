// Activity 1: Basic Error Handling with Try-Catch

function doSomething() {
    try {
        throw new Error(`Intentionally throwing error`)
    } catch (error) {
        console.error(`${error}`)
    }
}
doSomething()

function divideNums(num1, num2) {
    try {
        if(num2 === 0)
            throw new Error(`Division by zero is not allowed`)

        console.log((num1/num2))
    } catch (error) {
        console.error(error.message)
    }
}
divideNums(4, 0)

// Activity 2: Finally Block

try {
    console.log(`Executed statement in try block`)
    throw new Error(`Intentionally throwing error`)
} catch (error) {
    console.log(`Executed statement in catch block`)
    console.log(error.message)
} finally {
    console.log(`Executed statement in finally block`)
}

// Activity 3: Custom Error Objects

class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name; 
    }

    getErrorDetails() {
        return {
            message: this.message,
            statusCode: this.statusCode
        };
    }
}

try {
    throw new ErrorHandler('Something went wrong!', 404);
} catch (error) {
    if (error instanceof ErrorHandler) {
        console.error('Error details:', error.getErrorDetails());
    } else {
        console.error(error);
    }
}

function validateForm(fName, lName) {
    try {
        if(fName === '' || lName === '')
            throw new ErrorHandler(`Input field must be filled`)
        if(typeof fName !== String || typeof(lName) !== String)
            throw new ErrorHandler(`Enter valid input only`)

        console.log(`${fName} ${lName}`)
    } catch (error) {
        if (error instanceof ErrorHandler) {
            console.log(error.getErrorDetails().message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
}
validateForm('Anuj', '')
validateForm('Anuj', 12)
console.log('Anuj', 'Chauhan')

// Activity 4: Error Handling in Promises

function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5 // 50% chance of success

        setTimeout(() => {
            isSuccess ? resolve(`Promise resolved successfully!`) : reject(`Promise rejected.`)
        }, 1000)
    })
}
randomPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error))

async function handleRandomPromise() {
    try {
        const result = await randomPromise()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
handleRandomPromise()

// Activity 5: Graceful Error Handling in Fetch

fetch('https://123.com')
    .then(response => {
        if(!response.ok)
            throw new Error(`Network response was not ok: ${response.statusText}`)

        // Check if the response is JSON
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            return response.json(); // Parse response as JSON
        } else {
            return response.text(); // Parse response as text (HTML or other formats)
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))

async function fetchData() {
    try {
        const response = await fetch('https://123.com')

        if(!response.ok)
            throw new Error(`Network response was not ok: ${response.statusText}`)

        // Check if the response is JSON
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            /*
                const data = await response.json();
                console.log(data)
            */
            return await response.json(); // Parse response as JSON
        } else {
            return await response.text(); // Parse response as text (HTML or other formats)
        }
    } catch (error) {
        console.log(error)
    }
    
}
fetchData()
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error processing data:', error);
    });