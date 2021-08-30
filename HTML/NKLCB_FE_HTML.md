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
- 텍스트 내부에 개행을 생성하는 태그이다.(Line-break의 약어)
- HTML 문서는 여러 개의 띄어쓰기와 개행을 무시하기 때문에 `<br>`를 활용해 개행을 사용하고, `&nbsp`로 공백을 작성해야 한다.
- 빈 요소
  ```HTML
  Mozilla Foundation<br>
  1981 Landings Drive<br>
  Building K<br>
  Mountain View, CA 94043-0801<br>
  USA
  ```
- 다만, 여백을 더 나누기 위해 `<br>`을 여러번 사용하는 것보다 새롭게 `<p>`를 만들어 CSS의 `margin` 속성을 활용해야 한다.

### `<blockquote>`, `<q>`
- 인용문을 만드는 태그.
- `<blockquote>`[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote)
  * Block Level Element로, Contents가 긴 인용문을 위해 사용한다. 
  * 주로 들여쓰기로 그려지며, CSS의 `margin` 속성을 활용해 들여쓰기를 변경할 수 있다.
  * `cite` 속성(Attributes)으로 인용문의 출처 문서나 메시지를 가리키는 URL을 함께 작성할 수 있다.
  ```HTML
  <blockquote cite="https://tools.ietf.org/html/rfc1149">
    <p>
      Avian carriers can provide high delay, low throughput, and low altitude service. The connection topology is limited to a single point-to-point path for each carrier, used with standard carriers, but many carriers can be used without significant interference with each other, outside of early spring.
    </p>
  </blockquote>
  ```
  * 참고로, `<p>`는 내부에 자식 요소로 Block Level Element가 있는 경우, 자동으로 태그가 닫히는 특성 때문에 내부에는 `<blockquote>`를 사용할 수 없다. 
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