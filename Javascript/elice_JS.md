# 논리력 퀴즈
## 01. 몸풀기
### 조건문
조건문이란 어떤 조건에 따라 특정 행동을 하는 프로그래밍의 구문.
특히, 글로 풀어 쓴 논리적 언어를 Pseudo-code(의사코드, 슈도코드)라고 한다.
```
if 조건:
  명령1
else:
  명령2
```
### 아이슈타인 퍼즐
객체 지향 프로그래밍(OOP, Object Oriented Programming)
특정한 위치, 모자, 차를 가지고 있다는 하나의 공통된 특징을 가지고 있는 집단, 즉 "클래스"가 된다. 이 클래스의 특징들을 가진 하얀 토끼, 모자 장수, 하트 여왕을 "객체(Object)"가 된다.

## 02. 논리적 사고
### 케이크 문제
#### 단순 반복(Iteration)을 통한 해결

1. 자연수 3개를 받을 함수 solver를 만든 다음, 그 중 가장 작은 수 minimum을 찾는다.
2. check_list가 minimum 이하일 때까지 while loop을 설정한다.
3. possible_range로 구성 가능한지 체크해 볼 조합의 범위를 각 input들에 대해 num을 각각 input1, input2, input3으로 나눈 몫으로 둔다.2
4. 기본적으로 구성 가능한지(feasibility)를 False로 두고, input1, input2, input3을 범위 내에서 조합하여 num을 구성할 수 있는지를 확인한다.
5. 확인하여 구성 가능하다면 feasibility를 True로 두고, check_list에 넣는다.
6. 모든 가능한 조합에서 num을 조합할 수 없다면 그대로 False로 두고, check_list를 비운다.3
7. 다음 num의 크기를 1씩 더해주며 계속 while loop을 돌리고, check_list에 minimum 수만큼 채워지면 check_list의 첫 번째 수보다 1 작은 값을 답으로 리턴한다.
#### 동적 계획법(DP, Dynamic Programming)

위의 1번 코드는 생각하기는 쉽지만 연산 속도가 너무 오래 걸린다는 단점이 있습니다. 예를 들어 100이 구성 가능한지를 7, 11, 17의 조합으로 확인하려면 최대 14*9*5 = 630번의 연산을 해야 하고, 101, 102, 103... 언제 끝날 지 모르는 연산을 계속해서 해야 한다면 연산 수는 엄청나게 늘어나겠죠.
​
동적계획법(Dynamic Programming)을 사용한다면 더 쉽게 문제를 해결할 수 있습니다. 

7, 11, 17의 경우, 0부터 17까지만 체크해서 구성 가능 여부를 기록해 둔 다음, 18부터는 -7, -11, -17을 해 보았을 때 구성가능했는지를 확인해보면 됩니다. 이 때 구성 가능하다면, 그 뺀 수를 한 번 더 사용하면 구성 가능하다는 의미니까요. 그리고 계속해서 기록해 나가면 됩니다.
​
이 경우, 17까지만 체크하고 나니 그 뒤에는 기록했던 것을 체크해 보고 다시 기록을 추가하기만 하면 되니 연산이 아주 빨라지게 되겠죠?
​
1. memoization_table을 만들고 True를 하나 넣어 놓는다. (왜냐하면 0은 항상 조합 가능)
2. 1번 코드의 for문을 적용하여 세 개의 input 중 가장 큰 수까지 구성가능한지를 체크하며 memoization_table에 기록한다.
3. check_list가 다 채워질 때까지 while문을 1번 코드처럼 적용하되, 구성가능한지를 memoization_table을 이용해 판단한다.
*현재 num에서 input1 or input2 or input3를 뺀 수가memoization_table에서 구성 가능하다고 되어 있다면 거기서 input1or input2 or input3를 한 번 더 쓰면 현재 num이 나오므로 마찬가지로 구성 가능하다고 기록한다.
4. 다음 num의 크기를 1씩 더해주며 계속 while loop을 돌리고, check_list에 minimum수만큼 채워지면 check_list의 첫 번째 수보다 1 작은 값을 답으로 리턴한다.

### 달력 문제
식을 이용한 완전탐색 (Brute Force)

# 1장 JavaScript 소개
## 01. JavaScript 소개
### JavaScript
- 이미지 슬라이드 효과, 팝업 효과 등의 기능을 포함한 동적인 웹 사이트 제작 시 사용되는 프로그래밍 언어
- 범용적인 언어로, IoT, 하이브리드 앱, 서버 개발 등에서도 활용 가능

