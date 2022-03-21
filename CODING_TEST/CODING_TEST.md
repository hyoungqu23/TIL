# Coding Test
> 👍 *기초를 탄탄하게🧱, 발목 잡히지 않도록.*

## [프로그래머스](https://programmers.co.kr/)
### 001. [2016년](https://programmers.co.kr/learn/courses/30/lessons/12901)
#### 첫 번째 답안
```javascript
function solution(a, b) {
  var answer = '';
  var dayNum = 0;
  
  for (var i = 1; i < a; i++) {
    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12 )   {
      dayNum += 31;
    } else if (i === 2) {
      dayNum += 29;
    } else if (i === 4 || i === 6 || i === 9 || i === 11) {
      dayNum += 30;
    } else if (i === 0) {
      dayNum += 0;
    }
  }
  
  dayNum += b;
  
  switch (dayNum % 7) {
    case 0:
      answer = "THU";
      break;
    case 1:
      answer = "FRI";
      break;
    case 2:
      answer = "SAT";
      break;
    case 3:
      answer = "SUN";
      break;
    case 4:
      answer = "MON";
      break;
    case 5:
      answer = "TUE";
      break;
    case 6:
      answer = "WED";
      break;
  }
      
  return answer;
}
```
배열을 활용한 방법
```javascript
function solution(a, b) { 
  var answer = "";
  var MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var WEEK = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  var sum = 0;
  
  for (var i = 1; i < a; i++) {
    sum += MONTH[i-1];
  }

  answer = WEEK[(sum + b - 1) % 7];

  return answer;
}
```

Date 객체를 활용한 방법

`new`
`Date()`
`toString()`
`slice()`
`toUpperCase()`
`getDay()`

```javascript
function solution(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}
```
```javascript
function solution(a, b) {
  var WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay();
  return WEEK[day];
}
```

### 002. [가운데 글자 가져오기](https://programmers.co.kr/learn/courses/30/lessons/12903)
```javascript
function solution(s) {
  var answer = '';
  
  if (s.length % 2 === 1) {
    let idx = Math.floor(s.length / 2);
    answer = s.slice(idx, idx + 1);
  } else if (s.length % 2 === 0) {
    let idx = (s.length / 2) - 1;
    answer = s.slice(idx, idx + 2);
  }
  
  return answer;
}
```

`substr()`
`ceil()`
`?`

```javascript
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
```

### 003. [같은 숫자는 싫어](https://programmers.co.kr/learn/courses/30/lessons/12906)
```javascript
function solution(arr) {
    var answer = [];
    answer.push(arr[0]);
    
    for (var i = 1; i < arr.length; i++) {
        
        if (arr[i] !== arr[i-1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}
```

`filter()`

```javascript
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
```

### 004. [나누어 떨어지는 숫자 배열](https://programmers.co.kr/learn/courses/30/lessons/12910)
```javascript
function solution(arr, divisor) {
  var answer = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
        answer.push(arr[i]);
    }
  }
  
  if (answer.length === 0) {
    answer.push(-1);
  }
  
  answer.sort((a, b) => a - b);
  
  return answer;
}
```

`map()`
`?`
```javascript
function solution(arr, divisor) {
    var answer = [];
    arr.map((o) => {
        o % divisor === 0 && answer.push(o);
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1];

}
```

`filter()`
```javascript
function solution(arr, divisor) {
    var answer = arr.filter(v => v % divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}
```

### 005. [두 정수 사이의 합](https://programmers.co.kr/learn/courses/30/lessons/12912)
```javascript
function solution(a, b) {
  var answer = 0;
  
  if (a <= b) {
    answer += (a + b) * (b - a + 1) * 0.5;
  } else {
    answer += (a + b) * (a - b + 1) * 0.5;
  }
  
  return answer;
}
```

`Math.abs()`
```javascript
function solution(a, b) {
  var answer = 0;

  return (a + b) * (Math.abs(a - b) + 1) * 0.5;
}
```

### 006. [문자열 내 마음대로 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/12915)
```javascript
function solution(strings, n) {
  var answer = [];

  answer = strings.sort((a, b) => {
    if (a[n] !== b[n]) {
      return a.charCodeAt(n) - b.charCodeAt(n);
    } else {
      return a.localeCompare(b);
    }
  });

  return answer;
}
```

`localeCompare()`
```javascript
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
  // n번째 문자가 같으면, 해당 단어를 비교하고, 다르면 그 문자를 비교한다.
}
```

