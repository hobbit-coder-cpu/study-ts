// 타입 추론(interface)
// 추론 - 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 냄 

// 1) 초기화된 변수 
let num2 = 12

// 2) 기본값이 설정된 매개 변수
// 3) 반환 값이 있는 함수
function add2(a: number, b/*: number */= 2)/*: number */{
    return a + b
}

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

interface UU {
    name: string,
    readonly age: number,
    isValid?: boolean
}

const hero: UU = {
    name: 'jw',
    age: 20,
    isValid: true
}
hero.isValid = false
// hero.age = 2000 

const neo: UU = {
    name: 'jjww',
    age: 40
}


// 함수 타입 - 호출 시그니쳐(Call Signature)
interface GetName {
    (message: string): string
}

interface User2 {
    name: string,
    age: number,
    // getName: GetName
    getName: (message: string) => string
}

const h: User2 = {
    name: 'jd',
    age: 85,
    getName(message: string) {
        console.log(message)
        return this.name
    }
}

h.getName('Hello~')

// 인덱스 가능 타입 - 인덱스 시그니쳐(Index Signature) 
// 배열, 객체

// 배열 
interface Fruits {
    [item: number]: string 
}

const fruits: Fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
console.log(Array.isArray(fruits))

interface F {
    [key: string]: string
}

// 객체 
interface User3 {
    [key: string]: unknown,
    name: string,
    age: number
}

const he: User3 = {
    name: 'jkdf',
    age: 94
}

he['isValid'] = true
he['emails'] = ['thesecon@gmail.com', 'test@gmail.com']
console.log(he)

interface Payload {
    [key: string]: unknown
}

function logValues(payload: Payload) {
    for(const key in payload) {
        console.log(payload[key])
    }
}

interface User4 {
    [key: string]: unknown,
    name: string,
    age: number,
    isValid: boolean
}
/* 
interface User4 extends Payload{
    [key: string]: unknown,
    name: string,
    age: number,
    isValid: boolean
}
 */
const heropy3: User4 = {
    name: 'heropy',
    age: 42,
    isValid: false
}

logValues(heropy3)



// 확장(상속)
interface UserA {
    name: string, 
    age: number
}

interface UserB extends UserA {
    isValid: boolean
}

const heropy2: UserA = {
    name: 'd',
    age: 42,
    // isValid: false
}

const neo2: UserB = {
    name: 'd',
    age: 42,
    isValid: false
}

// 인터페이스 추가 (인터페이스 + 인터페이스)
interface FullName {
    firstName: string,
    lastName: string
}

interface FullName {
    middleName: string, 
    // lastName: boolean
}

const fullName: FullName = {
    firstName: 'f',
    middleName: 'm',
    lastName: 'l'
}


