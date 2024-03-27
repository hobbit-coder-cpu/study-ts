// 

type TypeA = string
type TypeB = string | number | boolean

type UserType = {
    name: string,
    age: number, 
    isValid: boolean,
} | [string, number, boolean]

const userA2: UserType = {
    name : 'n',
    age: 20,
    isValid: true
}

const userB2: UserType = ['Evan', 25, true]

function someFunc(param: TypeB): TypeA {
    switch(typeof param) {
        case 'string':
            return param.toUpperCase();
        case 'number':
            return param.toFixed(2);
        default: 
            return 'Boolean!'
    }
}

// 객체 타입 지정 VS 객체 인터페이스 
// 기능적 차이는 없음. 
// 의미적 차이.
// 권장: 인터페이스(객체 데이터를 전제로 인터페이스의 의미가 더 적합)

type TypeUser = {
    name: string,
    age: number,
    isValid: boolean
}

interface InterfaceUser {
    name: string,
    age: number,
    isValid: boolean
}

const h3: TypeUser = {
    name: 'jw',
    age: 63,
    isValid: true
}