# CSS
> 👍 *기초를 탄탄하게🧱, 발목 잡히지 않도록.*

---
## 🧱 CSS이란?
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
```css
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
```css
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
   ```css
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
## 🧱 CSS Selector
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Selectors) / [MDN-learn](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Selectors)
- CSS Selector를 활용해 CSS 규칙을 적용할 웹 페이지의 HTML 요소를 선택한다.

- **Type Selector**(태그 선택자, 유형 선택자, 요소 선택자)
  ##### elementName
  해당 **태그의 이름**을 가진 요소를 모두 선택한다.
  ```css
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
  ```css
  #welcome-title {
    color: red;
  }
  ```

- **Class Selector**
  ##### .className
  해당 **`class` 속성(Attribute) 값**을 가진 모든 요소를 선택한다.
  `class` 속성의 경우 하나 이상의 값을 가질 수 있는데, 이를 활용해 여러 `class`에 대해 스타일이 적용된 경우 Cascading 원칙에 의해 뒤에 작성된 스타일이 적용된다.
  ```css
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
  ```css
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
    ```css
    .player:first-child {
      color:blueviolet;
    }
    ```
    - 다만, 클래스 선택자와 함께 활용하는 경우에, 해당 클래스를 가진 요소의 부모 요소 중 첫 번째 자식 요소를 선택하는데, 이때 해당 요소가 해당 클래스를 가지고 있지 않은 경우, 스타일이 적용되지 않는다.
  * `:last-child`: 형제 요소 중 마지막 요소
    ```css
    .player:last-child {
      color:gold;
    }
    ```
  * `:nth-child(n)`: 형제 요소 중 n번째 요소
    - 함수형 표기(예: `2n+1`, `2n`), `even`, `odd`를 활용해 홀수, 짝수 번째 요소나 사용자 지정 패턴을 만족한 인덱스를 가지는 요소를 선택할 수 있다.
    ```css
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
    ```css
    .sportList p:first-of-type {
      color: aqua;
    }
    ```
    - 다만, Class Selector에 가상 클래스 선택자를 활용하는 경우에는, 해당 클래스를 모두 탐색한 후 여러 요소가 존재하는 경우에 각 요소의 첫 번째 요소에 모두 스타일을 적용한다.
  * `:last-of-type`: 형제 요소 중 자신과 유형이 일치하는 마지막 요소
    ```css
    .sportList div:last-of-type {
      color: red;
    }
    ```
  * `:nth-of-type(n)`: 형제 요소 중 자신과 유형이 일치하는 n 번째 요소
    - 함수형 표기(예: `2n+1`, `2n`), `even`, `odd`를 활용해 홀수, 짝수 번째 요소나 사용자 지정 패턴을 만족한 인덱스를 가지는 요소를 선택할 수 있다.
    ```css
    .sportList p:nth-of-type(odd) {
      color: greenyellow;
    }
    ```
  * `:not()`: 인수로 표시되지 않은 요소를 선택
    `selector1:not(selector2)`에서 selector1 중에 selector2가 아닌 나머지 요소를 선택한다.
    ```css
    input:not([type=password]) {
      background-color: grey;
    }

    input:not(.name) {
      background-color: red;
    }
    ```
  * `:link`: 동적 가상 클래스 선택자로, 아직 방문하지 않은 요소를 선택.
    - `href` 속성(Attribute)을 가진 `<a>`, `<area>`, `<link>` 중 방문하지 않은 모든 요소를 선택한다.
    ```css
    a:link {
      color:gold;
    }
    ```
  * `:visited`: 동적 가상 클래스 선택자로, 이미 방문한 요소를 선택.
    - `href` 속성(Attribute)을 가진 `<a>`, `<area>`, `<link>` 중 방문한 모든 요소를 선택한다.
    ```css
    a:visited {
      color:gold;
    }
    ```
  * `:hover`: 사용자가 포인팅 장치를 사용해 상호작용 중인 요소를 선택하는데, 보통 사용자의 마우스 포인터 커서가 요소 위에 올라가 있는 경우에 해당 요소를 선택한다.
    - 참고로, `:link`, `:visited`, `:hover`, `:active` 순으로 작성해야 한다.
    - 보통 `<button>`, `<link>`, `<menu>`, `<input>`에서 자주 사용된다.
    ```css
    input[type=button]:hover {
      background-color: lime;
      border: none;
    }
    ```
  * `:active`: 사용자가 활성화한 요소를 선택하는데, 마우스를 사용하는 경우, 보통 마우스 버튼을 누르는 시점부터 떼는 시점까지를 의미한다.
    ```css
    input[type=button]:active {
      background-color: red;
      border: none;
    }
    ```
  * `:focus`: 양식의 입력 칸 등이 포커스를 받은 경우에 선택하는데, 보통 사용자가 요소를 클릭, `Tab`한 경우 해당 요소를 선택한다.
    ```css
    input[type=text]:focus {
      background-color: lime;
    }
    ```
  * `:enabled`: 선택, 클릭, 입력을 하거나, 포커스 받을 수 있는 요소가 활성화된 경우에 해당 요소를 선택한다.
    ```css
    input[type=text]:enabled {
      background-color: yellow;
    }
    ```
  * `:disabled`: 선택, 클릭, 입력을 하거나, 포커스를 받을 수 있는 요소가 비활성화 된 경우 해당 요소를 선택한다.
    ```css
    input[type=text]:disabled {
      background-color: skyblue;
    }
    ```
  * `:checked`: `<input type="radio">`, `<input type="checkbox">`, `<option>` 등을 선택하여 체크된 경우에 해당 요소를 선택한다.
    ```css
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
    ```css
    .color::before { 
      content: "color ";
      color: darkorange;
    }
    ```
  * `::after`: 선택한 요소 뒤에 가상의 인라인 요소를 생성한다.
    ```css
    .color::after { 
      content: " 색";
      color: olive;
    }
    ```
  * `::first-letter`: 블록 레벨 요소의 첫 번째 줄의 첫 번째 문자를 선택해 스타일을 적용한다.
    - 이 경우, 가상 요소 선택자 `::before`의 속성 `content`로 가상의 인라인 요소를 추가하는 경우 해당 첫 번째 문자가 선택된다.
    ```css
    .lorem::first-letter {
      font-size: 1.5rem;
    }
    ```
  * `::first-line`: 블록 레벨 요소의 첫 번째 줄을 선택하여 스타일을 적용한다.
    - 이는 브라우저 창의 크기, 텍스트의 글꼴, 크기 등에 영향을 받는다.
    ```css
    .lorem::first-line {
      font-size: 1.5rem;
      color: red;
    }
    ```
  * `::selection`: 사용자가 선택한 영역에 대해 스타일을 설정할 수 있다.
    ```css
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
  ```css
  ul li:last-of-type {
    color: aqua;
  }
  ```

#### 자식 요소 선택
- `>`를 활용해 자식 요소를 선택할 수 있다.
  ```css
  ol > li:last-of-type {
    color: red;
  }
  ```

#### 형제 요소 선택
- `~`을 활용해 일반적인 후행 형제 요소 모두를 선택할 수 있다.
  ```css
  code ~ p {
    color: darkorange;
  }
  ```
- `+`를 활용해 바로 인접한 후행 형제 요소를 선택할 수 있다.
  ```css
  code + p {
    color: blue;
  }
  ```

#### 선택자의 그룹화
- 동일한 스타일을 적용할 여러 선택자는 `,`를 활용해 그룹화하여 모두 선택할 수 있다.
  ```css
  p, div, code {
    font-weight: bold;
  }
  ```

### Universal Selector
- `*`를 활용해 모든 요소를 선택할 수 있고, 다른 선택자와 함께 사용할 수 있다.
  ```css
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
  ```css
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
  ```css
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
  ```css
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
  ```css
  .parent {
    font-size: 10px;
  }

  .child2 {
    all: unset;
  }
  ```

---
## 🧱 스타일 우선순위
특정 요소에 하나의 속성에 대해 여러가지의 선언을 한 경우, 스타일 우선순위에 따라 하나의 선언만을 적용한다.
- **선언된 위치**
  동일한 스타일이라도, 해당 HTML 문서에서 선언된 위치에 따라 우선순위가 달라진다.(코드는 위에서 아래로 해석하기 때문.)
  * 브라우저 정의 스타일 < 개발자가 선언한 스타일 < 사용자가 구성한 스타일
- **적용 범위(명시도)**
  해당 스타일의 적용 범위가 좁을수록 명시도가 높아져서 우선순위가 높아진다.
  * inherited 스타일 < * 스타일 < Type/Tag 스타일 < Class/Attribute/Pseudo-Class 스타일 < Id 스타일 < Inline 스타일 < `!important` 스타일
  ```css
  div {
    color: purple !important;
  }
  ```
- **코드의 순서**
  뒤에 작성된 코드의 스타일이 우선순위가 높다.

---
## 🧱 Font-Property
### `color`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/color)
- 요소(Element)의 텍스트 및 그 장식의 현재 색상을 설정하는 속성(property).
  ```css
  p.font-property {
    color:salmon;
  }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

