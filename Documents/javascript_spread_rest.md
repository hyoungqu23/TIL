# Spread Operator

[전개 구문 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

전개 구문을 활용하면, 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 또는 요소로 확장할 수 있다.

```jsx
function myFunc(x, y, z) {
	return x + y + z;
};

let args = [0, 1, 2];

myFunc(...args);

> 3
```

```jsx
let dateFields = [1970, 0, 1]; // 1 Jan 1970
let date = new Date(...dateFields);
```

```jsx
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];

console.log(lyrics);

> ["head", "shoulders", "knees", "and", "toes"]
```

# Rest Operator

[나머지 매개변수 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)

Spread Operator와 유사해보이지만, 가변항 함수에서 정해지지 않은 수의 매개변수를 입력할 때(하나의 Rest Operator만 사용 가능) 활용된다.

```jsx
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
```
