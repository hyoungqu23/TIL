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