## 02. JavaScript 변수
### 변수(Variables)
- 데이터를 담는 공간을 의미
### 변수 선언 및 데이터 저장
- 변수 선언: 데이터를 담을 공간을 생성
- 변수 초기화: 생성된 변수에 데이터를 전달
```javascript
var fruit_1;            // 변수 선언
fruit_1 = "apple"       // 변수 초기화

var fruit_2 = "grape";  // 변수 선언 및 초기화
```
### 데이터 변경
이미 선언된 변수에 전달된 데이터를 변경할 수 있다.
```javascript
fruit_1 = "banana";     // 데이터 변경
```
### 변수 안의 데이터 확인
`console.log(변수명)` 명령어를 활용해 변수 안의 데이터를 확인할 수 있다.
`document.write(변수명)` 명령어를 활용해 변수의 데이터를 웹 화면에 출력할 수 있다.
`document.writeln(변수명)` 명령어를 활용해 출력값 사이에 공백을 넣을 수 있다.
```javascript
console.log(fruit_1);   // banana 출력
```
### 변수 생성 시 주의사항
1. 변수명은 숫자로 시작할 수 없다.
2. 변수명은 최대한 자세히 작성하는 것이 좋다.
3. 의미가 불명확한 단어들의 조합은 피하는 것이 좋다.

## 03. JavaScript 데이터 타입
변수에 전달되는 데이터 타입에도 여러 종류가 존재한다.
![8type](img/8%20Data%20Type.jpg)
### String
"큰 따옴표", '작은 따옴표' 등의 안에 작성된 데이터
두 따옴표를 혼용할 수 없고, 부득이한 경우 이스케이프 문자('\\')를 활용해 사용 가능하다.
```javascript
var str1 = "Hello World";
var str2 = 'Nice to meet you';
var str3 = "20";  // 숫자 아닌 문자열
var str4 = "He's a boy.";
var str5 = 'He\'s a boy.';
```
### Number
별도의 기호 없이 숫자를 입력한 데이터
```javascript
var num1 = 10;    // 정수
var num2 = -12;   // 음수
var num3 = 3.14;  // 실수

var str1 = "10";
console.log(var1 === str1);    // false
```
### Function
#### 함수 생성
`function` 키워드를 활용해 생성
#### 함수 호출
해당 함수 내부의 코드를 실행시키기 위해 호출
```javascript
var func1 = function() {
  console.log('Func 1');
} // 함수 생성

func1(); // 함수 호출

function func2() {
  console.log("Func 2");
} // 함수 생성

func2(); // 함수 호출
```
#### 매개변수
인자로부터 전달받은 값이 들어가는 통로로, 상황에 따라 생략 가능하다.
#### 인자
함수에게 전달하는 데이터를 의미한다.
#### `return`
함수 안에 데이터를 저장할 때 사용한다.
```javascript
var area = function(width, height) {  // 매개변수
  return width * height;   // return
}

area(10, 20);   // 인자
```

### Array
비슷한 성격을 가진 데이터를 하나의 변수 안에서 관리하는 데이터 타입
```javascript
var fruits = ["apple", "banana", "watermelon"];

console.log(fruits);
```
#### 배열의 데이터 추출
데이터의 좌표 값(index)를 활용해 추출할 수 있다.
첫 번째 좌표 값은 `0`이다.
#### 배열의 데이터 변경
데이터의 좌표를 활용해 데이터에 접근 후 새로운 데이터를 대입할 수 있다.
```javascript
var fruits = ["apple", "banana", "watermelon"];

console.log(fruits[0]);   // apple 출력

fruits[1] = "grape";      // 배열 데이터 변경
console.log(fruits[1]);   // grape 출력 
```
### Object
Property(이름을 가지고 있는 데이터의 이름), Method(이름을 가지고 있는 함수들의 이름), Data로 구성되어, 여러 종류의 데이터 타입을 삽입할 수 있다.
#### 객체 데이터 작성
`{ }` 내부에 `Property: Data` 혹은 `Method: Function` 방식으로 데이터를 삽입할 수 있다.
#### 객체 데이터 출력
`objectName.propertyName` 혹은 `objectName["propertyName"]`을 통해 객체 데이터를 출력할 수 있다.
#### 객체 데이터 변경
객체 데이터를 추출한 후 변경할 데이터를 대입하여 변경할 수 있다.
```javascript
var student = {
  name: "James",    // Property: Data
  age: 28,
  skills: ["JavaScript", "React.JS", "HTML", "CSS"],
  sum: function (num1, num2) {
    return (num1 + num2 / 2)
    } // Method: Function
}

console.log(student.name);    // `objectName.propertyName`
console.log(student['name']); // `objectName["propertyName"]`

student["name"] = "Smith";
student.age = 29;
console.log(student["name"]); // Smith 출력
console.log(student.age); // 29 출력
```
### `undefined`, `null`
#### `undefined`
변수 안에 데이터를 입력하지 않은(초기화 되지 않은) 상태(데이터가 없는 것)
#### `null`
개발자가 임의로 변수 안에 빈 데이터를 삽입한 상태(빈 데이터를 지정한 것)
```javascript
var unde;
console.log(unde); // undefined 출력

var empty = null;
console.log(empty); // null 출력
```
### Boolean
참 또는 거짓 데이터가 들어가 있는 상태
```javascript
var t = true;
var f = false;
```

