interface MyData<T> {
    name: string,
    value: T
}

const dataA: MyData<string> = {
    name: 'da',
    value: "hello world"
}

const dataB: MyData<number> = {
    name: 'db',
    value: 1234
}

const dataC: MyData<boolean> = {
    name: 'dc',
    value: true
}

const dataD: MyData<number[]> = {
    name: 'dd',
    value: [1, 2, 3, 4]
}

// 제약조건(Contraints)
interface MyData2<T extends string | number> {
    name: string, 
    value: T
}

