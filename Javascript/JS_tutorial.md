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
## JavaScript 연결
### [`<script>`](https://ko.javascript.info/hello-world#ref-1920)

`<script>`를 사용하면, HTML 문서 대부분의 위치에 삽입할 수 있다. 직접 태그 내에 코드를 작성해도 되고, 새로운 파일로 만들어 `src` 속성(~~path~~)으로 연결할 수 있다. 다만, `src`속성과 내부 코드를 동시에 가지지는 못한다. 또한, 과거 필수적이었던 `type` 속성과 `language` 속성은 더는 사용하지 않아도 된다.

```js
<script>
	alert('Hello, World!');
</script>
```

JavaScript 코드의 양이 많거나 기능별로 나누어야 하는 경우 파일로 소분하여 저장할 수 있다. 특히, HTML 안에 직접 스크립트를 작성하는 방식은 대개 JavaScript 코드가 아주 간단할 때만 사용하고, JavaScript 코드가 길어지면 별개의 분리된 파일로 만들어 저장하는 것이 좋다. 이렇게 소분한 JavaScript 파일은 `src` 속성을 활용해 HTML 문서에 삽입할 수 있다.

```html
<script src='path/to/alert.js'></script>
<script src='path/to/input.js'></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

JavaScript 코드를 별도의 파일에 작성하면 브라우저가 해당 코드를 다운받아 캐시(cache)에 저장하기 때문에, 성능상의 이점이 있다. 여러 페이지에서 동일한 JavaScript 코드를 사용하는 경우, 브라우저는 페이지가 바뀔 때마다 JavaScript 코드를 새로 다운받지 않고 캐시로부터 가져와 사용하게 되어 트래픽이 절약되고 웹 페이지의 실제 속도가 빨라지게 된다.

다만, `src` 속성이 있는 경우, `<script>` 내부 코드는 무시된다.
```html
<script src="file.js">
	console.log("실행되는 코드일까?");		// src 속성이 존재해 실행되지 않는다.
</script>
```

## JavaScript 코드의 구조
### [문(statement)](https://ko.javascript.info/structure#ref-1920)

문(statement)은 어떤 작업을 수행하는 **문법 구조**와 **명령어**를 의미한다. 이때, 서로 다른 문은 세미콜론(`;`)으로 구분한다.(보통 가독성을 위해 서로 다른 줄에 작성하는 것이 더 일반적이다.)
```javascript
console.log("Hello");
console.log("JavaScript");
```

줄바꿈이 있는 경우에는 세미콜론(`;`)을 생략할 수 있다. 줄바꿈을 암시적 세미콜론으로 해석하기 때문이다.([세미콜론 자동 삽입](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion))

```javascript
console.log("Hello")
console.log("JavaScript")
```

반면, 세미콜론(`;`)이 필요하나, Javascript가 이를 추정하지 못하는 경우도 있다. 따라서, 줄바꿈으로 문을 구분했더라도, 세미콜론(`;`)을 작성하는 것이 좋다. 즉, 세미콜론은 생략할 수 있지만 세미콜론을 사용하는 것이 더 안전하고, JavaScript 커뮤니티에서도 이를 규칙으로 정해 권장하고 있다.

### [주석(comment)](https://ko.javascript.info/structure#code-comments)

주석(comment)를 활용해서 해당 코드가 어떤 일을 하는지, 왜 하는지에 대해 설명을 추가할 수 있다. 이러한 주석(comment)는 어디에나 작성할 수 있고, 코드의 실행에 영향을 미치지 못한다. 즉, 주석을 활용해 코드의 일부를 일시적으로 비활성화할 수 있다. 다만, 중첩된 주석은 에러를 발생시킨다는 점에 유의해야 한다.

```js
// 한 줄 짜리 주석입니다.

