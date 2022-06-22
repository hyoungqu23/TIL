# Node.js

## 00. Intro

JavaScript는 문서에 불과했던 웹을 하나의 어플리케이션으로 진화시켰다. 이후 Google Chrome의 V8 엔진을 기반으로 Node.js가 나오면서, JavaScript를 통해 웹 브라우저가 아닌 컴퓨터 자체를 제어할 수 있게 되었다. 이러한 흐름에 따라 기존의 웹 개발자들은 웹 페이지를 자동으로 생성하는 웹 어플리케이션을 만들고 사용자와의 상호작용을 더 많이 할 수 있게 되었다.

결국, 쉽고 단순한 HTML 문서를 찍어내는 역할을 하는 웹 어플리케이션을 통해 자동화할 수 있게 됐고, 사용자들은 자신이 직접 컨텐츠를 웹을 통해 업로드할 수 있게 되었다.

## 01. Node.js로 웹 서버 만들기

> 참고: Window에서 해당 디렉토리 내 파일 목록을 보기 위해서는 `dir/w` 명령어를 활용한다.

### URL

모든 페이지를 파일로 만들어 보관하고 있을 수 없다. 따라서 웹 어플리케이션을 구현하여 웹 브라우저에게 서로 다른 페이지를 만들어 전송하게 해야 한다.

#### 기본 구조

> `http://opentutorials.org:3000/main?id=HTML&page=12`

> `Protocol` :// `Host(domain)` : `port number` / `path(directory와 file)` ? `query string`

기본적으로 웹 서버는 80번 port를 사용하는데, 이는 주로 생략한다.

Query String을 통해 웹 서버에게 데이터를 전달하는데, 반드시 `?`로 시작하고, 값은 `=`으로 전달하고, 값 구분은 `&`를 활용한다.

####