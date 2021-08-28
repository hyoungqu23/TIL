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