/* 여러 줄로
만들어진
주석입니다.
*/
```

대부분의 에디터에서는 `ctrl`+`/` 단축키로 주석 처리를 할 수 있다.

## JavaScript 엄격 모드
### [`"use strict"`](https://ko.javascript.info/strict-mode#ref-1506)

ES5에서부터 새로운 기능이 추가되고 기존 기능 중 일부가 변경되면서, 하위 호환성 문제가 발생할 수 있게 되었다. 따라서 변경사항 대부분은 ES5의 기본 모드에서는 활성화되지 않도록 설계하고, 대신 `"use strict"` 지시자를 활용해 엄격 모드를 활성화한 경우에만, 이러한 변경사항이 적용되게끔 설계되어 있다.

엄격 모드(strict mode)를 활성화하는 지시자로, 해당 모드에서의 호환성 문제 방지하고 "모던한" 방식(ES5)으로 코드를 동작시킨다. 다만, 해당 지시자는 코드의 최상단에만 작성되어야 하고, 취소할 수 없다. 즉, "use strict"의 위에는 주석만 사용할 수 있다.

`"use strict"` 지시자는 함수 본문의 맨 앞에도 올 수 있는데, 이렇게 하면 오직 해당 함수만 엄격 모드로 실행된다.

```javascript
"use strict";
// 이후 코드는 "모던한" 방식으로 실행된다.
```

```javascript
alert("some code");
// 하단에 위치한 "use strict"는 스크립트 상단에 위치하지 않으므로 무시됩니다.

"use strict";
// 엄격 모드가 활성화되지 않습니다.
```

### [브라우저 콘솔과 엄격 모드](https://ko.javascript.info/strict-mode#ref-1507)
개발한 기능을 테스트하기 위해 브라우저 콘솔을 사용하는 경우, 기본적으로 `"use strict"`가 적용되어있지 않는다. (`"use strict"`에 영향을 받는 경우라면 개발자는 기대하지 않았던 결과를 얻을 수 있기 때문.) 브라우저 콘솔에서 엄격 모드를 활성화하기 위해서는 `"use strict"`를 입력한 후, `Shift` + `Enter`를 눌러 줄 바꿈 해 원하는 스크립트를 입력해야 한다.
```javascript
'use strict'; // <Shift+Enter를 눌러 줄 바꿈 함>
//  ...테스트하려는 코드 입력
// <Enter를 눌러 실행>
```

모던 JavaScript는 '클래스’와 '모듈’이라 불리는 진일보한 구조를 제공하고, 이를 활용하는 경우 `"use strict"`가 자동으로 적용된다.

## JavaScript 변수와 상수
### [변수(variables)](https://ko.javascript.info/variables#ref-1351)

변수는 데이터를 저장할 때 사용되는 '이름이 붙은 저장소'이다. JavaScript에서는 `let` 키워드를 활용해 변수를 생성할 수 있다.

```javascript
let message;		// 변수 선언하기
```

할당 연산자 `=`을 활용해 변수 안에 데이터를 저장할 수 있다.

```javascript
message = 'Hello'; // 문자열 저장하기
```

이렇게 `Hello`라는 문자열이 `message` 변수와 연결된 메모리 영역에 저장되었으므로, 변수명을 활용해 해당 문자열에 접근할 수도 있다. 또한, 이미 선언한 변수에 할당한 값을 변경할 수 있으며, 한 줄에 여러 변수를 선언하여 데이터를 저장할 수 있으나, 이는 가독성이 떨어질 수 있으므로 한 줄에 한 개의 변수를 작성하는 것이 더 좋다.

```javascript
let message = "Hello";
console.log(message);

let user = 'John', age = 25, height = '175cm', message = "Bye, Goodnight";
```

동일한 이름의 변수를 두 번 이상 선언하면 에러가 발생한다. 따라서 변수는 딱 한 번만 선언하고, 선언한 변수를 참조할 때는 `let` 없이 변수명만 사용해 참조해야 한다.
```javascript
let message = "Hello";
let message = "World!";			// 에러 발생(SyntaxError: 'message' has already been declared)
```

### [변수 명명 규칙](https://ko.javascript.info/variables#ref-1353)

변수명을 작성할 때, 첫 글자는 숫자가 될 수 없고, 오직 문자와 숫자, 그리고 기호 `$`, `_`만 들어갈 수 있다. 또한, 대소문자를 구별하고, 기존에 설정되어 있는 [예약어 목록](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)에 있는 단어(예: `let`, `class`, `function`, `return` 등)는 사용할 수 없다.

여러 단어를 조합해 변수명을 만드는 경우에는 보통 [camelCase](https://en.wikipedia.org/wiki/Camel_case)가 활용된다.

```javascript
// 올바른 변수명
let userName; 				// camelCase
let test_1;
let $word;
let $; 								// 변수명으로 활용 가능
let _; 								// 변수명으로 활용 가능

