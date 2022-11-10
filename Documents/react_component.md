## 🌊 Component

Component는 앱의 기능을 단위별로 캡슐화하는 React.js의 최소 기본 단위이다. 더 간단하게 설명하면, HTML 요소를 반환하는 함수와 같다. 즉, Component는 독립적이고 재사용 가능한 코드의 조각이다.

### **Component의 장점**

Component를 활용해 기능을 모듈화하면 다음과 같은 장점이 있다.

1. 코드 유지보수성이 향상
2. 코드 재사용 용이
3. 가독성 향상

### **Component의 특징**

```jsx
const MyComponent = ({ children }) => {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      {children}
    </div>
  );
};
```

- 함수형 Component(React.js v16 이후) vs 클래스형 Component(초기 React.js)
- Controlled Component(`state`를 통해 데이터 관리) vs. Uncontrolled Component(element에서 데이터를 단순히 가져온다)
- JavaScript 문법을 활용하여 Component를 정의하며, Component 이름은 항상 대문자로 시작해야 한다.
- React.js에서는 Component를 호출하고 ReactDOM에 렌더링한다.
- Component의 `Attribute`에 해당하는 부분을 `props`라 하고, Component 하위 `element`를 `children`이라고 한다. `children`도 `props` 중 하나이다.
- Component끼리 데이터를 주고 받을 때는 `props`를 활용하고, Component 내에서 데이터를 관리할 때 `state`를 활용한다.
- 데이터는 부모 Component에서 자식 Component로만 전달한다.
- Component에 `props`를 전달한다는 것은, 해당 Component 함수에 인자를 전달하는 것과 동일하다.

### 함수형 Component

함수형 Component의 경우, Component를 선언한 뒤 `ReactDOM.render()`를 통해 렌더링하면 된다.

```jsx
function Greeting() {
  return <h2>Hello, React!</h2>;
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
```

함수형 Component의 경우 단순히 HTML UI를 반환하는 간단한 JavaScript 함수로 주로 사용된다. 즉, 단순히 데이터를 받고 렌더링해주는 것이 전부이기 때문에 비상태형 Component라고도 한다.

React.js의 state를 사용하지 않고 함수에 대한 결과를 반환하는데, state는 Component 렌더링의 결과물에 영향을 주는 데이터를 가진 객체를 의미한다. 즉, Component에 현재 저장된 값이 state이다.

### 클래스형 Component

클래스형 Component의 경우 `class` 선언 시 `React.Component`의 메서드를 활용하기 위해 `extends`를 통해 상속받도록 해야한다.

```jsx
class Greeting extends React.Component {
  render() {
    return <h2>Hello, React!</h2>;
  }
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
```

클래스형 Component는 복잡한 UI 로직을 구현할 때 사용되며, state를 사용하는 경우, 반드시 클래스형 Component로 구현해야 한다.

### Component의 재사용

코드의 가독성과 개발자의 생산성을 높이기 위해 최대한 재사용 가능한 Component를 만드는 것이 중요하다.

**Component 합성**

Component 안에서 다른 Component를 참조하는 것이 가능하다.

```jsx
function Greeting() {
  return <h2>Hello, React!</h2>;
}

function Welcome() {
  return (
    <div>
      <h1>Welcome React.</h1>
      <Greeting />
    </div>
  );
}
```

**Component 추출**

하나의 Component가 복잡하다면 일부를 분리하여 새로운 Component로 만드는 것이 가독성과 코드 재사용에 용이하다.

**Component와 map()**

map 등의 메서드를 활용해 한 번에 적용할 수도 있다. [다만 이 경우 key 값을 부여해주어야 한다.](https://ko.reactjs.org/docs/lists-and-keys.html)

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const GREETING_LIST = ['Sara', 'Cahal', 'Edite'];

function App() {
  return (
    <div>
      {GREETING_LIST.map((name, index) => (
        <Welcome name={name} key={index} />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

굳이 props를 활용하지 않고 명시적으로 작성해줄 수도 있다.
