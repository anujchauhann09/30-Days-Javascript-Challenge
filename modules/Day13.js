// Activity 1: Creating and Exporting Modules

// import addNums from "./addNumsModule.mjs";
import addNums from "./addNumsModule.js";

console.log(addNums(3, 8))

import person from "./personModule.js";

console.log(person.getDetails())

// Activity 2: Named and Default Exports

import { addNums2, subNums, divNums, mulNums } from "./basicCalculatorModule.js";

console.log(addNums2(7, 3))
console.log(subNums(7, 3))
console.log(divNums(7, 3))
console.log(mulNums(7, 3))

// Activity 3: Importing Entire Modules

import * as utils from "./utilitiesModule.js";

console.log(utils.MAX_VALUE); // Output: 100
console.log(utils.MIN_VALUE); // Output: 0

console.log(utils.formatString('  hello world  ')); // Output: 'HELLO WORLD'
console.log(utils.isEven(42)); // Output: true
console.log(utils.generateRandomNumber()); // Output: Random number between 0 and 100

// Activity 4: Using Third-Party Modules

// Import specific lodash functions
import _ from 'lodash';

const array = [1, 2, 3, 4, 5];

const chunkedArray = _.chunk(array, 2);
console.log('Chunked Array:', chunkedArray);

const arrayWithFalsy = [0, 1, false, 2, '', 3];
const compactArray = _.compact(arrayWithFalsy);
console.log('Compact Array:', compactArray);

// We can use Axios to make various types of HTTP requests, such as GET, POST, PUT, DELETE, etc.
import axios from 'axios';

// GET Request
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

// POST Request
async function postData() {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

postData();

// PUT Request
async function updateData() {
    try {
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            title: 'updated title',
            body: 'updated body',
            userId: 1
        });
        console.log('Updated Response:', response.data);
    } catch (error) {
        console.error('Error updating data:', error);
    }
}

updateData();

// DELETE Request
async function deleteData() {
    try {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Response:', response.status); // Typically 200 for successful deletion
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

deleteData();

