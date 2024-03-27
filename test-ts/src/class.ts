class User8 {
    first: string = 'jw' // default value
    last: string 
    age: number

    constructor(first: string, last: string, age: number) {
        this.first = first
        this.last = last
        this.age = age
    }

    getAge() {
        return `${this.first} ${this.last} ${this.age}`
    }
}

class User9 extends User8 {
    getAge() {
        return `${this.first} ${this.last} ${this.age}`
    }
}