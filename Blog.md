# Blog
## 001. 양식

> 제목, 날짜, 태그

> 작성할 내용

## 003. 개발자에게 필요한 기술 블로그! (2022.03.16) +Development+
1. [카카오](https://tech.kakao.com/blog/)
2. [왓차](https://medium.com/watcha)
3. [컬리](https://helloworld.kurly.com/)
4. [우아한 형제들](https://techblog.woowahan.com/)
5. [뱅크샐러드](https://blog.banksalad.com/tech/)
6. [하이퍼커넥트](https://hyperconnect.github.io/)
7. [당근마켓](https://medium.com/daangn)
8. [강남언니](https://blog.gangnamunni.com/blog/tech/)
9. [요기요](https://techblog.yogiyo.co.kr/)
10. [쏘카](https://tech.socarcorp.kr/)
11. [리디북스](https://www.ridicorp.com/story-category/tech-blog/)
12. [네이버 D2](https://d2.naver.com/home)

참고할 만한 글
1. [개발자스럽다](https://blog.gaerae.com/)


## 004. 기초 정수론 (2022.03.22) +CodingTest+
### 정수론
정수를 다루는 학문으로, 정수만의 독특한 특징인 약수, 배수, 몫, 나머지에 대해 탐구한다.

### 최대공약수(`GCD`, Greatest Common Division)와 최소공배수(`LCM`, Least Common Multiple)
기본적으로 두 수를 소인수 분해한 후 공통된 소인수를 모두 곱하면 최대공약수 `GCD`, 두 수의 모든 소인수를 곱하면 최소공배수 `LCM`이 된다. 따라서 두 수 a, b의 최대공약수 `GCD`와 최소공배수 `LCM` 사이에는 다음과 같은 식이 성립한다.

$$ a * b = GCD * LCM $$

또한, 정수론에서 두 수 a, b의 최대공약수 `GCD`는 `gcd(a, b)`로, 최소공배수 `LCM`은 `lcm(a, b)`로 표기한다.

### 유클리드 호제법
최대공약수 `GCD`를 찾는 경우, 소인수분해가 아니라 유클리드 호제법이라는 알고리즘을 활용하는 것이 더 효율적이다.

`a`를 `b`로 나눈 몫을 `q`라 하고, 나머지를 `r`이라고 할 때, 다음 식이  성립한다. 즉, $$ a = b * q + r $$ 일 때 다음이 성립한다.

> $$ gcd(a, b) = gcd(b, r) $$

결국 유클리드 호제법의 알고리즘은 다음과 같다.
1. `a`, `b`의 `GCD`를 구하기 위해 `a`를 `b`로 나눈 나머지 `r1`을 구한다.
2. `b`를 `r1`으로 나눈 나머지 `r2`를 구한다.
3. `r1`을 `r2`로 나눈 나머지 `r3`를 구한다.
4. 해당 과정을 반복하여, 어느 한 쪽이 나누어 떨어질 때까지 반복하고, 나누어 떨어진 직전 얻은 나머지가 `GCD`가 된다.

예를 들면, `1648`과 `782`의 `GCD`를 구해보면, 다음과 같은 과정을 거친다.
1. 1648 = 782 * 2 + 84
2. 782 = 84 * 9 + 26
3. 84 = 26 * 3 + 6
4. 26 = 6 * 4 + 2
5. 6 = 2 * 3 + 0
따라서, `1648`, `782`의 `GCD`는 `2`이다.

#### 유클리드 호제법의 증명
유클리드 호제법은 귀류법으로 증명할 수 있다. 우선, $$ gcd(a, b) != gcd(b, r) $$이라고 가정한다.

$$ a = b * q + r $$

이 경우, `GCD`는 a, b의 각각 약수이므로, 다음과 같다.

$$ a = GCD * x $$
$$ b = GCD * y $$

다만, 이때 `x`, `y`는 서로가 공약수를 가질 경우 `GCD`가 최대공약수라는 가정에 어긋나기 때문에 서로소로 서로는 공약수를 가지지 못한다.

결국, 다음과 같다.

$$ GCD * x = GCD * y * q + r $$

이때, 좌변이 `GCD`의 배수이므로 우변도 `GCD`의 배수여야 한다. 따라서 `r`은 `GCD`의 배수이므로 `GCD * r`로 변환할 수 있다.

$$ GCD * x = GCD * y * q + GCD * r $$

모든 항을 `GCD`로 나누면, 다음과 같다.

$$ x = y * q + r $$

여기서 두 가지 조건을 확인할 수 있다. 첫 번째 조건은 `x`와 `y`는 서로소라는 점이고, 두 번째 조건은 `y`와 `r`은 서로소가 아니라는 점이다.

만약 `y`와 `r`가 서로소라면, `y`와 `r`의 최대공약수가 `gcd(a, b)`가 되기 때문에 가정에 어긋난다. 따라서 결국 `y`와 `r`는 `g`라는 1이 아닌 공약수를 가지게 되므로 다음 식이 성립한다.

$$ x = (_y * g) * q + (r * g) $$
$$ x = g(_y * q + r) $$

결국, `x` 역시 `g`의 배수가 되기 때문에 이는 `x`, `y`가 서로소라는 사실에 모순된다.

따라서 $$ gcd(a, b) = gcd(b, r) $$가 성립한다.

#### 유클리드 호제법의 알고리즘화(Javascript)
##### 재귀함수의 활용
```javascript
// 주어진 두 수 a, b의 최대공약수를 구하는 함수를 작성하라.

function gcd(a, b) {
  // a = b * q1 + r1; -> 여기서 r = a % b, q1은 알 수 없는데 이후에도 필요 없으니 변수화할 필요 없음
  // b = r1 * q2 + r2; -> 즉, 이전 식의 나누는 수 b를 이전 식의 나머지 r로 다시 나눗셈을 진행한다. 따라서 a = b, b = r
  // r1 = r2 * q3 + r3;

  let r = a % b;  // 이 경우 b > a라면 나머지가 b가 되기 때문에 a, b의 대소를 구분하지 않아도 된다.

  // 이때 새로운 나눗셈의 나머지가 0인 경우, 이전 식의 나머지(r)이 GCD가 된다.
  // 다만 첫 번째 나눗셈에서 나누어떨어지는 경우에는 나누는 수(b)가 GCD가 된다.
  if (!r) return b;

  // 이전 식의 나누는 수(b)를 이전 식의 나머지(r)로 다시 나눗셈을 진행한다.
  return gcd(b, r);
}
```

##### 재귀함수의 활용 2
```javascript
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}
```

##### 화살표 함수의 활용
```javascript
const gcd = (a, b) => b ? gcd(b, a % b) : a;
```

##### 반복문의 활용
```javascript
function gcd(a, b) {
  let r = a % b;
  while (b != 0) {
    a = b;
    b = r;
  }
  return a;
}
```

## 005. 블로그 만들기 (2022.03.25) +Blog+
### 블로그 선택하기
1. 네이버 블로그 & 티스토리 블로그
   원하는 대로 커스텀 할 수 없다는 점에서 제외.
2. 브런치
   글을 작성하는 것 이외의 것이 불편하여 제외.
3. Hexo
   JavaScript 기반이라는 점이 굉장히 매력적이고 유용한 플러그인과 테마가 많다는 점이 커스텀을 원하는 입장에서 고민을 하게 했다.
4. Jekyll
   Ruby 기반이라 문제가 생겼을 때 대처하기 어렵다는 점으로 인해 제외.
5. Gatsby
   
### Gatsby를 선택한 이유
Jekyll은 Ruby 기반이지만, Gatsby는 React.js를 기반으로 한 정적 사이트 생성기라는 점.
여러 군데에서 글을 작성하는 경우가 많고, 여러 기기로 작성한 이후에도 Gatsby를 사용해 GraphQL이라는 일관된 API를 통해 조회가 가능해지므로 어디서든 블로그 사이트로 변환할 수 있다는 점.
React.js 기반임에도 빌드 시 미리 렌더링하기 때문에 SEO에 능하다는 점.
React.js와 GraphQL(페이스북에서 개발한 쿼리 언어, 단일 엔드포인트에서 원하는 데이터만을 받을 수 있다는 장점을 가짐, [참고](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/))를 배울 수 있다는 점.
JAM Stack을 통해 기존 방식에 비해 더 안전하고 빠르다는 점.
![JAM Stack](img/JAMStack.png)
문서화가 잘 되어 있어 쉽게 문제를 해결할 수 있다는 점.
단지 끌렸다는 점.

### Background Knowledge
HTML/CSS, JavaScript, React, GraphQL, Node, Git
[CMD 참고자료](https://www.lifewire.com/how-to-open-command-prompt-2618089)

### 개발 환경 구축
React.js를 실행하기 위해 JavaScript 런타임 Node.js와 패키지 매니저 Yarn을 설치해야 한다.
#### Git 설치
[참고](https://www.atlassian.com/git/tutorials/install-git#windows)

#### Node.js 설치
1. [https://nodejs.org/en/](https://nodejs.org/en/)에서 다운로드할 수 있다.
   최신 버전을 다운로드할 수 있지만, 검증된 LTS 버전을 설치하는 것을 추천한다.
2. 다운로드를 완료한 후에는 CMD 창을 열어 확인한다.
   ```
   node -v
   ```
[참고](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)

#### yarn 설치
1. CMD 창을 열어 아래 명령어로 yarn을 설치한다.
   ```
   npm install --global yarn
   ```
2. 설치한 후에는 정상적으로 설치되었는지 확인한다.
   ```
   yarn --version
   ```

#### Gatsby CLI(Command Line Interface) 설치
새로운 Gatsby 기반 사이트를 빠르게 만들고, 개발하기 위한 명령을 실행할 수 있는 도구인 Gatsby CLI를 설치해야 한다.
`npx`를 통해 Gatsby CLI 라이브러리로 새로운 프로젝트를 생성하면 Gatsby CLI가 설치된 후 새로운 프로젝트가 생성된다.
```
npx gatsby-cli new "Develog"
```
해당 프로젝트 명(`Develog`)의 디렉토리로 이동하여 로컬 서버를 실행하면 된다.
```
cd Develog

gatsby develop
```
그러면 아래와 같이 성공적으로 서버가 실행되는데, 이때 로컬 프로젝트 링크인 `<http://localhost:8000/>`가 존재한다. 해당 링크로 이동하면 아래 이미지와 같이 기본적으로 설정된 메인 페이지를 확인할 수 있다.
![main page](img/main%20page.png)

#### 디렉토리 구조 설정하기
1. `Root Directory>contents`
   블로그 포스트 관련 파일들을 저장하기 위한 디렉토리.
2. `Root Directory>src>components`
   React Component를 저장하기 위한 디렉토리.
3. `Root Directory>src>hooks`
   Custom Hooks을 저장하기 위한 디렉토리.
4. `Root Directory>src>pages`
   Page의 역할을 하는 컴포넌트를 저장하기 위한 디렉토리로, 기본적으로 브라우저에서 pages 디렉토리에 있는 파일의 이름을 통해 Page에 접근할 수 있기 때문에 Page의 역할이 아닌 Component들은 해당 디렉토리에 절대 저장하면 안 된다.
5. `Root Directory>src>templates`
   게시글 페이지와 같이 페이지의 역할을 하면서 같은 형식의 여러 콘텐츠를 보여주는 컴포넌트를 저장하기 위한 디렉토리로, `Gatsby`에서 제공하는 API를 통해 이 디렉토리에 저장된 Template Component로 여러 page를 만들 수 있습니다.
   `pages` 디렉토리와는 다르게 파일명으로 페이지에 접근이 불가능하다.

#### TypeScript 설치
TypeScript와 Gatsby의 TypeScript 플러그인을 설치한다.
```
yarn add typescript --dev

yarn add gatsby-plugin-typescript
```
설치 한 후, `gatsby-config.js`에서 설치한 플러그인을 추가하고, Markdown 파일이 위치할 디렉토리를 탐색할 수 있도록 라이브러리 설정 옵션을 변경해야 한다.
```
plugins: [
  ...
  {
    resolve: 'gatsby-plugin-typescript',
    options: {
      isTSX: true,
      allExtensions: true,
    },
  },
  ...
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `contents`,
      path: `${__dirname}/src/contents`, 
    },
  },
  ...
]
```
TypeScript 설정을 위해 아래 명령어로 만들어낸 `tsconfig.json`의 옵션을 다음과 같이 수정한다.
```
yarn tsc --init
```
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "allowJs": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "baseUrl": "./src",
    "paths": {
      "components/*": ["./components/*"],
      "utils/*": ["./utils/*"],
      "hooks/*": ["./hooks/*"]
    },
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*.tsx"],
  "exclude": ["node_modules"]
}
```
이때, 여기에서 `paths` 옵션은 상대경로가 아닌 절대경로를 사용하기 위해 경로를 매핑해주는 옵션인데, 이를 사용하면 상대적으로 깔끔한 코드를 작성할 수 있다. 아래와 같은 순서로 설정할 수 있다.
1. `paths` 옵션을 사용하기 위해 `baseUrl`을 작성한다. `baseUrl`을 `src` 폴더로 설정해주었기 때문에 `paths` 옵션에서는 이를 기반으로 경로를 작성하면 된다.
2. 하지만 이 상태로 로컬 서버를 시작하면 컴파일은 된다 하더라도 접속할 수는 없고, 실제로 paths 옵션에 추가한 매핑 경로를 사용하기 위해서는 추가적으로 `gatsby-node.js` 파일에서 아래 코드를 통해 **Webpack Config**를 추가해줘야 한다.
   ```
   /**
   * Implement Gatsby's Node APIs in this file.
   *
   * See: <https://www.gatsbyjs.com/docs/node-apis/>
   */

   // You can delete this file if you're not using it

   const path = require('path');

   // Setup Import Alias
   exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
     const output = getConfig().output || {};

     actions.setWebpackConfig({
       output,
       resolve: {
         alias: {
           components: path.resolve(__dirname, 'src/components'),
           utils: path.resolve(__dirname, 'src/utils'),
           hooks: path.resolve(__dirname, 'src/hooks'),
         },
       },
     });
    };
    ```

#### ESLint와 Prettier 설정하기
정적 코드 분석 도구인 ESLint와 개발자가 작성한 코드를 정해진 규칙에 따르도록 변환해주는 Code Formatter인 Prettier를 설치하여 더 깔끔하고 효율적인 코드 작성을 통한 생산성 향상을 도모할 수 있다.

##### ESLint
이를 통해 `tsx` 파일에서 문법 오류를 확인할 수 있다. 다만, `.eslintrc.json` 파일의 `parserOptions.project` 프로퍼티 값에 의해 루트 디렉토리의 자바스크립트 파일에서 TypeScript Parser 관련된 오류가 발생할 수 있다.

따라서 루트 디렉토리에 `.eslintignore` 파일을 생성한 후, 아래와 같이 내용을 추가해야 한다.
```
gatsby-browser.js
gatsby-config.js
gatsby-node.js
gatsby-ssr.js
```

##### Prettier
어떤 스타일을 적용해줄 지 `.prettierrc` 파일에 명시해주면 된다.
```
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

### TypeScript
#### Types
TypeScript의 `Types` 기능은 동적 자료형을 활용하는 JavaScript로 인해 발생하는 문제를 해결하기 위한 기능으로, 설정한 타입에 맞지 않은 값을 지정할 때 Error가 표시된다.
```typescript
const str: string = "String"
const num: number = "Number"    // error TS2322: Type 'string' is not assignable to type 'number'.
```

#### Generic
어떠한 클래스나 함수에서 사용할 타입을 그 함수나 클래스를 사용할 때 결정할 수 있게 만드는 기능이다.
```typescript
class Stack {
  private data: any[] = []

  constructor() {}

  push(item: any): void {
    this.data.push(item)
  }

  pop(): any {
    return this.data.pop()
  }
}
```
TypeScript로 어떤 타입의 데이터가 추가될 지 모르기 때문에 데이터를 저장하는 변수나 함수에 `any` 타입을 지정한 Stack 자료구조에서는 다음과 같은 상황이 발생할 수 있다.
```typescript
const stack = new Stack()

stack.push(10)
stack.push('10')

console.log(stack.pop().toFixed()) // 10
console.log(stack.pop().toFixed()) // Error
```
`Number.prototype.toFixed` 메서드는 숫자 자료형에서만 사용할 수 있는 함수로, 위의 Stack 자료구조에서는 숫자가 아닌 데이터도 추가할 수 있게끔 `any` 타입이 지정되어 있어 에러가 발생할 수 있다. 이때 확실하게 숫자 데이터만 받을 것이라고 명시하는 것이 Generic 기능이다.
```typescript
class Stack<DataType> {
  private data: DataType[] = []

  constructor() {}

  push(item: DataType): void {
    this.data.push(item)
  }

  pop(): DataType {
    return this.data.pop()
  }
}
```
클래스명 옆에 타입 변수를 추가하여 인스턴스를 생성할 시점에 타입을 정의해줄 수 있다.
```typescript
const stack = new Stack<number>()

stack.push('10') // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### GraphQL
GraphQL은 REST API에서는 찾을 수 없는 매력적인 특징을 가지고 있다. 즉, 필요한 데이터만 받아올 수 있다는 것이다.
예를 들어, 모든 유저들의 `id`값과 `name`만 가져오도록 정의한 getPeopleList Query를 정의하고, 이를 호출해 원하는 데이터를 얻을 수 있는 것이다.
```
query getPeopleList {
  allPeople {
    edges {
      node {
        id
        name
      }
    }
  }
}

// Query 결과 반환 값
{
  "data": {
    "allPeople": {
      "edges": [
        {
          "node": {
            "id": "cGVvcGxlOjE=",
            "name": "Luke Skywalker"
          }
        },
        {
          "node": {
            "id": "cGVvcGxlOjQ=",
            "name": "Darth Vader"
          }
        },
        {
          "node": {
            "id": "cGVvcGxlOjU=",
            "name": "Leia Organa"
          }
        }
      ]
    }
  }
}
```

#### GraphiQL
Gatsby에서는 홈페이지의 메타데이터, 마크다운 관련 데이터, 이미지 데이터 등을 Query를 통해 얻어올 수 있다. GraphQL은 기본적으로 GraphiQL이라는 IDE를 제공하는데, 이를 통해 어떤 데이터를 요청할 수 있는지 알 수 있을 뿐더러 쿼리 요청 전에 잠재적인 에러를 알려줄 수 있는 강력한 기능을 제공한다.

로컬 서버 실행 시, 나타나는 두번째 링크 `http://localhost:8000/___graphql`에 접속하여 사이트의 메타데이터를 요청할 수 있다. 일반적으로는 Gatsby에서 메타데잍는 `gatsby-config.js`에서 확인할 수 있다.
```
query {
  site {
    siteMetadata {
      author
      description
      title
    }
  }
}

// Query 결과 반환 값
{
  "data": {
    "site": {
      "siteMetadata": {
        "author": "@gatsbyjs",
        "description": "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
        "title": "Gatsby Default Starter"
      }
    }
  },
  "extensions": {}
}
```

### 페이지 이동 방법
#### Anchor Tag를 통한 페이지 이동
우선, 어떤 페이지가 생성될 지 충분히 알 수 있어 단순 `Anchor` 태그를 통해 페이지를 이동할 수 있도록 개발해도 상관없다. 이로 인해 페이지 이동은 정상적으로 이루어지나, 이동하는 과정에서 새로고침 현상이 발생하게 된다. 일반적인 웹 사이트에서도 볼 수 있는 현상이지만, Gatsby에서는 보다 더 나은 사용자 경험을 위해 자체적으로 API를 제공하고 있다.
```jsx
<a href="/">To Main</a>
```

#### Gatsby Link API를 통한 페이지 이동
Gatsby Link API통해 페이지 이동을 구현하면 보다 더 높은 성능의 정적 사이트를 구현할 수 있다. Gatsby에서 제공하는 `Link` 태그를 통해 페이지 이동을 구현할 수 있는데, 경로를 `to`라는 이름의 `props`로 전달할 수 있다.
```typescript
import { Link } from 'gatsby'
...
<Link to="/">To Main</Link>
```
Gatsby는 Prefetch를 통해 페이지에서 사용할 리소스의 로딩 속도를 높인다. `Link` 컴포넌트를 통해 페이지가 로드되면 Gatsby는 리소스 로드 속도를 높이기 위해 현재 페이지에서 사용되는 모든 링크를 찾은 후, 각 링크의 페이지를 미리 로드하기 시작한다. 즉,  생성한 프로젝트에서 확인해보면 메인 페이지의 로딩이 완료되면, Gatsby는 /info 링크를 찾고, 이 페이지를 미리 로드하는 것이다. 이를 통해 Gatsby는 더 높은 사용자 경험을 제공할 수 있는 것이다.

### EmotionJS
EmotionJS 라이브러리는 CSS-in-JS 라이브러리로, 자바스크립트 파일 내에서 스타일을 지정할 수 있는 라이브러리이다. 기존 대세였던 styled-components의 기능을 거의 동일하게 사용할 수 있었을 뿐더러, 추가적으로 라이브러리를 설치해 손쉽게 기능 확장이 가능하고, 라이브러리의 번들 용량이 다른 라이브러리에 비해 압도적으로 작아 인기를 끌고 있다.
```
yarn add gatsby-plugin-emotion @emotion/react @emotion/styled
```

#### CSS 정의 및 글로벌 스타일 지정 방법
우선, 해당 기능들을 사용하기 위한 컴포넌트와 함수를 불러와야 한다.
```typescript
import { Global, css } from '@emotion/react'
```
이후 전역으로 설정할 스타일을 정의하고, EmotionJS에서 제공하는 `Global` Component에 `styles` props로 정의한 CSS를 연결하여 전역 스타일을 변경할 수 있다.
```typescript
const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`
```

#### Tagged Template Literal 방식을 통해 정의한 CSS 적용 방법
Tagged Template Literal 방식을 통해 정의한 CSS를 일반 HTML 요소 또는 Styled Component에 적용하는 방법으로, 사용자 정의 컴포넌트에서는 사용이 불가능하다는 점에 유의해야 한다.
```typescript
...

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>
      {description} {author}
    </div>
  )
}

...
```
우선 CSS를 정의한 후, `title` 텍스트에 스타일을 지정해주기 위해 Div 요소로 감싸주고, `css` 속성 값으로 위에서 정의한 TextStyle CSS를 넘겨주면 된다.
```typescript
<div css={TextStyle}>{title}</div>
```

#### Tagged Template Literal 방식을 통한 Styled Component 생성 방법
기본적인 형태는 위에서 살펴본 css 함수를 통한 정의 방법과 비슷하지만, 사용하는 라이브러리와 호출 함수에서 약간의 차이가 있다.
```typescript
import styled from '@emotion/styled'
...
const Text1 = styled.div`
  font-size: 20px;
  font-weight: 700;
`
...
const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>
      <Text1>{description}</Text1>
      {author}
    </div>
  )
}
...
```
변수명이 Text1인 Styled Component를 생성하고, 이렇게 생성한 Text1 컴포넌트는 사용자가 정의한 스타일이 적용된 `div` Tag가 된다. 이렇게 정의한 Styled Component는 일반적인 컴포넌트나 HTML 요소같이 사용할 수 있다.

#### 객체를 통한 Styled Component 생성 방법
스타일 속성을 객체에 담아 전달하기 때문에 사용 방법에 차이가 있고, 

유의사항은 하이픈('-')을 통해 단어를 연결하는 Kebab Case가 아닌 단어가 합쳐진 부분마다 맨 처음 글자를 대문자로 표시하는 camelCase를 사용한다는 점과 스타일 값은 무조건 String Type으로 전달해야 한다는 점이다.
```typescript
...

// Kebab Case 적용
const Text1 = styled.div`
  font-size: 20px;
  font-weight: 700;
`

// Camel Case 적용
const Text2 = styled('div')(() => ({
  fontSize: '15px',
  color: 'blue',
}))

...
```

#### Styled Component에서 Props를 받아 처리하는 방법
TypeScript 상에서 Styled Component의 Props를 받아 사용하기 위해서는 타입을 지정할 수 있다. 우선, 다음과 같이 Props 타입을 지정해야 한다.
```typescript
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
`

const Text2 = styled('div')<{ disable: boolean }>(() => ({
  fontSize: '15px',
  color: 'blue',
}))
```
`disable` 값에 따라 적용할 스타일을 지정하고, 타입 정의와 Props 값에 따른 스타일 지정까지 모두 끝났으므로, 다음과 같이 컴포넌트에서 Props를 전달해야 한다.
```typescript
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`

const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}))

<Text1 disable={true}>{description}</Text1>
<Text2 disable={true}>{author}</Text2>
```

### 메인 페이지 틀 만들기
우선, 글로벌 스타일을 하나의 Component로 정의하고, 이후 각각 Component를 구현하여 페이지 상단 소개글, Footer 등을 구현할 수 있다.
