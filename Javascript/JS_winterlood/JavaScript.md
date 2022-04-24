## Truthy, Falsy
JavaScript 내부에서 `true` 혹은 `false`를 반환하는 특정한 값이 존재한다. 이 값들은 정확히 `true`, `false`가 아니지만, 해당 Boolean 값을 반환한다는 의미에서 Truthy, Falsy하다고 표현한다.
```javascript
let a = '';
let b = ' ';
let c = [];
let d = undefined;
let e = "0";
let f = {};
let g = "false";
let h = Infinity;
let i = null;
let j = 0;
let k = NaN;

a ? console.log("TRUE") : console.log("FALSE");       // FALSE
b ? console.log("TRUE") : console.log("FALSE");       // TRUE
c ? console.log("TRUE") : console.log("FALSE");       // TRUE
d ? console.log("TRUE") : console.log("FALSE");       // FALSE
e ? console.log("TRUE") : console.log("FALSE");       // TRUE
f ? console.log("TRUE") : console.log("FALSE");       // TRUE
g ? console.log("TRUE") : console.log("FALSE");       // TRUE
h ? console.log("TRUE") : console.log("FALSE");       // TRUE
i ? console.log("TRUE") : console.log("FALSE");       // FALSE
j ? console.log("TRUE") : console.log("FALSE");       // FALSE
k ? console.log("TRUE") : console.log("FALSE");       // FALSE
```
실제로 함수에서 이를 활용하여 더 간결하게 예외처리를 할 수 있다.
```javascript
const getName = (person) => {
  return person.name;
}

let person1 = { name: "Min" };
const name1 = getName(person1);

let person2;                          // undefined 할당
const name2 = getName(person2);

console.log(name1);            // Min
console.log(name2);            // TypeError: Cannot read properties of undefined.
```
`undefined`, `null` 등의 값이 할당되는 경우 에러가 발생하는데, 이를 해결하기 위해서는 예외처리를 해주어야 한다.
```javascript
const getName = (person) => {
  if (person === undefined || person === null) {
    return "객체가 아닙니다.";
  }
  return person.name;
}
```
하지만 이렇게 1억개의 모든 함수의 예외를 모두 작성해주면서 처리할 수는 없다. 따라서 falsy 값을 활용해 간단히 예외처리를 할 수 있다.
```javascript
const getName = (person) => {
  if (!person) return "객체가 아닙니다."
  return person.name;
}
```
즉, falsy 값을 NOT 연산자로 `true` 값으로 변경하여 예외처리를 할 수 있다.

<hr />

