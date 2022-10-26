# 📤 Intro

## 📤 Redux

Redux는 JavaScript 앱의 예측 가능한 State(상태) 관리 라이브러리로, 예측 가능한 방식으로 앱의 전역 State(상태)를 관리하기 위해 활용된다.

- JavaScript 앱 라이브러리이기 때문에, React, Angular, Vue, Vanilla JavaScript 모두에서 활용 가능하다.
- 앱의 State(상태)를 저장하여 관리할 수 있게 해준다.
- 모든 앱의 State(상태)는 변경될 수 있는데, Redux는 이러한 State(상태) 전환을 명시적이고 추적할 수 있게 해준다.

## 📤 Redux Toolkit

<aside>
⭐ **The official, opinionated, batteries-included toolset for efficient Redux development.**

</aside>

### Redux Toolkit를 활용하는 이유

- Redux 코드를 구성하기 복잡하다.
- Redux 코드를 구성하고, 유용하게 활용하기 위해 수많은 패키지를 설치해야 한다.
- Redux 코드는 동일한 패턴을 반복하는 너무 많은 보일러플레이트를 요구한다.

따라서 이러한 문제를 해결하기 위해 Redux Toolkit은 Redux에 대한 추상화 역할을 수행하면서, 보다 효율적인 코드 작성을 통해 더 나은 개발자 경험을 제공하므로, Redux Toolkit을 활용한다.

# 📤 Redux

## 📤 3 Core Concepts

### Real Scenario

<aside>
⭐ 실제 사례를 통해 Redux의 Core Concept을 더 쉽게 이해할 수 있다.

</aside>

- **Snack** **Shop Real Scenario**
  - Entities
    - 상점, **Store**
    - 상점 판매원, **Reducer**
    - 고객, **User**
  - Activities
    - 고객
      - 과자의 종류를 선택
      - 해당 과자를 주문 후 결제, **Action**
    - 상점 주인
      **Reducer**
      - 주문한 과자의 재고를 확인, **Reducer**
      - 재고에서 해당 과자를 차감, **Reducer**
      - 구매 내역 추적을 위한 영수증 인쇄, **Reducer**

1. **Store**

   앱의 State(상태)를 보관하고 추적하며, 안전하게 유지한다.(상점의 과자)

2. **Action**

   앱에서 어떤 이벤트가 발생했는 지를 보여준다.(고객의 주문)

3. **Reducer**

   앱에서 Store와 Action을 연결하는 역할을 수행하며, Action을 처리하여 그에 따른 결과를 Store에 반영해 State(상태)를 업데이트한다.(상점 주인의 판매)

   즉, 현재 State(상태)와 전달받은 Action을 바탕으로 실제 State(상태) 변경을 수행한다.

## 📤 3 Basic Principles

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3385b1e-b955-4651-9471-ae696b923074/Untitled.png)

### First Principle

<aside>
⭐ **The global state of your application is stored as an object inside a single store.**

</aside>

즉, 앱의 모든 State(상태)는 하나의 객체로 하나의 Store에서 저장되고 관리된다.

```jsx
{
		numberOfSnacks: 10,
}
```

### Second Principle

<aside>
⭐ **The only way to change the state is to dispatch an action, an object that describes what happened.**

</aside>

즉, 직접적으로 State(상태)를 변경하거나 업데이트할 수 없고, 반드시 Action을 통해야 한다. 다시 말하면, State(상태)는 읽기 전용이며, 상태를 변경하는 유일한 방법은 Action을 통해 어떤 이벤트가 발생했는지를 전달하는 방법 하나이다.

```jsx
{
		type: `SNACK_ORDERED`,
}
```

### Third Principle

<aside>
⭐ **Using pure reducers to specify how the state tree is updated based on actions.**

</aside>

즉, State(상태)가 어떻게 변경되는지를 결정하기 위해 순수 함수인 Reducer를 작성해야 한다. Reducer는 순수 함수이므로, 이전 State(상태)와 Action을 전달받아 새로운 State(상태)를 반환하는 함수 형태를 갖는다.

```jsx
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case **SNACK_ORDERED**:
			return {
				**numberOfSnacks: state.numberOfSnacks - 1;**
			}
	}
}
```

## 📤 Action

App이 Redux Store와 상호작용할 수 있는 유일한 방법으로, Action은 App에서 Redux Store로 일부 정보를 전달하는 역할을 수행하는 JavaScript 객체이다.

