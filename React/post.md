# React

## Node.js

JavaScript는 브라우저의 내장 엔진을 이용하여 실행할 수 있다. 다만, 각각의 브라우저는 다른 엔진을 활용한다. 이때 Chrome의 내장 엔진인 V8 엔진을 독립시켜 어디서든 JavaScript를 활용할 수 있게 만든 것이 Node.js이다. 즉, Node.js는 JavaScript의 실행 환경, Runtime이다.

따라서 JavaScript가 브라우저에서 벗어나 독립적으로 실행될 수 있게 되면서 태생적으로 가지고 있던 한계가 사라지면서 PC 프로그램은 물론 웹 서버(클라이언트의 요청을 받아 데이터를 반환하는 주체)까지 개발할 수 있게 되었다.

> 웹 서버는 웹 클라이언트인 브라우저의 URL 요청을 받아 HTML, CSS, JavaScript로 구성된 웹 사이트를 응답한다.

##

GUI(Graphic User Interface)
CLI(Command Line Interface)

## Node.js 활용

```
node index.js
```

## Common.js - module system

```js
// module 내보내기
module.exports = {
  moduleName: "calc module",
  add: add,
  sub: sub,
};
```

```js
const calc = require("./calc");

console.log(calc);
console.log(calc.add(1, 2));
console.log(calc.add(4, 5));
console.log(calc.sub(10, 2));
```

## npm

Node Package Manager의 약어로, Node.js의 패키지(누군가 만들어 둔 Node.js Module) 관리 도구이다.

### package 작성

다음 명령어로 package 생성을 시작할 수 있다.

```
npm init
```

세부 설정을 완료하면, `package.json`이 생성된다.

- `"main"`(진입 파일): package를 실행할 때 어떤 파일을 실행해야 하는지 명시
- `"script"`: 자주 실행하는 명령어를 설정

### package 검색

[여기](https://www.npmjs.com/)에서 npm package를 검색하여 활용할 수 있다. 다음 명령어로 package를 설치할 수 있다.

```
npm install packageName

npm i packageName
```

package를 설치하면, `package.json`에 `"dependencies"` 필드가 생성된다.

- `"^0.6.2"`: 0.6.2 버전 이상이 설치되었다는 것을 나타낸다.

```json
{
  "dependencies": {
    "randomcolor": "^0.6.2"
  }
}
```

또한, 디렉토리에는 `node_modules` 디렉토리와 `package-lock.json` 파일이 생성된다.

- `node_modules` 디렉토리: 외부 package 코드가 보관되는 디렉토리
- `package-lock.json` 파일: 외부 package의 실제로 설치된 버전을 기록하는 파일

### package 사용

`index.js`에서 `require`을 통해 외부 package를 불러와서 사용할 수 있다.

```js
const randomColor = require("randomcolor");

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);
```

## React의 필요성

### 컴포넌트 프로그래밍 방식

웹 페이지를 구현할 때 많은 부분이 중복될 수 있다. 특히 Header나 Footer 등은 동일한 코드가 계속 활용된다. 이때 만약 이러한 부분에 수정이 필요하다면, 모든 HTML 문서를 열어 각각 수정하거나, 아니면 하나를 수정하고 이를 `복사-붙여넣기`하는 복붙 지옥에 빠져야 한다. 이고잉님이 자주 말하듯, 만약 이렇게 수정해야 할 HTML 문서가 1억개가 있다고 가정하면, 어떤 느낌이 들겠는가. 즉, 유지보수의 문제가 발생한다.

> [Shotgun Surgery](https://en.wikipedia.org/wiki/Shotgun_surgery) 문제를 일으키게 된다.

따라서, 하나의 문제가 수많은 코드를 수정해야 하는 문제를 발생시킨다는 뜻의 [Shotgun Surgery](https://en.wikipedia.org/wiki/Shotgun_surgery)를 하는 것을 방지하기 위해서 공통적으로 활용될 것으로 예상되는 코드를 **별도의 파일이나 모듈**(우리는 이것을 Component, 컴포넌트라고 부르기로 했다.)로 작성하고 이를 불러와 활용하는 방식이 대두되었다.

이러한 컴포넌트를 활용한 개발 방식은 페이지를 새로 작성할 때 작성해야 할 코드의 절대량이 감소한다는 장점이 있다. 또한, 컴포넌트를 활용한 방식은 기존 개발 방식에 비해 유지보수에 유리하고, [Shotgun Surgery](https://en.wikipedia.org/wiki/Shotgun_surgery)가 필요 없다.

하지만 기존의 JavaScript를 컴포넌트 방식으로 활용하기에는 어려운 점이 있기 때문에 우리는 *컴포넌트 기반의 UI 라이브러리*인 React를 사용할 필요성이 생긴 것이다!

### 선언형 프로그래밍 방식

또한, 기존의 JavaScript는 명령형 프로그래밍 방식(예: jQuery)으로, 절차를 모두 하나하나 다 나열해야 한다. 간단한 예제라면 무관하지만, 다시 또 이고잉님의 말처럼 1억개의 명령이 필요한 프로그램을 구현하려면 그 모든 절차를 나열해야 하므로 효율적이지 않다.

이와 반대로 선언형 프로그래밍 방식은 프로그램의 목적을 바로 말하기 때문에 코드의 가독성과 재사용성을 높일 수 있다.([참고](https://ui.dev/imperative-vs-declarative-programming))

> 명령형 프로그래밍은 무엇을 **어떻게** 할 것인가에 가깝고, 선언형 프로그래밍은 **무엇을** 할 것인가와 가깝다.

> 가장 효율적인 선언적 프로그래밍 방법은 명령적으로 작성된 코드를 추상화하는 것이다.

> 명령형 프로그래밍은 문제를 어떻게 해결해야하는지 컴퓨터에게 명시적으로 명령을 내리는 방법을 의미하고, 선언형 프로그래밍은 무엇을 해결할 것인지에 보다 집중하여 어떻게 문제를 해결하는지에 대해서는 컴퓨터에게 위임하는 방법이다.

### Virtual DOM

JavaScript가 DOM을 지속적으로 변경시키는 경우에, DOM을 다시 렌더링하는 방식으로 동작하는데, 이는 필요 이상의 연산을 유도하고 결국 성능의 저하를 유발할 수 있다. 이를 해결하기 위해 렌더링하지 않는 가상의 DOM(Virtual DOM)을 활용하면, 한 번에 업데이트하여 렌더링함으로써 과다 연산을 방지할 수 있다.

결국 이러한 세 가지 이유로 React의 필요성을 설명할 수 있다.

## React App을 만드는 방법

React.js: Node 기반의 JavaScript UI 라이브러리
Webpack: 다수의 JavaScript 파일을 하나의 파일로 합쳐주는 모듈 번들 라이브러리
Babel: JavaScript의 Compiler로, JSX 등의 쉽고 직관적인 JavaScript 문법을 사용할 수 있도록 해주는 라이브러리

이러한 다수의 라이브러리를 설치하고, 세부사항을 설정하는 것은 어렵기 때문에 이미 세팅이 완료된 패키지인 Boiler Plate, Create React App, 즉 CRA를 활용한다. 이때, Boiler Plate이기 때문에 한 번 설치 후 재사용하지 않기 때문에 다음 명령어로 설치하면 된다.

```
npx create-react-app projectName
```