### 007. [문자열 내 p와 y의 개수](https://programmers.co.kr/learn/courses/30/lessons/12916)
`match()`와 정규표현식
런타임 초과 발생
```javascript
function solution(s){
  var answer = true;
  if (s.match(/p/gi).length !== s.match(/y/gi).length) {
      answer = false;
  }
  return answer;
}
```
`includes()`
```javascript
function solution(s){
  var answer = true;
  var pCount = 0;
  var yCount = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s.toLowerCase()[i].includes("p")) {
      pCount++;
    }
  }
  
  for (let j = 0; j < s.length; j++) {
    if (s.toLowerCase()[j].includes("y")) {
      yCount++;
    }
  }
  
  if (pCount !== yCount) {
    answer = false;
  }

  return answer;
}
```

`split()`
```javascript
function solution(s){
  // 함수를 완성하세요
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  // 해당 문자를 기준으로 나누면, ["", "", "OOOYY"], ["PPOOO", "", ""] 로 구분된다.
}
```

### 008. [문자열 내림차순으로 배치하기](https://programmers.co.kr/learn/courses/30/lessons/12917)

`split()`
`reverse()`
`join()`

```javascript
function solution(s) {
    var answer = '';
    
    let arr = s.split("");

    arr.sort((a, b) => a.charCodeAt() - b.charCodeAt());    // (a, b) => a - b 와의 차이는 무엇이길래 이건 안되는가? 왜 arr.sort()는 되는가
    
    answer = arr.reverse().join("");
    
    return answer;
}
```

```javascript
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}
```

### 009. [문자열 다루기 기본](https://programmers.co.kr/learn/courses/30/lessons/12918)

```javascript
function solution(s) {
  var answer = true;
  var arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt() >= 65) {
      answer = false;
    }
  }
  if (arr.length !== 4 && arr.length !== 6) {
    answer = false;
  }
  return answer;
}
```

정규표현식과 `regex.test()`
```javascript
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
```

### 010. [서울에서 김서방 찾기](https://programmers.co.kr/learn/courses/30/lessons/12919)
```javascript
function solution(seoul) {
  var answer = '';
  
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answer = `김서방은 ${i}에 있다`
    }
  }
  
  return answer;
}
```


`indexOf()` 배열 활용
```javascript
function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}
```

### 011. [소수 찾기](https://programmers.co.kr/learn/courses/30/lessons/12921)
[참고](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-7-%EC%88%98%ED%95%99-%EC%86%8C%EC%88%98-%ED%8C%A9%ED%86%A0%EB%A6%AC%EC%96%BC)
(실패)

```javascript
function solution(n) {
    let range = new Array(n+1).fill(true);
    range[0] = false;
    range[1] = false;
    
    for (let i = 2; i <= n; i++) {
        if (range[i]) {
            for (let j = i*i; j <= n; j += i) {
                range[j] = false;
            }
        }
    }
    return range.filter(e => e != false).length
}
```

### 012. [수박수박수박수박수박수?](https://programmers.co.kr/learn/courses/30/lessons/12922)
```javascript
function solution(n) {
    var answer = '';
    
    for (let i = 0; i < n; i++) {
        (i % 2 === 0) ? answer += "수" : answer += "박";
    }
    
    return answer;
}
```

`repeat()`
```javascript
function solution(n) {
  return "수박".repeat(n).slice(0, n);
}
```

### 013. [문자열을 정수로 바꾸기](https://programmers.co.kr/learn/courses/30/lessons/12925)
```javascript
function solution(s) {
  var answer = 0;
  answer = Number(s);    
  return answer;
}
```
```javascript
function solution(s) {
  var answer = 0;
  answer = +s;    
  return answer;
}
```
```javascript
function solution(s) {
  var answer = 0;
  answer = s / 1;    
  return answer;
}
```

### 014. [시저 암호](https://programmers.co.kr/learn/courses/30/lessons/12926)
(실패)
```javascript
function solution(s, n) {
  var answer = '';
  
  answer = s.split("").map((value) => {
    if (value === " ") return value;
    
    // 대문자: 65 ~ 90 소문자: 97 ~ 122
    if (value.charCodeAt() + n <= 90 || (value.charCodeAt() + n <= 122 && value.charCodeAt() >= 97)) {
      return String.fromCharCode(value.charCodeAt() + n)
    } else {
      return String.fromCharCode(value.charCodeAt() + n - 26);
    }
  }).join("");
  
  return answer;
}
```

`indexOf()`, `includes()`를 활용해 기존에 작성한 배열을 확인하기
```javascript
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer= '';

  for(var i =0; i <s.length; i++){
    var text = s[i];
    if(text == ' ') {
      answer += ' '; 
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text)+n;
    if(index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
```

### 015. [약수의 합](https://programmers.co.kr/learn/courses/30/lessons/12928)
```javascript
function solution(n) {
  var answer = 0;
  
  for (let i = 1; i <= n; i++) {
    (n % i === 0) ? answer += i : answer += 0;
  }
  
  return answer;
}
```

