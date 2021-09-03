# CSS
> 👍 *기초를 탄탄하게, 발목 잡히지 않도록.*

---
## CSS이란?
### 개요
- Cascading Style Sheets의 약어.

- CSS는 모듈별로 버전을 만들고 있기 때문에 최근 업데이트 된 속성은 브라우저마다 지원 여부가 다를 수 있으므로, 확인해야 한다.([Can I Use](https://caniuse.com/))

- 'Cascading'은 위에서 아래로 흐르는 방향으로 스타일이 적용되는 것을 의미하는데, 즉, 부모 요소에서 지정한 스타일이 자손 요소에서 사용되는 것을 의미한다.

- CSS는 규칙 기반 언어(Rule-based Language)이다.
  HTML 문서에 스타일 규칙을 작성해서 적용하는 것이다.
  이러한 규칙을 작성하는 방법이 중요하고, 여러 규칙들을 나열한 형태로 구성된다.
- CSS를 통해 특정 요소나 특정 요소들의 집합의 스타일 규칙을 정의할 수 있다.

### CSS 구성요소
```CSS
h1 {
  color: red;
  font-size: 12px;
}

p {
  color: black;
}
```
- **스타일 규칙(Style Rule)**
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
1. 내부 스타일(Embedded)
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
2. 인라인 스타일(Inline)
   특정 요소에 스타일을 적용하기 위해 `style` 속성(Attribute)을 활용하여 CSS를 적용한다.
   ```HTML
   <body>
     <h1 style="color: red; font-size: 1.25rem;">Title</h1>
   </body>
   ```
3. 외부 스타일(External)
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
