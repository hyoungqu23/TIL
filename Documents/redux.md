# React-Redux | 생활코딩 강의

Redux를 사용하지 않는 경우, Props Drilling 문제가 발생한다. 예를 들어, Root 컴포넌트에서 선언된 State를 1억개 하위에 있는 컴포넌트에서 사용하기 위해서는 Props로 모든 하위 컴포넌트에서 넘겨주어야 한다. 이렇게 지속적으로 Props를 활용해 해당 State를 사용하지도 않으면서 Passing하게 된다.

## Usage

### createStore

```jsx
import { createStore } from 'redux';

const store = createStore(___);
```

다만, `createStore`의 경우 인자로 `store` 내부에 존재하는 `state`를 변경하는 방식을 결정하는 `reducer` 함수가 필요하다.

```jsx
const reducer = (state = { number: 1 }, action) => {
  const newState = { ...state };
  return newState;
};
```

### Provider, useSelector, useDispatch, ~~connect~~

```jsx
import { Provider, useSelector, useDispatch, ~~connect~~ } from 'react-redux';

const App = () => {
	return (
		<Provider store={store}>
			<Home />
			<About />
		</Provider>
	);
}
```

생성한 Store를 제공할 컴포넌트를 `Provider`로 wrapping하여 사용한다. `store` props로 넘겨주면, 해당 Store를 `Provider` 하위의 컴포넌트에서 사용할 수 있게 된다.

이후 하위 컴포넌트에서 `useSelector`를 활용해 해당 `state` 값을 사용할 수 있다.

```jsx
const Home = () => {
	const number = useSelector(state => state.number);

	return (
		<div>{number}</div>
}
```

이렇게 사용되는 `state` 값을 변경하는 것은 `dispatch`로 `action`을 넘겨주면 된다.

```jsx
const About = () => {
	const dispatch = useDispatch();

	return (
		<button onClick={() => {
			dispatch({ type: 'PLUS' })
		}>+1</button>
}
```

`dispatch`에 의해 `reducer`가 `action`을 넘겨받으면, 다음 로직이 동작하며 `state`를 업데이트할 수 있다.

```jsx
const reducer = (state = { number: 1 }, action) => {
  const newState = { ...state };
  if (action.type === 'PLUS') {
    newState.number++;
  }

  return newState;
};
```

# Redux

<aside>
⭐ Redux는 JavaScript 앱을 위한 예측 가능한 상태 컨테이너이다.

</aside>

## Intro

Redux는 모든 State를 관리하는 컨테이너로 기능하며, 앱 내의 컴포넌트들은 Redux의 State 컨테이너, 즉 Store에 접근하여 State를 읽어올 수 있기 때문에 전역 상태 관리 라이브러리로 사용할 수 있다.

또한, FLUX 패턴의 단방향성을 차용하여, Redux 내에서 발생하는 State의 변화는 모두 예측 가능하다.

## 기본 3원칙

### **Single source of truth**

Redux 내의 모든 State는 하나의 저장소(Store)안에 있는 객체 트리에 저장된다. 모든 State가 하나의 객체 트리에 저장되므로, 앱이 단순해지고, 예측하기 쉬워진다.

### **State is read-only**

Redux의 State를 변경하는 유일한 방법은 ‘**Action 객체를 Dispatch를 통해 전달하는 것**’이다. 즉, 유일한 방법이 무엇이 일어날 지, 어떤 변경이 일어날 지를 서술하는 객체인 Action을 Dispatch를 통해 보내는 것이다. 이처럼 직접 State 객체를 변경하는 것은 불가능하므로, 변경 방법이 제한되어 안정성과 예측 가능성이 높아진다.

이때, 모든 State 변화는 Dispatch를 통해 중앙화되며, 순서대로 수행되므로 동시에 데이터가 수정되면서 발생하는 문제는 발생하지 않는다.

State의 변화를 서술하는 Action 객체는 단순한 형태의 객체로 구성된다.

### **Changes are made with pure function**