### 016. [이상한 문자 만들기](https://programmers.co.kr/learn/courses/30/lessons/12930)
(실패)
```javascript
function solution(s) {
    return s.split(' ').map(word => {
        let result = '';
        for (let i = 0; i < word.length; i++) {
            if (i % 2) {
                result += word[i].toLowerCase();
            } else {
                result += word[i].toUpperCase();
            }
        }
        return result;
    }).join(' ');
}
```
정규표현식 활용
```javascript
function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
```

```javascript
function toWeirdCase(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}
```

### 017. [자릿수 더하기](https://programmers.co.kr/learn/courses/30/lessons/12931)
```javascript
function solution(n) {
  var answer = 0;
  
  for (let i = 0; i < String(n).length; i++) {
    answer += Number(String(n)[i]);
  }

  return answer;
}
```

`reduce()` 사용
```javascript
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
```
`forEach()` 사용
```javascript
function solution(n) {
    var arr = n.toString().split('');
    var sum = 0;
    arr.forEach(element => {
        sum += parseInt(element);
    });
    return sum;
}
```

### 018. [자연수 뒤집어 배열로 만들기](https://programmers.co.kr/learn/courses/30/lessons/12932)
```javascript
function solution(n) {
    var answer = [];
    
    answer = (n + "").split("").reverse().map(value => Number(value));
    
    return answer;
}
```

숫자로 풀이하는 방법
```javascript
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
```

### 019. [정수 내림차순으로 배치하기](https://programmers.co.kr/learn/courses/30/lessons/12933)
```javascript
function solution(n) {
  var answer = 0;
  
  answer = parseInt((n+"").split("").sort((a, b) => b - a).join(""));
  // answer = parseInt((n+"").split("").sort().reverse().join(""));
  
  return answer;
}
```

### 020. [정수 제곱근 판별](https://programmers.co.kr/learn/courses/30/lessons/12934)
```javascript
function solution(n) {
  var answer = 0;
  
  for (let i = 1; i <= n; i++) {
    if (i === Math.sqrt(n)) {
      answer = ((i + 1) ** 2);
      break;
    } else {
      answer = -1;
    }
  }
  
  return answer;
}
```

다른 방법
```javascript
function nextSqaure(n){
  //함수를 완성하세요
  switch(n % Math.sqrt(n)){
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return "no"
  }
}
```

### 021. [제일 작은 수 제거하기](https://programmers.co.kr/learn/courses/30/lessons/12935)

`...`
`splice()`
`Math.min()`
```javascript
function solution(arr) {
    var answer = [];
    
    if (arr.length === 1) {
        return [-1];
    } else {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);   // 배열의 얕은 복사(Shallow Copy)
    }
    answer = arr;
    return answer;
}
```

### 022. [짝수와 홀수](https://programmers.co.kr/learn/courses/30/lessons/12937)
```javascript
function solution(num) {
    var answer = '';
    (num % 2 === 0) ? answer = "Even": answer = "Odd";
    return answer;
}
```