- 어떤 이벤트가 발생했는지에 대해 설명하는 `type` 속성을 반드시 가져야한다.

### Action Creator

type 속성을 가진 Action 객체를 반환하는 Action Creator 함수를 생성할 수 있다.

```jsx
// Declare Constant for Action Type
const SNACK_ORDERED = 'SNACK_ORDERED';

// Declare Action Creator
const orderSnack = () => {
  return {
    type: SNACK_ORDERED,
    quantity: 1,
  };
};
```

### bindActionCreators

여러 Action Creator 함수를 하나로 묶어 활용할 수 있다.

```jsx
const bindActionCreators = redux.bindActionCreators;

// Use BindActionCreators
const actions = bindActionCreators(
  { orderSnack, restockSnack },
  store.dispatch,
);

actions.orderSnack();
actions.orderSnack();
actions.orderSnack();
actions.restockSnack(3);
```

## 📤 Reducers

Reducer는 앱의 State(상태)가 Action에 의해 어떻게 업데이트되어 Store에 전달되는지를 설명한다. 즉, Action은 어떤 이벤트가 발생했는지만을 설명하고, Reducer가 앱의 State(상태)가 어떻게 업데이트 되는지를 설명한다.

- Reducer는 State(상태)와 Action을 인자로 받아 새로운 State(상태)를 반환한다.

```jsx
// Declare Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SNACK_ORDERED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfSnacks: state.numberOfSnacks - 1,
      };
    default: {
      return state;
    }
  }
};
```

## 📤 Store

전체 앱에 하나의 Store만 존재한다.

- 앱의 State(상태)를 유지
- `getState()` 메서드로 State(상태)에 접근할 수 있게 허용
- `dispatch(action)` 메서드를 통해 앱의 State(상태) 업데이트 허용
- `subscribe(listener)` 메서드로 State(상태)에 대한 Listener를 등록
- `subscribe(listener)` 메서드에 의해 반환되는 함수로 State(상태)에 대한 Listener를 해제

```jsx
// Declare Store
const store = createStore(reducer);

// 상태에 접근
console.log(store.getState());

// subscribe
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// 상태 업데이트 가능
store.dispatch(orderSnack());
store.dispatch(orderSnack());

// subscribe 해제
unsubscribe();

// 상태 업데이트 불가능
store.dispatch(orderSnack());
store.dispatch(orderSnack());
```

## 📤 Multiple Reducers

만약 상점에서 또다른 상품을 판매하게 된다면, 새로운 판매원을 채용하여 해당 상품의 판매를 담당하게 한다.

즉, 하나의 앱에 새로운 State(상태)가 추가되면, 이를 기존 State(상태)와 다른 Reducer, Action을 통해 관리하는 것이 문제가 생겼을 때 원인을 파악하기 쉽고, 확장성에 있어서 유리하다.

```jsx
// Import redux
const redux = require('redux');

// Import redux createStore
const createStore = redux.createStore;

// Import redux bindActionCreators
const bindActionCreators = redux.bindActionCreators;

// Declare Constant for Action Type
const SNACK_ORDERED = 'SNACK_ORDERED';
const SNACK_RESTOCKED = 'SNACK_RESTOCKED';
const COFFEE_ORDERED = 'COFFEE_ORDERED';
const COFFEE_RESTOCKED = 'COFFEE_RESTOCKED';

// Declare Action Creator
const orderSnack = (amount = 1) => {
  return {
    type: SNACK_ORDERED,
    payload: amount,
  };
};

const restockSnack = (amount = 1) => {
  return {
    type: SNACK_RESTOCKED,
    payload: amount,
  };
};

const orderCoffee = (amount = 1) => {
  return {
    type: COFFEE_ORDERED,
    payload: amount,
  };
};

const restockCoffee = (amount = 1) => {
  return {
    type: COFFEE_RESTOCKED,
    payload: amount,
  };
};

// Declare State
const initialState = {
  numberOfSnacks: 10,
  numberOfCoffees: 10,
};

// Declare Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SNACK_ORDERED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfSnacks: state.numberOfSnacks - action.payload,
      };
    case SNACK_RESTOCKED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfSnacks: state.numberOfSnacks + action.payload,
      };
    case COFFEE_ORDERED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfCoffees: state.numberOfCoffees - action.payload,
      };
    case COFFEE_RESTOCKED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfCoffees: state.numberOfCoffees + action.payload,
      };
    default: {
      return state;
    }
  }
};

// Declare Store
const store = createStore(reducer);
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Use BindActionCreators
const actions = bindActionCreators(
  { orderSnack, restockSnack, orderCoffee, restockCoffee },
  store.dispatch,
);

actions.orderSnack();
actions.orderSnack();
actions.orderSnack();
actions.restockSnack(3);

actions.orderCoffee(2);
actions.orderCoffee(2);
actions.restockCoffee(3);
actions.restockCoffee(3);

unsubscribe();
```

