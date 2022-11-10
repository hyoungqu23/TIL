## 🌊 State

State는 Component 내에서 유동적으로 변하는 값을 관리하기 위해 사용한다. 따라서 개발자가 의도한 동작이나 사용자의 입력에 의해 변경될 수 있다. State 값이 변경되면 React.js가 변경된 부분을 다시 렌더링하게 된다.

즉, **State**는 **Component**에서 동적으로 변화하는 특정 상태 데이터를 의미하며, 이에 따라 각각 다른 동작을 하게 된다.

- State 값을 직접 변경하면 React.js가 렌더링 타이밍을 알아차리지 못하므로 반드시 setState 함수를 활용해 State 값을 변경해야 한다.
- setState 함수에 변경할 값을 직접 넣거나, 함수를 넣어 반환 값으로 변경하는 방법이 있는데, 현재 값을 기반으로 State 값을 변경하고자 하는 경우, 함수를 활용하는 것이 좋다.
  ```jsx
  setState((currentValue) => currentValue + 1);
  ```
- 객체나 배열인 State는 State를 복사하고, 이를 새로운 값으로 변경해야 한다.
  ```jsx
  setState((currentState) => {
    const newState = { ...currentState };
    newState.something = 2;
    return newState;
  });
  ```

### 예시

```jsx
const Counter = () => {
  return (
    <div>
      <h2>0</h2>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default Counter;
```

이러한 Counter Component는 기본값이 `0`에서 시작하고, 아래의 버튼을 클릭했을 때 `1`씩 증감하는 `count` 상태를 가지고 있다.

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
```

상태가 변경되면 화면이 다시 렌더링되게 된다. 즉, Component 함수가 재호출되는 것을 알 수 있다. 또한, **Component**는 여러 개의 State를 가질 수 있고, State를 활용해 쉽고 간결하게 화면에 나타나는 데이터를 쉽게 업데이트할 수 있다.

## 🌊 Props

Props는 기본적으로 Component에 원하는 값을 넘겨줄 때 사용하는 사실상 매개변수로, 모든 JavaScript 요소가 가능하다.

```jsx
function 컴포넌트명(props) {
  return <div>{props.속성}</div>
}

<컴포넌트명 속성=전달할 값 />
```

- 부모 Component에서 자식 Component로 데이터를 전달하기 위해서 사용된다.
- Props는 읽기 전용이므로, 그 값을 임의로 변경할 수 없다.
  값을 변경하기 위해서는 새로운 변수를 생성해야 한다.
  즉, 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다.
  ```jsx
  const Greeting = (props) => {
  	const username = '1번 참석자' props.name + '님';
  	return <h1>안녕하세요 {username}</h1>;
  }
  ```

참고 - HTML과 다른 방식의 React.js Attribute

```jsx
<input type="checkbox" defaultChecked={false} />
```

HTML에서 `checked`, `value`는 초기 값을 의미하나, React.js에서는 현재 값을 의미해 사용자의 변경에도 값의 변화가 일어나지 않는다. 따라서 `defaultChecked`, `defaultValue`를 활용하면 초기 값으로 설정할 수 있다.

참고 - NEW React.js Attribute

Key는 React.js가 어떤 항목을 변경, 추가, 삭제할 지 식별하는 것을 돕는 속성으로, Element에 안정적인 고유성을 부여하여 효율적인 렌더링을 돕기 위해 배열 내부의 Element에 지정해주어야 한다.

배열 내부의 형제 요소 사이에서만 고유하면 되고, 전체 범위에서 고유할 필요는 없다.
