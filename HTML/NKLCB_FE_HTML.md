# HTML/CSS
> 👍 *기초를 탄탄하게, 발목 잡히지 않도록.*

---
## HTML이란?

### 개요
HTML(HyperText Markup Language, [wiki](https://ko.wikipedia.org/wiki/HTML))는 웹 페이지를 위한 지배적인 마크업 언어이다.

마크업 언어(Markup Language)는 데이터 자체를 어떤 방식으로 어디에 어떻게 표현할 지(구조)를 기술하는 언어를 말한다. 즉, 요소 하나하나를 어떻게 보여질 지에 대해 정의하는 언어이다.

이와 달리 프로그래밍 언어(Programming Language)는 데이터를 어떻게 가공하고 처리하고 동작할 지를 기술하는 언어를 말한다.

### HTML과 웹 브라우저
- `.html` 확장자를 가진 파일을 구동하기 위해서는 웹 브라우저(Google Chrome, MS Edge, Apple Safari, Mozilla Firefox...)가 필요하다. 이러한 웹 브라우저는 단순한 뷰어 역할에 그치는 것이 아니라, 다양한 부가 기능을 통해 사용자와 개발자를 도와주고 있다.

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
- 브라우저가 모두 해석하는 방식이 다르면, 개발자의 의도와 다르게 웹 페이지가 화면에 그려질 수 있기 때문에 웹 표준이 존재해야 한다.
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
- "태그(Tag)"를 통해 어떤 요소인지 명시할 수 있다.(`title`, `img`, `video`, `form` 등)
- "태그(Tag)"의 이름은 HTML 웹 표준에 맞게 작성한다.
  ```HTML
  <TagName>contents</TagName>
  ```
- 요소(Element)는 3가지로 구성된다.
  * 여는 태그(Opening Tag): `<TagName>`
  * 닫는 태그(Closing Tag): `</TagName>`
  * 내용(Contents)
  ```HTML
  <h1>Lorem Ipsum</h1>
  <h2>Lorem Ipsum</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  ```
- 태그(Tag)의 경우, 대소문자를 구분하지는 않지만 HTML5에서는 모두 소문자로 작성하는 것을 권장한다.

### 빈 요소(Empty Elements)
- 내용(Contents)이 없는 요소(Element)를 빈 요소(Empty Elements)라고 하고, 이 경우 닫는 태그(Closing Tag)를 작성하지 않아도 된다.
- Empty Elements, Self-closing Elements, Void Elements, Single Tag...
  ```HTML
  <br>                              <!-- 개행 -->
  <hr>                              <!-- 수평선 -->
  <img src="imageUrl">              <!-- 이미지 -->
  <meta charset="utf-8">            <!-- 메타 데이터 -->
  <input type="text" name="name">   <!-- 입력 창 -->
  ```

### 요소의 중첩(Nesting)
- 요소(Element) 내부에 다른 요소(Element)가 들어가는 포함 관계가 성립될 수 있다. 이러한 포함 관계를 보여주기 위해 들여쓰기(indent)를 명확하게 해야 가독성을 높일 수 있다.
- 즉, 요소의 내용(Contents)로는 단순 텍스트와 다른 요소가 모두 가능하다.
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
- 보통 에디터를 사용하면, `ctrl` + `/` 단축키를 통해 주석 처리를 할 수 있다.
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
  - `<head> </head>`: 브라우저 화면에 직접적으로 나타나지 않는 웹 페이지의 정보를 작성한다.
    - `<meta>`: 문서의 일반적인 정보와 문자 인코딩 방식 등을 명시하는 태그(Tag).
    - `<title> </title>`: 해당 문서의 제목을 명시하는 태그(Tag)로, 제목은 브라우저의 탭에서 확인할 수 있다.
  - `<body> </body>`: 브라우저에 나타나는 모든 컨텐츠를 작성한다.

### `<head>`
[WHATWG_head](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element) / [MDN_head](https://developer.mozilla.org/ko/docs/Web/HTML/Element/head)
- `<head> </head>`는 기계가 식별할 수 있는 문서 정보(메타 데이터)를 담고 있는 요소(Element)이다.
- 즉, 사용자에게 보여야 할 최상위 제목, 목록 등은 `<header>`를 활용하고, `<title>`(제목), `<base>`, `<link>`(스타일 시트 파일), `<style>`(스타일링), `<meta>`, `<script>`(스크립트 파일), `<noscript>`, `<template>` 등의 태그(Tag)들을 `<head> </head>`에 작성한다.
- 단, 하나 이상의 메타 데이터 컨텐츠를 포함해야 하고, `<title>` 태그(Tag)는 단 하나만 포함해야 한다.
  ```HTML
  <html>
    <head>
      <title>문서 제목</title>
    </head>
  </html>
  ```

### `<body>`
[WHATWG_head](https://html.spec.whatwg.org/multipage/sections.html#the-body-element) / [MDN_head](https://developer.mozilla.org/ko/docs/Web/HTML/Element/body)
- `<body> </body>`는 HTML 문서의 내용을 나타내는 요소(Element)로, 하나의 문서에 하나만 존재할 수 있다.
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
1. 구획을 나누는 태그(Tag)
   - 단독 사용 시 눈에 보이지 않는다.
   - 여러가지 요소를 묶어 그룹화하거나, 분리할 수 있다.(Container 역할을 한다.)
2. 그 자체로 요소인 태그(Tag)
   - 단독 사용이더라도 눈으로 확인할 수 있다.
  
#### Block과 Inline
'기본 값'으로 각 태그가 가진 값이 있으나, CSS의 `display` 속성(property)을 활용해 변경하여 스타일링하거나 레이아웃을 꾸밀 수 있다. 즉, 어떻게 웹 페이지 화면에 배치될 지를 결정한다.
1. Block Level Elements
   - 이는 언제나 '새로운 줄'에서 시작한다.
   - `width` 값을 가지지 않은 경우에는 좌우 양쪽으로 최대한 늘어나 '가능한 모든 너비'(부모 요소가 허용한 최대 너비)를 차지한다.(요소의 내용(Contents)과 관계없이)
   - 다른 Block Level Elements 혹은 Inline Elements 모두를 포함할 수 있다.

2. Inline Elements
   - 이는 줄의 어느 곳에서나 시작할 수 있다.
   - 바로 이전 요소가 끝나는 지점부터 시작해 요소의 내용(Contents)의 공간만큼만의 '너비'를 차지한다.
   - 다른 Inline Elements를 포함할 수 있으나, Block Level Elements는 포함할 수 없다.

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
||<center>Window</center>|
|:-|:-|
|현재 창 닫기|`ctrl` + `w`|
|닫은 창 다시 열기|`ctrl` + `shift` + `t`|
|사이드바 토글|`ctrl` + `b`|
|사이드바 - 탐색기|`ctrl` + `shift` + `e`|
|사이드바 - 전체 검색|`ctrl` + `shift` + `f`|
|에디터 확대/축소|`ctrl` + `+`/`-`|
|들여쓰기|`Tab` or `ctrl` + `]`|
|내어쓰기|`shift` + `Tab` or `ctrl` + `[`|
|아래 행 삽입|`ctrl` + `Enter`|
|위에 행 삽입|`ctrl` + `shift` + `Enter`|
|현재 행 이동|`alt` + `↑, ↓`|
|현재 행 복사|`alt` + `shift` + `↑, ↓`|
|현재 행 삭제|`ctrl` + `shift` + `k`|
|주석 처리|`ctrl` + `/`|

---
## Text Elements
### `<h1>` - `<h6>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements)
- 6단계의 제목을 나타내는 태그(Tag).
- 웹 브라우저가 제목의 정보를 사용해 자동으로 문서의 목차를 만드는 작업을 수행할 수 있다.
- 태그(Tag)의 단계를 역행하거나, 건너뛰는 것을 지양하고, 순차적으로 기입하는 것이 좋다.
- 글씨 크기를 설정하는 것은 CSS의 `font-size` 속성(property)을 활용해야 한다.
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
- 하나의 문단을 나타내는 태그(Tag).
- 다만, HTML 문서에서 문단은 이미지나, 입력 폼 등 서로 관련 있는 컨텐츠 모두가 될 수 있다.
- Block Level Element이고, Container의 역할을 할 수 있다.
- 내부의 개행은 무시되고, 다수의 space 또한, 하나의 space로 인식된다.
- `<p>` 문단끼리는 문장의 '한 줄만큼의 높이'가 여백으로 추가된다. 이러한 여백의 크기를 변경하기 위해서는 CSS의 `margin` 속성(property)를 활용해야 한다. 빈 `<p>` 요소를 활용해 문단 사이의 여백을 추가하면 안 된다.
- 문서의 컨텐츠를 각각 문단으로 나누면 페이지의 접근성을 높일 수 있지만, 
  ```HTML
  <p>
    첫 번째 문단입니다.
    첫 번째 문단입니다.
    첫 번째 문단입니다.
    첫 번째 문단입니다.
  </p>
  <p>
    두 번째 문단입니다.
    두 번째 문단입니다.
    두 번째 문단입니다.
    두 번째 문단입니다.
  </p>
  ```

### `<br>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/br)
- 텍스트 내부에 개행을 생성하는 태그(Tag), 빈 요소(Empty Element)이다.(Line-break의 약어)
- HTML 문서는 여러 개의 띄어쓰기와 개행을 무시하기 때문에 `<br>`를 활용해 개행을 사용하고, `&nbsp` Entity로 공백을 작성해야 한다.
  ```HTML
  Mozilla Foundation<br>
  1981 Landings Drive<br>
  Building K<br>
  Mountain View, CA 94043-0801<br>
  USA
  ```
- 다만, 여백을 추가하려면, `<br>`을 여러번 사용하는 것보다 새롭게 `<p>`를 만들어 CSS의 `margin` 속성을 활용해야 한다.

### `<blockquote>`, `<q>`
- 인용문을 만드는 태그(Tag).
- `<blockquote>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote)
  * Block Level Element로, 요소의 내용(Contents)이 긴 인용문을 위해 사용한다. 
  * 주로 들여쓰기로 그려지며, CSS의 `margin` 속성을 활용해 들여쓰기를 변경할 수 있다.
  * `cite` 속성(Attributes)으로 인용문의 출처 문서나 메시지를 가리키는 URL을 함께 작성할 수 있다.
  ```HTML
  <blockquote cite="https://tools.ietf.org/html/rfc1149">
    <p>
      Avian carriers can provide high delay, low throughput, and low altitude service. The connection topology is limited to a single point-to-point path for each carrier, used with standard carriers, but many carriers can be used without significant interference with each other, outside of early spring.
    </p>
  </blockquote>
  ```
  * 참고로, `<p>`는 내부에 자식 요소(Child Element)로 Block Level Element가 있는 경우, 자동으로 태그가 닫히는 특성 때문에 내부에는 `<blockquote>`를 사용할 수 없다. 
- `<q>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/q)
  * Inline Element로, 줄바꿈이 없이 Contents가 짧은 인용문을 위해 사용한다.
  * 대부분 브라우저에서는 앞과 뒤에 `" "`(큰 따옴표)를 붙인다.
  * `cite` 속성(Attributes)으로 인용문의 출처 문서나 메시지를 가리키는 URL을 함께 작성할 수 있다.
  * `<p>` 내부에서는 `<q>`만 사용할 수 있다.
  ```HTML
  <p>Mozilla 재단의 웹사이트에 따르면, <q cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0은 2004년 처음 공개되어 큰 성공을 거두었습니다.</q></p>
  ```

### `<pre>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/pre)
- 미리 서식을 지정한 텍스트를 HTML에 그대로 표현하는 태그.(preformatted의 약어) 즉, `<pre>`의 내용(Contents)를 하나의 스냅샷처럼 찍어서 보여준다.
- 따라서, 기존의 HTML에서 무시되던 여러 번의 띄어쓰기와 개행을 그대로 포함하여 표현하는 태그이다.
- 보통 고정폭 글꼴(monospace)을 통해 렌더링하고, 요소 내 공백 문자를 그대로 유지한다.
  ```HTML
  <p>CSS로 글자 색을 바꾸는건 쉽습니다.</p>
  <pre>
  body {
    color:red;
  }
  </pre>
  ```

### `<figure>`, `<figcaption>`
- `<figure>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figure)는 독립적인 컨텐츠(`<pre>`의 내용, `<blockquote>` 인용문, 이미지, 비디오 등처럼 문서에서 독립적인 컨텐츠를 의미)를 표현한다.
- `<figcaption>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figcaption)은 부모 요소인 `<figure>`가 포함하는 다른 컨텐츠에 대한 설명이나 범례를 나타낸다.
  ```HTML
  <figure>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sunt. Debitis minima ipsam eum deleniti eos voluptas sit neque, perferendis ad in, eligendi dignissimos quisquam ipsum tenetur nobis totam non!
    </p>
    <figcaption>by Lorem ipsum</figcaption>
  </figure>
  ```
- 그냥 `<p>` 태그 2개를 활용하면, 서로의 연관성을 보여줄 수 없으나, `<figure>`와 `<figcaption>`을 활용하면, 서로 간의 연관성을 파악할 수 있다.

### `<hr>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/hr)
- `<hr>`은 이야기 장면 전환, 구획 내 주제 변경 등 문단 레벨 요소에서 주제의 분리를 나타낸다.
- 사실상 수평선, 가로 줄을 그려준다.
- 빈 요소.
- HTML의 속성(Attributes)가 아닌 CSS를 활용해 스타일링해야 한다.
  ```HTML
  <p>
    This is the first paragraph of text.
    This is the first paragraph of text.
    This is the first paragraph of text.
    This is the first paragraph of text.
  </p>

  <hr>

  <p>
    This is second paragraph of text.
    This is second paragraph of text.
    This is second paragraph of text.
    This is second paragraph of text.
  </p>
  ```

### `<abbr>`, `<address>`, `<cite>`, `<bdo>`
- `<abbr>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/abbr)
  * 줄임말 또는 머리글자를 나타내는 태그이다.
  * 전역 속성(Attributes) `title`를 선택 속성으로 특정한 의미로 활용해 준말의 전체 뜻이나 설명을 툴팁으로 제공할 수 있다.
  * 기본적으로 점선의 밑줄로 작성된다.
- `<address>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/address)
  * 가까운 HTML 요소의 사람, 단체, 조직 등에 대한 연락처 정보(주소, e-mail, URL, 전화번호, SNS 등)를 나타내는 태그이다.
  * '주소'라는 의미를 가지는 태그.
  * 기본적으로 기울임꼴로 작성된다.
- `<cite>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/cite)
  * 저작물의 출처를 표기할 때 사용하는 태그이다.
  * 반드시 제목을 포함해야 한다.
  * 적절한 맥락 하에서 출처를 축약해 표기할 수 있다.
  * 기본적으로 기울임꼴로 작성된다.
- `<bdo>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/bdo)
  * 현재 텍스트의 쓰기 방향을 덮어쓰고 다른 방향으로 렌더링할 때 사용하는 태그.(bidirectional override의 약어)
  * `dir` 속성을 통해 텍스트 쓰기 방향을 설정할 수 있다.
    * `ltr`: 왼쪽에서 오른쪽(기본)
    * `rtl`: 오른쪽에서 왼쪽

