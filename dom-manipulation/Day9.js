// Activity 1: Selecting and Manipulating Elements

document.getElementById('span').textContent = 'My name is Anuj'
document.getElementsByClassName('container').style.backgroundColor = 'red'

// Activity 2: Creating and Appending Elements

const div = document.createElement('div')
div.textContent = 'Hello, I am Anuj Chauhan'
document.body.appendChild(div)

const li = document.createElement('li')
li.textContent = 'This is a new list item'
document.querySelector('.ul').appendChild(li)

// Activity 3: Removing Elements

const elementToRemove = document.getElementById('remove-me')
if(elementToRemove)
    elementToRemove.remove()

const container = document.getElementById('container')
if(container && container.lastElementChild)
    container.removeChild(container.lastElementChild)

// Activity 4: Modifying Attributes and Classes

document.getElementsByClassName('img').src = 'https://xyzimage.com/'
document.getElementsByClassName('img').classList.add('changeBorderShape')
document.getElementsByClassName('img').classList.remove('changeBorderShape')

// Activity 5: Event Handling

const p = document.getElementById('p')
const button = document.getElementById('button')
button.addEventListener('click', function() {
    p.textContent = 'Hey there'
})

const img = document.getElementById('img')
img.addEventListener('mouseover', function() {
    img.classList.add('changeBorderColor')
})
img.addEventListener('mouseout', function() {
    img.classList.remove('changeBorderColor')
})