// 올바르지 않은 변수명
let 2021list; 				// 숫자로 시작할 수 없다.
let my-name; 					// `-` 사용할 수 없다.

let let = 5; 					// 예약어(reserved name)이므로 변수명으로 사용할 수 없다.
let return = 7; 			// 예약어(reserved name)이므로 변수명으로 사용할 수 없다.
let class = 13; 			// 예약어(reserved name)이므로 변수명으로 사용할 수 없다.
```

참고로 과거에는 `let` 없이도 단순히 값을 할당해 변수를 생성하는 것이 가능했다. 엄격 모드를 쓰지 않는 경우 호환성을 유지할 수 있기 때문에 이러한 방식으로도 변수를 생성할 수 있다. 다만, 변수는 엄격 모드에서 정의되어 있지 않은 상태로 사용하는 경우, `a is not defined` 에러를 발생시키기 때문에, 정의되어 있는 경우에 사용하는 방식을 활용하는 습관이 더 좋다.

### [상수(constants)](https://ko.javascript.info/variables#ref-1354)

변화하지 않는 변수를 선언할 때에는 `let`이 아니라 `const`를 사용한다. 이렇게 `const`로 선언된 변수를 상수라고 하는데, 이는 재할당할 수 없으므로, 값을 변경하고자 하면 에러가 발생한다. 즉, 변수값이 절대 변경되지 않을 것이라 확신한다면, 값이 변경되는 것을 방지하고 다른 개발자들이 이를 상수라고 인지하기 위해 `const`를 활용해 변수를 선언해야 한다.

상수의 경우 2가지 의미로 활용되는데, (1) 변수의 값이 코드 실행 이전부터 결정되어 변하지 않는 값이 있고, (2) 런타임 과정에서 계산되지만, 최초 할당 이후에 값이 변하지 않는 상수도 있다.

```javascript
const myBirthday = '2000.01.01';

myBirthday = '1999.12.31'; // 에러 발생(TypeError: Assignment to constant variable.)
```

기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 것은 널리 사용되는 관습이다. 이러한 상수는 보통 **대문자와 `_`로 구성된 변수명**을 활용한다.

```javascript
const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';
const COLOR_BLUE = '#00F';
const COLOR_ORANGE = '#FF7F00';

const BIRTHDAY = '2000.01.01';
```

### [바람직한 변수명](https://ko.javascript.info/variables#ref-1356)

변수명은 간결하고 명확해야 하며, 변수가 담고 있는 것이 무엇인지 잘 설명할 수 있어야 한다.

1. 사람이 읽을 수 있는 명칭을 사용하기
2. 줄임말이나 `a`, `b`, `c` 등 알파벳 명칭은 지양하기
3. 최대한 서술적이고 간결하게 명명하기
4. 팀의 규칙에 따라 명칭을 작성하기
5. 재사용하기보다 새로운 변수를 추가하기

## JavaScript 자료형(Data Type)

Javascript의 값(value)는 항상 문자열, 숫자형 등 총 8가지의 특정한 자료형(Data Type)에 속한다. 하나의 변수는 어떤 순간에는 문자열이고, 다른 순간에는 숫자형이 될 수 있다. 이를 변수에 저장되는 값의 타입을 언제든지 바꿀 수 있는 언어인 동적 타입 언어(dynamically typed language)라고 한다.

```javascript
let message = "Hello";  		// String
message = 123456;  					// Number
```

### [Number](https://ko.javascript.info/types#ref-1343)

숫자형(Number)은 정수 및 부동소수점 숫자(floating point number)를 의미한다. 사칙연산(`+`, `-`, `*`, `/`)이 가능하고, 일반적인 숫자 이외의 `Infinity`, `-Infinity`, `NaN`과 같은 특수 숫자 값을 포함한다.

```javascript
let inf1 = 1 / 0;  // 어떤 숫자든 0으로 나누면 무한대를 얻을 수 있다.
let inf2 = Infinity;  // 직접 선언