> Formatting Element는 다른 태그와 모양을 다르게 만들어, 사용자의 주의를 끌거나, 더 중요도가 높아 보일 수 있게 만들어 다른 내용(Contents)보다 특별한 의미를 갖게된다.

### `<b>`, `<strong>`
- `<b>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/b)
  * 굵은 글씨체로 변경하는 태그.
  * 요약 키워드, 리뷰의 제품명 등, 특별한 중요성을 가지고 있지는 않지만 굵게 표시할 부분에 `<b>`를 사용한다.
  * 시각적으로 굵게 보여야 하는 듯 하는 부분에 사용한다.
  * 컨텐츠 전체를 굵게 보이게 하고자 하면 CSS의 `font-weight` 속성을 활용해야 한다.
  * 해당 컨텐츠를 반드시 우선적으로 확인해야 할 필요는 없다.
- `<strong>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/strong)
  * 중대하거나 긴급한 콘텐츠를 나타내는 태그.
  * '높은 중요도 요소'이다.
  * 굵은 글씨체로 변경하는 태그.
  * 해당 컨텐츠를 우선적으로 확인해야 하는 경우에 자주 사용한다.

### `<i>`, `<em>`
- `<i>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/i)
  * 텍스트에서 어떤 이유로 주위와 '구분해야 하는 부분'을 나타내는 태그.
  * 기술 용어, 외국어 구절, 등장인물의 생각 등이 그 예이다.
  * 보통 기울임꼴로 작성된다.
  * 일반 산문과 다른 문체를 가진 텍스트에 사용한다. 즉, 주위 텍스트와 다른 의미를 가진 텍스트에 적용하면 된다.
  * 단순히 기울임꼴을 사용하려면, CSS의 `font-style` 속성을 활용해야 한다.
  ```HTML
  <p>라틴어 문구 <i>Veni, vidi, vici</i>는 음악과 예술, 문학에 자주 등장합니다.</p>
  ```
- `<em>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/em)
  * 텍스트의 강세를 나타내는 태그로, 중첩하여 사용하면 더 큰 강세를 뜻한다.
  * 주위 텍스트에 비해 강조된 부분을 나타내므로, 보통 한 문장에서 하나 혹은 몇 개로 제한된다.
  * 보통 기울임꼴로 작성된다.
  * `<i>`와 구분해야 한다.
  * 단순히 기울임꼴을 사용하려면, CSS의 `font-style` 속성을 활용해야 한다.
  ```HTML
  <p>
    과거에 <em>block-level</em>이라 불렸던 콘텐츠는 HTML 5부터 <em>flow</em> 콘텐츠라고 말합니다.
  </p>
  ```

