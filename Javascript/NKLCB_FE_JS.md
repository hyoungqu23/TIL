# JAVASCRIPT
> 👍 *기초를 탄탄하게🧱, 발목 잡히지 않도록.*

## 📌 개요
<!-- ### Basic
### Condition
### Iteration
### Function
### Basic Object -->

### 학습 환경 구축
#### Node.js
[Download](https://nodejs.org/ko/download/)
- V8(Javascript Engine)으로 빌드된 이벤트 기반 JS Runtime Platform
- 확장성 있는 네트워크 애플리케이션(특히, Server Side) 개발에 사용되는 SW Platform
- JS를 활용하며, Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 성능으로 처리가 가능하다.

#### Visual Studio Code
[Download](https://code.visualstudio.com/download)

#### LeetCode
[LeetCode](https://leetcode.com/)
- 온라인 기반으로 알고리즘 문제 풀이 및 토론 환경을 제공하는 플랫폼 사이트
- JS, C, C++, Python 등 14개의 인기 있는 코딩 언어를 지원
- Facebook, Apple, Intel, Amazon 등 해외 기업에서 SW 문제 해결 인터뷰 시 활용

### Javascript란?
- 객체(Object) 기반의 스크립트 프로그래밍 언어(Line by Line interpreter)
- ECMAScript 사양을 준수하는 범용 스크립팅 언어
- 웹의 동적 동작을 구현하기 위해 제작
- JS 엔진(Google V8, Firefox SpiderMonkey, Edge Chakra) 위에서 수행된다.

### ECMAScript란?
- ECMA International(정보통신에 대한 표준을 제정하는 비영리 표준화 기구)이 ECMA-262 기술 규격(범용 목적의 스크립트 언어 명세 기술)에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어
- JS를 표준화하기 위해 만들어졌다.

### 코드의 동작 흐름
- 개발자 -> 스크립트 -> 컴퓨터
![코드 동작 흐름](/Javascript/img/Untitled.png)

### Javascript 변환 절차
- Javascript 코드를 parser가 변환해서 Abstract Syntax Tree(추상 문맥 트리)로 변환되어 의미에 맞게 나누어진 후, 컴파일러 또는 인터프리터를 통해서 실제 컴퓨터가 이해할 수 있는 언어로 변환되고, 이를 CPU가 읽어서 실행한다.

## 📌 기본 입출력
- 사용자가 프로그램과 상호작용하기 위한 방법으로, 입력과 출력, 즉 Input/Output(I/O)를 의미한다.
- 운영체제에서의 대표적인 입출력은 표준 입력(stdin), 표준 출력(stdout), 표준 오류 출력이 있다.
  * **표준 입력(stdin)**
    일반적으로 컴퓨터의 키보드의 응답을 받아 입력
    프로그램의 데이터를 추가하기 위한 입력 장치
    알고리즘에서는 문제의 TestCase 입력을 위해 사용한다.
  * **표준 출력(stdout)**
    일반적으로 컴퓨터의 모니터에 문자열로 출력
    프로그램의 실행 상태 혹은 실행 결과를 보고 판단
    알고리즘에서는 문제의 정답 확인, 디버깅 용으로 사용한다.
```txt
Hello, world!
```

```javascript
const fs = require("fs");
const input = fs.readFileSync("./Javascript/input.txt", "utf8");

console.log(input);
```
> 이 경우, readFileSync에서 경로를 절대 경로로 지정해야 node.js로 출력이 가능한 것 같다.

## Javascript 문법
### 코드 구성
- Javascript 문법은 스크립트 기반의 언어로, 다수의 표현식(Expression)과 하나의 명령문(Statement)로 이루어지며, 명령문으로 프로그램(Application)이 수행된다.
- 하나의 명령문(Statement)의 끝은 개행(`Enter`) 혹은 **세미콜론(`;`)**으로 표시한다.

### 예약어(Keyword)
[W3Schools](https://www.w3schools.com/js/js_reserved.asp)
- Javascript 문법을 만들 때 미리 정해진 용도로 동작하기 위해 정의된 단어.

### 식별자
- 스크립트에서 변수나 함수에 이름을 붙일 때 사용하는 단어.
- 대소문자를 구별하며, 유니코드 문자를 이용한다.
- **Javascript 식별자 규칙**
  * 예약어(Keyword) 사용 불가
  * 숫자로 시작 불가능
  * 특수문자는 `_`, `$`만 가능
  * 공백 포함 불가능