### `font-size`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font-size)
- 요소(Element)의 텍스트의 크기를 변경하는 속성(property).
- 브라우저마다 다르지만, 보통 `16px`이 기본값으로 설정되어 있다.
  ```css
  p.font-property {
    font-size: 24px;
  }
  ```
- 크기 값으로, `em`, `rem`, `x-size`, `smaller`, `larger`, `px`, `%` 등을 활용할 수 있다.([참고](#Unit))
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

### `font-style`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
- 요소(Element)의 font-family의 일반, 기울임꼴 등의 글꼴 스타일을 설정하는 속성(property).
- `oblique`(필기체), `italic`(기울임꼴), `normal`(기본값) 등의 값을 가진다.
- 강조의 의미를 담아 기울임꼴을 사용하는 경우에는 HTML의 `<em>` 태그(Tag)를 사용해야 한다.
  ```css
  p.font-property {
    font-style: italic;
  }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

### `font-weight`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font-weight)
- 요소(Element)의 텍스트의 가중치나 굵기를 설정하는 속성(property).
- `normal`(=`400`, 기본값), `bold`(=`700`), `lighter`, `bolder` 등의 키워드 값과 `100`, `200`, ... , `900`의 숫자 값을 가진다.
- 글꼴에 따라 지원하는 가중치 값이 다를 수 있다.
- 강조의 의미를 담아 굵은 글씨체를 사용하는 경우에는 HTML의 `<strong>` 태그(Tag)를 사용해야 한다.
  ```css
  p.font-property {
    font-weight: bold;
  }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

### `font-family`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font-family)
- 요소(Element)에 우선 순위가 지정된 `font-family`와 `generic-family`를 지정하는 속성(property).
- `generic-family`: 일반 글꼴은 지정된 글꼴이 없는 경우 대체 사용할 글꼴을 의미한다.(`serif`, `sans-serif`, `monospace`, `cursive`, `system-ui` 등이 있다.)
- `,`를 활용해 대체될 값을 추가로 지정할 수 있다.
  ```css
  .serif {
    font-family: Times, Times New Roman, Georgia, serif;
  }
  .sansserif {
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  .monospace {
    font-family: Lucida Console, Courier, monospace;
  }
  .cursive {
    font-family: cursive;
  }
  .fantasy {
    font-family: fantasy;
  }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)
- [Google Font](https://fonts.google.com/)를 활용해 웹 font를 활용할 수 있다.

### `line-height`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- 요소(Element)의 텍스트 행 사이의 거리를 설정하는 속성(property).
- Block Level Element의 경우 내부의 line-box의 최소 높이를 설정하고, Inline Element의 경우 
- 각 font-family에 따라 기본값인 `normal`이 `1.0` ~ `1.2`배로 차이가 있다.
- `normal`(기본값)과 같은 키워드 값과 `3.5`와 같이 숫자를 활용해 해당 텍스트의 크기에 비례한 값을 작성할 수 있고, 추가적으로 `em`, `rem`, `%` 단위도 사용할 수 있다.
  ```css
  line-height: normal;
  line-height: 3.5;
  line-height: 3em;
  line-height: 34%;
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

### `font` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font)
- `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, `font-family`의 단축 속성(Shorthand property).
  * 다만, `font-size`와 `font-family`의 값은 반드시 포함해야 한다.
  * `font-style`, `font-variant`, `font-weight`는 `font-size`의 앞에 작성해야 한다.
  * `line-height`는 `font-size` 바로 다음에 작성하며 `/`로 구분해야 한다.
  * `font-family`는 마지막으로 작성해야 한다.
- 단축 속성의 특성 상, 생략한 속성은 초기값으로 설정하며, 이 과정에서 이후에 해당 속성을 설정해 덮어 쓸 수도 있다.(참고로, `font` 단축 속성으로 설정할 수 없는 `font-stretch`, `font-size-adjust`, `font-kerning`의 값도 초기값으로 설정된다.)
  ```css
  p.font-shorthand-property {
    font: italic bold 24px/2.5 Times, Times New Roman, Georgia, serif;
  }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

### `letter-spacing`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/letter-spacing)
- 글자 사이의 간격을 조절하는 속성(property).
- 글꼴에 따라 최적 간격이 이미 정해진 값이 있다.
- `normal`, `px`, `em`, `rem` 등을 사용할 수 있다.
- 스타일링 목적으로 지나치게 조절하지 않는 것이 가독성이 좋기 때문에 웹 접근성 측면에서 변경하지 않는 것이 좋다.
    ```css
  p.font-property {
    letter-spacing: 15px;
  }
  ```

### `word-spacing`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/word-spacing)
- 단어 혹은 태그(Tag) 사이의 간격을 조절하는 속성(property).
- 글꼴에 따라 최적 간격이 이미 정해진 값이 있다.
- `normal`, `px`, `%`, `em`, `rem` 등을 사용할 수 있다.
- 스타일링 목적으로 지나치게 조절하지 않는 것이 가독성이 좋기 때문에 웹 접근성 측면에서 변경하지 않는 것이 좋다.
  ```css
  p.font-property {
    word-spacing: 15px;
  }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

### `text-align`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/text-align)
- Block Level Element나 표의 칸의 수평 정렬을 설정하는 속성(property).
- `right`, `left`, `center`, `justify`, `start`, `end` 등 키워드 값을 작성하여 수평 정렬을 설정할 수 있다.
- 다만, Block Level Element이어야 수평 정렬을 설정할 수 있다. Inline Element의 경우, Block Container를 설정하고, 수평 정렬을 선언해야 한다.
  ```css
  p.text-align {
    text-align: center;
  }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)
  
### `text-indent`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
- 텍스트의 들여쓰기의 길이를 설정하는 속성(property).
- Block Level Element에서만 사용할 수 있다.
- `px`, `%`, `em` 등으로 들여쓰기의 길이를 설정할 수 있다.
  ```css
    p.text-indent {
      text-indent: 3px;
    }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

### `text-decoration` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/text-decoration)
- 텍스트의 장식(선)을 지정하는 속성(property).
- `text-decoration-line`(선의 종류), `text-decoration-color`(선의 색), `text-decoration-style`(선의 스타일), `text-decoration-thickness`(선의 두께)의 단축 속성.
- `text-decoration-line`은 반드시 작성해야 한다.
- 기본적으로 텍스트 색상과 동일한 색상으로 설정되지만, `text-decoration-color`를 통해 변경할 수 있다.
- 순서는 관계 없다.
  ```css
  p.text-decoration {
    text-decoration: solid underline purple 4px;
  }
  ```
#### `text-decoration-line`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)
- 텍스트 장식의 종류를 설정하는 속성(property).
- `none`(기본값), `underline`, `overline`, `line-through`(취소선) 등 키워드 값을 활용한다.
- 동시에 여러 가지 값을 공백으로 구분하여 작성하면, 여러 선을 사용할 수 있다.
  ```css
  p.text-decoration {
    text-decoration-line: underline line-through;
  }
  ```

#### `text-decoration-style`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)
- 텍스트 장식의 스타일을 설정하는 속성(property).
- `solid`(기본값), `double`, `dotted`, `dashed`, `wavy` 등 키워드 값을 활용한다.
  ```css
  p.text-decoration {
    text-decoration-style: wavy;
  }
  ```

#### `text-decoration-thickness`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness)
- 텍스트 장식의 굵기를 설정하는 속성(property).
- `auto`, `from-font`, `px`, `em`, `rem`, `%` 등으로 설정할 수 있다.
  ```css
  p.text-decoration {
    text-decoration-thickness: 3px;
  }
  ```

### `word-break`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/word-break)
- 텍스트가 자신의 컨텐츠 박스 외부로 넘쳐 흐르는 경우, 줄을 바꿀 지 여부를 지정하는 속성(property).
- `normal`, `break-all`(영문, 컨텐츠 박스 너비를 넘으면 줄 바꿈), `keep-all`(한글, 컨텐츠 박스 너비를 넘어도 줄 바꾸지 않음, 공백이 있는 경우 줄 바꿈) 값으로 설정할 수 있다.
  ```css
  p.word-break[lang="en"] {
    word-break: keep-all;
  }

  p.word-break[lang="ko"] {
    word-break: keep-all;
  }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

### `text-transform`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
- 텍스트를 대문자로 변경하는 방법을 지정하는 속성(property).
- 영어, 터키어, 독일어 등 특정 언어에서만 사용할 수 있다.
- `capitalize`(단어의 첫 문자 대문자로 변경), `none`, `lowercase`(모두 소문자로 변경), `uppercase`(모두 대문자로 변경) 등의 값으로 설정할 수 있다.
  ```css
  p.text-transform {
    text-transform: capitalize;
  }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

---
---
## 🧱 Unit
[MDN](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Values_and_units)

### Number
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/number)
- 숫자, 즉 정수 또는 실수를 의미한다.
- 대다수의 표기법이 유효하며, 소수점의 일의 자리수가 0인 경우 생략 가능하다.(예: `.5`)

### Length
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/length)
- `width`, `height`, `margin`, `padding`, `border-width`, `font-size`, `text-shadow` 등 다양한 속성(property)에 사용하는 '거리 값'을 의미한다.
- `Number + Unit`로 구성되고, `0` 뒤에는 단위를 붙이지 않아도 무방하다.
- Unit은 [Absolute Length](#absolute-length)와 [Relative Length](#relative-length)로 구분된다.

#### Absolute Length
- `px`, `cm`, `mm`, `in`, `pt` 등과 같은 물리적 측정 거리(고정 값, 화면에 보이는 거리)를 의미한다.
- 주로 `px`만 사용한다.
- 다만, `font-size`의 경우, 절대 길이로 설정하는 경우에 브라우저의 설정을 통해 변경할 수 없게 되므로, 접근성을 약화시킬 수 있으므로, `em`, `rem`과 같은 상대 길이를 활용해야 한다.

#### Relative Length
- 특정 `font-size`, `line-height`, viewport 등과 같은 어떠한 다른 거리와의 상대적 비율을 표현하는 단위이다.
- Font-relative Lengths
  * 특정 `font-size`를 기준으로 상대적 비율을 표현한다.
  * `em`: 부모의 `font-size`를 기준으로 상대적 비율을 표현하는 단위.(`1em` === parent `font-size`)
    사실상 `%`를 사용하는 것과 동일하다.
    ```css
    div.length-child {
      font-size: 1.5em;
    }
    ```
  * `rem`: Root 요소(보통 `<html>`)의 `font-size`를 기준으로 상대적 비율을 표현하는 단위.(`1rem` === `<html>`의 `font-size` === 브라우저 기본값(`16px`))
    브라우저에서 사용자가 글꼴 크기(`font-size`)를 변경하는 경우 그에 비례해 `rem`의 기준이 변경되므로, 웹 접근성 문제를 해결할 수 있다.
    ```css
    div.length-child {
      font-size: .5rem;
    }
    ```
- Viewport-relative Lengths
  * Viewport, 즉 문서에서 볼 수 있는 부분의 크기를 기준으로 상대적 백분율 길이를 설정하는 단위이다.
    장치에 따라 반응형으로 웹 페이지를 구현할 때 유용하게 사용된다.
  * `vh`
    Viewport의 높이 1%를 의미한다.
    ```css
    div.length-child {
      font-size: 10vh;
    }
    ```
  * `vw`
    Viewport의 너비 1%를 의미한다.
    ```css
    div.length-child {
      font-size: 10vw;
    }
    ```
  * `vmax`
    `vh`, `vw` 중 큰 값을 의미한다.
    즉, 세로 모드인 경우, `100vh`가 `vmax`, `100vw`가 `vmin`이 된다. 
    ```css
    div.length-child {
      font-size: 10vmax;
    }
    ```
  * `vmin`
    `vh`, `vw` 중 작은 값을 의미한다.
    즉, 가로 모드인 경우, `100vw`가 `vmax`, `100vh`가 `vmin`이 된다. 
    ```css
    div.length-child {
      font-size: 10vmin;
    }
    ```

### Percentage
- 보통 부모 요소와의 상대적 크기를 지정할 때 사용하는 단위이다.
- `width`, `height`, `margin`, `padding`, `font-size` 등에서 활용할 수 있다.
- `Number + %`로 구성되고, `0` 뒤에는 단위를 붙이지 않아도 무방하다.
  ```css
  div.percentage {
    width: 50%;
    height: 30%;
  }

### Function
#### `calc()`
- CSS 속성 값(`<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, 또는 `<integer>`)으로 계산식을 지정할 수 있는 함수이다.
- `calc(expression)`으로 활용하고, 내부 연산식은 표준 연산자 순위를 따른다.
- 연산자 앞 뒤로 공백을 입력하는 것이 권장된다.
  ```css
  p.function {
    width: calc(100% - 80px);
  }
  ```

#### `max()`, `min()`
- `,`로 구분된 식 목록에서 가장 크거나 작은 값을 CSS의 속성 값으로 설정하는 함수이다.
  ```css
  p.function {
    height: min(100%, 500px);
  }
  ```

---
## 🧱 Box Model
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) / [MDN-tutorial](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/The_box_model)
- 브라우저는 표준 CSS Box Model에 따라 각각의 요소를 사각형 박스로 표현한다. 따라서, CSS를 활용해 Box의 크기, 위치, 속성(색상, 배경, 테두리 모양 등)을 결정해야 한다.
- 하나의 박스는 4가지 영역으로 구성된다.
  ![Box-Model](https://mdn.mozillademos.org/files/16558/box-model.png)
  * **Content Area**
    요소의 실제 내용을 포함하는 영역
    - `box-sizing` 속성(property)의 값이 기본값인 `content-box`이다.
      ![content-box](https://mdn.mozillademos.org/files/16559/standard-box-model.png)
    - Block Level Element인 경우, 콘텐츠 영역의 크기를 `width`, `min-width`, `max-width`, `height`, `min-height`, `max-height` 속성(property)을 사용해 사용해 명시적으로 설정할 수 있다.
  * **Padding Area**
    내부 여백 경계가 감싼 영역(컨텐츠와 테두리 사이의 여백을 의미한다.)
    - 내부 여백의 크기는 `padding-top`, `padding-right`, `padding-bottom`, `padding-left`와 단축 속성인 `padding` 속성(property)이 결정한다.
  * **Border Area**
    테두리 경계가 감싼 영역(내부 여백과 외부 여백 사이를 의미한다.)
    - 테두리의 두께는 `border-width`와 단축 속성인 `border` 속성(property)이 결정한다.(기본적으로 `0px`이기 때문에 별도로 설정하지 않는 경우에 보이지 않는다.)
    - [`box-sizing` 속성(property)](#box-sizing) 값을 `border-box`로 설정하면, Border Area의 크기를 `width`, `min-width`, `max-width`, `height`, `min-height`, `max-height` 속성(property)을 사용해 사용해 명시적으로 설정할 수 있다.
      ![border-box](https://mdn.mozillademos.org/files/16557/alternate-box-model.png)
  * **Margin Area**
    외부 여백 경계가 감싼 영역(테두리 외부 여백을 의미한다.)
    - 외부 여백의 크기는 `margin-top`, `margin-right`, `margin-bottom`, `margin-left`와 단축 속성인 `margin`이 결정한다.
    - 이러한 외부 여백을 활용해 다른 Box와의 간격을 설정할 수 있다.
    - 다만, 여백 상쇄([margin collapsing](#margin-collapsing))가 발생하는 경우 요소 외부 여백이 공유되므로, 여백 영역이 명확하지 않을 수 있다.

### `width`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/width)
- Block Level Element의 너비를 설정하는 속성(property).
- Inline Element의 경우 너비를 설정할 수 없다.
- 기본적으로 `content-box`의 너비를 설정하지만, `box-sizing` 속성(property)이 `border-box`인 경우, `border-box`의 너비를 설정할 수 있다.
- 기본값으로 `auto`로 설정되어 있고, `100%`와 동일하게 동작한다. 이외에 `min-content`, `max-content`, `fit-content`, `<length>`, `<percentage>` 값을 가질 수 있다.
- 상속이 불가능한 속성이다.

### `height`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/height)
- Block Level Element의 높이를 설정하는 속성(property).
- Inline Element의 경우 높이를 설정할 수 없다.
- 기본적으로 `content-box`의 높이를 설정하지만, `box-sizing` 속성(property)이 `border-box`인 경우, `border-box`의 높이를 설정할 수 있다.
- 기본값으로 `auto`로 설정되어 있고, `100%`와 동일하게 동작한다. 이외에 `min-content`, `max-content`, `fit-content`, `<length>`, `<percentage>` 값을 가질 수 있다.
- 상속이 불가능한 속성이다.

### `max-width`, `min-width`, `max-height`, `min-height`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/max-width), [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/min-width), [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/max-height), [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/min-height)

- 기본적으로 `width`, `height` 속성과 동일한 값을 가지고, 동일하게 동작한다.
- 자식 요소가 `%` 값을 가져 부모 요소의 `width`나 `height` 값에 따라 자식 요소의 `width`나 `height` 값이 변경되더라도, 특정 최대 너비/높이 혹은 특정 최소 너비/높이 이후로는 변경되지 않도록 설정할 수 있다.
  ```css
  #parent { 
    width: 500px;
    height: 500px;
  }

  #child { 
    width: 50%;
    max-width: 300px;
    height: 50%;
    min-height: 100px;
  }
  ```

### `margin` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/margin)
- 요소(Element)의 외부 여백 영역을 설정하는 속성(property).
- `margin-top`, `margin-right`, `margin-bottom`, `margin-left`의 단축 속성(Shorthand)으로, 모두 `0`을 기본값으로 가지고 있다.
- 상속이 불가능하다.
  ```css
  div.margin-child {
    margin: 1rem;
  }
  ```
  * 1개의 값 작성: "상+우+하+좌" 모두 동일한 값의 `margin`
  * 2개의 값 작성: "상+하", "좌+우" 각각의 값의 `margin`
  * 3개의 값 작성: "상", "좌+우", "하" 각각의 값의 `margin`
  * 4개의 값 작성: "상", "우", "하", "좌" 각각의 값의 `margin`
  * `%` 값의 경우, **부모 요소의 `width` 값**에 대한 비율을 의미한다.
  
#### `margin` collapsing
- 여러 Block Level Element들의 "상", "하" `margin`이 경우에 따라 가장 큰 크기를 가진 `margin`으로 결합(상쇄)되는 현상.
  1. 인접 형제 간
     두 형제 요소의 `margin-top`과 `margin-bottom`이 서로 상쇄된다.
  2. 부모-자식 요소 간
     - 부모 요소에 `border`, `padding`, Inline contents이 없어 부모 요소와 자식 요소의 `margin-top`이 만나는 경우
     - 부모 요소에 `border`, `padding`, Inline contents이 없고, 부모 요소와 자식 요소를 분리할 `height`(`min-height`, `max-height` 포함) 속성의 값이 지정되지 않아 부모 요소와 자식 요소의 `margin-bottom`이 만나는 경우
     - 두 경우 모두 상쇄된 여백이 부모 요소 외부에 위치한다.
  3. 빈 Block
     `border`, `padding`, Inline contents, `height`(`min-height`, `max-height` 포함) 속성이 없는 경우 요소 자기 자신의 `margin-top`과 `margin-bottom`이 서로 상쇄된다.

### `padding` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/padding)
- 요소(Element)의 내부 여백 영역을 설정하는 속성(property).
- `padding-top`, `padding-right`, `padding-bottom`, `padding-left`의 단축 속성(Shorthand)으로, 모두 `0`을 기본값으로 가지고 있다.
- 상속이 불가능하다.
  ```css
  div.padding-child {
    padding: 1rem;
  }
  ```
  * 1개의 값 작성: "상+우+하+좌" 모두 동일한 값의 `padding`
  * 2개의 값 작성: "상+하", "좌+우" 각각의 값의 `padding`
  * 3개의 값 작성: "상", "좌+우", "하" 각각의 값의 `padding`
  * 4개의 값 작성: "상", "우", "하", "좌" 각각의 값의 `padding`
  * `%` 값의 경우, **부모 요소의 `width` 값**에 대한 비율을 의미한다.
- `margin`과 달리 padding collapsing 현상은 존재하지 않고, 음수 값을 활용할 수 없다.

### `border` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border)
- 요소(Element)의 `border`를 설정하는 속성(property).
- 보통 `border-width`, `border-style`, `border-color` 순서로 값을 설정한다.
- 생략한 속성(property)은 각각의 기본값인 `medium`, `none`, `currentColor`으로 설정된다. 따라서, 스타일을 지정하지 않으면 `border`가 보이지 않는다.
  ```css
  div.border {
    border: 1px solid rgba(170, 50, 200, .6);
  }