## 04. JavaScript Property & Method
[참고자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)
JavaScript에서 사용자를 위해 사전에 작성된 편의 기능을 의미
### String Property & Method
```javascript
var str1 = "Hello World";

str1.length;      // 문자열 길이(11 출력)
str1.charAt(0);   // 해당 index의 문자 추출(H 출력)
str1.split(" ");  // 공백 기준으로 문자를 나눈 후 배열로 출력([Hello, World] 출력)
```
### Array Property & Method
```javascript
var fruit = ["Apple", "Banana", "Orange"];

fruit.length;             // 배열 길이(3 출력)
fruit.push("Melon");      // 배열 뒤 데이터 삽입
fruit.unshift("Lemon");   // 배열 앞 데이터 삽입
fruit.pop();              // 마지막 데이터 제거
fruit.shift();            // 첫 데이터 제거
```
### Math Library Method
```javascript
Math.abs(-3);       // 절대값(3 출력)
Math.ceil(0.3);     // 올림(1 출력)
Math.floor(10.9);   // 내림(10 출력)
Math.random();      // 임의의 숫자 출력
```
### Number Method
```javascript
parseInt("20.6");     // 정수 형태의 숫자 20으로 변환(내림)
parseFloat("20.6");   // 실수 형태의 숫자 20.6으로 변환
```

# 2장 JavaScript 기초 문법 및 활용
## 01. 연산자
### 산술 연산자
사칙연산(`+`, `-`, `*`, `/`)과 나머지(`%`) 연산자가 존재한다.
숫자뿐만 아니라 문자열도 산술 연산자로 사용할 수 있다.
```javascript
console.log(20 + 10);   // 30 출력
console.log(20 - 10);   // 10 출력
console.log(20 * 10);   // 200 출력
console.log(20 / 10);   // 2 출력
console.log(20 % 10);   // 0 출력

console.log("20" + "10");   // 2010 출력
console.log("20" - "10");   // 10 출력
console.log("20" * "10");   // 200 출력
console.log("20" / "10");   // 2 출력
console.log("20" % "10");   // 0 출력
```
### 증감 연산자
```javascript
var num = 10;

console.log(++num);   // 1 더한 후 num 출력 (11 출력)
console.log(--num);   // 1 뺀 후 num 출력 (10 출력)
console.log(num++);   // num 출력 후 1 더하기 (10 출력)
console.log(num--);   // num 출력 후 1 빼기 (11 출력)
```
### 비교 연산자
`Boolean` 값을 반환한다.
```javascript
console.log(10 == 20);    // 값 비교(false 출력)
console.log(10 === 20);   // 값과 데이터 타입 비교(false 출력)
console.log(10 !== 20);   // 값 비교(true 출력)

console.log(10 > 20);     // 값 비교(false 출력)
console.log(10 >= 20);    // 값 비교(false 출력)
console.log(10 < 20);     // 값 비교(true 출력)
console.log(10 <= 20);    // 값 비교(true 출력)
```
### 논리 연산자
```javascript
console.log(10 === 10 && 20 === 30);    // 모두 참인 경우에만 true 반환(false 출력)
console.log(10 === 10 || 20 === 30);    // 모두 거짓인 경우에만 false 반환(true 출력)
```
## 02. 조건문
주어진 조건에 따라 결과값을 출력하는 구문.
보통 조건으로 비교 연산자나 논리 연산자를 사용한다.
### if 문
> if ( 조건 ) { 동작문 }
```javascript
var a = 20;
var b = 40;

if (a < b) {
  console.log("a는 b보다 작다.");
}
```
### if ~ else 문
> if ( 조건 ) { 동작문 } else { 동작문 }
```javascript
var a = 20;
var b = 40;

if (a < b) {
  console.log("a는 b보다 작다.");
} else {
  console.log("a는 b보다 크거나 같다.");
}
```
### if ~ else if ~ else 문
> if ( 조건 ) { 동작문 } else if ( 조건 ) { 동작문 } else { 동작문 }
```javascript
var a = 20;
var b = 40;
var c = 60;

if (a > b) {
  console.log("a는 b보다 크다.");
} else if (b > c) {
  console.log("b는 c보다 크다.");
} else if (c > a) {
  console.log("c는 a보다 크다.");
} else {
  console.log("모든 조건에 위배된다.");
}
```
### 중첩 if 문
```javascript
var a = 20;
var b = 40;

if (a !== b) {
  if (a > b) {
    console.log("a는 b보다 크다.");
  } else {
    console.log("a는 b보다 작다.");
  }
} else {
  console.log("a와 b는 같다.");
}
```
## 03. 반복문
### for 문
> for (초기화한 변수 값; 조건; 증감 표시) { 동작문 }
```javascript
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```
### while 문
> while ( 조건 ) { 동작문 }
```javascript
var num = 0;

while (num < 10) {
  console.log(num);
  num++;
}
```
### do ~ while 문
반드시 한 번은 실행시켜야 하는 반복문에서 사용한다.
> do { 동작문 } while ( 조건 );
```javascript
var i = 12;

do {
  console.log(i);
  i++;
} while (i < 10);
```
## 04. JavaScript 활용
### 주사위
```javascript
var dice = Math.floor(Math.random() * 6) + 1;
```
### 소수
```javascript
function isPrime(n) {
  var divisor = 2;
  while (n > divisor) {
    if (n % divisor === 0) {
      return false;
    } else {
      divisor++;
    }
  } return true;
}
```
### 문자열 뒤집기
```javascript
function reverse(str) {
  var reverseStr = "";
  for (var i = str.length - 1; i >=0; i--) {
    reverseStr = reverseStr + str.charAt(i);
  } return reverseStr;
}
```