### `<mark>`, `<small>`, `<sub>`, `<sup>`
- `<mark>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/mark)
  * 현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타내는 태그.
  * 사용자가 검색한 부분을 보여주거나, 강조 표시를 할 때 사용한다.
  * 단순히 표시만을 위한 용도로 활용하려면, CSS를 활용해야 한다.
  * 스크린 리더는 `<mark>`의 존재를 표현하지 않기 때문에, CSS `content` 속성과 `::before`, `::after` 가상 요소를 사용해 차이를 둘 수 있다.
- `<small>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/small)
  * 덧붙이는 글이나, 저작권과 법률 표기 등의 작은 텍스트를 나타내는 태그.
  * 기본적으로 자신의 컨텐츠를 한 사이즈 작은 글꼴로 표시한다.
- `<sub>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/sub)
  * 활자 배치를 아래 첨자로 해야 하는 인라인 텍스트를 지정하는 태그.
  * 화학식, 각주, 변수 등을 표기할 때 사용한다.
- `<sup>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/sup)
  * 활자 배치를 위 첨자로 해야 하는 인라인 텍스트를 지정하는 태그.
  * 지수, 서수 등을 표기할 때 사용한다.

### `<del>`, `<ins>`, `<code>`, `<kbd>`
- `<del>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/del)
  * 문서에서 제거된 텍스트의 범위를 나타내는 태그.
  * 문서 혹은 소스코드의 변경점 추적에 사용된다.
  * 기본적으로 취소선 형태로 작성된다.
  * 단순히 취소선을 그으려면, CSS의 `font-style` 속성을 활용해야 한다.
    * `cite` 속성(Attribute): 변경점의 리소스를 나타내는 속성
    * `datetime` 속성(Attribute): 변경이 발생한 일시를 나타내는 속성
  * 스크린 리더는 `<del>`의 존재를 표현하지 않기 때문에, CSS `content` 속성과 `::before`, `::after` 가상 요소를 사용해 차이를 둘 수 있다.
- `<ins>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ins)
  * 문서에 추가된 텍스트의 범위를 나타내는 태그.
  * 기본적으로 밑줄 형태로 작성된다.
  * 단순히 밑줄을 그으려면, CSS의 `font-style` 속성을 활용해야 한다.
    * `cite` 속성(Attribute): 변경점의 리소스를 나타내는 속성
    * `datetime` 속성(Attribute): 변경이 발생한 일시를 나타내는 속성
  * 스크린 리더는 `<ins>`의 존재를 표현하지 않기 때문에, CSS `content` 속성과 `::before`, `::after` 가상 요소를 사용해 차이를 둘 수 있다.
- `<code>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/code)
  * 짧은 코드 조각을 나타내는 스타일을 사용해 자신의 콘텐츠를 표시하는 태그.(Inline Element)
  * 기본적으로 고정 폭 글꼴로 작성된다.
  * 여러 줄의 코드를 나타내려면, `<code>` 요소를 `<pre>`로 감싸면 된다.
- `<kbd>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/kbd)
  * 키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타내는 태그.