- 참고로, `outline` 속성을 통해 외곽선을 설정할 수 있지만, `outline`의 경우 절대 공간을 차지하지 않고 요소 외부에 그려지므로, Box-model에 포함되지 않는다.

#### `border-style` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border-style)
- 요소(Element)의 `border` 네 면의 스타일을 지정하는 속성(property)으로, 기본값은 `none`이다.
- `none`인 경우 다른 `width`나 `color` 속성(property)이 설정되어 있음에도 불구하고, 화면에 `border`가 보이지 않는다.
- `solid`, `hidden`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, `outset` 등 키워드 값을 활용해 스타일을 지정할 수 있다.
  * 1개의 값 작성: "상+우+하+좌" 모두 동일한 값의 `border-style`
  * 2개의 값 작성: "상+하", "좌+우" 각각의 값의 `border-style`
  * 3개의 값 작성: "상", "좌+우", "하" 각각의 값의 `border-style`
  * 4개의 값 작성: "상", "우", "하", "좌" 각각의 값의 `border-style`
  ```css
  div.border-style {
    border-top-style: none;
    border-right-style: dotted;
    border-bottom-style: dashed;
    border-left-style: inset;
  }
  ```

#### `border-width` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border-width)
- 요소(Element)의 `border`의 너비를 설정하는 속성(property)으로, 기본값은 `medium`이다.
- `thin`, `thick`, `medium` 키워드 값 혹은 `<length>` 값을 활용해 너비를 지정할 수 있다.
- 다만, 키워드 값을 활용하면 정확한 명세가 없기 때문에 브라우저별로 다르게 구현될 수 있다는 점에 유의해야 한다.
  * 1개의 값 작성: "상+우+하+좌" 모두 동일한 값의 `border-width`
  * 2개의 값 작성: "상+하", "좌+우" 각각의 값의 `border-width`
  * 3개의 값 작성: "상", "좌+우", "하" 각각의 값의 `border-width`
  * 4개의 값 작성: "상", "우", "하", "좌" 각각의 값의 `border-width`
  ```css
  div.border-width {
    border-top-width: medium;
    border-right-width: thick;
    border-bottom-width: 2px;
    border-left-width: 1.25em;
  }
  ```

