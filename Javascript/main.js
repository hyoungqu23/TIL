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


// ========== (예제) TYPEOF ==========
console.log(typeof "string");     // string
console.log(typeof 123);          // number
console.log(typeof 456n);         // bigint
console.log(typeof .789);         // number
console.log(typeof true);         // boolean
console.log(typeof false);        // boolean
console.log(typeof null);         // object
console.log(typeof undefined);    // undefined
console.log(typeof Math);         // object
console.log(typeof Symbol("id")); // symbol
console.log(typeof console.log);  // function

// ========== (예제) BOOLEAN ==========
let nameCheck = true;
let ageCheck = false;
let valueCheck = 10 > 3;

console.log(nameCheck, ageCheck, valueCheck);

// ========== (예제) NULL ==========
console.log(typeof null)    // object(하위 버전 호환성 문제 해결을 위함)
const nullCheck = null;
console.log(nullCheck === null);  // true

// ========== (예제) UNDEFINED ==========
let undefinedCheck;
console.log(undefinedCheck === undefined);    // true

// ========== (예제) NUMBER ==========
let num_1 = 123.0;
let num_2 = 123.456;
let num_3 = 1 / 0;

console.log(num_1 - num_2);                 // -0.45600000000000307
console.log((num_1 - num_2).toFixed(3));    // -0.456
console.log(num_1 / num_2);
console.log(num_1 + num_2);
console.log(num_1 * num_2);
console.log(num_3);             // Infinity
console.log(num_1 / "zero");    // NaN

// ========== (예제) STRING ==========
let str_1 = "Hello #1";
let str_2 = 'Hello #2';
let number = 3
let str_3 = `Hello #${number}`;

console.log(str_1);
console.log(str_2);
console.log(str_3);

// ========== (예제) OBJECT ==========
let user = {
  name: 'John',
  age: 27,
};

console.log(typeof user)
console.log(typeof user.name);
console.log(typeof user.age);

console.log(user);
console.log(user.name);
console.log(user.age);

user.age = 30;
console.log(user.age);

user.height = 188;
console.log(user);
console.log(user.height);

delete user.age;
console.log(user);

// ========== (예제) OBJECT Copy ==========
let customer = {
  name: "James",
  age: 28,
};

let admin = customer;

admin.name = "Donald";

console.log(admin.name);      // Donald
console.log(customer.name);   // Donald가 아니라 James가 나와야 함

customer.age = 33;
console.log(admin.age);       // 33
console.log(customer.age);    // 33이 아니라 28이 나와야 함

// ========== (예제) SHALLOW Copy #1 ==========
let customer_SC_1 = {
  name: "James",
  age: 28,
};

let admin_SC_1 = {};

for (let key in customer_SC_1) {
  admin_SC_1[key] = customer_SC_1[key];
};

admin_SC_1.name = "Donald";

console.log(admin_SC_1.name);      // Donald
console.log(customer_SC_1.name);   // James

// ========== (예제) SHALLOW Copy #2 ==========
let customer_SC_2 = {
  name: "James",
  age: 28,
};

let admin_SC_2 = Object.assign({}, customer_SC_2);

admin_SC_2.name = "Donald";

console.log(admin_SC_2.name);      // Donald
console.log(customer_SC_2.name);   // James

// ========== (예제) SHALLOW Copy #3 ==========
let customer_SC_3 = {
  name: "James",
  age: 28,
};

let admin_SC_3 = { ...customer_SC_3 };

admin_SC_3.name = "Donald";

console.log(admin_SC_3.name);      // Donald
console.log(customer_SC_3.name);   // James

// ========== (예제) SHALLOW Copy #4 Problem ==========
let customer_SC_4 = {
  name: "James",
  age: 28,
  sizes: {
    height: 179,
    weight: 67,
  },
};

let admin_SC_4 = { ...customer_SC_4 };

admin_SC_4.sizes.height = 190;

console.log(admin_SC_4.sizes.height);      // 190
console.log(customer_SC_4.sizes.height);   // 190이 아니라 179가 나와야 함

// ========== (예제) DEEP Copy ==========
let customer_DC = {
  name: "James",
  age: 28,
  sizes: {
    height: 179,
    weight: 67,
  },
};

let admin_DC = JSON.parse(JSON.stringify(customer_DC));

admin_DC.sizes.height = 190;

console.log(admin_DC.sizes.height);      // 190
console.log(customer_DC.sizes.height);   // 190이 아니라 179가 나와야 함