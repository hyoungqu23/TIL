# JavaScript Core

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
```

<hr />

- [[한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지] by 이정환 Winterlood, JavaScript 응용편](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard)
- [MDN Spread Operator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [W3S Spread Operator](https://www.w3schools.com/react/react_es6_spread.asp)
- [Spread Operator](https://www.programiz.com/javascript/spread-operator)

## 동기와 비동기

### JavaScript의 Single Thread 작업 수행 방식

JavaScript는 코드가 작성된 순서대로 작업을 처리한다. 이때, 이전 작업이 진행 중인 경우에는 다음 작업을 수행하지 않고 기다리게 되어, 먼저 작성된 코드가 다 실행된 후에 뒤에 작성된 코드를 실행하게 된다. 이를, **동기 방식의 처리**라고 한다.

또한, 이처럼 하나의 Thread에서 하나의 작업이 실행되고 있을 때 다른 작업을 동시에 실행할 수 없는 방식을 **블로킹 방식**이라고도 한다.

하지만 이러한 동기적인 처리 방식의 경우 하나의 작업이 긴 수행 시간을 가지는 경우 문제가 된다. 즉, 모든 작업이 종료되기 위해서는 긴 수행 시간을 가지는 그 작업이 종료되기 전까지 모두 대기하기 때문에 전반적인 작업 흐름이 느려진다는 성능 상의 문제점을 갖는다. JavaScript는 웹 사이트에서 동작을 제어하며, 사용자의 행동에 맞는 상호작용을 위해 사용되는데, 만약 웹 사이트에서 버튼을 하나 클릭할 때, 링크를 하나 클릭할 때 20 ~ 30초씩 걸린다고 생각하면 왜 문제가 되는 지 알 수 있다.

이를 해결하기 위해 Thread를 추가할 수 있다. 즉, Multi Thread 방식으로 JavaScript를 작동시키면 작업을 분할하여 수행할 수 있어 이러한 문제를 해결할 수 있다. 다만, JavaScript는 Single Thread 방식으로만 동작하기 때문에 이렇게 작업을 분할 수행하는 것은 불가능하다.

결국, JavaScript의 Single Thread 방식을 사용하면서 동기적 처리 방식의 문제를 해결하기 위해서는 여러 개의 작업을 동시에 실행시키는 **비동기적 처리 방식**을 택할 수 밖에 없다. 즉, 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행하는 방식으로 JavaScript를 동작시키는 것이다. 또한, 이처럼 하나의 작업이 Thread를 온전히 점유하지 않는, 다른 작업을 수행하지 못하게 막지 않는 방식을 **논 블로킹 방식**이라고도 한다.

다만, 이러한 비동기적 처리 방식의 경우 작업의 종료 시기와, 이러한 결과 값을 정확히 파악하기 어렵다는 문제가 있다. 따라서 JavaScript에서는 이러한 문제를 해결하기 위해 작업 결과를 전달하는 **콜백 함수**를 비동기적으로 실행되는 함수에 추가하여 전달한다. 즉, 콜백 함수가 해당 작업이 끝난 이후 호출되어 그 결과 값을 사용할 수 있도록 만들어 줄 수 있다.

#### 동기적 방식

```javascript
function taskA() {
  console.log("taskA is done.");
}

taskA();
console.log("Code is done");
```

#### 비동기적 방식

JavaScript에서는 내장된 비동기 함수 `setTimeout()`이 존재한다. 콜백 함수와 지연 시간을 입력받아 지연 시간이 지난 후 콜백 함수가 실행되는 대표적인 비동기 방식으로 작업이 실행되는 함수이다. 이때 지연 시간은 `ms` 단위로 입력된다.

```javascript
function taskA() {
  setTimeout(() => {
    console.log("taskA is done.");
  }, 1000);
}

