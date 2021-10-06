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

// ========== (예제) 형 변환 - String ==========
console.log(String(123));
console.log(String(1 / 0));
console.log(String(-1 / 0));
console.log(String(NaN));
console.log(String(true));
console.log(String(false));
console.log(String(undefined));
console.log(String(null));

// ========== (예제) 형 변환 - Number, parseInt, parseFloat ==========
console.log(Number(""));
console.log(Number("123"));
console.log(Number('Hello'));
console.log(Number("123Hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

console.log(parseInt(123.123))
console.log(parseFloat(123.123))

// ========== (예제) 형 변환 - Boolean ==========
console.log(Boolean(""));
console.log(Boolean("123"));
console.log(Boolean('Hello'));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(123));
console.log(Boolean(NaN));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));

// ========== (예제) 산술 연산자 ==========
console.log(32 + 8);
console.log(32 - 8);
console.log(32 * 8);
console.log(32 / 8);
console.log(32 % 8);
console.log(32 ** 8);

// ========== (예제) 대입 연산자 ==========
let number_1 = 123;
let number_2 = 456;
let string_1 = "Hello, ";
let string_2 = "World!";

let number_3, string_3;
number_3 = number_1 + number_2;
console.log(number_3);

string_3 = string_1 + string_2;
console.log(string_3);

// ========== (예제) 복합 대입 연산자 ==========
let result_1, result_2, result_3, result_4;
result_1 = result_2 = result_3 = result_4 = 25;

console.log(result_1 += 5);
console.log(result_2 -= 5);
console.log(result_3 *= 5);
console.log(result_4 /= 5);

// ========== (예제) 증감 연산자 ==========
let rst, num;

num = 10;
rst = num++;
console.log(rst);     // 10
console.log(num);     // 11

num = 10;
rst = ++num;
console.log(rst);     // 11
console.log(num);     // 11

num = 10;
rst = num--;
console.log(rst);     // 10
console.log(num);     // 9

num = 10;
rst = --num;
console.log(rst);     // 9
console.log(num);     // 9

// ========== (예제) 비교 연산자 ==========
console.log(5 > 3);             // true
console.log(5 < 3);             // false
console.log(5 >= 10);           // false
console.log(10 <= 10);          // true
console.log(5 == '5');          // true
console.log(5 != '5');          // false
console.log(5 === '5');         // false
console.log(5 !== '5');         // true

// ========== (예제) 논리 연산자 ==========
console.log(true || false);             // true
console.log(Boolean(0 || false));       // false
console.log(Boolean(123 || false));     // true
console.log(Boolean(123 && 0));         // false
console.log(Boolean(false && true));    // false
console.log(Boolean(true && 3));        // true
console.log(Boolean(0 && false));       // false
console.log(Boolean(!false));           // true
console.log(Boolean(!123));             // false

// ========== (예제) SCOPE ==========
let x = 1;
let y = 2;

console.log(x);
console.log(y);

{
  let x = 3;
  let y = 4;

  console.log(x);
  console.log(y);
}

function scope() {
  let x = 5;
  let y = 6;

  console.log(x);
  console.log(y);
}

scope();

console.log(x);
console.log(y);

// ========== (예제) Conditionals - if ==========
let apple_price = 9;

if (apple_price >= 10) {
  console.log("Very Expensive");
} else if ( apple_price < 5 ) {
  console.log("Very Cheap");
} else {
  console.log("Reasonable Price.");
}

let pet_age = 10;
if (pet_age < 10) 
  console.log('Young');
else
  console.log("Old");

// ========== (예제) Conditionals - Conditional (ternary) operator ==========
let user_age = 20;

if (user_age < 19) {
  msg = "The user is not an adult."
} else {
  msg = "The user is an adult."
}

console.log(msg);

msg_dblchecked = age < 19 ? "Not adult": "Adult";
console.log(msg_dblchecked);