다만 `combineReducers()` 메서드를 활용하여 하나의 객체로 이루어진 State(상태)를 분리하여 활용하는 방법도 있다.

```jsx
// Import redux
const redux = require('redux');

// Import redux createStore
const createStore = redux.createStore;

// Import redux bindActionCreators
const bindActionCreators = redux.bindActionCreators;

// Import redux combineReducers
const combineReducers = redux.combineReducers;

// Declare Constant for Action Type
const SNACK_ORDERED = 'SNACK_ORDERED';
const SNACK_RESTOCKED = 'SNACK_RESTOCKED';
const COFFEE_ORDERED = 'COFFEE_ORDERED';
const COFFEE_RESTOCKED = 'COFFEE_RESTOCKED';

// Declare Action Creator
const orderSnack = (amount = 1) => {
  return {
    type: SNACK_ORDERED,
    payload: amount,
  };
};

const restockSnack = (amount = 1) => {
  return {
    type: SNACK_RESTOCKED,
    payload: amount,
  };
};

const orderCoffee = (amount = 1) => {
  return {
    type: COFFEE_ORDERED,
    payload: amount,
  };
};

const restockCoffee = (amount = 1) => {
  return {
    type: COFFEE_RESTOCKED,
    payload: amount,
  };
};

// Declare State
// const initialState = {
//   numberOfSnacks: 10,
//   numberOfCoffees: 20,
// };

// Declare two Separated States
const initialSnackState = {
  numberOfSnacks: 10,
};

const initialCoffeeState = {
  numberOfCoffees: 20,
};

const snackReducer = (state = initialSnackState, action) => {
  switch (action.type) {
    case SNACK_ORDERED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfSnacks: state.numberOfSnacks - action.payload,
      };
    case SNACK_RESTOCKED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfSnacks: state.numberOfSnacks + action.payload,
      };
    default: {
      return state;
    }
  }
};

const coffeeReducer = (state = initialCoffeeState, action) => {
  switch (action.type) {
    case COFFEE_ORDERED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfCoffees: state.numberOfCoffees - action.payload,
      };
    case COFFEE_RESTOCKED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfCoffees: state.numberOfCoffees + action.payload,
      };
    default: {
      return state;
    }
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  snack: snackReducer,
  coffee: coffeeReducer,
});
const store = createStore(rootReducer);
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Use BindActionCreators
const actions = bindActionCreators(
  { orderSnack, restockSnack, orderCoffee, restockCoffee },
  store.dispatch,
);

actions.orderSnack();
actions.orderSnack();
actions.orderSnack();
actions.restockSnack(3);

actions.orderCoffee(2);
actions.orderCoffee(2);
actions.restockCoffee(3);
actions.restockCoffee(3);

unsubscribe();

store.dispatch(orderSnack());
store.dispatch(orderSnack());
store.dispatch(orderSnack());
```

이러한 방식을 활용하면 각각의 Reducer 함수가 전역 State(상태)의 일부를 관리하게 된다. 또한, rootReducer에 dispatch가 전달될 때 두 Reducer 모두 Action을 전달받지만, 관련된 Reducer 함수는 역할을 수행하지만, 다른 Reducer 함수는 dispatch된 Action을 무시하게 된다.

따라서 점차 앱이 커질수록 Reducer를 별도로 분리하여 완전히 독립적으로 유지하고, 다른 기능들을 관리할 수 있게 할 수 있다.

## 📤 immer.js

중첩된 객체의 형태를 가진 State(상태)는 모든 객체를 `…`, 즉 spread operator를 활용해 복사해주어야 하는 불편함과 어려움이 존재한다.

