# 🧩 재귀(Recursion)

재귀의 기본 개념은 한 가지 문제를 가지고 어떤 종료점(종료 조건)에 도달할 때 까지 더 작은 부분이나 변경되는 부분에서 반복적으로 수행하는 것이다.

재귀는 자기 자신을 호출하는 절차를 의미한다. 즉, JavaScript에서 재귀 함수는 자기 자신을 호출하는 함수를 의미한다. 어떤 함수에서 내부적으로 다른 함수를 호출하는데, 호출하는 다른 함수가 자기 자신일 때를 의미한다. 이때, 그러한 호출은 반복적으로 존재하며, 어떤 종료점(종료 조건)에 도달하면 종료된다.

### 재귀 함수를 사용하는 이유

- 다양한 솔루션을 비롯하여 아래 예시와 같은 JavaScript 코드를 작성할 때 많이 사용된다.
  - AJAX 통신에 의한 `JSON.stringfy`, `JSON.parse`
  - `document.getElementById`, `document.querySelector`
  - DOM의 중첩된 트리 구조
  - 순회 알고리즘
  - 객체 순회 등
- 다만, 반복문을 활용하는 것이 더 간결한 경우도 존재하지만, 보다 많은 데이터나 반복적으로 중첩된 트리 구조 등을 파악하기 위해서는 재귀 함수를 활용하는 것이 더 나은 선택이 될 것이다.

### 참고 | Call Stack

JavaScript 내부에는 함수 호출을 관리하는 일종의 데이터 구조가 있다. 호출된 함수는 보통 다른 함수가 반환될 때까지 기다리는 경우가 많다. 특히, 함수는 올바른 순서에 의해 실행되어야 하는데 JavaScript에서 이를 담당하는 데이터 구조를 **Call Stack**이라고 한다.

Stack 구조이기 때문에 새로운 함수가 호출되면 Call Stack의 최상단에 쌓이게 되며, JavaScript가 return 키워드를 확인하거나 함수 안에 더 이상 실행할 코드가 없으면 컴파일러가 Call Stack의 최상단에 위치한 함수를 제거한다.

다만, 재귀 함수의 경우는 새로운 함수를 계속해서 Call Stack에 추가한다. 자기 자신을 계속 Call Stack에 추가하고, 종료점(종료 조건)에 다다르면 호출이 종료된다.

### 재귀 함수

- 동일한 함수를 계속 호출하며 하나의 함수가 자기 자신을 재귀적으로 호출하게 한다.
- 특정 종료점(종료 조건)을 통해 재귀가 종료된다.
- 재귀 함수의 입력 값은 매번 호출할 때마다 달라진다.

**재귀 함수 예시**

```jsx
function countDown(num) {
  // 종료 조건 설정
  if (num <= 0) {
    console.log('All done.');
    return; // 반드시 있어야 한다.
  }

  // 입력 값 변경
  num--;

  // 재귀 함수 호출
  countDown(num);
}
```

- 함수 내부에 `countDown(num)` 함수를 호출하여 재귀적으로 호출된다.
- `num`이 `0` 이하가 되면 `return`되므로, 재귀가 종료된다.
- 입력 값 `num`을 매번 호출할 때마다 `1`씩 감소시켜 달라지게 된다.

**재귀 함수 예시**

```jsx
function sumRange(num) {
  // 종료 조건 설정
  if (num === 1) return 1;

  // 재귀함수 호출 및 입력 값 변경
  return num + sumRange(num - 1);
}
```

- 함수의 반환 값으로 `sumRange(num-1)` 함수를 호출하여 재귀적으로 호출된다.
- `num`이 `1`이 되면 `1`을 `return`하므로, 재귀가 종료된다.
- 입력 값 `num`을 매번 호출할 때마다 `1`씩 감소시켜 달라지게 된다.

**재귀 함수 예시**

```jsx
function factorial(num) {
  // 종료 조건 설정
  if (num === 1) return 1;

  // 재귀함수 호출 및 입력 값 변경
  return num * factorial(num - 1);
}
```

- 함수의 반환 값으로 `factorial(num-1)` 함수를 호출하여 재귀적으로 호출된다.
- `num`이 `1`이 되면 `1`을 `return`하므로, 재귀가 종료된다.
- 입력 값 `num`을 매번 호출할 때마다 `1`씩 감소시켜 달라지게 된다.

### 재귀 함수를 작성할 때 흔히 발생하는 문제

- 종료점(종료 조건)을 생략하는 경우
  `Error: Maximum Call Stack Size exceeded`를 발생시킨다.
- 종료 조건에서 잘못된 값을 반환하거나 반환을 생략하는 경우
- 입력 값 변경이 잘못된 경우

### Helper Method를 활용한 재귀와 순수 재귀

```jsx
function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // outer function input 변경
    helper(helperInput--);
  }

  helper(input);

  return ououterScopedVariable;
}
```

외부 함수를 호출하여 특정 입력 값을 내부로 전달하고, 내부에 정의되어 있는 함수는 재귀적으로 자기 자신을 호출하게 되는 하나의 패턴이다. 특히 이러한 방식은 배열이나 데이터 목록 등을 컴파일할 때 흔히 활용된다.

이는 물론 순수 재귀 함수로도 구현할 수 있다.

**Helper Method 재귀 함수 예시**

```jsx
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    // 종료 조건 설정
    if (helperInput.length === 0) return;

    // Helper 로직
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    // Helper 함수 호출 및 입력 값 변경
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
```

**순수 재귀 함수 예시**

```jsx
function collectOddValues(arr) {
  let newArr = [];

  // 종료 조건 설정
  if (arr.length === 0) return newArr;

  // 로직 설정
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  // 재귀 함수 호출 및 입력 값 변경
  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}
```

- 재귀 함수의 호출마다 `newArr`이 빈 배열로 설정되므로, 계산이 완료되었을 때 모든 배열을 하나의 배열로 합쳐서 반환해야 한다.
- 배열을 입력 값으로 받는 순수 재귀 함수는 보통 `slice`, `concat` 등의 메서드와 spread 연산자를 활용하여 배열(입력 값)을 변경하지 않고 활용한다.
- 문자열은 변경 불가능하기 때문에 `slice`, `substring`, `substr` 등의 메서드를 통해 복사본을 만들어 로직을 진행해야 한다.
- 객체는 `Object.assign` 메서드나 spread 연산자를 활용해 복사본을 만들어 로직을 진행해야 한다.
