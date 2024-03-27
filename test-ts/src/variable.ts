// 타입 종류

// [[기본 원시타입]]
let str: string = ``
let num: number = 123 // 3.6 // Infinity // NaN
let b: boolean = true // 

// [[무쓸모]] 
let n: null 
let u: undefined

// [[배열]]
let arr: Array<number> = [12, 35, 66] // = let arr: number[] = [12, 35, 66]
const uni: (string | number)[] = ['Apple', 1, 2]

// [[객체]]
const userA: {
    name: string, 
    age: number,
    isValid: boolean
} = {
    name: 'Heropy',
    age: 85,
    isValid: true
};
// 인터페이스를 통해 객체 명시화를 재활용 가능.

// object를 상속받는 모든 타입을 object 타입으로 명시 가능 
// 더 세부적인 타입으로 명시화 하기.
const o: object = {}
const a: object = []
const f: object = function() {}


// [[인터페이스]]
interface User {
    name: string, 
    age: number,
    isValid: boolean
}

const userB: User = {
    name: 'jw',
    age: 18,
    isValid: false
}

// 인터페이스 상속
interface ExtendedUser extends User {
    email: string
}

const eUser: ExtendedUser = {
    name: 'jw',
    age: 20,
    isValid: false,
    email: "jwfd@gmail.com"
}

// [[함수]]
const add: (x: number, y: number) => number = function(a, b) {
// const add: = function(a: number, b: number): number {
    return a + b
}
const res: number = add(2, 5)

const hi: () => void = function () {
// const hi = function(): void {
    console.log('hi')
}

// [[any]] 
// 사용 비권장
let ay: any = "Hello world" // 123 // false // null // {} // [] // function

// [[unknown]]
// any와 기능은 같으나 의미적 차이.
// any: 어떤 타입이든 상관없다.
// unknown: 현재 해당 타입을 정하기 어려움
//  

// [[tuple]] 
const t: [string, number, boolean] = ['a', 12, false]
const ta: [string, number, boolean][] = [
    ['a', 12, false],
    ['b', 14, true],
    ['c', 16, false]
]

// [[type(별칭, alias) 지정]]
type Tuple = [string, number, boolean]
const tt: Tuple = ['a', 12, false]
const tta: Tuple[] =  [
    ['a', 12, Boolean(1)],
    ['b', 14, true],
    ['c', 16, false]
]

// [[union]] | 
let unio: string | number | boolean
unio = 'fdfd'
unio = 12313
unio = false

// [[intersection]] A & B : A 이면서 B 
interface U {
    name: string, 
    age: number
}

interface V {
    isValid: boolean
}

const heropy: U & V = {
    name: 'neo',
    age: 10000,
    isValid: false
}