#### `border-color` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border-color)
- 요소(Element)의 `border`의 색상을 설정하는 속성(property)으로, `currentColor`가 기본값이다.
- 색상 키워드 값(`<color>`)를 활용해 색상을 지정할 수 있다.
  * 1개의 값 작성: "상+우+하+좌" 모두 동일한 값의 `border-width`
  * 2개의 값 작성: "상+하", "좌+우" 각각의 값의 `border-width`
  * 3개의 값 작성: "상", "좌+우", "하" 각각의 값의 `border-width`
  * 4개의 값 작성: "상", "우", "하", "좌" 각각의 값의 `border-width`
  ```css
  div.border-color {
    border-top-color: black;
    border-right-color: red;
    border-bottom-color: blue;
    border-left-color: white;
  }
  ```

### `border-radius` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border-radius)
- 요소(Element)의 `border` 경계의 꼭지점을 둥글게 만드는 속성(property).
- `<length>`와 `<percentage>` 값을 활용해 꼭짓점의 단일 반지름을 설정할 수 있다.
  * 1개의 값 작성: "상단 좌측 + 하단 우측 + 상단 우측 + 하단 좌측" 모두 동일한 값의 `border-radius`
  * 2개의 값 작성: "상단 좌측 + 하단 우측", "상단 우측 + 하단 좌측" 각각의 값의 `border-radius`
  * 3개의 값 작성: "상단 좌측", "상단 우측 + 하단 좌측", "하단 우측" 각각의 값의 `border-radius`
  * 4개의 값 작성: "상단 좌측", "상단 우측", "하단 우측", "하단 좌측" 각각의 값의 `border-radius`
  ```css
  div.border-radius {
    border-radius: 30px;
  }
  ```

### `box-sizing`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing)
- 요소(Element)의 너비와 높이를 계산하는 방법을 지정하는 속성(property).
- 지정한 `width`와 `height`는 요소의 `content-box` 크기에만 적용되기 때문에 `border`, `padding`을 지정하는 경우에는 기존 요소의 `width`와 `height`에 더해서 화면에 그리게 된다.
- 따라서 `border`, `padding` 속성을 고려해서 요소(Element)의 크기를 설정해야 한다.
  * `content-box`: `width`, `height` 속성이 컨텐츠 영역만 포함하고, `margin`, `border`, `padding` 영역은 포함하지 않는다.
    따라서, `width`가 `300px`이고 `padding`이 `10px`, `border`가 `5px`인 요소의 총 너비는 `300px + 10px * 2 + 5px * 2`로 `330px`이다.
  * `border-box`: `width`, `height` 속성이 컨텐츠 영역을 비롯해 `border`, `padding` 영역을 포함하고, `margin`은 포함하지 않는다.
    따라서, `width`가 `300px`이고 `padding`이 `10px`, `border`가 `5px`인 요소의 총 너비는 `300px`이다.

