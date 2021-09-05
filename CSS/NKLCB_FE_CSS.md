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

## 스타일 우선순위
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

## Font-Property
### `color`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/color)
- 요소(Element)의 텍스트 및 그 장식의 현재 색상을 설정하는 속성(property).
  ```CSS
  p.font-property {
    color:salmon;
  }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

### `font-size`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font-size)
- 요소(Element)의 텍스트의 크기를 변경하는 속성(property).
- 브라우저마다 다르지만, 보통 `16px`이 기본값으로 설정되어 있다.
  ```CSS
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
  ```CSS
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
  ```CSS
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
  ```CSS
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
  ```CSS
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
  ```CSS
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
    ```CSS
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
  ```CSS
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
  ```CSS
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
  ```CSS
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
  ```CSS
  p.text-decoration {
    text-decoration: solid underline purple 4px;
  }
  ```
#### `text-decoration-line`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)
- 텍스트 장식의 종류를 설정하는 속성(property).
- `none`(기본값), `underline`, `overline`, `line-through`(취소선) 등 키워드 값을 활용한다.
- 동시에 여러 가지 값을 공백으로 구분하여 작성하면, 여러 선을 사용할 수 있다.
  ```CSS
  p.text-decoration {
    text-decoration-line: underline line-through;
  }
  ```

#### `text-decoration-style`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)
- 텍스트 장식의 스타일을 설정하는 속성(property).
- `solid`(기본값), `double`, `dotted`, `dashed`, `wavy` 등 키워드 값을 활용한다.
  ```CSS
  p.text-decoration {
    text-decoration-style: wavy;
  }
  ```

#### `text-decoration-thickness`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness)
- 텍스트 장식의 굵기를 설정하는 속성(property).
- `auto`, `from-font`, `px`, `em`, `rem`, `%` 등으로 설정할 수 있다.
  ```CSS
  p.text-decoration {
    text-decoration-thickness: 3px;
  }
  ```

### `word-break`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/word-break)
- 텍스트가 자신의 컨텐츠 박스 외부로 넘쳐 흐르는 경우, 줄을 바꿀 지 여부를 지정하는 속성(property).
- `normal`, `break-all`(영문, 컨텐츠 박스 너비를 넘으면 줄 바꿈), `keep-all`(한글, 컨텐츠 박스 너비를 넘어도 줄 바꾸지 않음, 공백이 있는 경우 줄 바꿈) 값으로 설정할 수 있다.
  ```CSS
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
  ```CSS
  p.text-transform {
    text-transform: capitalize;
  }
  ```
- Global value인 `inherit`, `initial`, `unset`도 사용할 수 있다.(상속 가능)

---
## Unit
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
    ```CSS
    div.length-child {
      font-size: 1.5em;
    }
    ```
  * `rem`: Root 요소(보통 `<html>`)의 `font-size`를 기준으로 상대적 비율을 표현하는 단위.(`1rem` === `<html>`의 `font-size` === 브라우저 기본값(`16px`))
    브라우저에서 사용자가 글꼴 크기(`font-size`)를 변경하는 경우 그에 비례해 `rem`의 기준이 변경되므로, 웹 접근성 문제를 해결할 수 있다.
    ```CSS
    div.length-child {
      font-size: .5rem;
    }
    ```
- Viewport-relative Lengths
  * Viewport, 즉 문서에서 볼 수 있는 부분의 크기를 기준으로 상대적 백분율 길이를 설정하는 단위이다.
    장치에 따라 반응형으로 웹 페이지를 구현할 때 유용하게 사용된다.
  * `vh`
    Viewport의 높이 1%를 의미한다.
    ```CSS
    div.length-child {
      font-size: 10vh;
    }
    ```
  * `vw`
    Viewport의 너비 1%를 의미한다.
    ```CSS
    div.length-child {
      font-size: 10vw;
    }
    ```
  * `vmax`
    `vh`, `vw` 중 큰 값을 의미한다.
    즉, 세로 모드인 경우, `100vh`가 `vmax`, `100vw`가 `vmin`이 된다. 
    ```CSS
    div.length-child {
      font-size: 10vmax;
    }
    ```
  * `vmin`
    `vh`, `vw` 중 작은 값을 의미한다.
    즉, 가로 모드인 경우, `100vw`가 `vmax`, `100vh`가 `vmin`이 된다. 
    ```CSS
    div.length-child {
      font-size: 10vmin;
    }
    ```

### Percentage
- 보통 부모 요소와의 상대적 크기를 지정할 때 사용하는 단위이다.
- `width`, `height`, `margin`, `padding`, `font-size` 등에서 활용할 수 있다.
- `Number + %`로 구성되고, `0` 뒤에는 단위를 붙이지 않아도 무방하다.
  ```CSS
  div.percentage {
    width: 50%;
    height: 30%;
  }

### Function
#### `calc()`
- CSS 속성 값(`<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, 또는 `<integer>`)으로 계산식을 지정할 수 있는 함수이다.
- `calc(expression)`으로 활용하고, 내부 연산식은 표준 연산자 순위를 따른다.
- 연산자 앞 뒤로 공백을 입력하는 것이 권장된다.
  ```CSS
  p.function {
    width: calc(100% - 80px);
  }
  ```

#### `max()`, `min()`
- `,`로 구분된 식 목록에서 가장 크거나 작은 값을 CSS의 속성 값으로 설정하는 함수이다.
  ```CSS
  p.function {
    height: min(100%, 500px);
  }
  ```