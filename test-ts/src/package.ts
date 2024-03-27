// d ts 파일
/* 
declare module 'lodash' {
    interface Lodash {
        camelCase: (str: string) => string
        snakeCase: (str: string) => string 
        kebabCase: (str: string) => string
    }

    const _: Lodash
    export default _
}
 */
// DefinitelyTyped
// npm install --save-dev @types/[원하는 라이브러리]

// npm info @types/lodash


// 만약 lodash.d.ts 외 다른 명칭으로 파일명 작성시 
// 아래와 같이 수동으로 연결 필요
// 반드시 삼중슬래쉬  /// <reference path="./main.d.ts" />

import _ from 'lodash'

const str = "the brown fox jumps over the lazy dog."

console.log(_.camelCase(str))
console.log(_.snakeCase(str))
console.log(_.kebabCase(str))