// 함수 , 인터페이스에서 사용 가능 

interface Obj {
    x: number
}

type Arr = [number, number] // Tuple

// 함수 오버로딩
function toArray(a: string, b: string): string[]
function toArray(a: number, b: number): number[]
function toArray(a: boolean, b: boolean): boolean[]
function toArray(a: Obj, b: Obj): Obj[]
function toArray(a: Arr, b: Arr): Arr[]
function toArray(a: any, b: any) {
    return [a, b]
}

console.log(
    toArray('Neo', 'Anderson'),
    toArray(1, 2),
    toArray(true, false),
    toArray({x: 1}, {x: 2}),
    toArray([1, 2], [3, 4]),
)

// 함수 오버로딩을 제네릭으로 변환

function toArray2<T>(a: T, b: T) {
    return [a, b]
}

console.log(
    toArray2('Neo', 'Anderson'),
    // toArray2<string>('Neo', 'Anderson'),
    toArray2(1, 2),
    toArray2(true, false),
    toArray2({x: 1}, {x: 2}),
    toArray2<Arr>([1, 2], [3, 4]),
    toArray2([1, 2], [3, 4, 5]),
)

function toArray3<T, V>(a: T, b: V): (T|V)[] {
    return [a, b]
}

console.log(
    toArray3<string, number>('Neo', 1),
    toArray3(1, 'Anderson')
)

function toArray4<T extends string | number>(param: T) {
    if(typeof param ==='string') {

    } else {
        
    }
}


