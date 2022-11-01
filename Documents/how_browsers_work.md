- 목차
- 참고 자료
  - **[How Browsers work](https://web.dev/howbrowserswork/)**
  - **[브라우저는 어떻게 동작하는가?](https://d2.naver.com/helloworld/59361)**
  - **[Critical Rendering Path](https://developer.mozilla.org/ko/docs/Web/Performance/Critical_rendering_path)**
  - [**JavaScript Critical Rendering Path**](https://indepth.dev/posts/1498/101-javascript-critical-rendering-path)
  - **[Constructing the Object Model](https://web.dev/critical-rendering-path-constructing-the-object-model/)**
  - **[Render-tree Construction, Layout, and Paint](https://web.dev/critical-rendering-path-render-tree-construction/)**

## 시작

브라우저의 동작 원리에 대해서는 기술 면접 질문에서도 자주 출제되고, 프론트엔드 개발자라면 브라우저는 뗄레야 뗄 수가 없기 때문에 반드시 알고 있어야 하는 지식 중 하나이다.

맨 처음 HTML, CSS, JavaScript를 학습할 때, Semantic Markup이 중요하다는 이야기를 들었을 때는 왜 중요한지, 왜 적절히 활용해야 하는지 몰랐다.

이후에도 항상 React를 학습하고, 프로젝트를 진행하면서 수도 없는 아티클에서 `React.memo`나 여러 Custom Hooks 등을 활용해 **“React 렌더링 최적화”**에 대해 이야기하고 있다는 점이 의문이었다. 도대체 렌더링 과정에서는 어떤 일이 발생하기에 최적화를 그렇게 목놓아 울부짖는지 그게 그렇게 중요하면 왜 중요한지 좀 설명해달라고 반문하고 싶었다.

## 브라우저의 구성 요소

OS에서 실행되는 하나의 어플리케이션인 브라우저는 다음과 같은 구성요소들을 가지고 있다.

![[원본](https://d2.naver.com/helloworld/59361)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17f067b7-c258-413c-b1cb-b1bc1b763f03/Untitled.png)

[원본](https://d2.naver.com/helloworld/59361)

- 사용자 인터페이스
- 브라우저 엔진
- 렌더링 엔진
- 저장소
- 네트워크
- JavaScript 인터프리터
- UI 백엔드 등

이 중에서 렌더링 엔진이 브라우저가 서버에 요청한 HTML, CSS를 파싱하여 화면에 보여주는 역할을 담당하고 있다.

렌더링 최적화는 브라우저가 HTML, CSS, JavaScript 파일을 응답받아 화면을 그리는 일련의 단계인 Critical Rendering Path, 중요 렌더링 경로와 관련이 있다.

[렌더링 엔진의 기본 흐름 ([원본](https://web.dev/howbrowserswork/))](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d879e9fb-0352-46d2-9692-e0aa0527909e/bPlYx9xODQH4X1KuUNpc.avif)

렌더링 엔진의 기본 흐름 ([원본](https://web.dev/howbrowserswork/))

이를 간단하게 말하면, 브라우저가 서버에 요청한 후 HTML, CSS, JavaScript를 응답 받아 브라우저에 보여주는 방식으로 이루어진다. 특히, HTML, CSS 파일은 렌더링 엔진의 HTML, CSS 파서에 의해 DOM, CSSOM 트리로 변환되고, 하나의 렌더 트리로 결합된 후 이를 바탕으로 레이아웃을 계산하고, 그리게된다.

## Critical Rendering Path

Critical Rendering Path, 즉 중요 렌더링 경로(이하 CRP라고 한다.)는 브라우저가 HTML, CSS를 화면에 픽셀로 변경하는 일련의 단계를 의미한다. 즉, 사용자가 URL을 통해 접속하면, 브라우저가 필요한 HTML, CSS 파일을 요청하고, 서버가 반환한 해당 파일을 브라우저가 응답 받아 사용자가 볼 수 있는 웹 페이지 구축을 시작할 때까지의 경로를 의미한다.

브라우저는 응답의 결과로 서버에서 전달받은 HTML과 CSS를 분석하고 기반으로 **DOM(Document Object Model)**과 **CSSOM(CSS Object Model)** 트리를 구축하기 시작한다. DOM, CSSOM 트리 구축이 완료되면 브라우저는 렌더 트리를 생성하고 컨텐츠를 보여주기 위해 스타일을 계산(Layout)하기 시작하고 렌더 트리가 완전히 구추고디면 모든 렌더 트리 요소의 위치와 크기가 정의된 레이아웃이 생성된다. 이후 이는 화면에 그려지게(Paint) 된다.

### **DOM(Document Object Model)과 CSSOM(CSS Object Model)**

![DOM 트리 구조([원본](https://indepth.dev/posts/1498/101-javascript-critical-rendering-path))](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05dba537-6497-4542-969c-4dedcc0ef227/Screenshot-2022-03-02-at-7.11.11-AM.png)

DOM 트리 구조([원본](https://indepth.dev/posts/1498/101-javascript-critical-rendering-path))

서버에게서 전달 받은 HTML 응답은 HTML 파서(Parser)가 이를 분석하여 해석하고, 의미 단위로 토큰화된다. 브라우저는 토큰화된 결과물을 가지고 노드로 변경하고, DOM을 구축하게 된다.

즉, 이전부터 의문을 가지고 있었던 부분인 Semantic Tag를 활용하는 것이 좋은 이유는 브라우저가 HTML을 해석하는 데 필요한 시간을 감소시키기 때문이다.

조금 더 자세히 보면, 다음과 같은 과정을 거치며 DOM 트리가 생성된다.

- 브라우저는 서버에서 전달 받은 단순 2진법 문자열에 불과한 HTML을 지정된 인코딩 방식(보통 UTF-8)에 따라 개별 문자로 변환한다.
- 브라우저는 이러한 문자들을 토큰화하고, 속성 및 규칙을 정의하는 Node Object로 변환한다.
- 이렇게 변환된 HTML Node 사이의 관계를 고려하여 트리 구조로 DOM을 구축하게 된다.

이러한 과정을 진행하는 중 <link>로 연결된 외부 스타일 시트가 존재하는 경우 브라우저는 이를 요청하여 바로 응답을 전달 받게 된다.

[yb5YfU0vx6vHvB7c0fyD.avif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a8aa150-087d-4ea4-893c-68ce5697e148/yb5YfU0vx6vHvB7c0fyD.avif)

이렇게 전달받은 CSS 파일도 HTML과 동일한 과정을 거치며 단순 2진법 문자열에서 토큰, 노드로 변환되고, CSSOM 트리를 구축하게 된다.

![CSS 파싱 ([원본](https://d2.naver.com/helloworld/59361))](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c29e0fbb-1793-4d9c-97ef-c595506ed767/helloworld-59361-12.png)

CSS 파싱 ([원본](https://d2.naver.com/helloworld/59361))

중요한 점은 CSS가 **Rendering Block Resource**이라는 점이다. 즉, 지정된 자원이 요청 이후 응답을 받아 완전히 로드될 때까지 브라우저는 전체 DOM 트리를 렌더링할 수 없다는 것이다. 이후 더 설명하겠지만, <script>로 연결된 JavaScript 파일은 **Parsing Block Resource**로 브라우저는 지정된 JavaScript 코드를 완전히 로드하고 실행할 때까지 HTML 분석 작업을 중단하게 된다.

### 렌더 트리

[렌더 트리 구조 ([원본](https://web.dev/critical-rendering-path-render-tree-construction/))](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fdc84279-4b1c-4f5e-b678-01a3c37b2492/b6Z2Gu6UD1x1imOu1tJV.avif)

렌더 트리 구조 ([원본](https://web.dev/critical-rendering-path-render-tree-construction/))

브라우저는 DOM 트리와 CSSOM 트리를 확인하면서 각각 어떤 노드에 어떤 스타일을 첨부할 지 결정하면서 렌더 트리로 결합한다. 이때 렌더 트리는 반드시 보이는 요소만을 가지고 있다. 즉, `display: none;`이 적용된 요소라면 렌더 트리에 포함되지 않는다.

### Layout

렌더 트리가 생성되고 나면 화면의 크기에 의존하여 각 요소의 너비와 높이, 관련된 위치, 페이지에서 배치되는 위치와 방법 등을 결정하게 되는데, 이 과정을 **Reflow,** **Layout**이라고 한다.

**Layout** 과정은 DOM의 영향을 받아 성능이 결정된다. 즉, 노드의 수가 많을수록 **Layout** 과정이 길어지며, 특정 애니메이션(스크롤 관련 등)이 있으면 병목 현상이 발생할 수도 있다.

### Paint

이렇게 Layout 단계를 거쳐 요소의 크기와 위치 등이 결정되면, 개별 요소를 화면에 그릴 수 있게 된다.

### Composite

Layout과 Paint는 각각 레이어에서 진행되므로, 모든 레이어를 합성하는 과정이 마지막에 필요하다.
