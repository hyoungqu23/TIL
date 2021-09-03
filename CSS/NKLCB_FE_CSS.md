# CSS
> 👍 *기초를 탄탄하게, 발목 잡히지 않도록.*

---
## CSS이란?
### 개요
- Cascading Style Sheets의 약어.

- CSS는 모듈별로 권고안을 만들고 있기 때문에 최근 업데이트 된 속성은 브라우저마다 지원 여부가 다를 수 있으므로, 확인해야 한다.([Can I Use](https://caniuse.com/), [CSS Snapshot](https://www.w3.org/TR/css/))

- 'Cascading'은 위에서 아래로 흐르는 방향으로 스타일이 적용되는 것을 의미하는데, 즉, 부모 요소에서 지정한 스타일이 자손 요소에서 사용되는 것을 의미한다.

- CSS는 규칙 기반 언어(Rule-based Language)이다.
  HTML 문서에 스타일 규칙을 작성해서 적용하는 것이다.
  이러한 규칙을 작성하는 방법이 중요하고, 여러 규칙들을 나열한 형태로 구성된다.
- CSS를 통해 특정 요소나 특정 요소들의 집합의 스타일 규칙을 정의할 수 있다.

### CSS 구성요소
![Rule Set](https://mdn.mozillademos.org/files/9461/css-declaration-small.png)
```CSS
h1 {
  color: red;
  font-size: 12px;
}

p {
  color: black;
}
```
- **스타일 규칙(Style Rule Set)**
  `선택자 { 하나 이상의 선언 }`으로 구성된 스타일 규칙 혹은 규칙의 집합
- **선택자(Selector)**
  스타일을 지정할 특정 HTML 요소를 선택.
  다만, 태그(Tag)를 기반으로 선택하는 경우 해당 태그(Tag)를 가진 요소(Element)들의 집합을 선택할 수 있다.
- **선언 블록(Declaration Block)**
  중괄호(`{ }`)로 구분하고, 내부에 선언들을 작성한다.
- **선언(Declaration)**
  "`속성(property): 값(value);`" 쌍 형태로 작성된다.

### CSS의 주석(Comments)
```CSS
/* 한 줄 주석 */

/* 
여러 가지의
줄로
이루어진
주석
*/
```
- `/* */`를 활용해 주석 처리를 할 수 있다.
- CSS도 개행을 무시하게 된다.

### CSS를 적용하는 방법
1. **내부 스타일(Embedded)**
   `<style>` 태그를 활용해 HTML 문서 내부에 `<head>`에 작성해 CSS를 적용한다.
   ```HTML
   <head>
     <style>
       h1 {
         color: red;
         font-size: 1.25rem;
       }
     </style>
   </head>
   ```
2. **인라인 스타일(Inline)**
   특정 요소에 스타일을 적용하기 위해 `style` 속성(Attribute)을 활용하여 CSS를 적용한다.
   ```HTML
   <body>
     <h1 style="color: red; font-size: 1.25rem;">Title</h1>
   </body>
   ```
3. **외부 스타일(External)**
   외부 CSS 파일을 `<head>` 태그 내부에 `<link>` 태그를 통해 연결해 CSS를 적용한다.
   ```HTML
   <head>
     <link rel="stylesheet" href="style/main.css">
   </head>
   ```
   ```CSS
   h1 {
     color: red;
     font-size: 1.25rem;
   }
   ```

### Cascading 원칙
1. 스타일 적용 우선순위
   - 동일한 스타일이라도 선언된 곳에 따라 우선순위가 결정된다.
       * 브라우저에 의해 정의된 스타일 < 개발자가 선언한 스타일 < 사용자가 구성한 스타일
   - 적용 범위가 적을 수록 우선시된다.
       * Tag 스타일 < Class 스타일 < Id 스타일 < Inline 스타일
   - 소스 코드의 순서가 뒤에 있으면 덮어 쓴다.

2. 스타일 상속
   - 부모 요소에 있는 스타일 속성들이 자식 요소에 전달된다.
       * 자식 요소에서 해당 스타일 속성을 재정의하는 경우, 부모의 스타일을 덮어 쓴다.
   - 상속이 되지 않는 `background-color`, `background` 등의 속성(property)도 있다.

---
## CSS Selector
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Selectors) / [MDN-learn](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Selectors)
- CSS Selector를 활용해 CSS 규칙을 적용할 웹 페이지의 HTML 요소를 선택한다.

- **Type Selector**(태그 선택자, 유형 선택자, 요소 선택자)
  ##### elementName
  해당 **태그의 이름**을 가진 요소를 모두 선택한다.
  ```CSS
  h2 {
    color: purple;
  }

  h3 {
    color: red;
  }
  ```
  해당 요소가 하나뿐이라고 Type Selector를 사용하는 것은 권장되지 않는다.
  즉, 특정 요소 혹은 요소의 집합을 선택하기 위해서 사용한다기 보다는 전체 웹 페이지에서 일관되게 적용해야 할 스타일을 설정할 때 사용한다.

- **ID Selector**
  ##### #idName
  **`id` 속성(Attribute)**에 따라 요소를 선택한다.
  문서 내에는 주어진 `id` 값을 가진 요소가 단 하나만 존재해야 한다.
  ```CSS
  #welcome-title {
    color: red;
  }
  ```

- **Class Selector**
  ##### .className
  해당 **`class` 속성(Attribute) 값**을 가진 모든 요소를 선택한다.
  `class` 속성의 경우 하나 이상의 값을 가질 수 있는데, 이를 활용해 여러 `class`에 대해 스타일이 적용된 경우 Cascading 원칙에 의해 뒤에 작성된 스타일이 적용된다.
  ```CSS
  .blue {
    color: blue;
  }
  
  .white {
    color: gray;
  }
  ```

- **Attribute Selector**
  ##### [attr], [attr=value], [attr~=value], [attr^=value], [attr$=value], [attr*=value]
  * 특정 속성을 가진 요소를 선택하거나, 특정 속성의 값을 가진 요소를 모두 선택할 수 있다.
  * 대체로 `<input>` 태그의 `type` 속성에서 자주 활용한다. 즉, 더 구체적으로 요소를 선택할 수 있다.
  * 특수문자를 활용해 해당 속성이 시작하는 값(`^`), 끝나는 값(`$`), 포함하는 값(`*`)을 기준으로 요소를 선택할 수도 있다.
  ```CSS
  a[target] {
    color: hotpink;
  }

  a[href="https://example.org"] {
    color: tomato;
  }

  a[href^="https://"] {
    font-style: italic;
  }

  a[href$=".com"] {
    font-weight: bold;
  }

  a[href*="examples"] {
    color: deeppink;
  }
  ```

- **Pseudo-Class Selector**(가상(의사) 클래스 선택자)
  ##### selector:pseudo-class-selector
  선택한 요소가 특별한 상태여야 만족하는 경우의 스타일을 적용할 수 있다. 즉, 실제로 존재하지 않는 상태를 가상의 클래스로 만들어 해당 클래스를 선택한다.
  * `:first-child`: 형제 요소 중 첫 번째 요소
    ```CSS
    .player:first-child {
      color:blueviolet;
    }
    ```
    - 다만, 클래스 선택자와 함께 활용하는 경우에, 해당 클래스를 가진 요소의 부모 요소 중 첫 번째 자식 요소를 선택하는데, 이때 해당 요소가 해당 클래스를 가지고 있지 않은 경우, 스타일이 적용되지 않는다.
  * `:last-child`: 형제 요소 중 마지막 요소
    ```CSS
    .player:last-child {
      color:gold;
    }
    ```
  * `:nth-child(n)`: 형제 요소 중 n번째 요소
    - 함수형 표기(예: `2n+1`, `2n`), `even`, `odd`를 활용해 홀수, 짝수 번째 요소나 사용자 지정 패턴을 만족한 인덱스를 가지는 요소를 선택할 수 있다.
    ```CSS
    .player:nth-child(3) {
      font-style: italic;
    }

    .player:nth-child(2n) {
      font-weight: bold;
    }

    .player:nth-child(odd) {
      text-decoration: underline;
    }
    ```
  * `:first-of-type`: 형제 요소 중 자신과 유형이 일치하는 첫 번째 요소
    ```CSS
    .sportList p:first-of-type {
      color: aqua;
    }
    ```
    - 다만, Class Selector에 가상 클래스 선택자를 활용하는 경우에는, 해당 클래스를 모두 탐색한 후 여러 요소가 존재하는 경우에 각 요소의 첫 번째 요소에 모두 스타일을 적용한다.
  * `:last-of-type`: 형제 요소 중 자신과 유형이 일치하는 마지막 요소
    ```CSS
    .sportList div:last-of-type {
      color: red;
    }
    ```
  * `:nth-of-type(n)`: 형제 요소 중 자신과 유형이 일치하는 n 번째 요소
    - 함수형 표기(예: `2n+1`, `2n`), `even`, `odd`를 활용해 홀수, 짝수 번째 요소나 사용자 지정 패턴을 만족한 인덱스를 가지는 요소를 선택할 수 있다.
    ```CSS
    .sportList p:nth-of-type(odd) {
      color: greenyellow;
    }
    ```
  * `:not()`: 인수로 표시되지 않은 요소를 선택
    `selector1:not(selector2)`에서 selector1 중에 selector2가 아닌 나머지 요소를 선택한다.
    ```CSS
    input:not([type=password]) {
      background-color: grey;
    }

    input:not(.name) {
      background-color: red;
    }
    ```
  * `:link`: 동적 가상 클래스 선택자로, 아직 방문하지 않은 요소를 선택.
    - `href` 속성(Attribute)을 가진 `<a>`, `<area>`, `<link>` 중 방문하지 않은 모든 요소를 선택한다.
    ```CSS
    a:link {
      color:gold;
    }
    ```
  * `:visited`: 동적 가상 클래스 선택자로, 이미 방문한 요소를 선택.
    - `href` 속성(Attribute)을 가진 `<a>`, `<area>`, `<link>` 중 방문한 모든 요소를 선택한다.
    ```CSS
    a:visited {
      color:gold;
    }
    ```
  * `:hover`: 사용자가 포인팅 장치를 사용해 상호작용 중인 요소를 선택하는데, 보통 사용자의 마우스 포인터 커서가 요소 위에 올라가 있는 경우에 해당 요소를 선택한다.
    - 참고로, `:link`, `:visited`, `:hover`, `:active` 순으로 작성해야 한다.
    - 보통 `<button>`, `<link>`, `<menu>`, `<input>`에서 자주 사용된다.
    ```CSS
    input[type=button]:hover {
      background-color: lime;
      border: none;
    }
    ```
  * `:active`: 사용자가 활성화한 요소를 선택하는데, 마우스를 사용하는 경우, 보통 마우스 버튼을 누르는 시점부터 떼는 시점까지를 의미한다.
    ```CSS
    input[type=button]:active {
      background-color: red;
      border: none;
    }
    ```
  * `:focus`: 양식의 입력 칸 등이 포커스를 받은 경우에 선택하는데, 보통 사용자가 요소를 클릭, `Tab`한 경우 해당 요소를 선택한다.
    ```CSS
    input[type=text]:focus {
      background-color: lime;
    }
    ```
  * `:enabled`: 선택, 클릭, 입력을 하거나, 포커스 받을 수 있는 요소가 활성화된 경우에 해당 요소를 선택한다.
    ```CSS
    input[type=text]:enabled {
      background-color: yellow;
    }
    ```
  * `:disabled`: 선택, 클릭, 입력을 하거나, 포커스를 받을 수 있는 요소가 비활성화 된 경우 해당 요소를 선택한다.
    ```CSS
    input[type=text]:disabled {
      background-color: skyblue;
    }
    ```
  * `:checked`: `<input type="radio">`, `<input type="checkbox">`, `<option>` 등을 선택하여 체크된 경우에 해당 요소를 선택한다.
    ```CSS
    input[type=radio]:checked {
      outline: 3px solid red;
    }

    input[type=checkbox]:checked {
      outline: 3px solid teal;
    }
    ```

- **Pseudo-Element Selector**(가상(의사) 요소 선택자)
  실제로 존재하지 않는 가상의 요소를 만들어 해당 요소를 선택한다.
  가상 요소를 활용하려면, `content` 속성(property)를 지정해야 한다. 이때 `content`의 내용은 복사나 선택이 되지 않는다.
  ##### selector::pseudo-element-selector
  * `::before`: 선택한 요소 앞에 가상의 인라인 요소를 생성한다.
    ```CSS
    .color::before { 
      content: "color ";
      color: darkorange;
    }
    ```
  * `::after`: 선택한 요소 뒤에 가상의 인라인 요소를 생성한다.
    ```CSS
    .color::after { 
      content: " 색";
      color: olive;
    }
    ```
  * `::first-letter`: 블록 레벨 요소의 첫 번째 줄의 첫 번째 문자를 선택해 스타일을 적용한다.
    - 이 경우, 가상 요소 선택자 `::before`의 속성 `content`로 가상의 인라인 요소를 추가하는 경우 해당 첫 번째 문자가 선택된다.
    ```CSS
    .lorem::first-letter {
      font-size: 1.5rem;
    }
    ```
  * `::first-line`: 블록 레벨 요소의 첫 번째 줄을 선택하여 스타일을 적용한다.
    - 이는 브라우저 창의 크기, 텍스트의 글꼴, 크기 등에 영향을 받는다.
    ```CSS
    .lorem::first-line {
      font-size: 1.5rem;
      color: red;
    }
    ```
  * `::selection`: 사용자가 선택한 영역에 대해 스타일을 설정할 수 있다.
    ```CSS
    .lorem::selection {
      font-size: 1.5rem;
      color: white;
      background-color: seagreen;
    }
    ```

### Selector Combination
- 하나의 선택자만 사용할 수 있지만, 여러 선택자를 결합해 구체적으로 요소를 선택할 수 있다.
#### 자손 요소 선택
- 공백(`" "`)을 활용해 자손 요소를 선택할 수 있다.
  ```CSS
  ul li:last-of-type {
    color: aqua;
  }
  ```

#### 자식 요소 선택
- `>`를 활용해 자식 요소를 선택할 수 있다.
  ```CSS
  ol > li:last-of-type {
    color: red;
  }
  ```

#### 형제 요소 선택
- `~`을 활용해 일반적인 후행 형제 요소 모두를 선택할 수 있다.
  ```CSS
  code ~ p {
    color: darkorange;
  }
  ```
- `+`를 활용해 바로 인접한 후행 형제 요소를 선택할 수 있다.
  ```CSS
  code + p {
    color: blue;
  }
  ```

#### 선택자의 그룹화
- 동일한 스타일을 적용할 여러 선택자는 `,`를 활용해 그룹화하여 모두 선택할 수 있다.
  ```CSS
  p, div, code {
    font-weight: bold;
  }
  ```

### Universal Selector
- `*`를 활용해 모든 요소를 선택할 수 있고, 다른 선택자와 함께 사용할 수 있다.
  ```CSS
  * {
    font-size: 20px;
    text-decoration: none;
  }

  *.red {
    color: red;
  }

  p + * {
    color: blue;
  }

  div > * {
    font-weight: bold;
  }
  ```

### 상속 제어하기
- 자식 요소에게 스타일이 지정된 경우에는 해당 스타일을 활용하지만, 그렇지 않은 경우에는 부모 요소의 상속이 가능한 스타일인 경우에는 상속받아 활용한다.
  ```CSS
  .parent {
    color: blue;
  }

  .child2 {
    color: red;
  }
  ```
- `initial`
  * 자식 요소의 경우 부모 요소의 스타일을 상속받지 않으려면, 해당 속성(property)의 값(value)으로 `initial`을 작성하면 된다.
  * 만약 모든 속성을 상속받지 않으려면, `all: initial;` 선언을 활용하면 된다.(부모 요소부터 그 위 모든 상위 요소의 속성을 상속받지 않는다.)
  ```CSS
  .parent {
    font-size: 10px;
  }

  .child2 {
    font-size: initial;
  }
  ```
- `inherit`
  * 자식 요소의 경우 부모 요소의 스타일을 반드시 상속받으려면, 해당 속성(property)의 값(value)으로 `inherit`을 작성하면 된다.
  * 만약 모든 속성을 상속받으면, `all: inherit;` 선언을 활용하면 된다.
  ```CSS
  .parent {
    font-size: 10px;
  }

  .child2 {
    font-size: inherit;
  }
  ```
- `unset`
  * 부모 요소로부터 상속 받을 값이 존재하는 경우에는, `inherit`으로 동작한다.
  * 부모 요소로부터 상속 받을 값이 존재하지 않는 경우에는, `initial`로 동작한다.
  * 만약 모든 속성을 설정하고자 한다면, `all: unset;` 선언을 활용하면 된다.
  ```CSS
  .parent {
    font-size: 10px;
  }

  .child2 {
    all: unset;
  }
  ```

### 스타일 우선순위
특정 요소에 하나의 속성에 대해 여러가지의 선언을 한 경우, 스타일 우선순위에 따라 하나의 선언만을 적용한다.
- **선언된 위치**
  동일한 스타일이라도, 해당 HTML 문서에서 선언된 위치에 따라 우선순위가 달라진다.(코드는 위에서 아래로 해석하기 때문.)
  * 브라우저 정의 스타일 < 개발자가 선언한 스타일 < 사용자가 구성한 스타일
- **적용 범위(명시도)**
  해당 스타일의 적용 범위가 좁을수록 명시도가 높아져서 우선순위가 높아진다.
  * inherited 스타일 < * 스타일 < Type/Tag 스타일 < Class/Attribute/Pseudo-Class 스타일 < Id 스타일 < Inline 스타일 < `!important` 스타일
  ```CSS
  div {
    color: purple !important;
  }
  ```
- **코드의 순서**
  뒤에 작성된 코드의 스타일이 우선순위가 높다.