let notANumber = "숫자가 아닌 값" / 2;  // NaN
```

### [BigInt](https://ko.javascript.info/types#ref-1344)

Javascript에서는 `±(2^53-1)` 범위를 벗어나는 숫자는 숫자형(Number)로 표현할 수 없다. 이는 암호 관련 작업 등에서 매우 큰 숫자를 필요로 하는 상황이나 매우 정밀한 작업에서 사용될 수 있는데, 정수 리터럴 끝에 `n`을 추가해 만들 수 있다. BigInt 값은 표준으로 채택된 지 얼마 안되었고, 길이에 상관없이 정수를 나타낼 수 있따.

```javascript
const bigInt = 12341231242141211251243123123123123n;
```

### [String](https://ko.javascript.info/types#ref-1345)

문자열(String) 자료형은 세 종류의 따옴표로 묶는 텍스트를 의미한다. 다만, 큰 따옴표(`" "`)와 작은 따옴표(`' '`)의 경우 단순 문자열이지만, 역 따옴표(`` ``, backtick)를 활용하는 경우 내부에 원하는 변수, 표현식을 `${  }`를 활용해 문자열 중간에 손쉽게 삽입할 수 있다.

```javascript
let name = "James";
let score = 'C+';

let result = `${name} lose. Your Grade is ${score}`;
let cal = `${1 + 2 / 3}`			// 변수는 물론 수학 표현식도 가능함.
```

### [Boolean](https://ko.javascript.info/types#ref-1346)

논리 타입(Boolean)은 `true`, `false` 두 가지 값을 가진다.

```javascript
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 5 > 3;  // true
```

### [`null`](https://ko.javascript.info/types#ref-1347)

JavaScript의 `null`은 존재하지 않는 값(nothing), 비어있는 값(empty), 알 수 없는 값(unknown)을 의미한다.

```javascript
let age = null;
```

### [`undefined`](https://ko.javascript.info/types#ref-1348)

JavaScript의 `undefined`는 값이 할당되지 않은 상태를 나타낼 때 사용한다. 즉, 변수를 선언했지만, 해당 변수에 값을 할당하지 않은 경우, 해당 변수에 `undefined`가 자동으로 할당된다. 물론 명시적으로 할당하는 것도 가능하지만, `null`을 사용하는 것을 추천한다.

```javascript
let age;

console.log(age);  // undefined
```

### [Object, Symbol](https://ko.javascript.info/types#ref-1349)

객체(Object)는 특수한 자료형이다. 객체 이외의 다른 자료형은 한 가지만 표현할 수 있는 원시(primitive) 자료형이지만, 객체는 데이터 모음이나 복잡한 개체를 표현할 수 있다.

심볼(Symbol)은 객체의 고유한 식별자(unique identifier)를 만들 때 사용된다.

### [`typeof`](https://ko.javascript.info/types#type-typeof)

`typeof`는 인수의 자료형을 반환하는데, 두 가지 형태의 문법을 지원한다. 연산자(`typeof x`)로 활용할 수도 있고, 함수(`typeof(x)`)로 사용할 수도 있다.

```javascript
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"(수학 연산을 제공하는 내장 객체)
typeof null // "object"(null은 하위 호환성을 유지를 위해 객체가 아니지만, "object"를 반환한다.)
typeof alert // "function"(피연산자가 함수면 "function"을 반환한다.)
```

## JavaScript 대화 상자

브라우저에서 사용자와 상호작용할 수 있는 사용자 인터페이스 기능으로 `alert`, `prompt`, `confirm`이 있다. 다만, 모두 모달 창을 활용하기 때문에 브라우저에 의해 결정된 위치와 모양만 가능하고, 수정할 수 없다는 것이 단점이다.

### [`alert`](https://ko.javascript.info/types#type-typeof)

> `alert("Contents");

`alert` 함수를 활용하면 사용자가 '확인' 버튼을 누를 때까지 메시지를 보여주는 모달 창(modal window)이 계속 떠 있게 된다. 모달 창(modal window)이기 때문에 페이지의 나머지 부분과 상호작용이 불가능하게 된다. 즉, 모달 창이 떠 있는 동안에는 스크립트의 실행이 일시 중단되고, 사용자가 창을 닫기 전까지 나머지 페이지와 상호작용이 불가능하다.

```javascript
alert("확인 버튼을 눌러야 다른 상호작용을 할 수 있습니다.");
```

### [`prompt`](https://ko.javascript.info/alert-prompt-confirm#ref-1415)

> `prompt(title, [default]);`

