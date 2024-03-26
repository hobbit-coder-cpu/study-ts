// 타입 추론(interface)
// 추론 - 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 냄 

// 1) 초기화된 변수 
let num = 12

// 2) 기본값이 설정된 매개 변수
// 3) 반환 값이 있는 함수
function addF(a: number, b/*: number */= 2)/*: number */{
    return a + b
}



