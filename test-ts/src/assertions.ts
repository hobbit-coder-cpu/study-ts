// 타입 단언(assertion)
// 단언 - 주저하지 아니하고 딱 잘라 말함.

// <1> 단언 키워드 - as
// <2> Non-null 단언 연산자 - !

// <1> 단언 키워드 as 
// 1)
/* 
const el = document.querySelector('body') as HTMLBodyElement
el.textContent = 'hello world?!'
// el!.textContent = 'hello world?!'

// 2)
function getNumber2(x: number | null | undefined) {
    return Number((x as number).toFixed(2))    
}
getNumber2(3.2323131)
getNumber2(null)


// 3)
function getValue(x: string | number, isNumber: boolean) {
    if(isNumber) {
        return Number((x as number).toFixed(2))
    }
    return (x as string).toUpperCase()
} 
*/
/* 
function getValue(x: string | number) {
    if(typeof x === 'number') {
        return Number(x.toFixed(2))
    }
    return x.toUpperCase()
}
 */

// getValue('hello world', false)
// getValue(3.14213134, true)


///////////////////////////////////////////////////////

// <2> non-null 단언 연산자 ! - null, undefined이 아니라고 단언할 경우.
// 1)
/* 
const el = document.querySelector('body')
el!.textContent = 'hello world?!'

// 2)
function getNumber2(x: number | null | undefined) {
    return Number(x!.toFixed(2))    
}
getNumber2(3.2323131)
getNumber2(null)


// 3)
function getValue(x: string | number, isNumber: boolean) {
    if(isNumber) {
        return Number((x as number).toFixed(2))
    }
    return (x as string).toUpperCase()
}
 */

////////////////////////////////////////////////////////


// [[Type Guard]]
// 위 단언 키워드 및 단언 연산자는 컴파일 오류만 발생 안시킬뿐
// 실제 런타임에 문제가 될수 있음 => 즉 위 2가지 방법은 적절한 해결책이 아님. 

// 1)
const el = document.querySelector('body')
if(el) {
    el.textContent = 'hello world?!'
    
}

// 2)
function getNumber2(x: number | null | undefined) {
    if(x) 
    {
        return Number(x.toFixed(2))
    }

    return x;
}
getNumber2(3.2323131)
getNumber2(null)



// 할당 단언 연산자 !
let nn!: number
console.log(nn)