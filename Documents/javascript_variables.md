# JavaScript ES6 `let`, `const`

ES6 이전에는 `var` 키워드를 활용해 변수를 선언했다. 다만, `var` 변수는 함수 레벨 Scope를 가지며, Hoisting과 중복 선언, `var` 키워드 생략 등이 가능해 전역 변수의 문제, 의도치 않은 변수 값 변경 문제로 인한 코드 복잡성 증가 등 여러 문제를 유도했다. 적은 코드를 활용할 때에는 그닥 문제가 되지 않았으나 점점 코드량이 방대해지면서 이러한 문제가 두드러졌다.

따라서 `let`과 `const`가 이러한 단점을 보완하기 위해 ES6에서 변수 선언을 위해 새로이 추가되었다.

---

### Block level Scope

Block Scope는 코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하고, 해당 블록 외부에서는 참조할 수 없게끔 선언된 Scope를 의미한다.

---

## `let`

[JavaScript Let](https://www.w3schools.com/js/js_let.asp)

Block Scope의 **변수**를 선언하는 키워드.

- 재선언할 수 없다.
- 변수를 호출해 사용하기 전에 선언해야 한다.(Hoisting 불가능)
- Block Scope
  ```jsx
  { let x = 2; }
  console.log(x);

  > Uncaught ReferenceError: x is not defined
  ```

---

## `const`

[JavaScript const](https://www.w3schools.com/js/js_const.asp)

Block Scope의 **상수**를 선언하는 키워드.

- 재선언할 수 없다.
  ```jsx
  const x = 1;
  const x = 2;

  > Uncaught SyntaxError: Identifier 'x' has already been declared
  ```
- 반드시 선언할 때 값을 할당해야 한다.
  ```jsx
  const PI;
  PI = 3.14;

  > Uncaught SyntaxError: Missing initializer in const declaration
  ```
- 재할당할 수 없다.
  ```jsx
  const x = 1;
  x = 2;

  > Uncaught TypeError: Assignment to constant variable.
  ```
- 상수를 호출해 사용하기 전에 선언해야 한다.(Hoisting 불가능)
- Block Scope
  ```jsx
  { const x = 3; }
  console.log(x);

  > Uncaught ReferenceError: x is not defined.
  ```

이러한 특징을 갖는 `const` 키워드는 다양한 케이스에서 사용된다.

### Constant Arrays

Constant Arrays는 `const`로 선언된 배열을 의미하는데, 배열의 각 원소(element)는 추가, 변경, 삭제가 가능하나 한 번 선언된 배열을 재할당하거나 재선언할 수 없다.

```jsx
const webLang = ['HTML', 'CSS', 'JavaScript'];
webLang = ['JavaScript', 'React.js'];

> Uncaught TypeError: Assignment to constant variable.
```

### Constant Objects

Constant Objects는 `const`로 선언된 객체를 의미하는데, 객체의 각 Property를 추가, 변경, 삭제할 수 있으나, 배열과 동일하게 한 번 선언된 객체를 재할당하거나 재선언할 수 없다.

```jsx
const student = { major: 'Administration', age: 23, isGraduated: true };
student = { major: 'Computer Science', age: 22, isGraduated: false };

> Uncaught TypeError: Assignment to constant variable.
```

`Object.freeze(obj)`를 활용하면 객체를 절대 변경할 수 없다.

```jsx
let obj = { name: 'Thomas', age: 23 };

Object.freeze(obj);
obj.name = 'James'; // 변경 불가능
obj.phoneNumber = '012-3456-7899'; // 추가 불가능
```