---
## 🧱 Layout
[MDN-tutorial](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Introduction) [MDN](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout)
- 레이아웃에 대한 이해를 바탕으로, 요소를 올바른 장소에 배치하는 방법을 알 수 있다.

### `display`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/display)
- 요소(Element)를 *normal flow*속에서 요소가 동작하는 방식(요소의 내부와 외부 디스플레이 유형을 설정)을 변경하는 속성(property).
- 각 요소들은 각각 `block`, `inline` 중 하나를 초기값으로 가지고 있다.
- `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `none` 등의 키워드 값을 활용하여 특정 동작 방식을 설정할 수 있다.
  * `inline`
    - 영역의 크기가 내부 컨텐츠의 크기로 정해진다.
    - `margin-top`, `margin-bottom`, `padding-top`, `padding-bottom`을 설정할 수 없다.
    - 여러 요소가 수평적으로 배치된다.
  * `block`
    - 영역의 크기를 `width`와 `height` 속성을 활용해 지정할 수 있다.
    - `width`를 지정하지 않으면 가능한 최대 너비를 차지한다.
    - 여러 요소가 수직적으로 배치된다.
  * `inline-block`
    - 대표적으로 `<input>`이 Inline-block Element이다.
    - 영역의 크기를 `width`와 `height` 속성을 활용해 지정할 수 있다.
    - 여러 요소가 수평적으로 배치된다.
    - `margin-top`, `margin-bottom`, `padding-top`, `padding-bottom`을 설정할 수 있다.
  * `none`
    - 요소(Element)를 레이아웃에서 완전히 제거하여 화면에서 보이지 않게 설정한다.
    - 따라서 해당 요소의 기존에 차지하는 위치도 사라지게 된다.
    - 이와 달리 `visibility` 속성에 `hidden` 값을 부여하면, 레이아웃을 변경하지 않고 요소를 보이지 않게 설정하기 때문에 해당 요소가 차지하는 기존 위치를 빈 화면으로 설정한다.
    ```css
    div.display {
      display: none;
    }
    ```

### `visibility`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/visibility)
- 문서의 레이아웃을 변경하지 않고, 요소를 보이거나 보이지 않게 설정하는 속성(property).
- `visible`(기본값), `hidden`, `collapse` 등 키워드 값을 통해 설정한다.
  * `hidden`: 요소가 그려지지 않게끔 설정하여, 레이아웃 상에서 공간은 차지하지만, 해당 요소가 보이지 않게 설정한다.
  * `collapse`: 요소가 그려지지 않게 설정하지만, `<table>`에서는 차지하는 공간도 제거한다.
  ```css
  div.visibility {
    visibility: hidden;
  }
  ```

### `float`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/float)
- 하나의 요소(Element)가 *normal flow*으로부터 빠져나와 텍스트 및 Inline Element가 좌, 우측에 배치하는 속성(property).
- **Flexbox**에 의해 대체되고 있다.
- `float` 속성은 일부 경우에 `display` 값을 수정한다.(대다수를 `block` 값으로 수정한다.)
- `none`, `left`, `right`, `inline-start`, `inline-end` 등 키워드 값을 활용하여 해당 요소가 어디에 위치할 지에 대해 설정한다.
  ```css
  div.float {
    float: left;
  }
  ```

### `position`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/position)
- HTML 문서 상에 요소(Element)를 배치하는 방법을 지정하는 속성(property).
- `top`, `right`, `bottom`, `left` 속성이 요소를 배치할 최종 위치를 결정한다.
- `static`(기본값), `relative`, `absolute`, `fixed`, `sticky` 등의 키워드 값을 활용하여 배치 방법을 지정한다.
- [Normal Flow](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Normal_Flow)는 일반적인 문서 흐름을 의미한다.
  * Block Level Element: 부모 요소의 너비 100%와 컨텐츠의 최대 높이를 가진다.
  * Inline Element: 컨텐츠의 최대 너비와 최대 높이를 가지며, `width`, `height` 값을 설정할 수 없다.

#### `static`
요소(Element)를 *Normal Flow*(일반적인 문서 흐름)에 따라 배치한다.
`top`, `right`, `bottom`, `left` 속성을 사용할 수 없다.

#### `relative`
요소(Element)를 *Normal Flow*(일반적인 문서 흐름)에 따라 배치하고, **자기 자신을 기준**으로 `top`, `right`, `bottom`, `left`의 값에 따라 이동한 위치에 배치된다.
- **자기 자신을 기준**으로 한다는 것은 `position` 속성의 기본값인 `static`일 때의 위치를 의미한다.
- 다만, 이 경우 상반되는 값을 동시에 작성한다면, `top`, `left`가 우선시되어 `bottom`, `right`는 무시된다.
```css
#position-example {
  position: relative;
  top: 100px;
  left: 100px;
}
```

#### `absolute`
요소(Element)를 *Normal Flow*(일반적인 문서 흐름)에서 제거하고, 페이지 레이아웃에 공간도 배정하지 않는다.
다만, **상위 요소 중 `position` 속성이 `static`을 제외한 값을 가진 가장 가까운 상위 요소를 기준**으로 `top`, `right`, `bottom`, `left`의 값에 따라 이동한 위치에 배치한다.
만약 **기준에 해당하는 상위 요소가 없는 경우에는, `<body>`를 기준**으로 배치한다.
(참고로, `top`, `right`, `bottom`, `left`의 값을 설정하지 않는 경우에는 `float`와 마찬가지로 기존 위치에서 떠오른 형태로 존재하게 된다.)
```css
#position-example {
  position: absolute;
  top: 100px;
  left: 100px;
}
```

#### `fixed`
요소(Element)를 *Normal Flow*(일반적인 문서 흐름)에서 제거하고, 페이지 레이아웃에 공간도 배정하지 않는다.
대신 **Viewport를 기준**으로 삼아 `top`, `right`, `bottom`, `left`의 값에 따라 이동한 위치에 배치한다.
따라서 기준이 Viewport이기 때문에 스크롤한다고 해도 고정된 위치에 존재하게 된다.
```css 
#position-example {
  position: fixed;
  top: 100px;
  left: 100px;
}
```

#### `sticky`
요소(Element)를 *Normal Flow*(일반적인 문서 흐름)에 따라 배치한다.
기존 위치에서 `left`, `right`만 적용되어 이동한 위치에서 배치한다.
다만, 스크롤에 의해 기존 위치가 Viewport에서 벗어나게 되는 순간부터, `fixed`와 마찬가지로 Viewport를 기준으로 `top`, `right`, `bottom`, `left`의 값에 따라 이동한 위치에 배치한다.
(참고로, 스크롤 되는 요소의 자식 요소에 `position` 속성을 `sticky`로 설정해야 한다는 점에 유의해야 한다.)
```css 
#position-example {
  position: sticky;
  top: 100px;
  left: 100px;
}
```
### `overflow` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/overflow)
- 요소(Element)의 컨텐츠의 크기가 커서 요소의 `width`, `height`에 맞출 수 없을 때 어떤 방식으로 처리할 지에 대해 설정하는 속성(property).
- `overflow-x`와 `overflow-y`의 단축 속성이다.
- `visible`(기본값), `hidden`, `scroll`, `auto` 등 키워드 값을 활용해 처리 방식을 설정할 수 있다.
  * `visible`: 컨텐츠를 자르지 않고, 넘쳐 흐르게 작성된다.
  * `hidden`: 컨텐츠를 자르고, 넘쳐 흐르는 부분은 제거된다.
  * `scroll`: 컨텐츠를 자르지 않고, 넘쳐 흐르는 부분은 스크롤을 통해 확인할 수 있도록 숨겨진다.
  * `auto`: 브라우저가 결정한 대로 설정되는데, 보통 컨텐츠가 넘치지 않는 경우 `visible`, 넘쳐 흐르는 경우 `scroll`로 자동적으로 변경된다.

### `z-index`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/z-index)
- 각 요소의 z축 순서를 지정하는 속성(property).
- 더 큰 정수 값(기본값은 `auto`)을 가진 요소가 z축 기준으로 상단에 위치한다.
```css
div.zindex {
  z-index: 1000;
}
```
- 기본적인 쌓임 맥락은 **코드 순서**에 따라 결정되지만, `position` 속성이 `static`인 요소보다 **`static`이 아닌 요소**가 z축 기준으로 상단에 위치하고, **`z-index` 속성의 값이 클수록** z축 기준으로 상단에 위치한다.

---
## 🧱 Color & Background

### `<color>`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/color_value)
- 키워드 값, `# + 16진수`, `rgb()`, `rgba()`, `hsl()`, `hsla()`를 값을 활용해 색상을 지정할 수 있다.
  예시
  * `black` = #000000 = rgb(0, 0, 0) = hsl(0, 0%, 0%)
  * `white` = #FFFFFF = rgb(255, 255, 255) = hsl(0, 0%, 100%)
  * `transparent`: 투명하게 설정하는 키워드 값