### `<a>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a)
- `href` 속성(Attribute)을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만드는 태그.(anchor의 약어)
- 컨텐츠로 링크 목적지에 대한 설명을 나타내야 한다.
- 기본적으로 글자 색상이 blue로 변경되고, 밑줄이 그어진다.
- 해당 링크를 클릭하여 이동하면, 해당 링크의 글자 색상이 변경되고, 이는 방문 기록을 참조하기 때문에 방문 기록을 삭제하는 경우 다시 원 색상으로 변경된다.
  * `href` 속성
    Hyperlink Reference의 약어로, 하이퍼링크가 가리키는 URL을 의미한다.
    절대 경로, 상대 경로(`./`), 이메일 주소(`mailto:주소`), 전화번호(`tel:번호`), 페이지 구획을 가리키는 프래그먼트 URL 등이 가능하다.
  * `download` 속성
  * `hreflang` 속성
  * `target` 속성
    링크한 URL을 표시할 위치를 설정한다.
    `_self`(기본값, 현재 탭/창에서 열기), `_blank`(새로운 탭/창에서 열기), `_parent`(현재 브라우징 맥락의 부모), `_top`(최상단 브라우징 맥락)

### Entity references
[MDN](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started#entity_references_html%EC%97%90_%ED%8A%B9%EC%88%98_%EB%AC%B8%EC%9E%90_%ED%8F%AC%ED%95%A8)
- 공백(`' '`), `<`, `>`, `&`, 따옴표(`'`, `"`)는 HTML 문서에서 특수문자로, HTML 구문 자체의 일부이자 예약어이기 때문에 특정 의미가 담긴 문법으로 해석된다.
- 따라서, 이를 개발자가 사용하고자 하는 텍스트로 작성하려면 Entity로 사용해야 한다.
  |Literal character|Character reference equivalent|
  |:-:|:-:|
  |<|`&lt;`|
  |>|`&gt;`|
  |"|`&quot;`|
  |'|`&apos;`|
  |&|`&amp;`|
  |" "|`&nbsp;`|
- 추가적인 Entity는 [참고자료](https://dev.w3.org/html5/html-author/charref)에서 찾아볼 수 있다.

---
## Structure Element
### `<div>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/div)
- 통용 컨테이너로, 아무런 의미를 갖지 않는다.
- 특정 구역을 분할하거나 결합하여 스타일링하기 쉽도록 돕거나, 다른 언어임을 표시하는 등의 용도로 사용하는 태그.
- **순수 컨테이너**로서 아무것도 표현하지 않는다. 따라서 CSS로 스타일링하지 않으면 컨텐츠나 레이아웃에 영향을 미치지 않는다.
- 의미를 가진 다른 요소(`<article>`, `<nav>` 등)가 적절하지 않은 경우만 사용해야 한다.
  ```HTML
  <div>
   <p>어떤 콘텐츠든 좋습니다.
   &lt;p&gt;, &lt;table&gt;같이 말이죠. 써보세요!</p>
  </div>
  ```

### `<span>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/span)
- 구문 컨텐츠를 위한 통용 인라인 컨테이너로, 본질적으로 아무것도 나타내지 않는다.
- `<div>`와 마찬가지로 스타일링을 위해, 다른 언어 표시를 위해 사용하고, 이 또한 적절한 의미를 가진 다른 요소가 없을 때만 사용해야 한다.
  ```HTML
  <li><span style="background: gold">
    <a href="portfolio.html" target="_blank">See my portfolio</a>
  </span></li>
  ```

### `<header>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/header)
- Semantic Tag
- 소개 및 탐색에 도움을 주는 컨텐츠를 나타내는 태그.
- 제목, 로고, 메뉴, 검색 폼, 작성자 이름 등의 요소를 포함할 수 있다.
- 웹 페이지에서 하나만 사용해야 하고, 대부분 웹 페이지 내부에서 동일하게 기능하고 보여진다.
- `<header>`, `<footer>`는 내부에 `<header>`, `<footer>`를 자손 요소로 가질 수 없다.
- 페이지의 제목, 글의 제목 둘 모두로 활용할 수 있다.
  ```HTML
  <header>
    <h1>Main Page Title</h1>
    <img src="mdn-logo-sm.png" alt="MDN logo">
  </header>

  <article>
    <header>
      <h2>The Planet Earth</h2>
      <p>Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by Jane Smith</p>
    </header>
    <p>We live on a planet that's blue and green, with so many things still unseen.</p>
    <p><a href="https://janesmith.com/the-planet-earth/">Continue reading....</a></p>
  </article>
  ```
### `<footer>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/footer)
- Semantic Tag
- 가장 가까운 구획 컨텐츠나 구획 루트의 Footer를 나타내는 태그로, 일반적으로 작성자, 저작권 정보, 관련 문서의 내용 등을 담고 있다.
- 웹 페이지에서 하나만 사용해야 하고, 대부분 웹 페이지 내부에서 동일하게 기능하고 보여진다.
- `<header>`, `<footer>`는 내부에 `<header>`, `<footer>`를 자손 요소로 가질 수 없다.
- 보통 웹 페이지 전체를 아우르는 링크를 포함한다는 점에서 `<nav>`와 차이를 가지고 있다.
  ```HTML
  <footer>
    Some copyright info or perhaps some author
    info for an &lt;article&gt;?
  </footer>
  ```

### `<nav>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/nav)
- 탐색 구획 요소로, 문서의 부분 중 현재 페이지 내부 혹은 다른 페이지로의 링크를 보여주는 태그이다.
- 보통, 메뉴, 목차, 색인 등을 담고 있다.
  ```HTML
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  ```

### `<aside>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/aside)
- 별도 구획 요소로, 문서의 주요 내용과 간접적으로만 연관된 부분을 나타내는 태그이다.
- 주로 사이드바, 콜아웃 박스 등으로 표현된다.
- 보통 메인 컨텐츠를 읽는 데 영향을 크게 미치지 못하는 추가적인 정보를 작성한다.
- CSS를 활용해 레이아웃을 변경하거나, 스타일링할 수 있다.

### `<main>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/main)
- HTML 문서의 `<body>` 내부에 주요 컨텐츠를 나타내는 태그.
- 문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 컨텐츠로 이루어진다.
- 하나의 웹 페이지에서 단 하나만 사용할 수 있다.(하나 이상 활용하기 위해서는 하나를 제외한 나머지 `<main>`을 `hidden` 속성을 활용해 화면에서 제외해야 한다.)
- 모든 주요 컨텐츠를 아우르는 컨테이너의 역할을 한다.

### `<article>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/article)
- 문서, 페이지, 앱, 사이트 안에서 '독립적으로' 구분해 배포하거나 재사용할 수 있는 구획을 나타내는 태그이다.
- 보통, 게시판과 블로그의 글, 매거진이나 뉴스 기사 등을 포함한다.
- 하나의 문서가 여러 개의 `<article>`을 가질 수 있고, `<section>` 내부에 여러 개의 `<article>`이 존재할 수 있고, `<article>` 내부에 여러 개의 `<section>`이 존재할 수 있다.
- 하나의 `<article>`이 독립적인 컨텐츠가 되기 때문에 `<header>`, `<footer>`를 가질 수 있다.
- 각각의 `<article>`을 식별하기 위해 제목(`<h1>` - `<h6>`) 요소를 사용한다.

### `<section>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/section)
- 일반 구획 요소로, HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용한다.
- 보통 제목을 포함하지만, 항상 그렇지도 않다.
- 요소의 컨텐츠를 외부와 구분해 독립적으로 사용하려면 `<article>`이 더 적합하다. `<section>`은 단독적인 컨텐츠로 사용할 수 없다.
- 각각의 `<section>`을 식별하기 위해 제목(`<h1>` - `<h6>`) 요소를 사용한다.
- 일반 컨테이너로 사용하는 것이 아니라, 문서 요약에 해당 구획이 논리적으로 나타나야 하면 `<section>`을 사용한다.

---
## Semantic Web
> 요소의 의미를 고려하여, 구조를 설계하고 코드를 작성하는 것.

### Semantic Web의 장점
- 검색 엔진은 의미론적 마크업을 분석해 페이지의 검색 랭킹에 영향을 줄 수 있는 중요한 키워드로 간주한다.(SEO)
- 스크린리더로 페이지를 탐색할 때 의미론적 마크업을 푯말로 사용할 수 있다.(웹 접근성 향상)
- 의미가 없는 끊임 없는 `<div>`를 탐색하는 것보다, 의미있는 코드 블록을 찾는 것이 훨씬 쉽다.(생산성 향상)
- 개발자에게 태그 내부에 채워질 데이터 유형을 제안할 수 있다.(가독성/효율성 향상)
- 의미론적 마크업은 적절한 사용자 정의 요소, 구성 요소의 이름 짓기를 반영한다.

---
## List Element & Table Element
### `<ul>`, `<ol>`, `<li>`
```HTML
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
```
- `<ul>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ul)
  * Unordered List의 약어로, 순서나 순위가 없는 비정렬 목록을 나타내는 태그이다.
  * 항목의 순서를 변경했을 때 의미가 변하지 않고, 순서가 중요하지 않은 경우 사용한다.
- `<ol>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ol)
  * Ordered List의 약어로, 단계, 순서, 순위가 있는 목록을 작성할 때 사용하는 태그이다.
  * 항목의 순서를 변경했을 때 의미가 변하는 경우 사용한다.
  * 별도의 설정을 하지 않으면, 숫자 목록으로 구성된다.
    * `type` 속성(Attribute)
      항목의 카운터 유형을 의미하는 속성.
      `a`(소문자 알파벳), `A`(대문자 알파벳), `i`(소문자 로마 숫자), `I`(대문자 로마 숫자), `1`(숫자(기본 값))
    * `reversed` 속성(Attribute)
      목록의 순서를 역순으로 배열하는 것을 의미한다.
    * `start` 속성(Attribute)
      항목을 셀 때 시작하는 숫자를 의미한다.
- `<li>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/li)
  * List Item의 약어로, 목록의 항목을 나타내는 태그이다.
  * 반드시 `<ul>`, `<ol>` 또는 `<menu>` 내부에 위치해야 한다.
    * `value` 속성(Attribute)
      항목의 현재 숫자를 나타내는 정수로, 뒤따르는 다른 항목은 이 값에서부터 번호가 매겨진다.
- `<ul>`, `<ol>`은 필요한 만큼 중첩할 수 있고, 서로 교차할 수 있다.

### `<dl>`, `<dt>`, `<dd>`
```HTML
<dl>
  <dt>Firefox</dt>
  <dd>
    Mozilla 재단과 수 백명의
    자원봉사자가 개발한 무료
    오픈소스 크로스 플랫폼
    그래픽 웹 브라우저.
  </dd>
</dl>
```
- `<dl>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dl)
  * Description List의 약어로, 설명 목록을 나타내는 태그.
  * 어떤 용어를 정의하거나 설명하는 목록으로, 보통 용어 사전이나 메타데이터(key-value 목록)을 표시할 때 사용한다.
