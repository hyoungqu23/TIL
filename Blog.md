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
React.js와 GraphQL를 배울 수 있다는 점.
JAM Stack을 통해 기존 방식에 비해 더 안전하고 빠르다는 점.
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

#### TypeScript 설치

#### ESLint와 Prettier 설정하기