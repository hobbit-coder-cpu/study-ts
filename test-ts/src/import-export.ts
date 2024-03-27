import {getFullName, User11} from './user'

const heropy4: User11 = {
    firstName: 'f',
    lastName: 'l',
    age: 85,
    isValid: true
}

const fullName = getFullName(heropy4)


console.log(fullName)
console.log(heropy4.isValid)