```jsx
const reducer = (state, action) => {
	switch (action.type) {
		case STREET_UPDATED:
			return {
				...state,
				address: {
					...state.address,
					street: action.payload,
				}
			}
		// ...
}
```

이때 immer.js 라이브러리를 활용하면 이러한 부분을 조금 더 쉽게 처리할 수 있고, DX의 향상을 가져온다.

```jsx
const produce = require('immer').produce;

const reducer = (state, action) => {
	switch (action.type) {
		case STREET_UPDATED:
			return produce(state, (draft) => {
				draft.address.street = action.payload
			}
		// ...
}
```

## 📤 Middleware

Middleware를 활용해 추가적인 기능을 Redux에 추가하여 확장할 수 있다. 즉, dispatch되는 Action과 Reducer 함수에 도달하는 시점 사이에 추가적인 확장 포인트를 제공해 로그 기록, crash 기록, 비동기 작업 수행 등의 추가적인 기능을 구현할 수 있다.

### redux-logger

```jsx
// Import redux applyMiddleware
const applyMiddleware = redux.applyMiddleware;

// Import redux-logger
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const store = createStore(rootReducer, applyMiddleware(logger));
const unsubscribe = store.subscribe(() => console.log(store.getState()));
```

### Asynchronous Action

지금까지 살펴본 redux 코드는 Action이 dispatch되고 State(상태)가 즉시 업데이트되는 동기적인 작업을 수행했다.

하지만 보통 앱에서는 API를 호출하여 데이터를 가져와 해당 데이터를 앱에서 활용하는 비동기적 작업을 수행할 때가 많다. 이때 주로, `axios`와 `redux-thunk` 라이브러리를 활용한다.

- **Store 구조**
  - **State**
    - `isLoading`
      - 데이터를 현재 가지고 왔는지 여부를 파악하기 위한 Flag State
      - 주로 Loading Spinner를 보여줄 때 활용한다.
    - `data`
      - 실제 가져오는 데이터로 보통 초기값은 빈 배열(`[]`)로 처리된다.
    - `error`
      - API 요청이 실패한 경우에 데이터를 다시 가져오는 대신 에러 메시지를 저장한다.
      - 앱이 에러를 보여주는 특별한 UI가 있는 경우, 해당 에러를 보여주게 된다.
  - **Actions**
    - `FETCH_DATA_REQUESTED`
    - `FETCH_DATA_SUCCEEDED`: 성공적으로 데이터를 가져온 경우
    - `FETCH_DATA_FAILED`: 데이터를 가져오는 데 실패한 경우
  - **Reducers**
    - case: `FETCH_DATA_REQUESTED`
      - `isLoading`: `true`
    - case: `FETCH_DATA_SUCCEEDED`
      - `isLoading`: `true`
      - `data`: `dataFromAPI`
    - case: `FETCH_DATA_FAILED`
      - `isLoading`: `false`
      - `error`: `errorFromAPI`

이때 Side Effects를 수행하는 Action Creator 함수는 하나의 함수를 반환한다. 내부 함수 안에서 비동기 작업 등 Side Effects와 dispatch 작업 등을 수행할 수 있다.

```jsx
// Import redux
const redux = require('redux');

// Import redux createStore
const createStore = redux.createStore;

// Import redux applyMiddleware
const applyMiddleware = redux.applyMiddleware;

// Import redux-thunk
const thunkMiddleware = require('redux-thunk').default;

// Import axios
const axios = require('axios');

// Declare State
const initialState = {
  isLoading: false,
  users: [],
  error: '',
};

// Declare Action Type
const FETCH_REQUESTED = 'FETCH_REQUESTED';
const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
const FETCH_FAILED = 'FETCH_FAILED';

// Declare Action Creator
const fetchUsersRequest = () => {
  return {
    type: FETCH_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFail = (error) => {
  return {
    type: FETCH_FAILED,
    payload: error,
  };
};

// Declare Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCEEDED:
      return {
        isLoading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_FAILED:
      return {
        isLoading: false,
        users: [],
        error: action.payload,
      };
    default:
  }
};

const fetchUsers = () => {
  return (dispatch) => {
    // side effects allow
    // also, dispatch allows
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/userss')
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFail(error.message));
        // console.log(error);
      });
  };
};

// Declare Store with Middleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Subscribe to store and dispatch Async Actions
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
```

# 📤 Redux Toolkit