# 3장 JavaScript 문제 풀기
## 01. 출력하기
[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) Method를 활용해 [콘솔(Console)](https://ko.javascript.info/devtools)에 특정 메시지를 출력할 수 있다.
[`Escape sequences`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84_%ED%91%9C%ED%98%84)를 활용하면 일반적인 출력 문자 외의 특수 문자를 작성할 수 있다. ([참고](https://ko.javascript.info/string#ref-26))

```javascript
// console.log() 출력
console.log("Hello, JavaScript!");

// Escape sequences 활용
console.log("(\\_/)\n(. . )\n|\\ /|");
```

## 02. 변수와 연산자

숫자 데이터 타입([Number](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number), [Number](https://ko.javascript.info/number))은 [산술 연산자](https://ko.javascript.info/operators) `+`, `-`, `/`, `*`을 통해 사칙 연산을 할 수 있고, 문자 데이터 타입([String](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String), [String](https://ko.javascript.info/string))는 `+`을 통해 문자열을 추가할 수 있다.

```javascript
// Number Operator
var num = 1030;
num = num + 204;
console.log(num);         // 1234 출력

// String Operator
var string = 'hello, ';
string = string + "JavaScript!";
console.log(string);     // hello, JavaScript! 출력
```

## 03. 값 입력 받기
[참고자료](https://bluehorn07.tistory.com/49)
#### `readline` 모듈 불러오기
`readline` 모듈은 JavaScript에 내장된 모듈로 Readable 스트림에서 한 줄씩 입출력을 처리할 수 있도록 도와준다.
JavaScript에서는 콘솔을 통해 값을 입력받기 위해 `readline` 모듈을 활용해야 한다. 우선 모듈을 하단 코드로 불러와야 한다.
```javascript
const readline = require("readline");
```
불러온 모듈은 `readline` 변수에 저장한다. 이때 `const`는 선언한 변수가 값을 변경할 수 없는 상수임을 나타낸다.

#### `readline` 인터페이스 객체 만들기
이후, `readline` 모듈을 이용해 입출력을 위한 인터페이스 객체를 만들어야 한다.
우선, 정의한 변수(`rl`)에 `createInterface()` Method를 이용해 `readline` 인터페이스 객체를 하나 만들고 저장한다.
`readline` 인터페이스 객체를 이용해 콘솔에서 표준 입출력을 처리할 수 있다.
```javascript
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```
#### `on` Method
생성한 `rl` 객체로 입출력과 관련된 여러 이벤트를 처리할 수 있다.
`on` Method를 이용해 이벤트가 발생할 때 실행할 동작을 지정할 수 있다.

1. `line` 이벤트
사용자가 콘솔에 입력할 때 발생하는 이벤트로, 입력 스트림에 줄바꿈을 나타내는 `\n`, `\r`, `\r\n` 등 제어문자가 나타나거나, 사용자가 `Enter` 또는 `Return`을 누를 때 발생한다.
```javascript
rl.on("line", (input) => {  // "line" 이벤트 발생 시 입력된 값은 변수 `input`에 저장된다.
  console.log(input);  // 한 줄씩 입력받은 후 실행할 코드(-> 입력한 값을 `input`에 저장한 후 그대로 콘솔에 출력하는 코드)
  rl.close(); // close가 없으면 입력을 무한히 받는다.
});
```

2. `close` 이벤트
`close` 이벤트는 Readable 스트림 종료를 제어하는 이벤트로, 더 이상 입력 받을 것이 없는 경우에 `rl.close()`를 호출하여 발생시킬 수 있다.
```javascript
rl.on('close', () => {
  // 입력이 끝난 후 실행할 코드
})
```
---
#### 배열 Method `filter()`, `forEach()`
[참고자료](https://7942yongdae.tistory.com/49)
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
[JavaScript Info](https://ko.javascript.info/array-methods#ref-317)
배열의 특정 값을 제거하기 위해 `filter()`를 활용할 수 있다. `filter()`를 사용해 여러 조건을 만족하는 요소를 찾을 수 있다. `filter()`는 `find()`와 문법이 유사하지만, 조건에 맞는 요소 전체를 담은 배열을 반환한다는 점에서 차이가 있다.
> arr.filter(function(item, index, array) { });
```javascript
// 배열의 특정 요소를 제거하기
Array.filter((element) => element !== '제거할 요소');

// 배열의 특정 id를 반환하기
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let someUsers = users.filter(item => item.id < 3);    // 앞쪽 사용자 두 명을 반환합니다.

alert(someUsers.length); // 2
```

```javascript
// fruits 배열을 만들어 과일들을 입력받고, fruits 배열에서 콩과 무를 제거하세요.
// 과일이 아닌 것을 잘 제거했는지 console.log를 통해 배열을 출력해 확인해봅니다.
var fruits = [];

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => { 
    fruits = line.split(' ').map(e => e);   // 입력된 값을 띄어쓰기로 구분해 배열에 삽입.
    fruits.filter((e) => e.length !== 1);   // 길이가 1인 것 제거.
    rl.close();
});

rl.on('close', () => {
  fruits.forEach(e => {   // 주어진 함수를 배열 요소 각각에 대해 실행하는 Method
    console.log(e);
  })
})
```
[`forEach()`](https://ko.javascript.info/array-methods#ref-313) Method를 활용해 배열의 요소 각각에 특정 함수를 실행할 수 있다.

#### 배열 Method `split()`, `map()`, 형 변환 함수 `parseInt()`
[`split()`](https://ko.javascript.info/array-methods#ref-322)을 활용해 한 번에 여러 입력을 받을 수 있다. 매개 변수로 지정한 문자가 입력의 구분 대상이 된다.
```javascript
var input = [];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    input = line.split(' ').map((e)=> parseInt(e));   // 입력된 값을 띄어쓰기로 구분해 숫자로 배열에 삽입.
    rl.close();
})

rl.on("close", function () {
    console.log(input[0]);
    console.log(input[1]);
    console.log(input[2]);
});
```
이때 반드시 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환하는 Method인 [`map()`](https://ko.javascript.info/array-methods#ref-319)과 [`parseInt()`](https://ko.javascript.info/number#ref-232)을 통해 숫자 연산을 할 수 있도록 숫자형으로 변환해주어야 한다.
```javascript
// 여러 숫자를 입력 받도록 코드를 작성하여, 입력된 숫자의 평균을 구하세요.
var input = [];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    input = line.split(' ').map((e)=> parseInt(e));   // 입력된 값을 띄어쓰기로 구분해 숫자로 배열에 삽입.
    rl.close();
})

rl.on("close", function () {
    console.log(Math.floor((input[0] + input[1] + input[2]) / 3));
});
```

## 04. 화살표 함수
[JavaScript Info](https://ko.javascript.info/arrow-functions-basics)
`function` 키워드 대신 `=>`(화살표)를 활용해 함수를 간편하게 생성할 수 있다.
```javascript
const arrowFunc = (x, y) => {
  return x + y;
}
```
```javascript
const list = ["apple", "samsung", "LG"];

list.map((e)=>{     // 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환.
  return e.length;
});
```

## 05. 문자열 나누기
`split()`을 활용해 문자열을 나누어 배열로 반환할 수 있다. 또한, 문자열을 `+` 연산자를 통해 붙일 수도 있다.
```javascript
var Array = money.split("500원");
console.log(Array);     // ["5", "0", "0", "원"];

const hangul = "가나다라마바사아자차카타파하"
var Words = hangul[0] + hangul[10] + hangul[-1];
console.log(Words);     // 가차하
```

## 06. 배열 Method `splice()`, `join()`, `sort()`
배열을 [`splice()`](https://ko.javascript.info/array-methods#ref-310)를 활용해 특정 값을 제거할 수 있고, 이를 [`join()`](https://ko.javascript.info/array-methods#ref-310)을 활용해 배열의 원소를 이어 붙여 문자열로 만들 수 있다.
> arr.splice(index[, deleteCount, elem1, ..., elemN]);
```javascript
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // 인덱스 1부터 요소 한 개를 제거

console.log(arr); // ["I", "JavaScript"]
```
```javascript
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // 배열 요소 모두를 ;를 사용해 하나의 문자열로 합칩니다.

console.log( str ); // Bilbo;Gandalf;Nazgul
```

[`sort()`](https://ko.javascript.info/array-methods#ref-320) 함수 내에 정렬 함수를 매개변수로 하여 배열의 정렬을 실행할 수 있다. 이는 배열 자체를 변경하는 Method이다. 요소는 문자열로 취급되어 재정렬된다.
[참고](https://hianna.tistory.com/409), [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
```javascript
let arr = [ 1, 2, 15 ];

// arr 내부가 재정렬된다.
arr.sort();

alert( arr );  // 1, 15, 2
```

```javascript
var soldier = [12, 2, 5, 3, 7, 4, 10, 8, 1, 9, 13, 11, 6];

// 정렬된 배열과 길이를 구하세요.

soldier = soldier.sort(function(a, b) {
    return a - b;
});

var count = 0;
count = soldier.length;
```
## 07. 정규표현식
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)
[JavaScript Info](https://ko.javascript.info/regular-expressions)
문자열에서 특정 문자의 개수를 세기 위해서는 `match`와 정규 표현식을 활용해야 한다.
정규표현식(Regular Expression)은 문자 검색과 교체에 사용되는 패턴으로 강력한 기능을 제공한다. 패턴(pattern)과 선택적으로 사용할 수 있는 플래그(flag)로 구성된다.


### Flag
플래그([Flag](https://ko.javascript.info/regexp-introduction#ref-2))는 검색에 영향을 주는 6가지로 구성되어 있다.

1. `i`: `i` 플래그가 붙으면 대·소문자 구분 없이 검색한다.
2. `g`: `g` 플래그가 붙으면 패턴과 일치하는 모든 것들을 검색한다. 즉, `g` 플래그가 없으면 패턴과 일치하는 첫 번째 결과만 반환된다.
3. `m`: 다중 행 모드(multiline mode)를 활성화하는 플래그.
4. `s`: `.`이 개행 문자 `\n`도 포함하도록 ‘dotall’ 모드를 활성화하는 플래그.
5. `u`: 유니코드 전체를 지원하는 플래그. 서로게이트 쌍(surrogate pair)을 올바르게 처리할 수 있다.
6. `y`: 문자 내 특정 위치에서 검색을 진행하는 ‘sticky’ 모드를 활성화하는 플래그.

### Pattern
1. `\d` – 숫자
2. `\D` – 숫자가 아닌 문자
3. `\s` – 스페이스, 탭, 줄 바꿈 문자
4. `\S` – `\s`를 제외한 모든 문자
5. `\w` – 라틴 문자, 숫자, 밑줄 '_'
6. `\W` – `\w`를 제외한 모든 문자
7. `.` – 정규 표현식 's' 플래그가 있으면 모든 문자, 없으면 줄 바꿈 `\n`을 제외한 모든 문자

```javascript
var words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];

// 지시사항을 참고하여 코드를 작성하세요.
words.splice(4, 2);
words.splice(5, 3);

const lyrics = words.join(' ');
console.log(lyrics);

const count = lyrics.match(/p/g);     // p 를 찾는 방법.
console.log(count.length);
```

## 07. 다중 입력
여러 줄의 입력을 처리해야 하는 경우 현재의 입력이 몇 번째 입력인지 변수를 만들어 조건문으로 처리할 수 있다.
```javascript
var count = 0; // 몇 번째 입력인지 기록
rl.on("line", function (x) {
  count += 1; // 입력 횟수가 증가

  if (count === 1) {
    // 첫 번째 입력인 경우 동작
  } else if (count === 2) {
    // 두 번째 입력인 경우 동작
  } else if (count === 3) {
    // 세 번째 입력인 경우 동작
  } else {
    // 네 번째 입력인 경우 동작
    rl.close(); // 입력 종료
  }
}).on("close", function () {
  // 입력 종료 후 동작할 코드
});
```
다만, 주어지는 입력 줄 수가 일정하지 않은 경우 `N`을 통해 주어진 입력 줄 수를 확인할 수 있다.
```javascript
// N줄에 걸쳐 주어지는 문자를 문자열로 만들어 출력하세요.
var count = 0;        // 입력된 문자의 숫자
var N = 0;            // 총 입력 줄 수
var str = '';

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else if (count < N+1) {
    str += line;
    count++;
  }
  if (count === N+1) {
    rl.close();
  }
}).on("close", function () {
  console.log(str);
  process.exit();
});
```

# 4장 JavaScript 연습 문제
## 01. 입력과 조건문
입력받은 `line`은 문자열로 인식되기 때문에 `Number()`, [`parseInt()`](https://ko.javascript.info/number#ref-1739)를 통해 숫자형으로 변경해주어야 한다.
```javascript
// 지시사항을 참고하여 코드를 작성하세요.
var rate;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    rate = parseInt(line);
    if (rate >= 50) {
        console.log("우산을 챙긴다.");
    } else {
        console.log("그냥 간다.");
    }
    rl.close();
})

rl.on("close", function () {

});
```
## 02. 입력과 다중 조건문
[`if ~ else if ~ else`](https://ko.javascript.info/ifelse) 구문을 활용해 여러 조건을 적용할 수 있다.
```javascript
// 터미널에 엘리스 토끼가 가진 금액을 입력할 수 있으며 입력된 금액에 따라 결과를 출력합니다.
// 조건문을 이용해 문제를 해결할 수 있습니다.
// 지시사항을 참고하여 코드를 작성하세요.
var money;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    money = parseInt(line);
    if (money >= 1000) {
        console.log("택시");
    } else if (money >= 500) {
        console.log("버스");
    } else if (money >= 300) {
        console.log("지하철");
    } else {
        console.log("도보");
    }
    rl.close();
})

rl.on("close", function () {

});
```
## 03. 입력, 연산자, 조건문
[논리 연산자](https://ko.javascript.info/logical-operators)(`and`, `or`) 와 [비교 연산자](https://ko.javascript.info/comparison)(`>`, `<`, `<=`, `>=`)를 활용해 여러 조건을 만들 수 있다.
```javascript
// 지시사항을 참고하여 코드를 작성하세요.
var pw = [];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    pw = line.split(' ').map((e) => parseInt(e));
    const [a, b, c, d] = pw;
    if (a <= b && a == d && b > c && c < 6) {
        console.log(true);
    } else if (a == b && a == c && a == d) {
        console.log(true);
    } else {
        console.log(false);
    }
    rl.close();
})

rl.on("close", function () {

});
```

## 04. 입력, 배열, 반복문, 조건문
약수 구하는 알고리즘과 조건에 맞는 출력 방식 구하기.
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
```javascript
var num;
let i = 1;
let list = [];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    num = parseInt(line);

    while (i <= num) {
        if (num % i == 0) {     // 나누어 떨어지는(나머지가 0이 되는) 경우에 list 배열에 추가하기.
            list.push(i);
        }
        i++;
    }
    
    console.log(list.splice(0, 10).join(" "));    // 한 줄에 10개씩 한칸씩 띄워 출력하기
    console.log(list.join(" "));
    rl.close();
})

rl.on("close", function () {

});
```

## 05. 369게임
숫자를 문자열로 변경한 후 [`indexOf()`](https://ko.javascript.info/string#ref-1774) Method를 활용해 `3`, `6`, `9`를 포함하고 있는 경우 `짝!`를 출력하는 방식으로 진행할 수 있다.
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
```javascript
// 반복문을 이용하여 3, 6, 9 게임을 만들어주세요!
for (var i = 1; i<=30; i++) {
    var str = String(i);
    if (str.indexOf("3") !== -1 || str.indexOf("6") !== -1 || str.indexOf("9") !== -1) {
        console.log("짝!");
    } else {
        console.log(i);
    }
}
```

## 06. 숫자 출력
[반복문](https://ko.javascript.info/while-for)을 활용해 문자열을 이어 붙이는 방식으로 구현할 수 있다.
```javascript
// 지시사항을 참고하여 코드를 작성하세요.
var num;
var str = "";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    num = parseInt(line);
    
    for (var cnt = 1; cnt <= num - 1; cnt++) {
        str = str + cnt + ", " 
    }
    console.log(str + num);
    rl.close();
})

rl.on("close", function () {

});
```

## 07. 피보나치 수열
피보나치 수열은 피보나치 수(Fibonacci numbers)는 첫째 및 둘째 항이 `1`이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열을 의미한다.
이 문제에서는 첫 항을 `0`, 둘째 및 셋째 항이 `1`로 구성되어 있다고 가정한다.
[`pop()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
[`push()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
[`push()`, `pop()`](https://ko.javascript.info/array#ref-1454)
[`break()`](https://ko.javascript.info/while-for#ref-1598)
```javascript
// 지시사항을 참고하여 코드를 작성하세요.
var num;
var list = [0, 1];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    num = parseInt(line);
    
    while (true) {
        if (num === 1) {
            const arr = list.pop();                                       // `num`이 1인 경우 피보나치 수열의 첫째 항만 출력한다.
            console.log(arr);
            break;
        } else if (list[list.length-2] + list[list.length-1] >= num) {    // 피보나치 수열에 마지막으로 추가될 항이 `num`보다 크거나 같은 경우
            console.log(list);                                            // 피보나치 수열을 연장하지 않고 그대로 출력한다.
            break;
        } else {
            list.push(list[list.length-2] + list[list.length-1]);         // 마지막 2항을 더해 새로운 피보나치 수열을 추가한다.
        }
    }
    
    rl.close();
})

rl.on("close", function () {

});
```

## 08. 정규표현식과 `match()`
[참고](https://curryyou.tistory.com/234)
[정규표현식](https://ko.javascript.info/regular-expressions)
문자열 내 특정 문자가 포함되는지를 확인하기 위해서는 [`문자열.includes("확인할 문자")`](https://ko.javascript.info/string#ref-1776)를 사용하면 된다.
[`str.match(regexp)`](https://ko.javascript.info/regexp-introduction#ref-2133)을 통해 해당 정규표현식으로 표현되는 것을 검색하여 배열로 반환할 수 있다.
```javascript
// "촉촉한 초코칩"이 몇 번 나오는지 확인해봅시다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    if (line.includes("촉촉한 초코칩")) {                   // 해당 문구를 포함하고 있으면
        console.log(line.match(/촉촉한 초코칩/g).length);   // 모든 문구를 배열로 반환한 후 해당 배열의 길이를 통해 몇 번 검색되었는지 파악할 수 있다.
    } else {
        console.log(0);     // 없는 경우 '0' 출력
    }
    rl.close();
})

rl.on("close", function () {

});
```

## 09. 정규표현식과 `replace()`
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
[참고자료(정규표현식)](https://beomy.tistory.com/21)
[정규표현식](https://ko.javascript.info/regular-expressions)
```javascript
// 지시사항을 참고하여 코드를 작성하세요.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    let str = line;
    str = str.replace(/\s/g, "링디기디기\n");             // 공백을 "링디기디기"로
    str = str.replace(/\./g, "딩딩딩\n");                 // 마침표를 "딩딩딩"으로
    str = str.replace(/[^링디기딩\n]/g, "링딩동 ");       // 그 중 위에서 변환한 "링디기디기", "딩딩딩"이 아닌 다른 모든 문자를 "링딩동"으로
    
    console.log(str);
    rl.close();
})

rl.on("close", function () {

});
```

## 10. 다중 입력과 `substr()`
[참고자료(내림/올림)](https://deeplify.dev/front-end/js/decimal-point-control)
[참고자료(문자열자르기)](https://gent.tistory.com/414)
```javascript
/// 지시사항을 참고하여 코드를 작성하세요.
var count = 0;
var bat = 16;
var hit = 6;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    if (count === 0) {                  // 첫 번째 줄 입력이면
        bat += parseInt(line);          // 타수에 추가하고
        count++;
    } else if (count === 1) {           // 두 번째 줄 입력이면
        hit += parseInt(line);          // 안타에 추가하고
        count++;

        let strBa = String(Math.floor((hit/bat * 1000))/1000);      // 타율을 소수점 3자리까지 계산해서 문자열로 형 변환
        
        let arr = strBa.split('');      // 형 변환한 문자열을 각각 배열로 분해
        
        if (arr[2] !== '0') {                     // 소수 첫째자리가 존재하면
            console.log(arr[2] + '할');           // X할
        }
        if (arr[3] !== '0' && arr.length > 3) {   // 소수 둘째자리가 존재하고, 소수 셋째자리가 존재하지 않으면
            console.log(arr[3] + '푼');           // X푼
        }
        if (arr[4] !== '0' && arr.length > 4) {   // 소수 셋째자리가 0이 아니고, 존재한다면
            console.log(arr[4] + '리');           // X리
        }

        rl.close();
    }
})

rl.on("close", function () {

});
```
> 참고 | 두 줄에 걸쳐 입력을 받을 때, 이러한 방법도 사용할 수 있다.
> 입력되는 `line`을 배열에 추가하여, 배열의 길이가 `2`가 되면 `rl.close();`를 하는 방법.


## 11. 문자열과 유니코드
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
[`substr()`](https://ko.javascript.info/string#ref-1777)은 시작 인덱스부터 반환할 문자의 개수를 설정할 수 있다. 끝 위치의 인덱스가 아니라 길이를 기준으로 문자열을 추출한다는 점에서 `substring()`, `slice()`와 차이를 보인다.
```javascript
let str = "stringify";
console.log(str.substr(2, 4)); // ring, 두 번째부터 글자 네 개
```
```javascript
let str = "stringify";

// 동일한 부분 문자열을 반환합니다.
console.log( str.substring(2, 6) ); // "ring"
console.log( str.substring(6, 2) ); // "ring"

// slice를 사용하면 결과가 다릅니다.
console.log( str.slice(2, 6) ); // "ring" (같음)
console.log( str.slice(6, 2) ); // "" (빈 문자열)
```
---
```javascript
// 지시사항을 참고하여 코드를 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    let str = line;
    let newStr = '';
    for (let i = 0; i <= str.length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {       // 유니코드 번호가 48 ~ 57인 문자가 바로 숫자 0 ~ 9이기 때문이다.
            newStr += str.substr(i, 1);         // 해당 문자열만 잘라내기
        }
    }
    console.log(newStr);
});

rl.on("close", function () {

});
```

## 12. 객체
[객체](https://ko.javascript.info/object)
```javascript
var scores = {
    "kor": 55,
    "mat": 75,
    "eng": 50
}

function result() {
    if (scores.kor < 40 || scores.mat < 40 || scores.eng < 40) {      // 한 과목이라도 40점 미만이면 과락
        document.write("fail");
    } else if ((scores.kor + scores.mat + scores.eng)/3 < 60) {           // 평균 60점 미만이면 탈락
        document.write("fail");
    } else {
        document.write("pass");
    }
}

result();
```

## 13. 반복문과 조건문
```javascript
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        document.write(i);
    }
}
```

## 14. 배열, 반복문, 조건문
[참고(writeln 줄바꿈)](https://dasima.xyz/javascript-output/)
```javascript
var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]

document.write(foods.length);

for (var i = 0; i <= foods.length -1; i++) {
    if (i % 2 === 0) {
        document.writeln('<br>', foods[i]);
    }
}
```

## 15. `indexOf()`
[`indexOf()`](https://ko.javascript.info/string#ref-1774)
```javascript
const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
var sum = 0; // b로 시작하는 과일의 개수를 저장하는 변수

/*지시사항을 따라 작성해주세요*/
for (var i = 0; i <= fruits.length -1; i++) {
    if (fruits[i].indexOf('b') === 0) {           // 'b'가 맨 첫 인덱스에 있는 문자열이면,
        sum++;
    }
}

document.write("b로 시작하는 과일은 ", sum, "개");
```

## 16. 객체 수정 및 조회
[참고](https://hianna.tistory.com/453)
```javascript
/*지시사항에 따라 작성해주세요.*/
const students = [
  {
      name: 'john',
      studentId: 2020123456,
      major: 'business'
  },
  {
      name: 'elice',
      studentId: 2015111111,
      major: 'statistics'
  },
  {
      name: 'jennifer',
      studentId: 2017000000,
      major: 'visual design'
  }
]

/*1. elice를 찾아 전공을 'computer science'로 바꿔주세요.*/
students[1]['major'] = 'computer science';

/*2. 웹 화면에 students 정보를 출력해 제대로 수정되었는지 확인해보세요.*/
document.writeln(students[0]['name'], '\'s major: ', students[0]['major'], '<br>');
document.writeln(students[1]['name'], '\'s major: ', students[1]['major'], '<br>');
document.writeln(students[2]['name'], '\'s major: ', students[2]['major']);
```