taskA();
console.log("Code is done");
```

`taskA()` 함수가 먼저 호출되고, 이후에 `console.log()`가 작성된 것을 확인할 수 있다. 그러나, `setTimeout()`에 의해 1초 후 실행되는 `taskA()`를 기다리지 않고, `console.log()`가 먼저 실행되는 것을 볼 수 있다. 이렇게 먼저 작성된 코드가 종료되기까지 기다리지 않고, 다음 코드를 바로 실행하는 방식을 비동기 방식이라고 한다.

```javascript
function taskB(a, b) {
  setTimeout(() => {
    const result = a + b;
  }, 3000);
}

taskB(3, 4);
console.log(result);              // ReferenceError
console.log("Code is done.");
```

`taskB()` 함수의 경우 똑같이 비동기적으로 동작하는데, 이때 두 인자를 받아 더한 값을 `result` 변수에 할당한다. 이때 `const`로 선언된 `result` 변수는 Block Scope임을 알고 있어야 한다. 따라서 해당 함수 종료 이후에 `result` 변수를 활용하면 `ReferenceError: result is not defined`를 반환하게 된다.

따라서, 해당 함수의 결과 값을 함수 종료 이후에 사용하기 위해서는 **결과 값을 인자로 받는 콜백 함수**를 활용해야 한다.

```javascript
function taskB(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 3000);
}

taskB(3, 4, (result) => {console.log(result)});
console.log(result);              // ReferenceError
console.log("Code is done.");
```

즉, 비동기 처리의 결과 값을 활용하기 위해서는 콜백 함수를 전달해야 한다. 다음과 같은 경우에는 `taskC()`가 `tackB()`보다 먼저 실행이 완료되는 것을 확인할 수 있다.

```javascript
function taskB(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 3000);
}

function taskC(a, callback) {
  setTimeout(() => {
    const result = a * 2;
    callback(result);
  }, 1000);
}

taskB(3, 4, (result) => {
  console.log(result);
});

taskC(7, (result) => {
  console.log(result);
});

console.log("Code is done.");
```

### JavaScript Engine

JavaScript로 작성된 코드는 웹 브라우저 등에 탑재된 JavaScript Engine을 이용해 해석되고 실행된다. JavaScript Engine은 Heap과 Call Stack 두 가지로 구성된다. **Heap**은 변수나 상수에 사용되는 메모리를 저장하는 데 사용되고, **Call Stack**은 코드를 실행함에 따라서 호출 스택을 쌓는 영역이다.

#### 동기적 방식

```javascript
function first() {
  return 1;
}

function second() {
  return first() + 1;
}

function third() {
  return second() + 1;
}

console.log(third());
```

JavaScript 코드가 실행되면, Call Stack에 최상위 문맥인 Main Context가 추가된다. 따라서, Main Context가 추가되는 순간이 JavaScript 코드가 실행되는 시점이고, Call Stack에서 Main Context가 제거되는 시점이 JavaScript 코드의 실행이 종료되는 시점이다.

JavaScript 코드의 실행이 시작된 시점 이후, 첫 번째 코드가 실행되는데, 함수의 경우 생성되고 넘어가며, 실제로 실행되는 코드는 `console.log()` 코드가 실행된다. 이때 `console.log()`의 인자인 `third()` 함수가 실행되어 결과 값을 반환받아 출력해야 하기 때문에 Call Stack에는 `third()` 함수가 추가된다.

`third()` 함수의 결과 값을 받기 위해 실행하면, 내부에 `second()`가 호출된다. 따라서 `second()` 함수가 Call Stack에 추가되고, 동일한 방식으로 `first()`함수도 Call Stack에 추가된다.

이때 `first()` 함수는 `1`을 결과 값으로 반환하고 바로 종료된다. 결국, `first()`는 Call Stack에서 바로 제거된다. 이후, `first()` 함수의 결과 값을 받아 `second()` 함수가 `2`를 결과 값으로 반환하고 종료되어 Call Stack에서 제거된다. 같은 방식으로 `third()`도 `3`을 반환하고 종료되어 Call Stack에서 제거되고, Console에 `3`이 출력되고 JavaScript 코드가 종료된다. 마지막으로, JavaScript 코드의 실행이 종료되었으므로, Call Stack에서 Main Context도 제거된다.

JavaScript의 Thread는 Call Stack 하나만을 담당하며, Call Stack의 작동 방식대로 명령을 처리하는데, JavaScript Engine은 Call Stack이 하나만 존재하기 때문에 Single Thread로 동작하는 것이다.

#### 비동기적 방식

```javascript
function asyncAdd(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 3000);
}