## 📤 Intro

Action, Action Creator, Switch Reducer 등 너무 많은 Boilerplate 코드, redux-thunk, immer 등 여러 패키지에 대한 강한 의존성 등 Redux의 단점이 부각되자 Redux-Toolkit이 나타났다.

기본적으로 추천하는 디렉토리 구조를 따라 프로젝트를 세팅할 수 있다.

## 📤 createSlice

기본적으로 전체 앱의 State(상태)는 각각의 slice로 분리되어 있고, 개별적으로 관리된다.

```jsx
// Import createSlice
const createSlice = require('@reduxjs/toolkit').createSlice;

// Set Initial State
const initialState = { numeberOfSnacks: 10 };

// Create a Slice, which will automatically generate Action Creator
const snackSlice = createSlice({
  name: 'snack',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numeberOfSnacks -= action.payload;
    },
    restocked: (state, action) => {
      state.numeberOfSnacks += action.payload;
    },
  },
});

module.exports = snackSlice.reducer;

// Export Action Type, Action Object, Action Creator, Switch Statements
module.exports.snackActions = snackSlice.actions;
```

이때 `snackActions`는 기존의 Redux의 Action Type, Action Object, Action Creator, Switch Statements의 기능을 모두 포함하고 있다.

## 📤 configureStore

```jsx
// Import configureStore
const configureStore = require('@reduxjs/toolkit').configureStore;

// Import snackReducer
const snackReducer = require('../features/snack/snackSlice');

// Declare store
const store = configureStore({
  reducer: {
    snack: snackReducer,
  },
});

module.exports = store;
```

## 📤 store

```jsx
const store = require('./app/store');

const snackActions = require('./features/snack/snackSlice').snackActions;

console.log('Initial state ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState());
});

store.dispatch(snackActions.ordered(2));
store.dispatch(snackActions.ordered(3));
store.dispatch(snackActions.ordered(1));
store.dispatch(snackActions.restocked(6));

unsubscribe();
```

`subscribe()` 메서드를 활용해 업데이트 되는 변경 사항을 추적할 수 있다.

## 📤 Middleware

### redux-logger

- Middleware를 활용해 redux-toolkit의 기능을 추가적으로 확장할 수 있다.
- dispatch된 Action에 대한 통찰력을 제공한다.

```jsx
// Import configureStore
const configureStore = require('@reduxjs/toolkit').configureStore;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

// Import Reducers
const snackReducer = require('../features/snack/snackSlice');
const coffeeReducer = require('../features/coffee/coffeeSlice');

// Declare store
const store = configureStore({
  reducer: {
    snack: snackReducer,
    coffee: coffeeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
```

Middleware 목록에 `logger`를 추가해주는 방식으로 설정할 수 있다.

```jsx
Initial state  { snack: { numeberOfSnacks: 10 }, coffee: { numberOfCoffees: 20 } }
 action snack/ordered @ 09:29:42.993
   prev state { snack: { numeberOfSnacks: 10 }, coffee: { numberOfCoffees: 20 } }
   action     { type: 'snack/ordered', payload: 2 }
   next state { snack: { numeberOfSnacks: 8 }, coffee: { numberOfCoffees: 20 } }
 action snack/ordered @ 09:29:42.997
   prev state { snack: { numeberOfSnacks: 8 }, coffee: { numberOfCoffees: 20 } }
   action     { type: 'snack/ordered', payload: 3 }
   next state { snack: { numeberOfSnacks: 5 }, coffee: { numberOfCoffees: 20 } }
 action snack/ordered @ 09:29:42.999
   prev state { snack: { numeberOfSnacks: 5 }, coffee: { numberOfCoffees: 20 } }
   action     { type: 'snack/ordered', payload: 1 }
   next state { snack: { numeberOfSnacks: 4 }, coffee: { numberOfCoffees: 20 } }
 action snack/restocked @ 09:29:43.000
   prev state { snack: { numeberOfSnacks: 4 }, coffee: { numberOfCoffees: 20 } }
   action     { type: 'snack/restocked', payload: 6 }
   next state { snack: { numeberOfSnacks: 10 }, coffee: { numberOfCoffees: 20 } }
 action coffee/ordered @ 09:29:43.001
   prev state { snack: { numeberOfSnacks: 10 }, coffee: { numberOfCoffees: 20 } }
   action     { type: 'coffee/ordered', payload: 2 }
   next state { snack: { numeberOfSnacks: 10 }, coffee: { numberOfCoffees: 18 } }
 action coffee/ordered @ 09:29:43.002
   prev state { snack: { numeberOfSnacks: 10 }, coffee: { numberOfCoffees: 18 } }
   action     { type: 'coffee/ordered', payload: 3 }
   next state { snack: { numeberOfSnacks: 10 }, coffee: { numberOfCoffees: 15 } }
 action coffee/ordered @ 09:29:43.002
   prev state { snack: { numeberOfSnacks: 10 }, coffee: { numberOfCoffees: 15 } }
   action     { type: 'coffee/ordered', payload: 1 }
   next state { snack: { numeberOfSnacks: 10 }, coffee: { numberOfCoffees: 14 } }
 action coffee/restocked @ 09:29:43.003
   prev state { snack: { numeberOfSnacks: 10 }, coffee: { numberOfCoffees: 14 } }
   action     { type: 'coffee/restocked', payload: 6 }
   next state { snack: { numeberOfSnacks: 10 }, coffee: { numberOfCoffees: 20 } }
```

