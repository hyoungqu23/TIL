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