//let sum = 35 + 5

const { log } = require("console")

// console.log(sum);
// console.log(typeof(sum));
// let times = 35 * "hello"
// console.log(times);
// console.log(typeof(times));


// let string = ""
// let number = 40
// let boolean = true
// console.log(!string)
// // true - string is coerced to boolean `false`, then the NOT operator negates it
// console.log(boolean + string)
// // "true" - boolean is coerced to string "true", and concatenated with the empty string
// console.log(40 + true)
// // 41 - boolean is coerced to number 1, and summed with 40


// let variable1 = 20
// let variable2 = "20"
// console.log(variable1 == variable2)
// true

// let variable1 = false
// let variable2 = ""
// console.log(variable1 === variable2)


// Explicit Type Conversion (Type Casting):

// let number = 30
// let numberConvert = String(number)
// console.log(numberConvert)
// // "30"
// console.log(typeof (numberConvert))
// // string

// let number = 10
// let numberConvert = Boolean(number)
// console.log(numberConvert)
// // true
// console.log(typeof numberConvert)
// // boolean

// let tr = false

// let booleanConvert = String(tr)
// console.log(booleanConvert)
// // "false"
// console.log(typeof booleanConvert)
// // string
// console.log("this is boolean var " + typeof(tr));

let a = "52.5"
console.log(typeof a);

let b = parseInt(a)
let c = Number(a)

console.log(b);
console.log(c);

console.log(typeof(b));