Action 객체가 Store에 전달되면, 순수 함수인 Reducer 함수에 의해 State가 변경된다. 이때 동일한 Input을 받았을 때 항상 동일한 Output을 내는 것이 보장되어 있는 함수를 순수함수라고 한다. 따라서 순수 함수는 사이드 이펙트가 없어야 한다.

Reducer 함수는 이전 state 객체와 action 객체를 인자로 받아 새로운 state 객체를 반환하는 순수 함수로, 기존 state 객체를 수정하는 것이 아니라 새로운 state 객체를 만들어 반환한다.

Redux는 하나의 Store를 가지므로 Reducer도 하나여야 하므로, 관심사의 분리에 따라 Reducer를 분리하여 작성하고, 하나의 Root Reducer로 통합하는 방식이 선호된다.

## Usage

앱의 State 전부는 하나의 저장소(Store)안에 있는 객체 트리에 저장된다. 이러한 State를 변경하는 유일한 방법은 무엇이 일어날 지, 즉, 어떤 변경이 일어날 지를 서술하는 객체인 Action을 보내는 것뿐이다. 즉, State 객체를 변경하는 것은 불가능하고, State가 변경된다면 새로운 State 객체를 반환해야 한다. 이때, Action이 State를 어떻게 변경할 지를 명시하기 위해 순수 함수인 Reducers 함수를 작성해주어야 한다.

```jsx
import { createStore } from 'redux';

// Initial State
const initialState = {
  number: 0,
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        number: state.number + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        number: state.number - 1,
      };
  }
};

// Store
const store = createStore(counterReducer);
```

## 기본 용어

### Action

`type` 필드를 가진 JavaScript 객체로, 앱 내에서 발생하는 이벤트를 서술한다. `type` 필드의 값은 주로 `domain/eventName`와 같은 형태로 보다 서술적이게 작성한다. 또한 발생하는 이벤트에 대한 추가적인 정보를 가진 다른 필드를 가질 수 있으며, `payload`라고 한다.

```jsx
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk',
};
```

### Action Creator

Action 객체를 생성하여 반환하는 함수로, 매번 Action 객체를 생성하지 않고 보통 Action Creator 함수를 활용한다.

```jsx
const addTodo = (text) => {
  return {
    type: 'todos/todoAdded',
    payload: text,
  };
};
```

### Reducer

Reducer 함수는 현재 state와 action 객체를 인자로 전달받아, 필요한 경우 state를 변경하고 새로운 state를 반환하는 함수이다.

- 인자로 전달받은 현재 state와 action 객체를 기반으로 새로운 state를 계산한다.
- 현재 state를 직접 수정하는 것은 허용되지 않는다. 대신에 보통 현재 state를 복사하여 변경한다.
- 어떠한 사이드 이펙트도 허용되지 않는다.

```jsx
const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'counter/increment') {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  return state;
};
```

### Store

Store는 현재 앱 내의 State로 구성된 객체 트리를 의미한다. Reducer를 전달하여 생성되며, `getState` 메서드로 현재 State 값을 반환할 수 있다.

```jsx
import { createStore } from 'redux';

const store = createStore(counterReducer);

console.log(store.getStae());
```

### Dispatch

Store는 Dispatch라는 메서드를 갖는데, 이는 State를 업데이트하는 유일한 방법으로, Action 객체를 Dispatch로 호출하는 것이 그 방법이다.

```jsx
store.dispatch({ type: 'counter/increment' });

console.log(store.getState());
// {value: 1}
```

### Selectors

Selectors는 Store 내부의 State를 추출하는 함수이다.

```jsx
const selectCounterValue = (state) => state.value;

const currentValue = selectCounterValue(store.getState());
console.log(currentValue);
// 2
```

## Data Flow

앱은 다음과 같은 흐름으로 동작한다.

- State가 특정 시점의 앱의 상태를 보여주고, 이를 기반으로 UI가 렌더링된다.
- User와의 상호작용과 같은 무엇인가가 발생하면, State가 업데이트된다.
- 이렇게 업데이트된 새로운 상태를 기반으로 UI가 다시 렌더링된다.

![ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc6198ca-4c29-4d51-86e8-f1f6dcbe62d4/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

Redux의 경우, 다음과 같이 동작한다.

- Store를 Root Reducer를 통해 생성한다.
- Store가 Root Reducer를 호출해 initial State를 저장한다.
- 처음 UI가 렌더링될 때 UI 컴포넌트는 Store의 현재 State에 접근하고, 해당 State 데이터를 활용해 무엇을 렌더링할 지 결정한다.
- 이후 앱에서 User와의 상호작용에 의한 무엇인가가 발생하면, Store에게 Action을 Dispatch를 통해 전달한다.
- Store는 현재 State와 Action 객체를 받아 Reducer 함수를 실행하고, 새로운 State를 반환한다.
- UI 컴포넌트에서 Store의 State에 접근하여 필요한 State의 일부가 업데이트되었는지 확인하고, 화면에 다시 렌더링한다.

## Example - Todos

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/124d8f1c-99d6-4327-ba14-c1d7b4a13170/Untitled.png)

### Designing the State Values

Redux의 핵심 개념 중 하나는, UI가 State 기반으로 구성되어야만 한다는 점이다. 따라서, 필요하다고 생각되는 모든 State 값을 미리 고려하는 것이 좋다. 이러한 방식은 최대한 적은 State를 활용하여 UI를 구성할 수 있게 하여 추후 유지 보수나 State 관리에 유리하다.

구현하고자하는 Todos 앱의 경우, 중요한 데이터는 Todo Items와 Filtering Options로 구분된다. 이때 각 Todo Item의 경우, 다음과 같은 데이터를 가진다.

- 중복되지 않는 Id
- Todo의 내용을 보여주는 Text
- 완료 여부를 표현하는 Boolean
- Color Category

Filtering Options의 경우, 다음과 같은 데이터를 가지고 있다.

- 완료 상태 값: `All`, `Active`, `Completed`
- 카테고리 값: `Red`, `Yellow`, `Green`, `Blue`, `Orange`, `Purple`

구분하고 보면, 전자는 앱이 동작하는데 핵심적인 데이터이고, 후자는 현재 앱이 무엇을 하고 있는지를 명시하는 데이터이다.

### Designing the State Structure

보통 Redux의 State 값은 JavaScript 객체로 구성된다. 이를 바탕으로 위에서 구분한 State에 적용하면 다음과 같이 분류할 수 있다.

```jsx
const todoAppState = {
  todos: [
    { id: 0, todoContent: 'Learn React', isCompleted: true },
    { id: 1, todoContent: 'Learn Redux', isCompleted: false, color: 'purple' },
    {
      id: 2,
      todoContent: 'Blog Project Init',
      isCompleted: false,
      color: 'blue',
    },
    { id: 3, todoContent: 'Apply Kakao', isCompleted: false, color: 'yellow' },
  ],
  filters: {
    status: 'Active',
    colors: ['red', 'blue'],
  },
};
```

### **Designing Actions[](https://ko.redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#designing-actions)**

`type` 필드를 가진 JavaScript 객체인 Actions 객체를 위에서 작성한 State 기반으로 구성할 수 있다. 이에 따라 `type` 구성할 수 있다.

- 새로운 Todo Item을 추가 → `{type: 'todos/addTodo', payload: todoContent}`
- 완료 여부를 Toggle → `{type: 'todos/toggleTodo', payload: todoId}`
- Color 카테고리를 선택 → `{type: 'todos/selectColor, payload: {todoId, color}}`
- Todo 삭제 → `{type: 'todos/deleteTodo', payload: todoId}`
- 모든 Todos 완료 여부 선택 → `{type: 'todos/CompleteAllTodos'}`
- 모든 완료 Todos 삭제 → `{type: 'todos/clearAllCompleteTodos'}`
- 다른 완료 여부 선택 → `{type: 'filters/changeStatusFilter', payload: filterValue}`
- 새로운 색상 추가/색상 제거 → `{type: 'filters/changeColorFilter', payload: color}`

## **What is a "thunk"?**

### Redux Thunk 활용

```jsx
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));
```