asyncAdd(10, 20, (result) => {
  console.log("asyncAdd RESULT: ", result);
})
```

Web APIs, Callback Queue, Event Loop는 JavaScript Engine 외부에서 웹 브라우저와의 상호작용 등을 처리하기 위해 존재하는데, 대표적으로 비동기 방식의 작업을 처리하기 위함이다.

JavaScript 코드가 실행되어 Main Context가 Call Stack에 추가되고, `asyncAdd()` 함수가 실행되며 Call Stack에 추가된다. 이후 `asyncAdd()` 함수를 실행하면 내부에서 `setTimeout()` 비동기 함수를 호출하고 있다. `setTimeout()` 내부에는 `callback()` 함수를 포함하고 있다.

다만, 비동기 함수인 `setTimeout()`은 지연 시간 이후 실행되므로 Call Stack이 하나이기 때문에 그대로 수행하면, 블로킹 방식처럼 지연 시간이 지난 후 다음 코드가 실행되게 된다. 따라서 JavaScript Engine은 비동기 함수를 Web APIs로 넘긴다. 이렇게 넘겨진 `setTimeout()` 함수는 지연 시간을 보내게 된다.

따라서 Call Stack에서는 `asyncAdd()` 함수가 종료되어 제거되고, `setTimeout()` 함수의 지연 시간이 지나면 Web APIs에 존재하는 `setTimeout()` 함수가 제거되고 내부의 `callback()` 함수는 실행되기 위해서 Callback Queue로 이동한다. 이렇게 Callback Queue로 이동된 콜백 함수는 Event Loop에 의해 Call Stack으로 다시 옮겨진다.

Event Loop는 Call Stack에서 Main Context를 제외한 함수들의 존재 여부를 확인하며, Main Context를 제외하고 Call Stack에 다른 함수가 없으면 콜백 함수를 실행할 수 있다고 판단해 `callback()` 함수를 Call Stack에 넘겨준다. 결국 `callback()` 함수가 실행된 후, 종료되면 Call Stack에서 제거한다. 이에 따라 결과 값이 반환되고, JavaScript 코드가 종료되면 Call Stack에서 Main Context가 제거되며 비동기 작업을 포함한 JavaScript 프로그램이 마무리된다.

비동기 함수의 결과 값을 또다른 비동기 함수의 인자로 활용하는 경우도 존재한다.

```javascript
function taskB(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 3000);
}

function taskC(a, callback) {
  setTimeout(() => {
    const result = a * 2;
    callback(result);
  }, 1000);
}

function taskD(a, callback) {
  setTimeout(() => {
    const result = a * -1;
    callback(result);
  }, 1000);
}

taskB(4, 5, (resultB) => {
  console.log(resultB);
  taskC(resultB, (resultC) => {
    console.log(resultC);
    taskD(resultC, (resultD) => {
      console.log(resultD);
    });
  });
});

