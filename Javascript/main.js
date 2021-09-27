// 개요
// console.log('Hello, world!');

// ========== (예제) 입력과 출력 ==========
const fs = require("fs");
const input = fs.readFileSync("./Javascript/input.txt", "utf8");

console.log(input);

// ========== (예제) 코드 구성 ==========
let hi = "hello";
let HI = "HELLO";
let 안녕 = "하세요";

console.log(hi);
console.log(HI);
console.log(안녕);

// ========== (예제) 주석 ==========
console.log('hello'); // hello message(single line comments)

console.log("Hello");
/* Hello Message
Multi line
Comments
*/

// ========== (예제) 변수 ==========
let A = 123;
console.log(A);

A = 456;
console.log(A);

// let A = 789; SyntaxError

// ========== (예제) 상수 ==========
const B = 123;
console.log(B);

// B = 456; TypeError

// const C; SyntaxError
// C = 123;

// ========== (예제) 변수와 상수 ==========
// 변수 선언 후 할당
let bye;
bye = "Goodbye";
console.log(bye);

// 변수 선언과 동시에 초기화
let halo = "HELLO!";
console.log(halo);

// 한 줄에 여러 변수 선언 및 초기화
let name = "john", age = 23, msg = "Hi, nice to meet you"
console.log(name, age, msg);

// 상수는 대문자로 표기
const TESTCASE = 5;
const BDAY = "2000.01.01";

console.log(TESTCASE, BDAY);

// ========== (예제) HOISTING ==========
// var
console.log(peanuts_1);   // undefined
var peanuts_1 = "스누피";
console.log(peanuts_1);   // 스누피

// let/const
// console.log(peanuts_2);   // ReferenceError: Cannot access 'peanuts_2' before initialization
let peanuts_2;