### `opacity`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/color_value)
- 요소(Element)의 불투명도를 설정하는 속성(property).
- 0 ~ 1 사이의 실수값(`<number>`) 혹은 0% ~ 100%의 `<percentage>` 값을 가지며, `1`(`100%`)가 기본값으로 불투명한 요소를 의미한다.
- `opacity` 속성은 해당 요소 내부의 모든 요소에 영향을 주지만, 자식 요소가 상속하지는 않는다. 즉, 요소 내부의 모든 요소의 불투명도를 조절하기 위해서는 `opacity` 속성을 활용하고, 배경만 불투명도를 조절하기 위해서는 `background-color`에서 `alpha` 값을 지정해야 한다.
  ```css
  div.opacity {
    opacity: 0.5;
  }
  ```

### `background-color`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background-color)
- 요소(Element)의 배경 색상을 지정하는 속성(property).
- `<color>` 값인 키워드 값, `# + 16진수`, `rgb()`, `rgba()`, `hsl()`, `hsla()`를 값을 사용해 색상을 지정할 수 있다.
- 다만, `background-image`가 있는 경우에는 `background-color`가 뒤에 렌더링 되기 때문에 이미지가 투명한 부분을 가지고 있어야 `background-color`를 확인할 수 있다.
```css
div.background {
  background-color: black;
}
```

### `background-image`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background-image)
- 요소(Element)의 배경 이미지를 하나 이상 지정하는 속성(property).
- `none` 키워드 값(기본값)이나 쉼표로 구분한 다수의 `<image>` 값으로 지정할 수 있다.
```css
div.background {
  background-image: url("../img/example_img.png");
}
```


### `background-repeat`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background-repeat)
- 요소(Element)의 배경 이미지의 반복 방법을 지정하는 속성(property).
- `repeat-x`(x축 반복), `repeat-y`(y축 반복), `repeat`(기본값), `space`(잘리지 않을 만큼만 반복), `round`(요소 내부를 채울만큼 반복), `no-repeat`(반복 안함) 키워드 값으로 지정할 수 있다.
```css
div.background {
  background-image: url("../img/example_img.png");
  background-repeat: no-repeat;
}
```

### `background-position`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
- 요소(Element)의 배경 이미지의 초기 위치를 설정하는 속성(property).
- `0 0`(x좌표, y좌표)이 기본값으로, 좌측 상단에 배경 이미지가 위치하게 된다.
- `top`, `bottom`, `left`, `right`, `center` 등 키워드 값으로 설정할 수도 있다.(키워드는 생략 시 `center`가 된다.)
- 반복 설정이 되어 있는 경우에는 해당 좌표를 기준으로 이미지를 반복한다.
- 
```css
div.background {
  background-image: url("../img/example_img.png");
  background-repeat: no-repeat;
  background-position: 100px 200px;
}
```

### `background-origin`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background-origin)
- 요소(Element)의 배경의 원점의 시작점을 설정하는 속성(property).
- `border-box`, `padding-box`(기본값), `content-box` 값을 활용해 설정할 수 있다.
- 각각 배경 이미지의 원점이 `border` 영역 좌측 상단, `padding` 영역 좌측 상단, `content` 영역 좌측 상단으로 변경된다.
```css
div.background {
  background-image: url("../img/example_img.png");
  background-repeat: no-repeat;
  background-origin: border-box;
}
```

### `background-size`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background-size)
- 요소(Element)의 배경 이미지의 크기를 설정하는 속성(property).
- `contain`, `cover`(비율은 유지하면서, 제일 크게 설정), `auto`(기본값, 원본 크기) 등 키워드 값이나 `<length>`, `<percentage>`값을 활용해 주어진 값으로 늘리거나 줄일 수 있다.
  * `contain`: 비율은 유지하면서, 전부 보이게 설정.
  * `cover`: 비율은 유지하면서, 빈 공간 없이 제일 크게 설정.
  * `auto`(기본값): 이미지의 원본 크기를 유지.
  * `<length>`, `<percentage>`: 원본 비율을 유지하지 않고 지정된 값으로 변경.(하나만 입력 시 비율 유지하면서 지정된 값으로 변경(빈 공간 생길 수 있음)된다.)
```css
div.background {
  background-image: url("../img/example_img.png");
  background-repeat: no-repeat;
  background-size: cover;
}
```

### `background` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background)
- 요소(Element)의 배경의 색상, 이미지, 원점, 크기, 반복 등 여러 배경 스타일을 한번에 설정하는 단축 속성(property).
- `background-attachment`, `background-clip`, `background-color`, `background-image`, `background-origin`, `background-position`, `background-repeat` 속성을 설정할 수 있다.
`background-size`
- `<background-size>` 값은 `<background-position>` 바로 뒤에만 위치할 수 있으며 '/' 문자로 구분해야 한다.
- `<background-color>` 값은 반드시 마지막에 작성해야 한다.
- 생략한 속성은 기본값으로 설정되는 것에 유의해야 한다.
  * `background-image`: `none`
  * `background-position`: `0% 0%`
  * `background-size`: `auto auto`
  * `background-repeat`: `repeat`
  * `background-origin`: `padding-box`
  * `background-clip`: `border-box`
  * `background-attachment`: `scroll`
  * `background-color`: `transparent`