console.log("Code is done.");
```

다만, 계속해서 결과 값을 비동기 함수의 인자로 활용하면 콜백 지옥에 빠지게 된다. 콜백 지옥을 해결하기 위해서는 `Promise` 객체를 활용해야 한다.

<hr />

- [[한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지] by 이정환 Winterlood, JavaScript 응용편](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard)
- [Event Loop, Call Stack이 작동하는 방법](https://velog.io/@sugyinbrs/Event-Loop-Call-Stack-%EC%9D%B4-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94-%EB%B2%95)
- [Event loop와 call stack 은 어떻게 작동하나?](https://www.youtube.com/watch?v=zi-IG6VHBh8)
- [Event loop and the rise of Async programming](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
- [비동기 처리에 대하여](https://velog.io/@change/JavaScript-asyncawait%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C)
- [MDN Call Stack](https://developer.mozilla.org/ko/docs/Glossary/Call_stack)
- [MDN Event Loop](https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop)

## Promise

콜백 지옥은 연속되는 비동기 함수를 처리할 때 비동기 함수의 결과 값을 사용하기 위해서 콜백 함수가 지속적으로 깊어지는 현상을 의미한다. `Promise` 객체는 이러한 콜백 지옥을 해결할 수 있다.

`Promise`는 JavaScript의 비동기를 돕는 객체로, 비동기 처리의 결과 값을 처리하는 코드를 비동기 함수로부터 분리할 수 있어 콜백을 연이어 추가하지 않아도 되므로, 더 직관적이고 간결하게 비동기 코드를 작성할 수 있다.

### 비동기 작업이 가질 수 있는 3가지 상태

1. Pending(대기 상태)
   비동기 작업이 진행 중이거나, 시작할 수 없는 문제가 발생했음을 의미
2. Fulfilled(성공)
   Pending에서 `resolve`가 이루어져 이행 또는 성공 상태로, 비동기 작업이 개발자가 의도한대로 정상적으로 수행되어 완료된 상태를 의미
3. Rejected(실패)
   Pending에서 `reject`가 이루어져 거부 또는 실패 상태로, 비동기 작업이 모종의 이유(서버 미응답, 긴 작업 시간 등)로 인해 실패했음을 의미

#### 콜백 함수를 통한 비동기 작업

```javascript
// 2초 후 양수인지를 판별하는 함수
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    // parameter가 숫자가 아닌지 확인
    if (typeof number === "number") {
      // 성공, resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패, reject
      reject("주어진 값이 숫자가 아닙니다.");
    }
  }, 2000);
}

isPositive(
  10,
  (result) => {
    console.log("성공적으로 수행됨: ", result);
  },
  (error) => {
    console.log("실패했음: ", error);
  }
);
```

#### Promise를 통한 비동기 작업

```javascript
// Promise 객체를 활용한 비동기 함수
function isPositiveP(number) {
  // 비동기 작업을 실질적으로 수행하는 executor 함수 생성
  const executor = (resolve, reject) => {
    setTimeout(() => {
      // parameter가 숫자가 아닌지 확인
      if (typeof number === "number") {
        // 성공, resolve
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패, reject
        reject("주어진 값이 숫자가 아닙니다.");
      }
    }, 2000);
  };

  // new 키워드로 생성한 새로운 객체 Promise를 새로운 상수 asyncTask에 저장하면서 인자로 executor를 넘겨주면, 자동으로 executor 함수가 수행된다.
  const asyncTask = new Promise(executor);

  // Promise 객체를 반환
  return asyncTask;
}

// Promise 객체를 response에 할당
const response = isPositiveP(101);

// then, catch 메서드
response
  .then((result) => {
    console.log("작업 성공: ", result);
  })
  .catch((error) => {
    console.log("작업 실패: ", error);
  });
```

#### Promise를 통한 콜백 지옥 해결하기

```javascript
function taskB(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a + b;
      resolve(result);
    }, 3000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a * 2;
      resolve(result);
    }, 1000);
  });
}

function taskD(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a * -1;
      resolve(result);
    }, 2000);
  });
}

taskB(5, 1)
  .then((resultB) => {
    console.log("resultB: ", resultB);
    return taskC(resultB);
  })
  .then((resultC) => {
    console.log("resultC: ", resultC);
    return taskD(resultC);
  })
  .then((resultD) => {
    console.log("resultD: ", resultD);
  });

```

각각 Promise를 반환하여 해당 Promise에 then 메서드를 체이닝하여 콜백 지옥을 해결할 수 있다. 이때 비동기 처리를 호출하는 코드와 결과를 처리하는 코드를 분리하여 활용할 수 있다.

<hr />

- [[한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지] by 이정환 Winterlood, JavaScript 응용편](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard)
