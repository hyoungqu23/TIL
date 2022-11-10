## 🌊 [JSX](https://ko.reactjs.org/docs/introducing-jsx.html)

JSX는 JavaScript XML의 약어로, HTML의 한계를 극복하기 위해 만들어진 마크업 언어인 XML과 JavaScript를 결합해 확장한 문법이며 HTML을 **React.js**에서 쉽게 사용하기 위해 활용된다.

함수 호출과 객체 생성을 위한 문법적 편의를 제공하는 방식의 JavaScript를 확장한 문법으로, UI 관련 작업을 할 때 효과적으로 활용된다. JavaScript에서 자유롭게 HTML을 가져올 수 있게 되는데, 이를 효과적으로 만들기 위한 문법이라고 생각할 수 있다.

따라서 UI가 어떻게 생겨야 하는지 설명하기 위해 **React.js**와 함께 사용할 것을 권장한다. JSX는 DOM에 렌더링할 React Element를 생성한다.

- 이렇게 작성된 JSX 코드는 Babel에 의해 Transcompile된다.
- HTML으로 개발하는 것과 같은 DX를 제공하여 생산성과 편의성을 높인다.
- 문법 에러와 코드의 절대량이 감소한다.
- HTML을 JSX로 변환할 때, 변수 내에 HTML 코드를 저장한다.
- 여러 자식 태그로 구성된 HTML 코드는 **반드시 부모 태그 내**(아래 예시에서 <div> 태그)**에 구성**되어야 한다. → 최상단 element는 반드시 하나여야 한다.
  ```jsx
  const element = (
    <div>
      <p>Hello, world!</p>
      <p>Nice to meet you</p>
    </div>
  );
  ```
- 문장의 끝은 세미콜론(**`;`**)을 사용해야 한다.
- HTML 태그 내에서 JavaScript 연산이 가능하다.
  ```jsx
  const App = () => {
    const a = 3;
    const b = 6;
    return (
      <div>
        {a} + {b} = {a + b}
      </div>
    );
  };
  ```
- 닫는 태그를 필수적으로 입력해주어야 한다.
- Style의 경우 객체의 형태로 입력해야 한다.
  ```jsx
  const App = () => {
    return (
      <div className="hi" style={{ color: 'blue', fontSize: '24px' }}>
        Hello, {name}!
      </div>
    );
  };
  ```
- 함수도 표현식의 한 종류이므로, 내부에 중괄호(`{}`)를 사용하여 다른 함수 표현식을 추가할 수 있다.
  - 산술식: 숫자 표현 (ex. 3.14159, −2)
  - 문자열: 문자열 표현 (ex. "234", "Fred")
  - 논리식: 참 또는 거짓 표현 (ex. **`true`**, **`false`**)
  - 기본 표현식: 자바스크립트의 기본 키워드 및 일반 표현식 (ex. **`3 + 5`**)
  ```jsx
  function formatFullName(user) {
  	return user.lastName + '' + user.firstName;
  }

  const user = {
  	lastName: "김",
  	firstName: "반응",
  }

  function getFullName(user) {
  	return (
  		<h1>Hello, {formatFullName(user)}!</h1>;
  	);
  }

  const element = getFullName(user);
  ```

## 🌊 [Element Rendering](https://ko.reactjs.org/docs/rendering-elements.html)

`element`란 **React.js** 앱의 가장 작은 단위이며, **Component**의 구성요소이다. `element`는 화면에 표시할 것들이 기록되어 있는데 사실 HTML 요소이다. `Rendering`은 이러한 요소를 화면에 그리는 것을 의미한다.

이러한 `element`는 불변 객체이므로, 값을 변경하기 위해서는 새로운 `element`를 만들어 업데이트를 해야 한다. 예를 들어, 시간을 출력하는 기능을 구현하기 위해서는 매 초마다 렌더링해야 한다는 것이다.

```jsx
function tick() {
  const element = (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

ReactDOM 라이브러리를 활용해 Virtual DOM을 활용하기 때문에 계속해서 DOM을 렌더링하는 것보다 속도가 빠르다는 장점이 있다.

```jsx
const element = <h1>Hello, elice</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

일반적으로 **React.js**는 이 안에 들어가는 모든 Element를 React DOM에서 관리하기 때문에 이것을 “루트(root)” DOM 노드라고 부르는 하나의 div 태그가 존재한다.(**React.js**로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM 노드가 있다.)

```jsx
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

**React Element**는 [불변객체](https://ko.wikipedia.org/wiki/%EB%B6%88%EB%B3%80%EA%B0%9D%EC%B2%B4)이므로 UI를 업데이트하는 유일한 방법은 새로운 Element를 생성하고 이를 `ReactDOM.render()`로 전달하는 방법 뿐이다. 따라서, `setInterval()` 콜백을 통해 초마다 `ReactDOM.render()`를 호출해 새로운 Element로 교환해주는 것이다.

원래 HTML의 경우 전부 렌더링을 다시 진행했지만, 필요한 부분만 DOM을 업데이트하면서 UI를 더 효율적으로 업데이트할 수 있다는 장점이 있다.(React DOM은 해당 Element와 그 자식 Element를 이전의 Element와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트한다.)

즉, 위의 예시는 매초 전체 UI를 다시 그리도록 Element를 만들었지만 React DOM은 내용이 변경된 Text Node만 업데이트하게 된다.
