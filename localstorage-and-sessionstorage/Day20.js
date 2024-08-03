// Activity 1: Understanding LocalStorage

localStorage.setItem('myName', 'Anuj Chauhan')
console.log(localStorage.getItem('myName'))

localStorage.setItem('myObj', JSON.stringify({
    name: 'Anuj Chauhan',
    age: 89
}))
console.log(JSON.parse(localStorage.getItem('myObj')))

// Activity 2: Using LocalStorage

/*
<form action="" id="userForm">
    <input type="text" id="fullName" />
    <input type="email" id="emailId" />
    <button type="submit" id="formButton">Submit</button>
</form>
*/

const userName = document.getElementById('fullName');
const userEmail = document.getElementById('emailId');
const userForm = document.getElementById('userForm');

function handleForm(e) {
    e.preventDefault();

    if (!userName.value || !userEmail.value) {
        return;
    }

    // Assuming user filled valid data
    localStorage.setItem('userData', JSON.stringify({
        userName: userName.value,
        userEmail: userEmail.value
    }));
    console.log(JSON.parse(localStorage.getItem('userData')));
}

userForm.addEventListener('submit', handleForm);

console.log("Before removing an item from localStorage : " + localStorage.getItem('myName'))
localStorage.removeItem('myName')
console.log("After removing an item from localStorage : " + localStorage.getItem('myName'))

// Activity 3: Understanding SessionStorage

sessionStorage.setItem('myName', 'Anuj Chauhan')
console.log(sessionStorage.getItem('myName'))

sessionStorage.setItem('myObj', JSON.stringify({
    name: 'Anuj Chauhan',
    age: 89
}))
console.log(JSON.parse(sessionStorage.getItem('myObj')))

// Activity 4: Using SessionStorage

/*
<form action="" id="userForm">
    <input type="text" id="fullName" />
    <input type="email" id="emailId" />
    <button type="submit" id="formButton">Submit</button>
</form>
*/

const userForm2 = document.getElementById('userForm');

function handleForm2(e) {
    const userName = document.getElementById('fullName');
    const userEmail = document.getElementById('emailId');

    e.preventDefault();

    if (!userName.value || !userEmail.value) {
        return;
    }

    // Assuming user filled valid data
    sessionStorage.setItem('userData', JSON.stringify({
        userName: userName.value,
        userEmail: userEmail.value
    }));
    console.log(JSON.parse(sessionStorage.getItem('userData')));
}

userForm2.addEventListener('submit', handleForm2);

console.log("Before removing an item from localStorage : " + sessionStorage.getItem('myName'))
sessionStorage.removeItem('myName')
console.log("After removing an item from localStorage : " + sessionStorage.getItem('myName'))

// Activity 5: LocalStorage and SessionStorage

const saveDataInStorage = (key, value) => {
    localStorage.setItem(key, value)
    sessionStorage.setItem(key, value)
    checkDataInStorage(key)
}

const checkDataInStorage = key => {
    console.log(localStorage.getItem('myName'))
    console.log(sessionStorage.getItem('myName'))
}

saveDataInStorage('myName', 'Anuj Singh Chauhan')

function clearDataFromStorage() {
    localStorage.clear()
    sessionStorage.clear()
}

clearDataFromStorage()