- [[한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지] by 이정환 Winterlood, JavaScript 응용편](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard)
- [MDN truthy value](https://developer.mozilla.org/ko/docs/Glossary/Truthy)
- [MDN falsy value](https://developer.mozilla.org/ko/docs/Glossary/Falsy)

## 단락 회로 평가를 활용한 예외처리
왼쪽에서 오른쪽으로 연산하는 논리 연산자 `&&`, `||`, `!`의 연산 순서를 응용한 것이다.
- `&&`의 경우, 모든 값이 `true`여야 `true`를 반환하기 때문에, 왼쪽부터 확인하는 조건문이 하나라도 `true`가 나오지 않는다면 이후의 조건문은 평가하지 않고 종료한다.
- `||`의 경우, 하나라도 `true`이면 `true`를 반환하기 때문에, 왼쪽부터 확인하는 조건문이 하나라도 `true`가 나온다면 이후의 조건문은 평가하지 않고 종료한다.

이를 활용해 예외처리를 할 수 있다.
```javascript
const getName = (person) => {
  const name = person && person.name;
  return name || "객체가 아닙니다.";
}

let person1 = { name: "Min" };
const name1 = getName(person1);

let person2;                          // undefined 할당
const name2 = getName(person2);

console.log(name1);            // Min
console.log(name2);            // 객체가 아닙니다.
```

<hr />

- [[한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지] by 이정환 Winterlood, JavaScript 응용편](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard)
- [첫 번째 truthy를 찾는 OR 연산자 ‘||’](https://ko.javascript.info/logical-operators#ref-20)
- [첫 번째 falsy를 찾는 AND 연산자 ‘&&’](https://ko.javascript.info/logical-operators#ref-22)
- [MDN truthy value](https://developer.mozilla.org/ko/docs/Glossary/Truthy)
- [MDN falsy value](https://developer.mozilla.org/ko/docs/Glossary/Falsy)
- [MDN AND Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [MDN OR Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

## 간결한 조건문 작성하기
다음과 같이 한국 음식인지를 판별하는 함수가 있다.
```javascript
function isKorean(food) {
  if (food === "불고기" || food === "김치볶음밥" || food === "떡볶이") {
    return true;
  } else {
    return false;
  }
}

const food1 = isKorean("불고기");         // true
const food2 = isKorean("파스타");         // false
```
수많은 OR문을 간결하게 작성하기 위해 배열의 `includes` 메서드를 활용할 수 있다.
```javascript
function isKorean(food) {
  if (["불고기", "김치볶음밥", "떡볶이"].includes(food)) {
    return true;
  } else {
    return false;
  }
}

const food1 = isKorean("불고기");         // true
const food2 = isKorean("파스타");         // false
```
다음과 같이 종류에 따라 추천 음식을 반환하는 함수가 있다.
```javascript
const getMeal = (mealType) => {
  if (mealType === '한식') return "불고기";
  if (mealType === '양식') return "파스타";
  if (mealType === '중식') return "멘보샤";
  if (mealType === '일식') return "초밥";
  return "간헐적 단식";
}

console.log(getMeal("한식"));             // 불고기
console.log(getMeal("일식"));             // 초밥
console.log(getMeal());                   // 간헐적 단식
```
이때, `getMeal` 함수에 1억 개의 `mealType`이 존재하고, 이에 따른 음식을 추천하게 된다면 퇴사해야 할 것이다. 따라서 다음과 같이 객체와 단락 회로 평가를 활용해 간결하게 작성할 수 있다.
```javascript
const meal = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "초밥",
  양식: "파스타",
  인도식: "카레",
  멕시코식: "타코",
  베트남식: "똠양꿍",
};

const getMeal = (mealType) => {
  return meal[mealType] || "간헐적 단식";
};

console.log(getMeal("한식"));             // 불고기
console.log(getMeal("일식"));             // 초밥
console.log(getMeal());                   // 간헐적 단식
```

<hr />

- [[한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지] by 이정환 Winterlood, JavaScript 응용편](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard)
- [첫 번째 truthy를 찾는 OR 연산자 `||`](https://ko.javascript.info/logical-operators#ref-20)
- [첫 번째 falsy를 찾는 AND 연산자 `&&`](https://ko.javascript.info/logical-operators#ref-22)
- [MDN AND Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [MDN OR Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [MDN array `includes`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [MDN Property Accessors](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)

## 비 구조화 할당, 구조 분해 할당

### 배열의 비 구조화 할당
```javascript
let arr = ["one", 'two', 'three'];

let one = arr[0];
let two = arr[1];
let three = arr[2];
```
비 구조화 할당, 구조 분해 할당은 배열과 객체를 더 우아하게 활용할 수 있는 방법으로, 할당하는 과정에서 생기는 반복 코드를 간결히 작성할 수 있게 해준다.
```javascript
let arr = = ["one", 'two', 'three'];

let [one, two, three, four="four"] = arr;
```
이러한 비 구조화 할당, 구조 분해 할당은 Swap에서도 활용할 수 있다.
```javascript
let a = 10;
let b = 20;

let temp = 0;

temp = a;
a = b;
b = temp;
```
`temp` 변수를 추가로 선언하고, 3줄 이상의 코드를 작성해야 하기 때문에 간결하지 못하다. 이 또한 1억개 이상의 변수가 있는 경우, 문제가 될 수 있다. 따라서 비 구조화 할당, 구조 분해 할당을 활용하면 다음과 같이 Swap할 수 있다.
```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];
```

### 객체의 비 구조화 할당
```javascript
let obj = {
  one: "one",
  two: "two",
  three: "three",
}

let one = obj.one;
let two = obj.two;
let three = obj.three;
```
객체의 property의 value를 변수에 할당하려면, 중복되는 코드가 발생한다. 이를 비 구조화 할당을 활용해 간결하게 할당할 수 있다.
```javascript
let obj = {
  one: "one",
  two: "two",
  three: "three",
  name: "Min",
}

let { name, one, two, three, four="four" } = obj;
```
`index`를 활용해 비 구조화 할당을 하는 배열과는 달리, 객체에서는 `key` 값을 활용하는 점에 유의해야 한다. 다만 이러한 경우에는 `key` 값이 변수명이 되게 된다. 이를 다른 변수명으로 활용하기 위해서는 다음과 같은 방법을 사용하면 된다.
```javascript
let obj = {
  one: "one",
  two: "two",
  three: "three",
  name: "Min",
}

let { name: myName, one: first, two: second, three: third } = obj;
```
배열과 객체에서 모두 비 구조화 할당을 하는 경우에 새로운 변수를 삽입하고, 이에 대한 기본 값을 설정할 수 있다.

<hr />

- [[한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지] by 이정환 Winterlood, JavaScript 응용편](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard)
- [Destructuring assignment](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Destructuring assignment](https://learnjs.vlpt.us/useful/06-destructuring.html)
- [Destructuring assignment](https://ko.javascript.info/destructuring-assignment)
- [Destructuring assignment & rest operator](https://ossam5.tistory.com/161)

## Spread 연산자
다음과 같이 게임 객체를 생성해보면, `mode`, `play`가 중복되는 것을 확인할 수 있다. 이때 게임의 특징에 대해 설명하는 property가 1억개가 있다면, 다 작성하기에는 곤란할 것이다.
```javascript
const onlineGame = {
  mode: "online",
  play: "PC",
}

const LOL = {
  mode: "online",
  play: "PC",
  name: "League of Legend",
  type: "AOS",
}

const LOSTARKS = {
  mode: "online",
  play: "PC",
  name: "Lost Arks",
  type: "MMORPG",
}

const FIFAONLINE = {
  mode: "online",
  play: "PC",
  name: "Fifa online 4",
  type: "Sports",
}
```
따라서 spread 연산자를 활용해 객체의 중복된 property를 쉽고 간결하게 작성할 수 있다.
```javascript
const onlineGame = {
  mode: "online",
  play: "PC",
}

const LOL = {
  ...onlineGame,
  name: "League of Legend",
  type: "AOS",
}

const LOSTARKS = {
  ...onlineGame,
  name: "Lost Arks",
  type: "MMORPG",
}

const FIFAONLINE = {
  ...onlineGame,
  name: "FIFA online 4",
  type: "Sports",
}
```
배열에서도 spread 연산자를 활용할 수 있다. 특히, 배열을 결합할 때  `concat()` 메서드보다 쉽게 사용할 수 있다.
```javascript
const readerList = ["James", "Smith", "Tom", "Jerry"];
const listenerList = ["Ria", "Keith", "Charlie", "Larry", "Jin", "Carry"];

const participantList = [...readerList, ...listenerList];

<hr />

- [[한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지] by 이정환 Winterlood, JavaScript 응용편](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard)
- [MDN Spread Operator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [W3S Spread Operator](https://www.w3schools.com/react/react_es6_spread.asp)
- [Spread Operator](https://www.programiz.com/javascript/spread-operator)


