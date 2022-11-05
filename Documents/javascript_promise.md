# JavaScript ES6 Promise

## Promise

Promise는 콜백 함수를 대신해서 JavaScript에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 객체이다. 정해진 기능을 수행하고 나서 정상적으로 수행되었다면 성공 메시지와 처리된 결과 값을 전달하고, 실패했다면 에러를 전달한다.

- pending state
- fulfilled state
- rejected state

Promise는 내용이 실행되었지만 결과를 아직 반환하지 않은 객체로, Promise는 내용이 실행되어 성공하면 `resolve`를, 실패하면 `reject`를 가지고 있다가 `then`, `catch` 메서드를 사용할 때 결과를 반환하여 사용할 수 있다. 이때 실행이 완료되지 않은 경우에는 완료된 이후에 `then` 메서드 콜백 함수가 실행된다.

콜백 함수의 경우, 해당 위치에 반드시 입력되어야 한다.

```jsx
setTimeout(() => {
  console.log('5초 후 실행될 내용은 반드시 여기에 작성되어야 한다.');
}, 5000);
1;
```

이와 다르게, Promise를 활용하면, 코드를 분리할 수 있다는 매우 큰 강점을 갖는다.

```jsx
const promise = setTimeoutPromise(3000);

// 다른 동작하는 중

promise.then(() => {
  console.log('실행은 위에서 하고, 결과를 지금 꺼내서 사용한다.');
});
```

`Promise.allSettled`

비동기 작업의 경우 실패할 가능성을 가지고 있다. 따라서 성공하는 경우 `resolve`를 호출하고, 실패하는 경우 `reject`를 호출한다.

## `async` / `await`

Promise 지옥을 해결하기 위해 도입된 개념. `await` 키워드를 기준으로 우측에서 좌측으로 동작 흐름이 진행된다.

```jsx
let user = await Users.findOne({});

// return value ← then ← Promise
```

- `변수 = await 프로미스;` 인 경우에는 프로미스가 resolve된 값이 변수에 저장된다.
- `변수 await 값;` 인 경우에는 그 값이 변수에 저장된다.

과거에는 `async` 함수 내부에서만 `await` 키워드를 활용할 수 있었으나, 최근에는 `Top-level await`가 등장해 단독으로 활용이 가능하다.

```jsx
const promise = new Promise(...);
promise.then((result) => {...});

// 과거
async function temporaryAsyncFunc() {
	const result = await promise;
}

// 현재
const result = await promise;
```

`async`도 결국 Promise의 문법을 간단히 만든 것이기 때문에 Promise의 성질을 그대로 가지기 때문에 `async` 함수에서 반환한 값은 `then`, `await`을 통해 받아야 사용할 수 있다는 점에 유의해야 한다.

```jsx
const promise = new Promise(...);
promise.then((result) => {...});

async function main() {
	const result = await promise;
	return 'Good JavaScript';
}

// then
main().then((str) => {...});

// await
const sentence = await main();
```

다만, `resolve`를 처리하는 부분만 존재하고, `reject`를 처리하는 부분이 존재하지 않기 때문에, `try - catch` 구문으로 `reject`를 처리해야 한다.
