// 타입 가드 

function logText(el: Element) {
    console.log(el.textContent)
}

const h1El = document.querySelector('h1')

// type guard #1
if(h1El) {  
    logText(h1El)
}

// type guard #2
if(h1El instanceof HTMLHeadingElement) {
    logText(h1El)
}

function add3(val: string | number | boolean) {
    let res = 'Result =>'
    if(typeof val === 'number') {
        res += val.toFixed(2)
    } else if(typeof val === 'string') { 
        res +=val.toUpperCase()
    }
    console.log(res)
}

add3(3.1434523)
add3('hello world')