// ========== (예제) Conditionals - switch ==========
let day_number = 1;
let day;

switch (day_number) {
  case 0:
    day = "Sunday"; break;
  case 1:
    day = "Monday"; break;
  case 2:
    day = "Tuesday"; break;
  case 3:
    day = "Wednesday"; break;
  case 4:
    day = "Thursday"; break;
  case 5:
    day = "Friday"; break;
  case 6:
    day = "Saturday"; break;
  default:
    day = "error"; break;
}

console.log(day);

let browser = 'Chrome';

switch (browser) {
  case "Explorer":
    msg = "ActiveX installation required.";
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    msg = "Supported Browsers.";
    break;
  default:
    msg = "Unsupported Browsers.";
    break;
}

console.log(msg);

// ========== (연습 문제 #1) ==========
const day_quiz = 3;
let weekday = '';

switch (day_quiz) {
  case 1:
    weekday = "월요일";
    break;
  case 2:
    weekday = "화요일";
    break;
  case 3:
    weekday = "수요일";
    break;
  case 4:
    weekday = "목요일";
    break;
  case 5:
    weekday = "금요일";
    break;
  case 6:
    weekday = "토요일";
    break;
  case 7:
    weekday = "일요일";
    break;
  default:
    weekday = "잘못된 값입니다. 숫자를 입력해주세요.";
    break;
}

console.log(weekday);

// ========== (예제) Loops ==========
for (let i = 0; i < 3; i++) {
  console.log(i);
}

for (let i = 10; i < 3; i++) {
  console.log(i);
}

