// Activity 1: Class Definition

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    greeting() {
        return `Hey ${this.firstName}, How are you?`
    }

    updateAge(age) {
        this.age = age
    }

    getDetails() {
        return `${this.firstName} ${this.age}`
    }

    // Activity 3: Static Methods and Properties

    static genericGreeting(name) {
        return `Good morning ${name}.`
    }

    // Activity 4: Getters and Setters
            
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ')
    }
}

const anuj = new Person('anuj', 'chauhan', 76)
console.log(anuj.greeting())
console.log(anuj.getDetails())
anuj.updateAge(23)
console.log(anuj.getDetails())
console.log(Person.genericGreeting('anuj'))
console.log(anuj.fullName)
anuj.fullName = 'anish bisht'
console.log(anuj.fullName)

// Activity 2: Class Inheritance

class Student extends Person {
    // Activity 3.1: Static Methods and Properties

    static studentCount = 0

    constructor(studentId) {
        super()
        this.studentId = studentId
        Student.studentCount++
    }

    greeting() {
        return `Hey your student id is ${this.studentId}`
    }

    getStudentId() {
        return this.studentId
    }
}

const anish = new Student(14)
console.log(anish.getStudentId())
console.log(anish.greeting())
const anshu = new Student(15)
console.log(Student.studentCount)

// Activity 5: Private Fields

class Account {
    #balance
    #fullName

    constructor(fullName, balance) {
        this.#fullName = fullName
        this.#balance = balance
    }

    depositMoney(amount) {
        this.#balance = this.#balance + amount
    }

    withdrawMoney(amount) {
        this.#balance = this.#balance - amount
    }

    #getBalance() {
        return this.#balance
    }

    displayBalance() {
        return this.#getBalance()
    }
}

const piru = new Account('piru rawat', 10000)
console.log(piru.displayBalance())
piru.depositMoney(1000)
console.log(piru.displayBalance())
piru.withdrawMoney(1000)
console.log(piru.displayBalance())





