console.log('------------- #4')
function sum(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b
}

function times(a, b) {
    return a * b
}

function division(a,b) {
    return a / b
}

console.log(sum(2,6))
console.log(minus(8,6))
console.log(times(2,6))
console.log(division(12,6))

console.log('------------- #5')
function fromOneToEnterValue(val) {
    for (let i = 1; i <= val; i++) {
        console.log(i)
    }
}
fromOneToEnterValue(5)

console.log('------------- #6')
function fromEnterValueToOne(val) {
    let i = 0
    for (val; i < val; val--) {
        console.log(val)
    }
}
fromEnterValueToOne(5)

console.log('------------- #7')
function pow(a,b) {
    return a ** b
}
console.log(pow(2,3))

console.log('------------- #8')
function isBigger(a, b) {
    return a > b
}
console.log(isBigger(5, -1));

console.log('------------- #9')
function isSmaller(a, b) {
    return a < b
}
console.log(isSmaller(5, -1));