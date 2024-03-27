// 명시적 this

interface Cat {
    name: string, 
    age: number
}

const cat1: Cat = {
    name: 'Lucy',
    age: 3
}

const cat2: Cat = {
    name: 'Lucy2',
    age: 3
}

const cat3: Cat = {
    name: 'Lucy3',
    age: 3
}

function hello(this: Cat, message: string) {
    console.log(`Hello ${this.name}, ${message}`)
}

hello.call(cat1, 'You are pretty awesome!')
hello.bind(cat2)('You are hansome!')
hello.apply(cat3, ['You are ugly'])