# HTML/CSS
> 👍 *기초를 탄탄하게, 발목 잡히지 않도록.*

---
## HTML이란?

### 개요
HTML(HyperText Markup Language, [wiki](https://ko.wikipedia.org/wiki/HTML))는 웹 페이지를 위한 지배적인 마크업 언어이다. 마크업 언어(Markup Language)는 데이터 자체를 어떤 방식으로 어디에 어떻게 표현할 지(구조)를 기술하는 언어를 말한다. 즉, 요소 하나하나를 어떻게 보여질 지에 대해 정의하는 언어이다. 이와 달리 프로그래밍 언어(Programming Language)는 데이터를 어떻게 가공하고 처리하고 동작할 지를 기술하는 언어를 말한다.

### HTML과 웹 브라우저
- `.html` 확장자를 가진 파일을 구동하기 위해서는 웹 브라우저(Google Chrome, MS Edge, Apple Safari, Mozilla Firefox...)가 필요하다. 이러한 웹 브라우저는 단순한 뷰어 역할에 그치는 것이 아니라, 다양한 부가 기능을 통해 사용자와 개발자를 도와주고 있다.
  ```HTML
  <h1 class="title">HTML: Hypertext Markup Language</h1>
  ```
  이렇게 작성된 HTML 문서를 웹 브라우저가 읽고 해석하여 화면에 그려주는 역할을 한다.

### HTML, CSS, Javascript
- 구조: 웹 문서의 기본적인 골격을 담당하는 HTML
  ```HTML
  <input type="text" placeholder="텍스트를 입력하세요.">
  <button id="btn">제출</button>
  ```
- 표현: 각 요소들의 레이아웃, 스타일링을 담당하는 CSS
  ```CSS
  input { border: 4px solid blue; }
  button { border-radius: 20px; }
  ```
- 동작: 동적인 요소(사용자와의 상호작용)을 담당하는 Javascript
  ```Javascript
  const $button = document.querySelector('#btn');
  $button.addEventListener('click', () => {...});
  ```
각각을 구분하여 사용해야 추후 반응형 웹 사이트를 만들거나, 공통된 스타일링을 적용할 때 더 효율적이다.

### 웹 표준, 웹 접근성, 웹 호환성
웹 표준을 지키고, 접근성과 호환성을 높일 수 있는 웹 페이지를 제작하는 방향성을 가질 수 있다. 

#### 웹 표준(Web Standards)
[https://html.spec.whatwg.org/multipage/](https://html.spec.whatwg.org/multipage/)
브라우저가 모두 해석하는 방식이 다르면, 개발자의 의도와 다르게 웹 페이지가 화면에 그려질 수 있기 때문에 웹 표준이 존재해야 한다.
- HTML5는 W3C에서 2014년에 공식 표준화.
- 2019년 WHATWG에 의해 HTML Living Standard가 표준화.
- 웹 표준을 준수하여 작성한다면, OS, 브라우저마다 개발자의 의도대로 웹 페이지를 보여줄 수 있다.

#### 웹 접근성(Web Accessibility)
- 웹 접근성은 장애를 가지거나 가지지 않은 사람 모두가 웹 사이트를 이용할 수 있게 설계하여 모든 사용자들이 정보와 기능에 동동하게 접근할 수 있게 하는 것을 의미한다.
- 보통 스크린 리더, 화면 돋보기, 음성 인식, 키보드 오버레이 등의 보조 과학 기술이 활용된다.

#### 웹 호환성(Cross Browsing)
- 웹 브라우저의 버전, 종류와 관계 없는 웹 사이트 접근
- 최근에는 웹 표준을 준수함으로서 브라우저 호환성을 확보할 수 있다.
  * HTML, CSS 문법의 준수
  * 동작, 레이아웃, 플러그인 호환성

---

## HTML 기본 문법

### HTML의 기본 구성
- 웹 페이지를 구성하는 요소(element) 각각을 "태그(Tag)"로 표기한다.
- "태그(Tag)"를 통해 어떤 요소인지 명시할 수 있다.(title, img, video, form 등)
- "태그(Tag)"의 이름은 HTML 웹 표준에 맞게 작성한다.
  ```HTML
  <p>contents</p>
  ```
- 요소(Element)는 3가지로 구성된다.
  * 여는 태그(Opening Tag): <TagName>
  * 닫는 태그(Closing Tag): </TagName>
  * 내용(Contents)
  ```HTML
  <h1>Lorem Ipsum</h1>
  <h2>Lorem Ipsum</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  ```
- 태그의 경우, 대소문자를 구분하지는 않지만 HTML5에서는 모두 소문자로 작성하는 것을 권장한다.

### 빈 요소(Empty elements)
- 내용(contents)이 없는 요소를 빈 요소라고 하고, 이 경우 닫는 태그를 작성하지 않아도 된다.
- Empty elements, Self-closing elements, Void elements, Single Tag...
  ```HTML
  <br>  <!-- 개행 -->
  <hr>  <!-- 수평선 -->
  <img src="imageUrl">
  <meta charset="utf-8">
  <input type="text" name="name">
  ```

### 요소의 중첩(Nesting)
- 요소 내부에 다른 요소가 들어가는 포함 관계가 성립될 수 있다. 이러한 포함 관계를 보여주기 위해 들여쓰기(indent)를 명확하게 해야 가독성을 높일 수 있다.
- 즉, 요소의 내용(contents)로는 단순 텍스트와 다른 요소가 모두 가능하다.
```HTML
<body>
  <h1>요소 내부에 다른 요소가 포함되는 것을 <strong>중첩</strong> 관계라고 한다.</h1>
  <ul>
    <li>첫 번째</li>
    <li>두 번째</li>
    <li>세 번째</li>
  </ul>
</body>
```

### 주석(Comments)
- 주석(Comments)으로 작성된 내용은 브라우저가 해석하지 않고 무시하여 사용자에게 보이지 않는다.
- 주석은 코드에 메모를 추가하거나, 사용하지 않는 코드를 임시로 처리하기 위해 사용한다.
- 보통 `ctrl` + `/` 단축키를 통해 주석 처리를 할 수 있다.
  ```HTML
  <!-- 주석의 내용: 메모 혹은 사용하지 않는 코드 -->
  <p>태그의 내용: 사용자에게 보여지는 텍스트</p>
  ```

### HTML 문서의 구조
[WHATWG_DOCTYPE](https://html.spec.whatwg.org/multipage/syntax.html#syntax-doctype) / [MDN_DOCTYPE](https://developer.mozilla.org/ko/docs/Glossary/Doctype)
[WHATWG_html](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element) / [MDN_html](https://developer.mozilla.org/ko/docs/Web/HTML/Element/html)
```HTML
<!DOCTYPE html>
<HTML>
  <head>
    <!-- HEAD 영역 -->
  </head>
  <body>
    <!-- BODY 영역 -->
  </body>
</HTML>
```
- `<!DOCTYPE html>`: 문서의 유형이 HTML임을 의미한다.
  HTML5부터 웹 표준을 지키는 문서의 경우 단순히 `html`이라고 유형을 명시하면 브라우저가 HTML5 문서로 해석하기 때문에 생략해도 무관하지만, 작성하는 것이 좋다.
- `<HTML> </HTML>`: 페이지 전체의 컨텐츠를 감싸는 루트 요소(root element)로, 문서에서 단 한 번만 사용된다.
  - `<html> </html>`: 브라우저 화면에 직접적으로 나타나지 않는 웹 페이지의 정보를 작성한다.
    - `<meta>`: 문서의 일반적인 정보와 문자 인코딩 방식 등을 명시하는 태그.
    - `<title> </title>`: 해당 문서의 제목을 명시하는 태그로, 제목은 브라우저의 탭에서 확인할 수 있다.
  - `<body> </body>`: 브라우저에 나타나는 모든 컨텐츠를 작성한다.

### `<head>`
[WHATWG_head](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element) / [MDN_head](https://developer.mozilla.org/ko/docs/Web/HTML/Element/head)
- `<head>`는 기계가 식별할 수 있는 문서 정보(메타 데이터)를 담고 있다.
- 즉, 사용자에게 보여야 할 최상위 제목, 목록 등은 `<header>`를 활용하고, `<title>`(제목), `<base>`, `<link>`(스타일 시트 파일), `<style>`(스타일링), `<meta>`, `<script>`(스크립트 파일), `<noscript>`, `<template>` 등을 `<head>`에 작성한다.
- 단, 하나 이상의 메타 데이터 컨텐츠를 포함해야 하고, `<title>`의 경우 단 하나만 포함해야 한다.
  ```HTML
  <html>
    <head>
      <title>문서 제목</title>
    </head>
  </html>
  ```

### `<body>`
[WHATWG_head](https://html.spec.whatwg.org/multipage/sections.html#the-body-element) / [MDN_head](https://developer.mozilla.org/ko/docs/Web/HTML/Element/body)
- `<body>`는 HTML 문서의 내용을 나타내고, 하나의 문서에 하나만 존재할 수 있다.
- 여러 속성(Attributes)과 전역 속성(Global Attributes)을 포함하지만, 단독으로 활용되는 경우가 대다수이다.
  ```HTML
  <html>
    <head>
      <title>문서 제목</title>
    </head>
    <body>
      <p>문단입니다</p>
    </body>
  </html>
  ```

### 태그를 구분짓는 특성
#### Container와 Contents
1. 구획을 나누는 태그(Layout)
   - 단독 사용 시 눈에 보이지 않는다.
   - 여러가지 요소를 묶어 그룹화하거나, 분리할 수 있다.(Container 역할을 한다.)
2. 그 자체로 요소인 태그
   - 단독 사용이더라도 눈으로 확인할 수 있다.
  
#### Block과 Inline
Default로 각 태그가 가진 값이 있으나, CSS의 `display` 속성(property)을 활용해 변경하여 스타일링과 레이아웃을 꾸밀 수 있다.
즉, 어떻게 웹 페이지 화면에 배치될 지를 결정한다.
1. Block Level Elements
   - 이는 언제나 새로운 줄에서 시작한다.
   - `width` 값을 가지지 않은 경우에는 좌우 양쪽으로 최대한 늘어나 가능한 모든 '너비'(부모 요소가 허용한 최대 너비)를 차지한다.
   - 다른 블록 요소 혹은 인라인 요소 모두를 포함할 수 있다.

2. Inline Elements
   - 인라인 요소는 줄의 어느 곳에서나 시작할 수 있다.
   - 바로 이전 요소가 끝나는 지점부터 시작해 요소의 내용(Contents)의 공간만큼만의 '너비'를 차지한다.
   - 다른 인라인 요소를 포함할 수 있으나, 블록 요소는 포함할 수 없다.

#### Content Category
[WHATWG_KindsOfContents](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) / [MDN_ContentCategory](https://developer.mozilla.org/ko/docs/Web/Guide/HTML/Content_categories)
HTML5부터 유사한 특징을 가진 요소를 7가지 category로 세분화함.
하나의 요소가 여러 category에 포함될 수도 있다.

|<center>Content Category</center>|<center>Desc</center>|
|:-|:-|
|Metadata Content|문서의 메타 데이터(정보), 다른 문서를 가리키는 링크 등을 나타내는 요소|
|Flow Content|웹 페이지 상의 메타 데이터를 제외하고 거의 모든 요소, 보통 text, embedded contents를 포함한다.|
|Sectioning Content|웹 문서의 구획(Section)을 구분할 때 사용하는 요소|
|Heading Content|웹 문서의 구획(Section)의 제목(heading)과 관련된 요소|
|Phrasing Content|문단에서 텍스트를 마크업할 때 사용하는 요소|
|Embedded Content|이미지나 비디오 등 외부 소스를 가져오거나 삽입할 때 사용되는 요소|
|Interactive Content|사용자와의 상호작용을 위한 컨텐츠 요소|

---
## 실습 환경 구성
### 웹 에디터와 통합 개발 환경(IDE)
- 단순히 메모장이 아니라 웹 에디터나 통합 개발 환경을 활용하는 이유는 더 효율적이고 가독성을 높일 수 있기 때문이다.
- 온라인 웹 에디터: [JS Bin](https://jsbin.com), [Code Pen](https://codepen.io/) [replit](https://replit.com/) 등
- 통합 개발 환경(IDE, Integrated Development Environment)
  * 개발할 때 필요한 여러가지 툴을 한 프로그램을 통해 사용할 수 있도록 하는 것.
  * 코드를 작성하기 위한 소스 코드 편집기, 작성한 코드를 실행하기 위한 빌더, 작성한 코드에 문제가 없는 지 체크해주는 디버거, 추가적인 기능을 제공하는 플러그인.

### VS code 단축키
||<center>Window</center>|<center>Mac</center>|
|:-|:-|:-|
|현재 창 닫기|`ctrl` + `w`||
|닫은 창 다시 열기|`ctrl` + `shift` + `t`||
|사이드바 토글|`ctrl` + `b`||
|사이드바 - 탐색기|`ctrl` + `shift` + `e`||
|사이드바 - 전체 검색|`ctrl` + `shift` + `f`||
|에디터 확대/축소|`ctrl` + `+`/`-`||
|들여쓰기|`Tab` or `ctrl` + `]`||
|내어쓰기|`shift` + `Tab` or `ctrl` + `[`||
|아래 행 삽입|`ctrl` + `Enter`||
|위에 행 삽입|`ctrl` + `shift` + `Enter`||
|현재 행 이동|`alt` + `↑, ↓`||
|현재 행 복사|`alt` + `shift` + `↑, ↓`||
|현재 행 삭제|`ctrl` + `shift` + `k`||
|주석 처리|`ctrl` + `/`||

---
## Text Elements
### `<h1>` - `<h6>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements)
- 웹 브라우저가 제목의 정보를 사용해 자동으로 문서의 목차를 만드는 작업을 수행할 수 있다.
- 태그의 단계를 역행하거나, 건너뛰는 것을 지양하고, 순차적으로 기입하는 것이 좋다.
- 글씨 크기를 설정하는 것은 CSS의 `font-size` 속성을 활용해야 한다.
- 웹 페이지 당 하나의 `<h1>`을 사용하는 것이 검색 엔진 최적화(SEO, Search Engine Optimization)에 유리하다.
  ```HTML
  <h1>Heading elements</h1>
  <h2>Summary</h2>
  <p>Some text here...</p>

  <h2>Examples</h2>
  <h3>Example 1</h3>
  <p>Some text here...</p>

  <h3>Example 2</h3>
  <p>Some text here...</p>

  <h2>See also</h2>
  <p>Some text here...</p>
  ```

### `<p>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/p)
- 하나의 문단을 나타내는 태그이지만, HTML 문서에서 문단은 이미지나, 입력 폼 등 서로 관련 있는 컨텐츠 모두가 될 수 있다.
- Block Level Element이고, Container의 역할을 할 수 있다.
- 내부의 개행은 무시되고, 다수의 space 또한, 하나의 space로 인식된다.
- `<p>` 문단끼리는 문장의 한 줄 높이가 여백으로 추가되어 분리된다.이러한 여백의 크기를 변경하기 위해서는 CSS를 활용해야 한다.
- 컨텐츠를 문단으로 나누면 페이지의 접근성을 높일 수 있다.
- 빈 `<p>` 요소를 활용해 문단 사이의 여백을 추가하는 것은 접근성을 감소시킨다.
  ```HTML
  <p>첫 번째 문단입니다.
    첫 번째 문단입니다.
    첫 번째 문단입니다.
    첫 번째 문단입니다.</p>
  <p>두 번째 문단입니다.
    두 번째 문단입니다.
    두 번째 문단입니다.
    두 번째 문단입니다.</p>
  ```