- `<dt>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dt)
  * Description Term의 약어로, 설명 목록에서 용어를 의미한다.
  * `<dl>` 내부에 위치하며, 보통 `<dd>`와 함께 사용된다. 다만, 반드시 1:1이 아니어도 무관하다.
- `<dd>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dd)
  * Description Data의 약어로, 설명 목록의 `<dt>`의 용어에 대한 설명, 정의, 또는 값을 제공한다.
- `<dt>`와 `<dd>`를 `<div>`로 감싸 스타일링할 수 있다. 다만, `<dt>`와 `<dd>`의 형제 요소로 `<div>`를 사용할 수는 없다.(웹 표준에 의거)

### `<table>`, `<tr>`, `<th>`, `<td>`
```HTML
<table>
  <tr>
    <th scope="col">품목</th>
    <th scope="col">지출</th>
  </tr>
  <tr>
    <th scope="row">대파</th>
    <td>3,000</td>
  </tr>
  <tr>
    <th scope="row">달걀</th>
    <td>4,000</td>
  </tr>
  <tr>
    <th scope="row">봉투</th>
    <td>50</td>
  </tr>
  <tr>
    <th scope="row">합계</th>
    <td>7,050</td>
  </tr>
</table>
```
- `<table>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/table)
  * 행과 열로 이루어진 표를 나타내는 태그.
  * 기본적으로 테두리가 없으므로, CSS의 `border` 속성을 활용해야 한다.
- `<tr>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/tr)
  * Table Row의 약어로, 표의 행을 정의하는 태그이다.
- `<th>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/th)
  * Table Head의 약어로, 표의 행이나 열을 대표하는 컨텐츠를 나타내는 태그.
  * 기본적으로 굵은 글씨, 가운데 정렬로 설정된다.
    * `scope` 속성(Attribute)
      행과 열 중 어떤 것을 대표하는 지를 의미한다.(웹 접근성)
    * `colspan` 속성(Attribute)
      해당 셀이 몇 개의 행을 차지할 것인지를 의미한다.(확장)
    * `rowspan` 속성(Attribute)
      해당 셀이 몇 개의 열을 차지할 것인지를 의미한다.(확장)
- `<td>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/td)
  * Table Data의 약어로, 데이터를 포함하는 표의 셀을 정의하는 태그이다.
    * `colspan` 속성(Attribute)
      해당 셀이 몇 개의 행을 차지할 것인지를 의미한다.(확장)
    * `rowspan` 속성(Attribute)
      해당 셀이 몇 개의 열을 차지할 것인지를 의미한다.(확장)

### `<thead>`, `<tbody>`, `<tfoot>`
```HTML
<table>
  <thead>
    <tr>
      <th scope="col">품목</th>
      <th scope="col">지출</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">식재료</th>
    </tr>
    <tr>
      <th scope="row">대파</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">달걀</th>
      <td>4,000</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">기타</th>
    </tr>
    <tr>
      <th scope="row">봉투</th>
      <td>50</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">합계</th>
      <td>7,050</td>
    </tr>
  </tfoot>
</table>
```
- `<thead>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/thead)
  * Table Head의 약어로, 표의 Header를 정의하는 행 집합을 나타내는 태그.
  * `<table>`의 자식 태그로만 사용되고, 내부에 `<tr>`, `<th>`, `<td>`로 표의 행이나 열을 가진다.
- `<tbody>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/tbody)
  * Table Body의 약어로, 표의 Body를 정의하는 행 집합을 나타내는 태그.
  * `<table>`의 자식 태그로만 사용되고, 내부에 `<tr>`, `<th>`, `<td>`로 표의 행이나 열을 가진다.
  * `<tbody>`는 하나 이상을 활용할 수 있다.
