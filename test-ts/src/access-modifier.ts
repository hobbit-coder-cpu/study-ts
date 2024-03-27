// public - 생략 가능 
// protected
// private

class User5 {
    // 1) 
    // public first: string = 'jw'
    // public last: string
    // public age: number

     // constructor(first: string, last: string, age: number) {
    //     this.first = first
    //     this.last = last
    //     this.age = age
    // }

    // 2) 매개변수에 접근제어자 사용 
    constructor(
        public first: string = 'jw', 
        public last: string, 
        public age: number
    ) {
   
    }

   

    public getAge() {
        return `${this.first} ${this.last} ${this.age}`
    }
}

class User6 extends User5 {
    getAge() {
        return `${this.first} ${this.last} ${this.age}`
    }
}

class User7 extends User6 {
    getAge() {
        return `${this.first} ${this.last} ${this.age}`
    }
}

const neo3 = new User5('n', 'a', 102)
console.log(neo3.first)
console.log(neo3.last)
console.log(neo3.age)
console.log(neo3.getAge())