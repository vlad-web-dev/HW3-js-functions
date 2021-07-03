console.log('------------- #4')
function sum(a, b) {
    const result = a + b
    console.log(result)
}
sum(2,6)

function minus(a, b) {
    const result = a - b
    console.log(result)
}
minus(8,6)

function times(a, b) {
    const result = a * b
    console.log(result)
}
times(2,6)

function division(a,b) {
    const result = a / b
    console.log(result)
}
division(12,6)

console.log('------------- #5')
function fromOneToEnterValue(val) {
    let arr = [];
    for (let i = 1; i <= val; i++) {
        arr.push(i);
    }
    console.log(arr.join(' '))
}
fromOneToEnterValue(5)

console.log('------------- #6')
function fromEnterValueToOne(val) {
    let arr = [];
    /*for (let i = 1; i <= val; i++) {
        arr.push(i);
    }
    console.log(arr.reverse().join(' '))*/
    let i = 0
    for (val; i < val; val--) {
        arr.push(val);
    }
    console.log(arr.join(' '))
}
fromEnterValueToOne(5)

console.log('------------- #7')
function pow(a,b) {
    const result = a ** b
    console.log(result)
}
pow(2,3)

console.log('------------- #8')
function isBigger(a, b) {
    const result = a > b
    console.log(result)
}
isBigger(5, -1);

console.log('------------- #9')
function isSmaller(a, b) {
    const result = a < b
    console.log(result)
}
isSmaller(5, -1);