// function overloading 

// 1)
function add4(a: string, b: string) {
    return a + b
}

function add5(a: number, b: number) {
    return a + b
}

add4('hello', 'world')
// add4('hello', 1)
add5(1, 2);
// add5('hello', 1)

// 2) 
function add6(a: string, b: string): string // 타입 선언
function add6(a: number, b: number): number // 타입 선언 
function add6(a: any, b: any) // 함수 구현 (위 타입 선언부 매개변수가 들어올수 있도록)
{
    return a + b
}

add6('hello', 'world')
add6(1, 2);
// add6('hello', 1)
// add6(1, 'hello')