let num_loop = 0;
for ( ; num_loop < 2; ) {
  console.log(num_loop);
  num_loop++;
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${i} + ${j} = ${i + j}`);
  }
}

// ========== (예제) Loops_for_in ==========
const person = {fname: "John", lname: "Bob", age: 25};

let text_forin = "";
for (let x in person) {
  text_forin += person[x];
}

console.log(text_forin);

// ========== (예제) Loops_for_of ==========
let language = "JavaScript";
let text_forof = "";

for (let x of language) {
  text_forof += x;
  console.log(x);
}

// ========== (예제) Loops_while ==========
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// ========== (예제) Loops_do_while ==========
i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

i = 4;
do {
  console.log(i);
  i++;
} while (i < 3);

// ========== (예제) Loops_break ==========
let text_break = '';
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  text_break += i;
}

console.log(text_break);

// ========== (예제) Loops_continue ==========
let text_continue = '';
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  text_continue += i;
}

console.log(text_continue);

// ========== (예제) Loops_label ==========
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + " * " + j + " = " + i*j);
    break;
  }
}

end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + " * " + j + " = " + i*j);
    break end;
  }
}

// ========== (연습 문제 #2) ==========
const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);

// ========== (연습 문제 #3) ==========
for (let i = 2; i <= 9; i++) {
  for (j = 1; j <= 9; j++) {
    console.log(`${i}단: ${i} * ${j} = ${i*j}`);
  }
}

// ========== (예제) Function_default_value ==========
function print_add(x, y = 10) {
  console.log(x + y);
}

print_add(10, 20, 30);      // 30
print_add(10, 20);          // 30
print_add(10);              // 20
print_add();                // NaN

// ========== (예제) Function_dynamic_parameters ==========
function print_min() {
  console.log(arguments[0] - arguments[1]);
}

print_min(10, 20, 30);      // -10
print_min(10, 20);          // -10
print_min(10);              // NaN
print_min();                // NaN

// ========== (예제) Function_return ==========
function mul(x, y) {
  return x * y;
  console.log("hello"); // 수행되지 않음.
}

function dummy() {}

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(mul(10, 20));     // 200
console.log(dummy());         // undefined
console.log(checkAge(14));    // false
console.log(checkAge(23));    // true

// ========== (예제) Function_recursive_function ==========
function recursive(num) {
  if (num == 0) return 0;
  return num + recursive(num - 1);
}

console.log(recursive(3));

function factorial(x) {
  if (x === 0) return 1;

  return x * factorial(x - 1);
}

const num_fac = 5;
let result_fac = factorial(num_fac);

console.log(`The factorial of ${num_fac} is ${result_fac}`);

// ========== (예제) Function_callback ==========
function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function multi(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 8, 4));       // 12
console.log(calculator(sub, 8, 4));       // 4
console.log(calculator(multi, 8, 4));     // 32
console.log(calculator(div, 8, 4));       // 2

// ========== (연습 문제 #4) ==========
function MAX(x, y) {
  if (x >= y) { return x; }
  else { return y; }

  // return (x > y) ? x : y;
}
console.log(MAX(0, 3));     // 3
console.log(MAX(-1, 5));    // 5
console.log(MAX(100, 7));   // 100

function MIN(x, y) {
  if (x < y) { return x; }
  else { return y; }

  // return (x < y) ? x : y;
}
console.log(MIN(0, 3));     // 0
console.log(MIN(-1, 5));    // -1
console.log(MIN(100, 7));   // 7

// ========== (예제) Method_getOwnPropertyDescriptors ==========
function div_1(x, y) { return x / y; }
const div_2 = function (x, y) { return x / y; }
const div_3 = (x, y) => x / y;
const div_4 = div_1;

console.log(div_1 == div_2);
console.log(div_1 == div_4);

console.log(Object.getOwnPropertyDescriptors(div_1));
console.log(Object.getOwnPropertyDescriptors(div_2));
console.log(Object.getOwnPropertyDescriptors(div_3));
console.log(Object.getOwnPropertyDescriptors(div_4));

let list = ["john", 26, function hello() {console.log('hello');}];
let obj = {
  name: "john",
  age: 26,
  hello() {
    console.log('hello');
  },
}

function hello() { console.log('hello'); }

hello();
obj.hello();
list[2]();

console.log(typeof hello);
console.log(typeof obj.hello);
console.log(typeof list[2]);

console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptors(list));

// ========== (예제) Method ==========
function hi_method() { console.log("hi_method"); }
function bye_method() { console.log("bye_method"); }

let obj_method = {
  name: "john",
  age: 26,
  func: hi_method,
}

hi_method();                                      // hi_method
obj_method.func();                                // hi_method
console.log(hi_method == obj_method.func);        // true

obj_method.func = bye_method;
bye_method();                                     // bye_method
obj_method.func();                                // bye_method
console.log(hi_method == obj_method.func);        // false
console.log(bye_method == obj_method.func);       // true

// ========== (예제) Method_this ==========
let user_this = { name: 'john' };
let admin_this = { name: 'admin' };

function this_func() {
  console.log("hello, " + this.name);
}

user_this.func = this_func;     // 객체에 메서드 추가
admin_this.func = this_func;    // 객체에 메서드 추가

user_this.func();         // hello, john
admin_this.func();        // hello, admin

user_this["func"]();      // hello, john
admin_this["func"]();     // hello, admin

// ========== (예제) Number_Exponential Notation ==========
let billion_1 = 1000000000;
let billion_2 = 1e9;
let us = 1e-6;

console.log(billion_1);
console.log(billion_2);
console.log(us);            // 0.000001

// ========== (예제) Number_Base ==========
console.log(0x0f);        // 15
console.log(0o17);        // 15
console.log(0b1111);      // 15

// ========== (예제) Number_Type_casting ==========
console.log(Number.MAX_VALUE);              // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);              // 5e-324
console.log(Number.MAX_SAFE_INTEGER);       // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);       // -9007199254740991
console.log(Number.POSITIVE_INFINITY);      // Infinity
console.log(Number.NEGATIVE_INFINITY);      // -Infinity
console.log(Number.NaN);                    // NaN
console.log(NaN);                           // NaN