`prompt` 함수는 두 가지 인수를 받아, 텍스트 메시지와 입력 필드, 그리고 확인과 취소 버튼이 존재하는 모달 창(modal window)을 띄워 준다. `title`은 사용자에게 보여줄 텍스트 메시지를 의미하고, `default`는 입력 필드의 초기 값을 의미한다.

사용자는 대화상자의 입력 필드에 원하는 값을 입력하고, 확인 버튼을 누를 수 있고, 값을 입력하기를 원하지 않으면 취소 버튼이나 `ESC`를 눌러 빠져나갈 수 있다. 이때, `prompt` 함수는 사용자가 입력한 문자열을 반환하는데, 입력을 취소한 경우 `null`을 반환한다.

```javascript
let age = prompt('나이를 입력해주세요.', 100);			// 사용자가 입력한 값을 반환한다.

alert(`당신의 나이는 ${age}세 입니다.`)
```

### [`confirm`](https://ko.javascript.info/alert-prompt-confirm#ref-1416)

> `confirm(question);`

`confirm` 함수는 매개 변수로 받은 `question`과 확인, 취소 버튼이 있는 모달 창(modal window)을 띄워 준다. 사용자가 확인 버튼을 누르면 `true`를 반환하고, 그 외의 경우에는 `false`를 반환한다.

```javascript
let isBoss = confirm("당신이 보스인가요?");

alert( isBoss ); // 확인 버튼을 누르면 true가 출력된다.
```

## JavaScript 자료형 변환(type conversion)

함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환되는데, 이를 형 변환(type conversion)이라고 한다. 이 외에 전달받은 값을 원하는 타입으로 변환하는 것도 형 변환이라고 한다.

### [문자열로 변환](https://ko.javascript.info/type-conversions#ref-2433)

> `String(value)`

`String(value)` 함수를 활용해 `value` 값을 문자열로 변환할 수 있다. 참고로 `alert()` Method도 매개변수로 문자열을 받기 때문에 다른 값을 받으면 자동으로 문자열로 변환한다.

```javascript
let value = true;
console.log(typeof value);  // boolean

value = String(value);
console.log(typeof value);  // string
```

### [숫자형으로 변환](https://ko.javascript.info/type-conversions#ref-2434)

수학과 관련된 함수와 표현식에서 자동으로 숫자형을 변환이 일어난다.

```javascript
console.log("6" / 2);  // 3
```

> `Number(value)`

`Number(value)` 함수를 활용해 `value` 값을 숫자형으로 변환할 수 있다.

```javascript
let str = "123";
console.log(typeof str);  // string

let num = Number(str);
console.log(typeof num);  // number
```

다만, 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 명시적 변환을 하면, `NaN`을 반환한다. 이때, 문자열을 `Number()`로 형 변환하는 경우 좌우 공백 제거 후 숫자만 있다면 해당 숫자로 변환되고, 남은 문자열이 없다면 `0`, 문자열이 남아 형 변환에 실패하면 `NaN`을 반환한다.

```javascript
let age = Number("문자열이 있는 숫자 123");
console.log(age);  // NaN
```

|형 변환할 값 | 형 변환 후 반환 값|
|:-:|:-:|
|undefined|NaN|
|null|0|
|true|1|
|false|0|

### [논리형으로 변환](https://ko.javascript.info/type-conversions#ref-2435)

> `Boolean(value)`

`Boolean(value)` 함수를 활용해 논리 자료형으로 변환할 수 있다. 참고로 문자열 `"0"`과 `" "`(공백)은 `true`로 변환된다.

|형 변환할 값 | 형 변환 후 반환 값|
|:-:|:-:|
|0, "", null, undefined, NaN|false|
|그 외의 값|true|

```javascript
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false
console.log(Boolean("Hello"));  // true
console.log(Boolean(""));  // false
```

## JavaScript 기본 연산자와 수학
### [수학 연산자](https://ko.javascript.info/operators#ref-1412)
`+`, `-`, `*`, `/`, `%`(나머지), `**`(제곱) 연산자가 수학 연산자로 활용된다.
```javascript
console.log(5 % 2);				// 1 출력
console.log(8 % 3);				// 2 출력

console.log(2 ** 2);			// 4 출력
console.log(2 ** 4);			// 16 출력
console.log(4 ** (1/2));	// 2 출력(제곱근 계산 가능)
console.log(16 ** (1/4));	// 2 출력(제곱근 계산 가능)
```

