# JS-Tutorial
 
# Chapter 001. *소개*

## Javascript

Javascript는 웹 페이지에 생동감을 불어 넣기 위해 만들어진 프로그래밍 언어이다. Javascript는 브라우저와 서버서 실행 가능(Javascript Engine을 가진 모든 디바이스 포함)하다

### Standards

[참고 자료](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

### Manuals

[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference), [MS](https://docs.microsoft.com/ko-kr/javascript/)

---

# Chapter 002. *Javascript 기본*

### `<script>`

`<script>`를 사용하면, HTML 문서 대부분의 위치에 삽입할 수 있다. 직접 태그 내에 코드를 작성해도 되고, 새로운 파일로 만들어 `src` 속성(~~path~~)으로 연결할 수 있다. 다만, `src`속성과 내부 코드를 동시에 가지지는 못한다.

```js
<script>
	alert('Hello, World!');
</script>
```

```jsx
<script src='path/to/alert.js'></script>
```

### **문(statement)**

문(statement)은 어떤 작업을 수행하는 문법 구조와 명령어를 의미한다. 이때, 서로 다른 문은 세미콜론(`;`)으로 구분한다.(보통 가독성을 위해 서로 다른 줄에 작성하는 것이 더 일반적이다.)

줄바꿈이 있는 경우에는 세미콜론(`;`)을 생략할 수 있다. 줄바꿈을 암시적 세미콜론으로 해석하기 때문이다.([참고](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion))

반면, 세미콜론(`;`)이 필요하나, Javascript가 이를 추정하지 못하는 경우도 있다. 따라서, 줄바꿈으로 문을 구분했더라도, 세미콜론(`;`)을 작성하는 것이 좋다.

### 주석(comment)

주석(comment)를 활용해서 해당 코드가 어떤 일을 하는지, 왜 하는지에 대해 설명을 추가할 수 있다. 이러한 주석(comment)는 어디에나 작성할 수 있고, 코드의 실행에 영향을 미치지 못한다. 다만, 중첩된 주석은 에러를 발생시킨다는 점에 유의해야 한다.

```js
// 한 줄 짜리 주석입니다.

/* 여러 줄로
만들어진
주석입니다.
*/
```

대부분의 에디터에서는 `ctrl`+`/` 단축키로 주석 처리를 할 수 있다.

### `"use strict"`

strict mode를 활성화하는 지시자로, 해당 모드에서의 호환성 문제 방지하고 "모던한" 방식으로 코드를 동작시킨다. 다만, 해당 지시자는 코드의 최상단에만 작성되어야 하고, 취소할 수 없다.

```js
"use strict";

// 이후 코드는 "모던한" 방식으로 실행된다.
```

### 변수와 상수
1. 변수(variables)
	변수는 데이터를 저장할 때 사용되는 '이름이 붙은 저장소'이다. Javascript에서는 `let` 키워드를 활용해 변수를 생성할 수 있다.
	```js
	let message;
	```
	할당 연산자 `=`을 활용해 변수 안에 데이터를 저장할 수 있다.
	```jsx
	message = 'Hello'; // 문자열 저장하기
	```
	이렇게 문자열이 변수와 연결된 메모리 영역에 저장되었으므로, 변수명을 활용해 해당 문자열에 접근할 수도 있고, 한 줄에 여러 변수를 선언하여 데이터를 저장할 수 있으나, 가독성이 떨어질 수 있다.
	```jsx
	let message = "Hello";
	alert(message);

	let user = 'John', age = 25, height = '175cm';
	```