이러한 방식으로 로그가 제공되는데, 이때 `type`을 확인해보면, `slice`에서 작성한 `name`의 `value`과 `reducer` 함수의 `key`를 결합한 형태이다.

## 📤 Extra Reducers

Redux의 경우 각 State(상태)에 따라 Reducer를 분리하고, `combineReducers` 메서드를 활용해 하나의 `rootReducer`로 만들어 `store`에 제공했다.

이러한 방식은 두 Reducer로 구성된 `rootReducer`가 dispatch된 Action을 모두 전달받고, 관련된 Reducer 하나는 Action에 반응해 작업을 수행하고, 다른 Reducer는 해당 Action을 무시하는 방식으로 동작한다.

하나의 Reducer는 관련된 하나의 State(상태)만을 업데이트할 수 있다. 다만, 여러 State(상태)를 동시에 업데이트하는 Action이 dispatch된 경우에는 그에 대해 반응하여 작업을 수행할 수 있다는 것이다.

Redux-Toolkit에서의 Slice는 반드시 같은 Slice가 생성한 Action Type에 대해서만 반응하여 동작을 수행할 수 있다. 다른 Slice의 Action Type에 반응하게 하고자 한다면 Extra Reducers를 활용해야 한다.

```jsx
// Import createSlice
const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numberOfCoffees: 20,
};

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfCoffees -= action.payload;
    },
    restocked: (state, action) => {
      state.numberOfCoffees += action.payload;
    },
  },
  extraReducers: {
    ['snack/ordered']: (state) => {
      state.numberOfCoffees--;
    },
  },
});

module.exports = coffeeSlice.reducer;
module.exports.coffeeActions = coffeeSlice.actions;
```

이러한 구조의 `extraReducers`는 동작하긴 하지만, 권장되지 않는다. `builder` 함수를 통해 구현하는 것이 권장된다.

```jsx
// Import createSlice
const createSlice = require('@reduxjs/toolkit').createSlice;

const { snackActions } = require('../snack/snackSlice');

const initialState = {
  numberOfCoffees: 20,
};

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfCoffees -= action.payload;
    },
    restocked: (state, action) => {
      state.numberOfCoffees += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(snackActions.ordered, (state) => {
      state.numberOfCoffees--;
    });
  },
});

module.exports = coffeeSlice.reducer;
module.exports.coffeeActions = coffeeSlice.actions;
```

## 📤 Async Thunks

기본적으로 Redux Toolkit은 `createAsyncThunk` 함수를 제공하여 비동기 Action을 생성하고, dispatch할 수 있다.

```jsx
// Import createSlice
const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const initialState = {
  isLoading: false,
  users: [],
  error: '',
};

// createAsyncThunk 함수는 Action Type, Payload Creator를 인자로 받는다.
// createAsyncThunk 함수는 자동적으로 반환된 Promise를 기반으로 한 Pending, Fulfilled, Rejected Action Type을 생성하므로, 이를 Reducer 함수에서 활용해 State 업데이트를 실행할 수 있다.
// Slice 외부에서 생성되므로, extraReducers로 추가되어야 한다.
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user) => user.id));
  // catch는 추가적인 기능으로 인해 불필요하다.
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
```
