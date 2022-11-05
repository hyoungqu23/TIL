# JavaScript ES6 Arrow Function, Default parameter

## Arrow Function

Arrow Function은 ES6에서 도입된 개념으로, 더 간결하게 함수 구문을 작성하게 해준다. 특히 익명 함수를 작성할 때 유용하다.

```jsx
let myFunc = (a, b) => {
  return a * b;
};
```

만약 함수에 명령문이 하나만 있고, 해당 명령문이 값을 반환하는 경우에는 `return`과 대괄호를 제거하여 더욱 간결하게 함수를 선언할 수 있다.

```jsx
let myFunc = (a, b) => a * b;
```

또한, 매개변수가 하나만 있는 경우에는 매개변수의 괄호를 제거하여 더욱 간결하게 함수를 선언할 수 있다.

```jsx
let myFunc2 = (value) => `Hello, ${value}`;
```

---

### `this`

일반 함수와 달리 화살표 함수에는 `this`의 바인딩이 없다. 일반 함수에서 `this`는 함수를 호출한 객체를 나타내지만, 화살표 함수의 `this`는 항상 화살표 함수를 정의한 객체를 의미한다.

```jsx
function hello() {
  console.log('this: ', this);
}

window.addEventListener('load', hello); // object Window

document.querySelector('#btn').addEventListener('click', hello); // object HTMLButtonElement

const arrowHello = () => {
  console.log('this: ', this);
};

window.addEventListener('load', hello); // object Window

document.querySelector('#btn').addEventListener('click', hello); // object Window
```

---

### Default Parameter

ES6에서는 더 유연한 함수를 활용하기 위해 매개변수의 기본값을 설정할 수 있다. 함수가 호출될 때 인자가 전달되지 않으면 설정된 기본값이 전달된다.

```jsx
const plusTwo = (number, value = 2) => number + value;

plusTwo(5, 2); // 7
plusTwo(5); // 7
```