### [덧셈 연산자](https://ko.javascript.info/operators#ref-1415)
덧셈 연산자 `+`는 보통 숫자를 더한 결과를 반환하지만, 피연산자로 문자열이 전달되면 문자열을 병합(연결)한 결과를 반환한다. 이때, 피연산자 중 하나만 문자열이라도 문자열로 변환된다는 점에 유의해야 한다. 
```javascript
let str = "my" + "string";
console.log(str);					// mystring 출력

console.log("2" + 1);			// "21" 출력
console.log(2 + "1");			// "21" 출력

console.log(2 + 2 + "1");	// "41" 출력
console.log("2" + 2 + 1); // "23" 출력
```
참고로, `-`, `/` 연산자의 경우 피연산자가 문자열이더라도 숫자로 변환된 후 사칙연산이 진행된다.

또한, [단항 연산자](https://ko.javascript.info/operators#ref-1416)로 덧셈 연산자를 사용하면, `Number()`와 동일한 결과를 반환한다.
```javascript
console.log(+true);				// 1 출력
console.log(+"");					// 0 출력

let num1 = "1";
let num2 = "2";

console.log(num1 + num2);				// 12 출력
console.log(+num1 + +num2);			// 3 출력
```
### [연산자 우선순위](https://ko.javascript.info/operators#ref-1417)
[우선순위 테이블](https://developer.mozilla.org/en/JavaScript/Reference/operators/operator_precedence)을 참고하면 된다. 특히, 단항 연산자가 이항 연산자보다 높다.

### [할당 연산자](https://ko.javascript.info/operators#ref-1418)
할당(assignment) 연산자 `=`는 우선순위가 낮아 연산이 모두 된 이후에 값이 할당될 수 있게 된다.
```javascript
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

console.log(c);						// 0 출력

let d, e, f;

d = e = f = 2 + 1;

console.log(d);						// 3 출력
console.log(e);						// 3 출력
console.log(f);						// 3 출력
```

### [복합 할당 연산자](https://ko.javascript.info/operators#ref-1421)
산술 연산자와 할당 연산자를 동시에 활용하여 더 짧은 문법을 구현할 수 있다.
```javascript
let n = 2;
n += 5;
console.log(n);						// 7 출력

n *= 2;
console.log(n);						// 14 출력

n /= 3 + 4;
console.log(n);						// 2 출력(우측이 먼저 연산되기 때문에 이는 `n /= 7`과 동일하다.)
```

### [증감 연산자](https://ko.javascript.info/operators#ref-1422)
숫자를 하나 증가시키거나 감소시키는 데 활용되는 연산자이다. 다만, 이는 변수에만 활용할 수 있다.
```javascript
let counter = 1;

counter++;
console.log(counter);			// 2 출력

counter--;
console.log(counter);			// 1 출력
```
전위형 증감 연산자를 사용하는 경우 증감 이후 값을 반환하지만, 후위형 증감 연산자를 사용하면 증감 이전의 값을 반환하게 된다.
```javascript
let counter = 1;
let a = ++counter;
let b = counter++;

console.log(a);						// 2 출력
console.log(b);						// 1 출력
```

### [비트 연산자](https://ko.javascript.info/operators#ref-1423)
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
비트 연산자(bitwise operator)는 인수를 32비트 정수로 변환하여 이진 연산을 수행한다.
- 비트 AND (`&`)
- 비트 OR (`|`)
- 비트 XOR (`^`)
- 비트 NOT (`~`)
- 왼쪽 시프트(LEFT SHIFT) (`<<`)
- 오른쪽 시프트(RIGHT SHIFT) (`>>`)
- 부호 없는 오른쪽 시프트(ZERO-FILL RIGHT SHIFT) (`>>>`)

### [쉼표 연산자](https://ko.javascript.info/operators#ref-1424)
쉼표 연산자는 여러 표현식을 코드 한 줄에서 평가할 수 있게 해주지만, 마지막 표현식의 평가 결과만 반환된다.
```javascript
let a = (1 + 2, 3 + 4);

console.log(a);						// 7 출력
```

## JavaScript 비교 연산자
비교 연산자는 `true` 혹은 `false`를 반환한다.
### [문자열의 비교](https://ko.javascript.info/comparison#ref-441)