// Activity 1: Basic Event Handling

/*
    <button onCLick="changeBtnText" class="btn">Send</button>
*/

function changeBtnText() {
    document.getElementsByClassName('.btn').textContent = 'Send Data';
}

/*
    <img src="xyz" id="myImage">
*/

const imageElement = document.getElementById('myImage');

function toggleVisibility() {
    if (imageElement.style.display === 'none') {
        imageElement.style.display = 'block';
    } else {
        imageElement.style.display = 'none';
    }
}

imageElement.addEventListener('dblclick', toggleVisibility);

// Activity 2: Mouse Events

/*
    <div id="container" height="400" width="400" style="background-color: yellow"></div>
*/

const containerElement = document.getElementById('container');

function changeBackgroundColor() {
    containerElement.style.backgroundColor = 'red';
}

containerElement.addEventListener('mouseover', changeBackgroundColor)

function changeBackgroundColor() {
    containerElement.style.backgroundColor = '';
}

containerElement.addEventListener('mouseout', resetBackgroundColor)

// Activity 3: Keyboard Events

/*
    <input type="text" class="myInput">
*/

const inputField = document.getElementsByClassName('myInput'); 

function logKeyPressed(event) {
    console.log(`Key pressed: ${event.key}`);
}

inputField.addEventListener('keydown', logKeyPressed);

/*
    <input type="text" class="myInput2">
    <p id="myParagraph"></p>
*/

const inputField2 = document.getElementsByClassName('myInput2'); 
const paragraph = document.getElementsById('myParagraph'); 

function updateParagraph() {
    paragraph.textContent = inputField.value;
}

inputField2.addEventListener('keyup', updateParagraph);

// Activity 4: Form Events

/*
// 1. <form action="" id="myForm" onsubmit="event.preventDefault(); validateMyForm();"> 
2. <form action="" id="myForm">

or

<form action="" id="myForm" onsubmit="subform(event)">
    <label for="fname">First name: </label><br/>
    <input type="text" id="fname" name="fname"/><br/>
    <label for="lname">Last name: </label><br/>
    <input type="text" id="lname" name="lname"/><br/>
</form>
*/

const form = document.getElementById('myForm')
const fName = document.getElementById('fname')
const lName = document.getElementById('lname')

function submitForm(event) {
    event.preventDefault();
}

function validateMyForm() {
    if(fName.value != '')
        console.log(fName.value)
    if(lName.value != '')
        console.log(lName.value)
}

/*
    <label for="mySelect">Choose an option:</label>
    <select id="mySelect">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
    </select>

    <p id="displayParagraph">Selected value will appear here</p>
*/

const selectDropdown = document.getElementById('mySelect');
const displayParagraph = document.getElementById('displayParagraph');

function updateSelectedValue() {
    displayParagraph.textContent = `Selected value: ${selectDropdown.value}`;
}

selectDropdown.addEventListener('change', updateSelectedValue);

// Activity 5: Event Delegation

/*
<ul id="nameList">
    <li id="1">Anuj</li>
    <li id="2">Anish</li>
    <li id="3">Anshu</li>
    <li id="4">Ansh</li>
</ul>
*/

const names = document.getElementById('nameList')

names.addEventListener('click', (event) => {
    /*
    if(event.target.innerText === 'Anuj')
        console.log(event.target.innerText)
    else if(event.target.innerText === 'Anish')
        console.log(event.target.innerText)
    else if(event.target.innerText === 'Anshu')
        console.log(event.target.innerText)
    else
        console.log(event.target.innerText)
    */

    console.log(event.target.innerText);
})

/*
    <div id="parentElement">
        <button id="addButton">Add Item</button>
        <ul id="itemList">
            <!-- Dynamically added items will appear here -->
        </ul>
    </div>
*/

const parentElement = document.getElementById('parentElement');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

let itemCount = 0;

function addItem() {
    itemCount++;
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCount}`;
    newItem.id = `item-${itemCount}`;
    itemList.appendChild(newItem);
}

function handleItemClick(event) {
    if (event.target && event.target.tagName === 'LI') {
        console.log(`Clicked on: ${event.target.textContent}`);
    }
}

parentElement.addEventListener('click', handleItemClick);

addButton.addEventListener('click', addItem);