### 023. [최대공약수와 최소공배수](https://programmers.co.kr/learn/courses/30/lessons/12940)
❓❓❓
[참고](https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B5%AC%ED%95%98%EA%B8%B0#%EB%AC%B8%EC%A0%9C)
```javascript
function solution(n, m) {
    var answer = [];
    let num1 = n;
    let num2 = m;
    let gcd = 0;
    let lcm = 0;
    
    // 2 ~ 두 수 중 더 작은 수까지 나누어 떨어지는 최대의 수 구하기(최대공약수)
    // for (let i = 2; i <= Math.min(n, m); i++) {
    //     (n % i === 0 && m % i === 0) ? gcd = i : gcd = 1;
    // }
    // 유클리드 호제법 최대공약수
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    } 
    gcd = num1;
    
    // 최소공배수
    lcm = n * m / gcd;
    
    answer.push(gcd, lcm);
    return answer;
}
```

```javascript
function solution(a, b) {
  var r;
  for (var ab = a * b ; r = a % b ; a = b, b = r) { }
  return [b, ab/b];
}
```

### 024. [콜라스 추측](https://programmers.co.kr/learn/courses/30/lessons/12943)
```javascript
function solution(num) {
  var answer = 0;
  var cnt = 0;
  
  while (num !== 1) {
    cnt++;
      
    if (cnt >= 500) {
      answer = -1;
      break;
    }

    answer = cnt;

    if (num % 2) {
      num = (num * 3) + 1;
    } else {
      num = num / 2;
    }
  }
  
  return answer;
}
```

삼항연산자 활용
```javascript
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}
```

### 025. [평균 구하기](https://programmers.co.kr/learn/courses/30/lessons/12944)
```javascript
function solution(arr) {
    var answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    answer /= arr.length;
    return answer;
}
```
`reduce()` 활용
```javascript
function average(array){
  return array.reduce((a, b) => a + b) / array.length;
}
```

### 026. [하샤드 수](https://programmers.co.kr/learn/courses/30/lessons/12947)
```javascript
function solution(x) {
    var answer = true;
    
    let div = (x + "").split("").reduce((a, b) => +a + +b);
    
    (x % div === 0) ? answer = true : answer = false;
    
    return answer;
}
```

### 027. [핸드폰 번호 가리기](https://programmers.co.kr/learn/courses/30/lessons/12948)
`slice()`, `substr()`, `substring()`
```javascript
function solution(phone_number) {
    var answer = '';
    answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4)
    return answer;
}
```

정규표현식 활용
```javascript
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
```

### 028. [행렬의 덧셈](https://programmers.co.kr/learn/courses/30/lessons/12950)
```javascript
function solution(arr1, arr2) {
    return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
```

### 029. [x만큼 간격이 있는 n개의 숫자](https://programmers.co.kr/learn/courses/30/lessons/12954)
```javascript
function solution(x, n) {
    var answer = [];
    
    for (let i = 0; i < n; i++) {
        answer.push(x + (i * x));
    }
    
    return answer;
}
```

```javascript
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
```

### 030. [직사각형 별찍기](https://programmers.co.kr/learn/courses/30/lessons/12969)
```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let stars = "";
    for (let j = 1; j <= b; j++) {
        for (let i = 1; i <= a; i++) {
            stars += "*"
        }
        stars += '\n'
    }
    
    console.log(stars)
});
```
`repeat()` 활용해 반복문 1회 제거
```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});
```

### 031. [최소 직사각형](https://programmers.co.kr/learn/courses/30/lessons/86491)
```javascript
function solution(sizes) {
    var answer = 0;
    let wArr = [];
    let hArr = [];
    var sortArr = sizes.map((e) => e.sort((a, b) => a - b));
    
    for (let i = 0; i < sizes.length; i++) {
        hArr.push(sortArr[i][0]);
        wArr.push(sortArr[i][1]);
    }
    
    answer = wArr.sort((a, b) => a - b).pop() * hArr.sort((a, b) => a - b).pop();
    
    return answer;
}
```
```javascript
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}
```
다른 사람의 풀이
```javascript
function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach(s => {
        const [a, b] = s.sort((a,b) => a-b);
        if (a > h) h = a;
        if (b > w) w = b;
    });

    return w * h;
}
```
```javascript
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}
```

### 032. [나머지가 1이 되는 수 찾기](https://programmers.co.kr/learn/courses/30/lessons/87389)
```javascript
function solution(n) {
    var answer = 0;
    for (let x = 1; x < n; x++) {
        if (n % x === 1) {
            answer += x;
            break;
        }
    }
    return answer;
}
```
다른 사람의 풀이
```javascript
function solution(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}
```

### 033. [부족한 금액 계산하기](https://programmers.co.kr/learn/courses/30/lessons/82612)
```javascript
function solution(price, money, count) {
    var answer = -1;
    let sum = 0;
    
    for (let i = 1; i <= count; i++) {
        sum += price * i;
    }
    
    (sum <= money) ? answer = 0 : answer = sum - money
    
    return answer;
}
```
다른 사람의 풀이 - 가우스 공식(1/2 * 항수 * (첫항 + 끝항))
```javascript
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
```

### 034. [두 개 뽑아서 더하기](https://programmers.co.kr/learn/courses/30/lessons/68644)
```javascript
function solution(numbers) {
    var answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (answer.includes(numbers[i] + numbers[j])) continue;
            if (i !== j) answer.push(numbers[i] + numbers[j]);
        }
    }
    return answer.sort((a, b) => a - b);
}
```
다른 사람의 풀이 - Set() 활용
```javascript
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
```

### 035. [3진법 뒤집기](https://programmers.co.kr/learn/courses/30/lessons/68935)
```javascript
function solution(n) {
    var answer = 0;
    let temp = parseInt(n.toString(3).split("").reverse().join(""), 3);
    answer = parseInt(temp, 10);
    return answer;
}
```

다른 사람의 풀이
```javascript
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
```

### 036. [약수의 개수와 덧셈](https://programmers.co.kr/learn/courses/30/lessons/77884)
```javascript
function solution(left, right) {
    var answer = 0;
    // 제곱수인 경우 약수의 개수가 홀수이다.
    for (let i = left; i <= right; i++) {
        Number.isInteger(Math.sqrt(i)) ? answer -= i : answer += i
    }
    return answer;
}
```

