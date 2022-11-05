# Destructing: 구조 분해 할당

[구조 분해 할당 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

배열이나 객체의 속성을 쉽게 분해하여 변수에 할당하는 표현식을 의미한다.

> 배열의 구조 분해 할당 기본

```jsx
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;

console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

> 두 변수 값 교환

```jsx
let a = 1;
let b = 3;

[a, b] = [b, a];

console.log(a); // 3
console.log(b); // 1
```

> Rest Operator를 활용한 구조 분해 할당

```jsx
let [a, ...b] = [1, 2, 3];

console.log(a); // 1
console.log(b); // [2, 3]
```

> 객체의 구조 분해 할당 기본

```jsx
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(today); // 77
console.log(tomorrow); // 80
```

> 새로운 변수명으로 구조 분해 할당

```jsx
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log(highToday); // 77
console.log(highTomorrow); // 80
```
