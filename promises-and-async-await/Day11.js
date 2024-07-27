// Activity 1: Understanding Promises

function message() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('You are a good human being.');
            resolve();
        }, 2000);
    });
}

message().then(() => {
    console.log('Message displayed.');
});

function doSomething() {
    return new Promise((_, reject) => {
        reject(`Something went wrong!`)
    })
}

doSomething()
    .then((result) => {
        console.log('Success ', result)
    })
    .catch(error => {
        console.error('Error ', error)
    })

// Activity 2: Chaining Promises

function fetchData(step) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from step ${step}`)
        }, Math.random() * 2000)
    })
}

fetchData(1)
    .then(data => {
        console.log(data)
        return fetchData(2)
    })
    .then(data2 => {
        console.log(data2)
        return fetchData(3)
    })
    .then(data3 => {
        console.log(data3)
        return fetchData(4)
    })
    .then(data4 => {
        console.log(data4)
        console.log(`All data fetched successfully`)
    })
    .catch(error => {
        console.log(`Error fetching data: ${error}`)
    })

// Activity 3: Using Async/Await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function message() {
    await delay(2000); 
    console.log('You are a good human being.');
}

message();

function doSomething2() {
    return new Promise((_, reject) => {
        reject('Something went wrong!');
    });
}

async function handleAsyncOperation() {
    try {
        const result = await doSomething2();
        console.log('Success:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
handleAsyncOperation();

// Activity 4: Fetching Data from an API

function fetchAPI() {
    return fetch('https://potterapi-fedeperin.vercel.app')
        .then(response => {
            if(!response.ok)
                throw new Error(`Network response was not ok`)

            return response.json()
        })
}

fetchAPI()
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

async function fetchAPI2() {
    try {
        const response = await fetch('https://potterapi-fedeperin.vercel.app')

        if(!response.ok)
            throw new Error(`Network response was not ok: ${response.statusText}`)

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(`Error fetching data: ${error}`)
    }
}
fetchAPI2()

// Activity 5: Concurrent Promises

function fetchingData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data from Promise 1'), 1000);
    })
}

function fetchingData2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data from Promise 2'), 2000);
    })
}

function fetchingData3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data from Promise 3'), 3000);
    })
}

Promise.all([fetchingData(), fetchingData2(), fetchingData3()])
    .then(results => {
        console.log(`All data fetched: `)
        results.forEach(result => console.log(result))
    })
    .catch(error => console.log(`Error fetching data: ${error}`))

function fetchInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Info from Promise 1`)
        }, 1000)
    })
}

function fetchInfo2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Info from Promise 2`)
        }, 2000)
    })
}

function fetchInfo3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Info from Promise 3`)
        }, 3000)
    })
}

Promise.race([fetchInfo(), fetchInfo2(), fetchInfo3()])
    .then(result => console.log(`First promise info: ${result}`))
    .catch(error => console.log(`Error: ${error}`))