- `<tfoot>`[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
  * Table Foot의 약어로, 표의 Footer를 정의하는 행 집합을 나타내는 태그.
  * `<table>`의 자식 태그로만 사용되고, 내부에 `<tr>`, `<th>`, `<td>`로 표의 행이나 열을 가진다.
- `<thead>`, `<tbody>`, `<tfoot>`를 사용하면, 형제 태그로, `<tr>`을 사용할 수 없다는 점에 유의해야 한다.

### `<caption>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/caption)
- 표 설명 요소로, 표의 전체를 아우르는 설명이나 제목을 나타내는 태그.
- `<figcaption>`과 다르게 `<table>`에서만 사용할 수 있다.
- `<table>`의 첫 번째 자식요소로만 사용할 수 있다. 위치를 변경하기 위해서는 CSS의 `caption-side` 속성을 활용해야 한다.

---
## Embedded Element
외부의 소스를 가져와서 웹 페이지에 삽입하는 요소(Element).
### `<img>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/img)
- 문서에 이미지를 넣을 때 사용하는 태그(Tag).
- 내용을 작성하지 않고 빈 요소로 사용하며, 속성(Attribute)를 통해 어떤 이미지를 삽입할 지, 어떻게 삽입할 지 등을 정의한다.
  * `src` 속성(Attribute)
    Source의 약어.
    필수 속성으로, 포함하고자 하는 이미지의 외부 URL이나 경로를 지정하는 속성이다.
  * `alt` 속성(Attribute)
    Alternative Text의 약어.
    이미지에 대한 대체 텍스트 설명이며, 스크린 리더가 `alt`의 값을 읽어 사용자에게 이미지를 설명하기 때문에 웹 접근성을 높일 수 있다.
    또한, 네트워크 오류, 차단, 링크 삭제 등 이미지를 표시할 수 없는 경우에도 `alt`의 값을 보여준다.
  * `width` 속성(Attribute)
    이미지의 픽셀 기준 고유 너비를 지정하는 속성.
    단위 없는 '정수'로 작성해야 한다.
    `width`와 `height` 중 하나만 정한다면, 기존 비율로 수정된다.
  * `height` 속성(Attribute)
    이미지의 픽셀 기준 고유 높이를 지정하는 속성.
    단위 없는 '정수'로 작성해야 한다.
    `width`와 `height` 중 하나만 정한다면, 기존 비율로 수정된다.
  * `srcset` 속성(Attribute)
    브라우저가 사용할 수 있는 이미지 소스의 목록을 나타내는 속성.
    반응형 이미지를 구현하기 위해 사용한다.
    이미지 URL과 너비 서술자(선택), 밀도 서술자(선택)를 작성한다.
    ```HTML
    <img
      src="images/large.png"
      srcset="images/small.png 300w,
              images/medium.png 450w,
              images/large.png 600w"
      alt="responsive images"
    />
    ```
    다만 이 속성은 IE에서는 지원하지 않는다.
  * `sizes` 속성(Attribute)
    소스 크기를 나타내는 문자열로, 미디어 조건과 소스 크기의 값으로 구성된다.
    미디어 조건은 화면 크기(Viewport) 속성을 가리킨다.
    ```HTML
    <img
      src="images/large.png"
      srcset="images/small.png 300w,
              images/medium.png 450w,
              images/large.png 600w"
      sizes="(min-width: 600px) 600px,
              (min-width: 450px) 450px,
              300px"
      alt="responsive images"
    />
    ```
  ```HTML
  <img src="imgURL", alt="imgDesc" />
  ```

  #### 웹에서 사용하는 이미지 유형
  HTML 표준은 지원해야 하는 이미지 형식을 규정하지 않으므로, 각각 브라우저가 서로 다른 형식을 지원한다. 따라서 해당 브라우저에 맞는 이미지 형식을 활용해야 한다.([참고자료](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types))
  웹 페이지에서는 품질보다 저용량이 로딩 속도에 영향을 미친다.
  |<center>IMG</center>|<center>Abbreviation</center>|<center>MIME type</center>|<center>File extension</center>|<center>Summary</center>|
  |:-:|:-:|:-:|:-:|:-|
  |Bitmap|JPEG|`image/jpeg`|`.jpg`, `.jpeg`,`.jfif`, `.pjpeg`, `.pjp`|정지 이미지의 손실 압축에 적합(가장 많이 사용)|
  |Bitmap|PNG|`image/png`|`.png`|원본 이미지를 보다 정확하게 보여주거나 투명도가 필요한 경우 선호|
  |Bitmap|GIF|`image/gif`|`.gif`|여러 장의 이미지로 이루어진 애니메이션 표현 가능(지원 색상이 적음)|
  |Bitmap|WEBP|`image/webp`|`.webp`|구글이 만든 이미지 포맷으로, 품질/압축률 등이 우수하지만, 지원 브라우저가 제한적|
  |Vector|SVG|`image/svg+xml`|`.svg`|다양한 크기로 정확하게 그려야 하는 아이콘, 다이어그램 등에 사용|

### `<video>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/video)
- 비디오 플레이백을 지원하는 미디어 플레이어를 문서에 삽입하는 태그(Tag).
- 오디오 컨텐츠의 경우는 `<audio>` 요소(Element)를 활용하는 것이 더 적합하다.
- `<img>`와 다르게 빈 요소가 아니고, 내용(Contents)은 브라우저가 `<video>` 요소를 지원하지 않는 경우 보여지게 된다.
  ```HTML
  <video src="videos/sample.mp4" controls>
    Sorry, your browser doesn't support embedded videos, but don't worry, you can <a href="sample.mp4">download it</a> and watch it with your favorite video player!
  </video>
  ```
  * `src` 속성(Attribute)
    삽입할 동영상의 주소(URL)을 지정하는 속성.
    선택 속성으로, `<source>` 요소를 자식으로 사용해 삽입할 동영상을 명시할 수 있다.
  * `controls` 속성(Attribute)
    소리 조절(volume), 동영상 탐색(seek), 일시 정지(pause)/재시작(resume)할 수 있는 컨트롤러를 제공하는 Boolean 속성.
  * `autoplay` 속성(Attribute)
    데이터 로딩이 완료되지 않더라도 재생 가능한 시점에 자동으로 재생이 시작하는 Boolean 속성.
    다만, 소리가 존재하는 경우에는 브라우저가 재생하지 않도록 만들 수 있다.
  * `muted` 속성(Attribute)
    비디오에 포함되어 있는 오디오의 기본 설정을 음소거로 설정하는 Boolean 속성.
    이를 활용해 음소거 상태에서 자동으로 재생할 수 있게끔 설정할 수 있다.
  * `loop` 속성(Attribute)
    동영상 재생이 종료된 후 자동으로 처음부터 다시 재생될 수 있게 설정하는 Boolean 속성.
  * `width` 속성(Attribute)
    동영상의 출력 영역 너비를 CSS Pixel 단위로 지정하는 속성.
    `width`와 `height` 중 하나만 정한다면, 기존 비율로 수정된다.
  * `height` 속성(Attribute)
    동영상의 출력 영역 높이를 CSS Pixel 단위로 지정하는 속성.
    `width`와 `height` 중 하나만 정한다면, 기존 비율로 수정된다.
  * `poster` 속성(Attribute)
    사용자가 동영상을 재생하거나 탐색하기 전까지 출력되는 frame 주소를 지정하는 속성.(다른 이미지를 설정할 수 있다.)
    명시되지 않은 경우에는 첫 번째 frame을 출력한다.

### `<audio>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio)
- 문서에 소리 컨텐츠를 삽입하는 태그(Tag).
- 대부분 `<video>`와 동일한 속성이 사용된다.(`autoplay`, `src`, `controls`, `loop`, `muted`)
- 특히, `src` 속성은 선택 속성으로, `<source>` 요소를 자식으로 사용해 한 개 이상의 삽입할 오디오 소스를 명시할 수 있다.
  * 이 경우 가장 상단에 작성한 `<source>` 요소부터 지원 가능한 형식을 파악하여 재생하고, 모두 지원 불가능한 형식이라면, 마지막 문구가 출력된다.
  ```HTML
  <audio controls>
    <source src="foo.opus" type="audio/ogg; codecs=opus"/>
    <source src="foo.ogg" type="audio/ogg; codecs=vorbis"/>
    <source src="foo.mp3" type="audio/mpeg"/>
    Your browser does not support the <code>audio</code> element.
  </audio>
  ```
- 참고: 오디오 및 오디오를 가진 비디오를 자동으로 재생하는 사이트는 사용자 경험에 악영향을 끼칠 수 있으므로 자동 재생을 지양해야 한다. 반드시 자동 재생을 제공해야 한다면, 사용자의 명시적인 동의를 얻어야 하도록 해야 한다.([자동 재생 안내서](https://developer.mozilla.org/ko/docs/Web/Media/Autoplay_guide))
- `<audio>`, `<video>`, `<img>` 요소는 `<figure>`와 `<figcaption>`와 함께 사용할 수 있다.
  ```HTML
  <figure>
    <figcaption>Listen to the T-Rex:</figcaption>
    <audio
        controls
        src="/media/cc0-audio/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
  </figure>
  ```

### `<canvas>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/canvas)
- Canvas Scripting API, WebGL API와 함께(javascript) 사용해 그래픽과 애니메이션을 그릴 수 있는 공간을 마크업하는 태그(Tag).
  * `height` 속성
    좌표 공간의 높이를 CSS Pixel 단위로 지정하는 속성.(기본값=150)
  * `width` 속성
    좌표 공간의 너비를 CSS Pixel 단위로 지정하는 속성.(기본값=300)
  ```HTML
  <canvas id="canvas" width="300" height="300">
    캔버스의 내용을 설명하는 대체 텍스트
  </canvas>
  ```
  ```javascript
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 100, 100);
  ```

### `<iframe>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/iframe)
- 중첩 브라우징 맥락을 나타내는 요소로, 현재 문서 내부에 다른 HTML 페이지를 삽입하는 태그(Tag).
- Inline Frame Element로, Embedded Element처럼 `src` 속성을 활용해 다른 HTML 문서를 가지고 올 수 있다.
- 보통 지도를 가져오는데 사용한다.

## Form Element
### `<form>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form)
- 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획을 나타내는 태그(Tag).
- 일방적으로 사용자에게 정보를 제공하는 것이 아닌, 사용자의 입력을 받기 때문에, 상호 작용이 추가된다는 점이 특징이다.
  * `action` 속성(Attribute)
    양식 데이터를 처리할 프로그램의 URI(Uniform Resource Identifier, URL, URN 등 하나의 리소스를 가리키는 문자열)를 지정하는 속성.
    즉, 사용자가 입력한 데이터를 보낼 서버의 '최종 목적지'의 주소를 작성한다.
  * `method` 속성(Attribute)
    양식을 제출할 때 사용할 HTTP method를 설정하는 속성,
    - `POST` method: 양식 데이터를 요청 본문으로 전송.  
    - `GET` method: 양식 데이터를 `action` URL과 `?` 구분자 뒤에 이어 붙여서 전송.(https://server.com/?`input` 요소의 `name` 속성의 값=사용자가 입력한 값)
      검색창의 검색어 등 보안이 중요하지 않은 정보를 활용할 때 사용한다.
    - `dialog`: 양식이 `<dialog>` 내부에 위치한 경우, 제출과 함께 대화 상자를 닫도록 설정.

### `<label>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/label)
- 사용자 인터페이스 항목의 설명을 나타내는 태그(Tag).
- `<input>`에 어떤 정보를 입력해야 하는 지에 대한 설명을 작성해 사용자가 잘못된 정보를 입력하는 것을 방지할 수 있다.(웹 접근성 향상)
  ```HTML
  <div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese">
  </div>
  ```
- `<label>`을 `<input>` 요소와 연결하기 위해서 `<input>`에 `id` 속성을 부여하고, 이와 동일한 값을 `<label>`의 `for` 속성에 작성해야 한다. 다만, `<label>` 내부에 `<input>`을 작성한 경우 암시적으로 연결되기 때문에, `id`와 `for` 속성을 사용하지 않아도 무관하다.

### `<input>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/input)
- 웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤을 생성하는 태그(Tag).
- 다양한 `type`이 존재한다. 이러한 `type`에 따라 사용할 수 있는 속성이 각각 존재한다.
  * `text` type(기본 값)
    한 줄의 텍스트 필드로, 개행이 불가능하고, `Enter` 입력 시 `<form>`이 제출된다. 
    - `minlength` 속성(Attribute): 입력 가능한 최소 글자 수
    - `maxlength` 속성(Attribute): 입력 가능한 최대 글자 수
    ```HTML
    <label>TEXT: 
      <input type="text" name="text" minlength="5" maxlength="10">
    </label>
    ```
  * `password` type
    값이 가려진 한 줄의 텍스트 필드로, 사이트가 안전하지 않은 경우 사용자에게 경고한다.
    - `minlength` 속성(Attribute): 입력 가능한 최소 글자 수
    - `maxlength` 속성(Attribute): 입력 가능한 최대 글자 수
    ```HTML
    <label>PW: 
      <input type="password" name="password" minlength="5" maxlength="10">
    </label>
    ```
  * `email` type
    이메일 주소를 편집할 수 있는 필드로, 유효성 검증 매개변수가 존재한다.(반드시 `@`를 사용한 형식을 입력)
    모바일 기기에서는 영문으로 자동으로 변경된다.
    ```HTML
    <label>e-mail: 
      <input type="email" name="email">
    </label>
    ```
  * `tel` type
    전화번호를 입력하는 컨트롤로, 특정 장치에서는 동적 키패드, 전화번호 입력기를 표시하게 된다.
    ```HTML
    <label>TEL: 
      <input type="tel" name="tel">
    </label>
    ```
  * `number` type
    숫자를 입력하는 컨트롤로, 스피너를 함께 표시한다.
    숫자 이외의 문자는 입력이 되지 않는다.
    ```HTML
    <label>NUMBER: 
      <input type="number" name="number">
    </label>
    ```
  * `range` type
    값이 가려진 숫자를 입력하는 컨트롤로, 중간 값을 기본 값으로 보여준다.
    기본적으로 `0` ~ `100`을 값으로 갖는다.
    - `min` 속성(Attribute): 수용 가능한 최소값
    - `max` 속성(Attribute): 수용 가능한 최대값
    ```HTML
    <label>RANGE: 
      <input type="range" name="range" min="5" max="10">
    </label>
    ```
  * `date` type
    시간을 제외한 연, 월, 일을 지정할 수 있는 컨트롤로, 브라우저가 지원하는 경우 날짜를 선택할 수 있는 달력 등을 열어준다.
    ```HTML
    <label>DATE: 
      <input type="date" name="date">
    </label>
    ```
  * `month` type
    연과 월을 지정할 수 있는 컨트롤로, 시간대는 지정할 수 없다.
    ```HTML
    <label>MONTH: 
      <input type="month" name="month">
    </label>
    ```
  * `time` type
    시간대가 없는 시간 값을 입력하는 컨트롤이다.
    ```HTML
    <label>TIME: 
      <input type="time" name="time">
    </label>
    ```
  * `week` type
    시간대가 없는 주와 연 값과 주의 값을 구성하는 날짜를 입력하는 컨트롤이다.
    ```HTML
    <label>WEEK: 
      <input type="week" name="week">
    </label>
    ```
  * `submit` type
    양식을 전송하는 버튼으로, 버튼의 내용은 '제출'이 기본 값으로 설정되어 있다.
    - `value` 속성(Attribute): 버튼의 내용을 변경하는 속성.
    ```HTML
    <form>
      <input type="submit" value="제출하기~">
    </form>
    ```
    * `button` type
    기본 행동을 가지지 않고, `value` 값을 버튼의 내용으로 사용하는 버튼이다.
    - `value` 속성(Attribute): 버튼의 내용을 변경하는 속성.
    ```HTML
    <form>
      <input type="button" value="제출하기~">
    </form>
    ```
    * `reset` type
    양식의 내용을 기본값으로 초기화하는 버튼이지만, 권장되지는 않는다.
    버튼의 내용은 '초기화'가 기본 값으로 설정되어 있다.
    - `value` 속성(Attribute): 버튼의 내용을 변경하는 속성.
    ```HTML
    <form>
      <input type="reset" value="초기화하기~">
    </form>
    ```
    * `checkbox` type
    단일 값을 선택하거나 선택 해제할 수 있는 체크박스이다.
    - `checked` 속성(Attribute): 기본 값을 '선택'으로 변경하는 속성.
    ```HTML
    <label>CHECKBOX: 
      <input type="checkbox" name="checkbox">
    </label>
    ```
    * `radio` type
    같은 `name` 값을 가진 여러 가지의 선택지 중에서 하나의 값만을 선택하게 하는 라디오 버튼이다.
    - `value` 속성(Attribute): 버튼마다 각각 값을 설정해 어떤 버튼이 선택되었는 지를 파악할 수 있게 하는 속성.
    - `checked` 속성(Attribute): 기본 값을 '선택'으로 변경하는 속성.
    ```HTML
    <label>RADIO: 
      <input type="radio" name="radio" value="r1">
      <input type="radio" name="radio" value="r2">
      <input type="radio" name="radio" value="r3">
    </label>
    ```
- `name` 속성(Attribute)
  전체 `<form>` 내부에서 해당 필드가 어떤 데이터를 가지고 있는 지를 구별하는 속성.
  해당 양식 컨트롤의 이름으로, 입력된 데이터와 함께 전송된다.
- `placeholder` 속성(Attribute)
  양식 컨트롤이 비어있는 경우 나타내는 내용을 지정하는 속성.
- `autocomplete` 속성(Attribute)
  양식의 자동 생성 기능을 활성화하는 속성.
  Boolean 속성이 아니기 때문에 `on` 값을 지정해야 한다.
- `required` 속성(Attribute)
  양식이 전송되기 위해 반드시 입력하거나 확인이 필요한 값으로 지정하는 Boolean 속성.
- `disabled` 속성(Attribute)
  양식 컨트롤을 비활성화하는 Boolean 속성.
  해당 속성이 지정되어 있지 않은 경우에 사용자가 데이터를 입력하지 않고 제출한 경우, `name` 값이 빈 값으로 전송되는데 비해, `disabled` 속성이 설정되어 있는 경우에는 `name` 값도 전송되지 않는다는 차이가 있다.
- `readonly` 속성(Attribute)
  해당 양식 컨트롤의 값을 수정할 수 없게 설정하는 Boolean 속성.
  설정된 양식 컨트롤을 focus할 수 있으나, 수정할 수 없다. 다만, `value` 값으로 설정된 기본 값이 있는 경우에는 해당 값이 그대로 전송된다. 또한, 빈 값이라도 전송되는 점이 `disabled` 속성과의 차이점이다.
- `step` 속성(Attribute)
  키보드 방향키나 스피너를 활용해 숫자를 변경할 때의 간격을 설정하는 속성으로, numeric types(number, range 등)에서만 사용 가능하다.
- `min` 속성(Attribute)
  최소값을 지정하는 속성으로, numeric types(number, range 등)에서만 사용 가능하다.
- `max` 속성(Attribute)
  최대값을 지정하는 속성으로, numeric types(number, range 등)에서만 사용 가능하다.

### `<fieldset>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/fieldset)
- 웹 양식의 여러 컨트롤과 레이블을 묶을 때 사용한다.
  ```HTML
  <form>
    <fieldset>
      <legend>Choose your favorite monster</legend>

      <input type="radio" id="kraken" name="monster">
      <label for="kraken">Kraken</label><br/>

      <input type="radio" id="sasquatch" name="monster">
      <label for="sasquatch">Sasquatch</label><br/>

      <input type="radio" id="mothman" name="monster">
      <label for="mothman">Mothman</label>
    </fieldset>
  </form>
  ```
  * `disabled` 속성(Attribute)
    모든 자손 컨트롤을 비활성화하는 속성.
    보통 회색으로 비활성 컨트롤을 표시한다.
    다만, `<legend>` 내부의 양식 요소는 비활성 상태로 전환되지 않는다.

### `<legend>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/legend)
- 부모 요소인 `<fieldset>` 내부에서 컨텐츠에 대한 설명을 나타낸다.(범례)
- 반드시 `<fieldset>`의 첫 번째 자식으로 활용되어야 한다.
  ```HTML
  <form action="#">
    <fieldset>
      <legend>Simple fieldset</legend>
      <input type="radio" id="radio">
      <label for="radio">Spirit of radio</label>
    </fieldset>
  </form>
  ```

### `<button>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/button)


### `<textarea>`
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/textarea)