---
## 🧱 Transform
### `transform`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/transform)
- 요소(Element)에 회전, 크기 조절, 기울이기, 이동 효과를 부여하는 속성(property).
- 원본 요소의 레이아웃은 유지하되, 그 상태에서 효과를 부여하는 것이다.
- '함수 표기법'을 활용해 해당 효과를 부여할 수 있고, `,`를 활용해 여러 효과를 동시에 부여할 수 있다.
  * `none`(기본값): 아무런 변형도 적용하지 않는다.
  * `<transform-function>`[참고](https://developer.mozilla.org/ko/docs/Web/CSS/transform-function): 하나 이상의 변형 함수로, 우측에 작성된 함수가 먼저 적용된다는 특징이 있다.
    - X 좌표(가로 좌표)와 Y 좌표(세로 좌표)를 사용해 표현하고, 좌측 상단이 원점`(0, 0)`이 되기에 Y축은 아래로 커지게 된다.
    - 해당 자료형은 '요소의 외형에 영향을 주는 변형'을 설정하는데, 이러한 변형 함수는 2D 또는 3D 공간 내에서 요소를 회전하고, 크기를 바꾸고, 왜곡하고, 이동할 수 있다.
  
#### `scale()`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale())
- 2D에서 요소의 크기를 조절하는 변환하는 함수.
- `<number>` 값을 활용해 너비(x축)와 높이(y축)를 각각 다른 값으로 크기를 조절할 수 있다.
```css
div.scale {
  transform: scale(1, 1.2);
}
```
- `scaleX()`, `scaleY()`의 경우 해당 축으로만 크기를 조절할 수 있다.

#### `rotate()`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate())
- 2D 평면에서 요소를 회전시키는 변환하는 함수.
- `<angle>` 값을 활용해 요소의 회전 각도를 설정해 회전시킬 수 있다.
  * 양수 값인 경우 시계 방향으로, 음수 값인 경우 반시계 방향으로 회전시킨다.
  * `deg`(각도), `grad`, `rad`, `turn`(회전) 등의 단위를 사용한다.
    (예: `90deg` = `100grad` = `0.25turn` = `1.5708rad`)
```css
div.rotate {
  transform: rotate(45deg);
}
```

#### `translate()`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew())
- 요소를 수평 또는 수직으로 이동하는 함수.
![MDN ref](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate()/translate.png)
- `<length>`, `<percentage>` 값을 활용해 요소를 이동시킬 거리를 나타낸다.
  * 값을 하나만 작성한 경우: x축으로만 이동한다.
  * 값을 `,`로 구분해 두 개를 작성한 경우: x축, y축으로 이동한다.
  * `px`, `vh`, `vw`, `em`, `rem`, `%` 등의 단위를 사용한다.
```css
div.translate {
  transform: translate(100%, -400px);
}
```

#### `skew()`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew())
- 2D에서 요소를 기울이는 함수.
- `<angle>` 값을 활용해 요소를 기울일 수 있다.
  * 양수 값인 경우 시계 방향으로, 음수 값인 경우 반시계 방향으로 회전시킨다.
  * `deg`(각도), `grad`, `rad`, `turn`(회전) 등의 단위를 사용한다.
    (예: `90deg` = `100grad` = `0.25turn` = `1.5708rad`)
  * 값을 하나만 작성한 경우: x축으로만 기울인다.
  * 값을 `,`로 구분해 두 개를 작성한 경우: x축, y축으로 기울인다.
```css
div.skew {
  transform: skew(45deg);
}
```

### `transform-origin`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
- 요소(Element)의 변환 원점을 설정하는 속성(property).
- `center`(기본값, `50% 50%`와 동일), `left`, `top`, `bottom`, `right` 등 키워드 값을 활용할 수 있고, `<length>`, `<percentage>`도 사용할 수 있다.
```css
div.transform-origin {
  transform-origin: top left;
}
```

---
## 🧱 Transition
### `transition` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/transition)
- `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`를 설정하는 단축 속성(property).
- `<time>` 자료형을 두 가지 속성이 활용하고 있기 때문에 먼저 작성된 값이 `transition-duration`, 나중에 작성된 값이 `transition-delay`로 설정된다.
  * `transition-delay`: `0s`
  * `transition-duration`: `0s`
  * `transition-property`: `all`
  * `transition-timing-function`: `ease`
```css
div.transition {
  transition: all 3s linear 1s;
}
```

### `transition-property`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)
- 전환 효과를 적용해야 하는 속성을 설정하는 속성(property).
- 단축 속성을 설정하면 하위 모든 속성에 전환 효과가 적용된다.
- `none`, `all` 등 키워드 값과 해당 속성 값을 활용할 수 있다.
```css
div.transition {
  transition-property: all;
}
```

### `transition-duration`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
- 전환 효과가 완료되는 데 걸리는 시간을 설정한다.
- `0s`가 기본값이기 때문에 기본적으로는 전환 효과가 발생하지 않는다.
- `<time>` 값과 `s`, `ms` 단위를 활용해 시간을 설정할 수 있고, 각각 다른 시간을 설정할 수도 있다.
```css
div.transition {
  transition-property: margin-right, color;
  transition-duration: 3s, 10ms;
}
```

### `transition-delay`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/transition-delay)
- 전환 효과를 적용하는 시간을 지연시키도록 설정하는 속성(property).
- `0s`가 기본값이기 때문에 기본적으로는 전환 효과가 발생하지 않는다.
- `<time>` 값과 `s`, `ms` 단위를 활용해 시간을 설정할 수 있고, 각각 다른 시간을 설정할 수도 있다.
```css
div.transition {
  transition-property: margin-right, color;
  transition-duration: 3s;
  transition-delay: 3s;
}
```

### `transition-timing-function`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- 전환 효과가 적용되는 중간 과정의 시간을 설정하는 속성(property).
- `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out` 등 키워드 값과 `bezier()` 함수 값, `steps()` 함수 값 등을 활용해 중간 과정을 설정할 수 있다.

---
## 🧱 Animation

### `animation` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation)
- 다수의 스타일을 전환하는 애니메이션을 적용하는 단축 속성.
- `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, `animation-play-state`의 단축 속성이다.
- 사용자의 상호작용에 따라 움직이는 `transition`과 달리, `hover`, `active` 등의 이벤트가 없다고 해도 자동으로 움직임을 설정하는 것이 `animation`이다.
- `@keyframes`를 활용해 여러가지 상태를 지정하고 이를 애니메이션 처리할 수 있다.
- 단축 속성의 특성 상 작성하지 않으면 기본 값으로 적용된다.
  * `animation-name`: `none`
  * `animation-duration`: `0s`
  * `animation-timing-function`: `ease`
  * `animation-delay`: `0s`
  * `animation-iteration-count`: `1`
  * `animation-direction`: `normal`
  * `animation-fill-mode`: `none`
  * `animation-play-state`: `running`
```css
div.animation {
  animation: 3s linear 1s infinite reverse forwards running my-animation;
}
```

### `@keyframes`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes)
- 애니메이션 중간중간의 특정 지점들을 거칠 수 있는 keyframes를 설정하여 애니메이션 중간 절차를 제어할 수 있게 하는 규칙이다.
```css
@keyframes keyframesName {
  0% {
    margin-left: 100%;
    width: 300%;
  }
  50% {
    margin-left: 0%;
    width: 100%;
  }
  100% {
    margin-left: 100%;
    width: 300%;
  }
}
```
- 반드시 Time Offset(즉, `%`를 활용한 시간에 대한 규칙)을 작성해야 한다.
- `keyframes`가 여러번 정의된 경우에는 가장 최근에 정의된 `keyframes`에 선언된 값만 유효하다.

### `animation-name`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)
- 요소(element)에 적용할 애니메이션의 `keyframes`의 이름을 지정하는 속성(property).
- `none`(기본값), `<custom-ident>` 값을 활용할 수 있다.
  * 대소문자를 구분한다.
  * `a` - `z`, `0` - `9`, `-`, `_`만 사용할 수 있다.

### `animation-duration`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation-duration)
- 애니메이션이 한 사이클을 완료하는 데 걸리는 시간을 지정하는 속성(property).
- `0s`(기본값), `<time>` 값을 활용해 설정할 수 있다.
  * 음수 값은 유효하지 않으므로, 무시된다.
  * `s`, `ms`로 지정할 수 있다.

### `animation-delay`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation-delay)
- 애니메이션이 시작할 시점을 지정하는 속성(property).
- `0s`(기본값), `<time>` 값을 활용해 설정할 수 있다.
  * 음수 값을 지정하면, 애니메이션은 즉시 시작되지만, 애니메이션이 진행되는 도중에 시작된다.
  * `s`, `ms`로 지정할 수 있다.

### `animation-timing-function`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
- 각 사이클의 지속 시간 동안 애니메이션이 진행되는 방식을 설정하는 속성(property).
- `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out` 등 키워드 값과 `bezier()` 함수 값, `steps()` 함수 값 등을 활용해 중간 과정을 설정할 수 있다.

### `animation-iteration-count`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)
- 애니메이션의 재생 횟수(반복 횟수)를 설정하는 속성(property).
- `1`(기본값), `<number>`, `infinite` 값을 활용해 설정할 수 있다.
  `infinite`을 설정하면 무한대로 재생이 반복된다.

### `animation-direction`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation-direction)
- 애니메이션을 어떤 방향으로 재생할 지 여부를 설정하는 속성(property).
- `normal`(기본값), `reverse`, `alternate`, `alternate-reverse` 등 키워드 값을 활용해 설정할 수 있다.
  * `normal`: 정방향 재생.
  * `reverse`: 역방향 재생.
  * `alternate`: 정방향 후 역방향 재생.
  * `alternate-reverse`: 역방향 후 정방향 재생.

### `animation-play-state`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)
- 애니메이션의 실행 또는 일시 정지 여부를 설정하는 속성(property).
- `running`(기본값), `paused`을 활용해 설정할 수 있다.
```css
div.animation:hover {
  animation-play-state: paused;
}
```

### `animation-fill-mode`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation-fill-mode)
- 애니메이션이 실행 전과 후에 대상에 스타일을 적용하는 방법을 지정하는 속성(property).
- `none`(기본값), `forwards`, `backwards`, `both` 값을 활용해 설정할 수 있다.
  * `none`: 기존에 작성된 스타일을 유지한다.
  * `forwards`: 끝날 때 애니메이션의 마지막 `keyframes`를 유지한다.
  * `backwards`: 시작할 때 애니메이션의 첫 `keyframes`를 유지한다.
  * `both`: `forwards`, `backwards`가 모두 적용된다.
```css
div.animation {
  animation-fill-mode: forwards;
}
```

---
## 🧱 FLEX
### 개요
여러 요소(element)를 한 줄로 정렬하는 방법에는 3가지가 있다.
1. `display: inline-block;`
   개행이 공백으로 인정되어, 원치 않는 여백이 존재하게 된다.
2. `float: left;`
   Normal Flow에서 벗어나기 때문에 높이를 자동으로 갖지 못하게 된 container의 height를 따로 지정해주어야 한다.
3. `display: flex;`
   * 요소의 내부 디스플레이 유형을 설정하는 값으로, `flex`, `grid` 등이 있다.
   * 요소의 외부 디스플레이 유형을 함께 설정하는 값으로, `inline-flex` 등의 값을 활용할 수 있다.
   * container와 item에 활용하는 각각의 속성(property)을 적절하게 사용해야 한다.
   * main-axis(주 축), cross-axis(교차축)

### [flex-container] `flex-direction`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-direction)
- `flex-container`의 내부에 `flex-item`을 배치할 때 사용할 `main-axis`와 정렬 방향을 지정하는 속성(property).
- 📌 **Value**
  키워드 값: `row`(기본값), `row-reverse`, `column`, `column-reverse`
  * `row`(기본값)
    `main-axis`가 **가로 축**이고, 왼쪽에서 오른쪽 방향으로 정렬된다.
  * `row-reverse`
    `main-axis`가 **가로 축**이고, 오른쪽에서 왼쪽 방향으로 정렬된다.
  * `column`
    `main-axis`가 **세로 축**이고, 위쪽에서 아래쪽 방향으로 정렬된다.
  * `column-reverse`
    `main-axis`가 **세로 축**이고, 아래쪽에서 위쪽 방향으로 정렬된다.
```css
div.flex-container.flex-direction {
  flex-direction: column;
}
```

### [flex-container] `flex-wrap`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-wrap)
- `flex-item`을 강제로 한 줄에 배치할 지, 가능한 영역 내에서 벗어나지 않고 여러 행으로 나누어 표현할 것인지를 결정하는 속성(property).
- 📌 **Value**
  키워드 값: `nowrap`(기본값), `wrap`, `wrap-reverse`
  * `nowrap`(기본값)
    `flex-item`을 한 줄에 배치하고, `flex-direction`에 의해 결정된 방향으로 설정된다.
  * `wrap`
    `flex-item`을 여러 행에 걸쳐서 배치되고, `flex-direction`에 의해 결정된 방향으로 설정된다.
  * `wrap-reverse`
    `flex-item`을 여러 행에 걸쳐서 배치되지만, 요소가 나열되는 방향이 반대로 설정된다.
```css
div.flex-container.flex-wrap {
  flex-wrap: wrap;
}
```

### [flex-container] `flex-flow` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-flow)
- `flex-direction`과 `flex-wrap`의 단축 속성(property).
- 두 속성에 사용할 수 있는 키워드 값을 공백으로 구분하여 작성한다.
```css
div.flex-container.flex-flow {
  flex-flow: column wrap;
}
```

### [flex-container] `justify-content`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
- main-axis을 기준으로 flex-item 여러 줄을 어떻게 정렬하여 배치할 지를 설정하는 속성(property).
- `normal`(기본값), `center`, `start`, `end`, `flex-start`, `flex-end`, `left`, `right`, `space-between`, `space-around`, `space-evenly`, `safe`, `unsafe` 등의 키워드 값을 활용해 설정할 수 있다.
  * `normal`(기본값)
  * `center`: main-axis를 기준으로 중앙 정렬하여 배치.
  * `flex-start`: main-axis가 시작하는 부분부터 배치.
  * `flex-end`: main-axis가 끝나는 부분부터 배치.
  * `space-between`: 요소 간 여백이 동일한 크기로 배치.
  * `space-around`: 요소 좌, 우로 동일한 여백을 갖도록 배치.
  * `space-evenly`: 모든 여백이 동일한 크기를 갖도록 배치.
<iframe height="300" style="width: 100%;" scrolling="no" title="" src="https://codepen.io/hyoungqu23/embed/PojmMpY?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hyoungqu23/pen/PojmMpY">
  </a> by hyoungqu23 (<a href="https://codepen.io/hyoungqu23">@hyoungqu23</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### [flex-container] `align-items`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
- cross-axis을 기준으로 flex-item 하나의 줄의 위치를 지정하는 속성(property).
- 모든 하위 flex-item들에 대한 align-self 속성(property)의 값을 지정하는 속성(property).
- `stretch`(기본값), `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `baseline`, `first baseline`, `last baseline`, `safe`, `unsafe` 등의 키워드 값을 활용해 설정할 수 있다.
  * `stretch`(기본값)
  * `center`: cross-axis를 기준으로 중앙 정렬하여 배치.
  * `flex-start`: cross-axis가 시작하는 부분부터 배치.
  * `flex-end`: cross-axis가 끝나는 부분부터 배치.
<iframe height="300" style="width: 100%;" scrolling="no" title="FLEX-container || align-items" src="https://codepen.io/hyoungqu23/embed/ZEyyzpM?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hyoungqu23/pen/ZEyyzpM">
  FLEX-container || align-items</a> by hyoungqu23 (<a href="https://codepen.io/hyoungqu23">@hyoungqu23</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### [flex-container] `align-content`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/align-content)
- cross-axis을 기준으로 flex-item 여러 줄을 어떻게 정렬하여 배치할 지를 설정하는 속성(property).
- 컨텐츠 사이와 주위 빈 공간을 cross-axis에 따라 배치하는 방식을 결정하는 속성(property).
- `flex-wrap: nowrap;`과 같이 한 줄로만 이루어진 flex-container에는 효과가 없다.
- `normal`(기본값), `center`, `start`, `end`, `flex-start`, `flex-end`, `baseline`, `first baseline`, `last baseline`, `space-between`, `space-around`, `space-evenly`, `stretch`, `safe`, `unsafe` 등의 키워드 값을 활용해 설정할 수 있다.
  * `normal`(기본값)
  * `center`: main-axis를 기준으로 중앙 정렬하여 배치.
  * `flex-start`: main-axis가 시작하는 부분부터 배치.
  * `flex-end`: main-axis가 끝나는 부분부터 배치.
  * `space-between`: 요소 간 여백이 동일한 크기로 배치.
  * `space-around`: 요소 좌, 우로 동일한 여백을 갖도록 배치.
  * `space-evenly`: 모든 여백이 동일한 크기를 갖도록 배치.
<iframe height="300" style="width: 100%;" scrolling="no" title="FLEX-container || align-content" src="https://codepen.io/hyoungqu23/embed/OJggLZx?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hyoungqu23/pen/OJggLZx">
  FLEX-container || align-content</a> by hyoungqu23 (<a href="https://codepen.io/hyoungqu23">@hyoungqu23</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### [flex-item] `order`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/align-content)
- flex-container 혹은 grid-container 내부에서 현재 요소의 배치 순서를 지정하는 속성(property).
- `<integer>`(`0`이 기본값) 값을 활용해 설정할 수 있고, 오름차순으로 정렬되고 같은 값인 경우 코드 작성 순서대로 정렬된다.
- 화면에 보이는 순서에만 영향을 미친다.
```css
div.flex-item:nth-child(3) {
  order: -1;
}
```

### [flex-item] `flex` Shorthand(단축 속성)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex)
- flex-item의 크기를 확대하거나 축소하는 방법을 설정하는 속성(property).
- `flex-grow`(`0`), `flex-shrink`(`1`), `flex-basis`(`auto`)의 단축 속성.
- 명시적으로 설정하지 않으면 기본값으로 설정되지만, `flex-basis` 속성은 명시하지 않으면, `0`이 된다.
- 값을 `<number>` 하나만 설정하면, `flex-grow`가 된다.
- 값을 `<length>` 또는 `<percentage>`를 하나만 지정하면 `flex-basis`이 된다.
- 값이 두 개일때, 첫 번째 값은 `<number>`여야 하며 `flex-grow`가 된다.
  * `<number>`를 지정하면 `flex-shrink`가 된다.
  * `<length>`, `<percentage>`, 또는 `auto`를 지정하면 `flex-basis`가 된다.
- `initial`은 기본값으로 설정된다.
- `auto`는 `1`, `1`, `auto`로 설정되어 확대/축소가 된다.
- `none`은 `0`, `0`, `auto`로 설정되어 확대/축소가 되지 않는다.

### [flex-item] `flex-grow`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-grow)
- flex-item이 flex-container 내부에서 할당 가능한 공간의 정도를 선언하는 속성(property).
- 모든 flex-item의 크기가 flex-container보다 작은 경우(즉, 남는 공간이 있는 경우)에만 사용 가능하다.
- `<number>` 값(0 이상의 양수값)을 활용해 설정할 수 있고, `0`이 기본값이다.
- 동일한 값을 가진 flex-item은 모두 동일한 공간 비율을 가진다.
```css
div.flex-item.flex-grow {
  flex-grow: 1;
}
```

### [flex-item] `flex-shrink`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-shrink)
- flex-item의 크기를 축소하는 비율을 설정하는 속성(property).
- flex-item의 크기가 flex-container보다 큰 경우에만 사용 가능하다.
- `<number>` 값(0 이상의 양수값)을 활용해 설정할 수 있고, `1`이 기본값이다.
- `0`인 경우에는 해당 flex-item의 원본 크기를 유지한다.
```css
div.flex-item.flex-shrink {
  flex-shrink: 2;
}
```

### [flex-item] `flex-basis`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-basis)
- flex-item의 초기 크기를 지정하는 속성(property).
- `flex-grow`, `flex-shrink` 속성은 `flex-basis` 속성 값을 제외하고 확대되거나 축소된다.
- `auto`(기본값), `<length>`, `<percentage>` 등의 값을 활용해 설정할 수 있다.
- `0`으로 설정하면 모든 flex-item이 동일한 크기가 된다.
```css
div.flex-item.flex-basis {
  flex-basis: 0;
}
```

### [flex-item] `align-self`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
- 각 flex-item의 교차축 정렬을 설정하는 속성(property).
- 다만, 해당 flex-item이 해당 main-axis에서만 설정된다.
```css
div.align-self {
  align-self: flex-start;
}
```

---
## 🧱 GRID
### Grid Unit
`fr`
`min-content`
`max-content`
`auto-fill`
`auto-fit`