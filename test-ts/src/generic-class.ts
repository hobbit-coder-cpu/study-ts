class User10<P> {
    // public payload: P
    // constructor(payload: P) {
    //     this.payload = payload
    // }

    constructor(public payload: P) {
        
    }

    getPayload() {
        return this.payload
    }
}

interface UserAType {
    name: string,
    age: number, 
    isValid: boolean
}

interface UserBType {
    name: string,
    age: number, 
    emails: string[]
}

const h4 = new User10<UserAType>({
    name: 'e',
    age: 85,
    isValid: true
    // ,emails: []
});

const neo4 = new User10<UserBType>({
        name: 'e',
        age: 85,
        // isValid: true,
        emails: []
})

// 클래스 제약 조건
class CTest<T extends string | number> {
    constructor(public d: T) {

    }
}

const c1 = new CTest<string>('hello world')
const c2 = new CTest<number>(12345)
// const c3 = new CTest<boolean>(true)