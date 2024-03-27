export interface User11 {
    firstName: string,
    lastName: string,
    age: number,
    isValid: boolean
}

export function getFullName(user: User11) {
    return `${user.firstName} ${user.lastName} ${user.age} ${user.isValid}`
}