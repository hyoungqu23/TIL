# Coding Test
> ๐ *๊ธฐ์ด๋ฅผ ํํํ๊ฒ๐งฑ, ๋ฐ๋ชฉ ์กํ์ง ์๋๋ก.*

## [ํ๋ก๊ทธ๋๋จธ์ค](https://programmers.co.kr/)
### 001. [2016๋](https://programmers.co.kr/learn/courses/30/lessons/12901)
#### ์ฒซ ๋ฒ์งธ ๋ต์
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
๋ฐฐ์ด์ ํ์ฉํ ๋ฐฉ๋ฒ
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

Date ๊ฐ์ฒด๋ฅผ ํ์ฉํ ๋ฐฉ๋ฒ

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

### 002. [๊ฐ์ด๋ฐ ๊ธ์ ๊ฐ์ ธ์ค๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12903)
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

### 003. [๊ฐ์ ์ซ์๋ ์ซ์ด](https://programmers.co.kr/learn/courses/30/lessons/12906)
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

### 004. [๋๋์ด ๋จ์ด์ง๋ ์ซ์ ๋ฐฐ์ด](https://programmers.co.kr/learn/courses/30/lessons/12910)
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

### 005. [๋ ์ ์ ์ฌ์ด์ ํฉ](https://programmers.co.kr/learn/courses/30/lessons/12912)
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

### 006. [๋ฌธ์์ด ๋ด ๋ง์๋๋ก ์ ๋ ฌํ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12915)
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
  // strings ๋ฐฐ์ด
  // n ๋ฒ์งธ ๋ฌธ์์ด ๋น๊ต
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
  // n๋ฒ์งธ ๋ฌธ์๊ฐ ๊ฐ์ผ๋ฉด, ํด๋น ๋จ์ด๋ฅผ ๋น๊ตํ๊ณ , ๋ค๋ฅด๋ฉด ๊ทธ ๋ฌธ์๋ฅผ ๋น๊ตํ๋ค.
}
```

### 007. [๋ฌธ์์ด ๋ด p์ y์ ๊ฐ์](https://programmers.co.kr/learn/courses/30/lessons/12916)
`match()`์ ์ ๊ทํํ์
๋ฐํ์ ์ด๊ณผ ๋ฐ์
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
  // ํจ์๋ฅผ ์์ฑํ์ธ์
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  // ํด๋น ๋ฌธ์๋ฅผ ๊ธฐ์ค์ผ๋ก ๋๋๋ฉด, ["", "", "OOOYY"], ["PPOOO", "", ""] ๋ก ๊ตฌ๋ถ๋๋ค.
}
```

### 008. [๋ฌธ์์ด ๋ด๋ฆผ์ฐจ์์ผ๋ก ๋ฐฐ์นํ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12917)

`split()`
`reverse()`
`join()`

```javascript
function solution(s) {
    var answer = '';
    
    let arr = s.split("");

    arr.sort((a, b) => a.charCodeAt() - b.charCodeAt());    // (a, b) => a - b ์์ ์ฐจ์ด๋ ๋ฌด์์ด๊ธธ๋ ์ด๊ฑด ์๋๋๊ฐ? ์ arr.sort()๋ ๋๋๊ฐ
    
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

### 009. [๋ฌธ์์ด ๋ค๋ฃจ๊ธฐ ๊ธฐ๋ณธ](https://programmers.co.kr/learn/courses/30/lessons/12918)

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

์ ๊ทํํ์๊ณผ `regex.test()`
```javascript
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
```

### 010. [์์ธ์์ ๊น์๋ฐฉ ์ฐพ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12919)
```javascript
function solution(seoul) {
  var answer = '';
  
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answer = `๊น์๋ฐฉ์ ${i}์ ์๋ค`
    }
  }
  
  return answer;
}
```


`indexOf()` ๋ฐฐ์ด ํ์ฉ
```javascript
function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "๊น์๋ฐฉ์ " + idx + "์ ์๋ค";
}
```

### 011. [์์ ์ฐพ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12921)
[์ฐธ๊ณ ](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-7-%EC%88%98%ED%95%99-%EC%86%8C%EC%88%98-%ED%8C%A9%ED%86%A0%EB%A6%AC%EC%96%BC)
(์คํจ)

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

### 012. [์๋ฐ์๋ฐ์๋ฐ์๋ฐ์๋ฐ์?](https://programmers.co.kr/learn/courses/30/lessons/12922)
```javascript
function solution(n) {
    var answer = '';
    
    for (let i = 0; i < n; i++) {
        (i % 2 === 0) ? answer += "์" : answer += "๋ฐ";
    }
    
    return answer;
}
```

`repeat()`
```javascript
function solution(n) {
  return "์๋ฐ".repeat(n).slice(0, n);
}
```

### 013. [๋ฌธ์์ด์ ์ ์๋ก ๋ฐ๊พธ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12925)
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

### 014. [์์  ์ํธ](https://programmers.co.kr/learn/courses/30/lessons/12926)
(์คํจ)
```javascript
function solution(s, n) {
  var answer = '';
  
  answer = s.split("").map((value) => {
    if (value === " ") return value;
    
    // ๋๋ฌธ์: 65 ~ 90 ์๋ฌธ์: 97 ~ 122
    if (value.charCodeAt() + n <= 90 || (value.charCodeAt() + n <= 122 && value.charCodeAt() >= 97)) {
      return String.fromCharCode(value.charCodeAt() + n)
    } else {
      return String.fromCharCode(value.charCodeAt() + n - 26);
    }
  }).join("");
  
  return answer;
}
```

`indexOf()`, `includes()`๋ฅผ ํ์ฉํด ๊ธฐ์กด์ ์์ฑํ ๋ฐฐ์ด์ ํ์ธํ๊ธฐ
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

### 015. [์ฝ์์ ํฉ](https://programmers.co.kr/learn/courses/30/lessons/12928)
```javascript
function solution(n) {
  var answer = 0;
  
  for (let i = 1; i <= n; i++) {
    (n % i === 0) ? answer += i : answer += 0;
  }
  
  return answer;
}
```

### 016. [์ด์ํ ๋ฌธ์ ๋ง๋ค๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12930)
(์คํจ)
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
์ ๊ทํํ์ ํ์ฉ
```javascript
function toWeirdCase(s){
  //ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
```

```javascript
function toWeirdCase(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}
```

### 017. [์๋ฆฟ์ ๋ํ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12931)
```javascript
function solution(n) {
  var answer = 0;
  
  for (let i = 0; i < String(n).length; i++) {
    answer += Number(String(n)[i]);
  }

  return answer;
}
```

`reduce()` ์ฌ์ฉ
```javascript
function solution(n){
    // ์ฌ์ด๋ฐฉ๋ฒ
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
```
`forEach()` ์ฌ์ฉ
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

### 018. [์์ฐ์ ๋ค์ง์ด ๋ฐฐ์ด๋ก ๋ง๋ค๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12932)
```javascript
function solution(n) {
    var answer = [];
    
    answer = (n + "").split("").reverse().map(value => Number(value));
    
    return answer;
}
```

์ซ์๋ก ํ์ดํ๋ ๋ฐฉ๋ฒ
```javascript
function solution(n) {
    // ๋ฌธ์ํ์ด
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // ์ซ์ํ์ด
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
```

### 019. [์ ์ ๋ด๋ฆผ์ฐจ์์ผ๋ก ๋ฐฐ์นํ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12933)
```javascript
function solution(n) {
  var answer = 0;
  
  answer = parseInt((n+"").split("").sort((a, b) => b - a).join(""));
  // answer = parseInt((n+"").split("").sort().reverse().join(""));
  
  return answer;
}
```

### 020. [์ ์ ์ ๊ณฑ๊ทผ ํ๋ณ](https://programmers.co.kr/learn/courses/30/lessons/12934)
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

๋ค๋ฅธ ๋ฐฉ๋ฒ
```javascript
function nextSqaure(n){
  //ํจ์๋ฅผ ์์ฑํ์ธ์
  switch(n % Math.sqrt(n)){
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return "no"
  }
}
```

### 021. [์ ์ผ ์์ ์ ์ ๊ฑฐํ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12935)

`...`
`splice()`
`Math.min()`
```javascript
function solution(arr) {
    var answer = [];
    
    if (arr.length === 1) {
        return [-1];
    } else {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);   // ๋ฐฐ์ด์ ์์ ๋ณต์ฌ(Shallow Copy)
    }
    answer = arr;
    return answer;
}
```

### 022. [์ง์์ ํ์](https://programmers.co.kr/learn/courses/30/lessons/12937)
```javascript
function solution(num) {
    var answer = '';
    (num % 2 === 0) ? answer = "Even": answer = "Odd";
    return answer;
}
```

### 023. [์ต๋๊ณต์ฝ์์ ์ต์๊ณต๋ฐฐ์](https://programmers.co.kr/learn/courses/30/lessons/12940)
โโโ
[์ฐธ๊ณ ](https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B5%AC%ED%95%98%EA%B8%B0#%EB%AC%B8%EC%A0%9C)
```javascript
function solution(n, m) {
    var answer = [];
    let num1 = n;
    let num2 = m;
    let gcd = 0;
    let lcm = 0;
    
    // 2 ~ ๋ ์ ์ค ๋ ์์ ์๊น์ง ๋๋์ด ๋จ์ด์ง๋ ์ต๋์ ์ ๊ตฌํ๊ธฐ(์ต๋๊ณต์ฝ์)
    // for (let i = 2; i <= Math.min(n, m); i++) {
    //     (n % i === 0 && m % i === 0) ? gcd = i : gcd = 1;
    // }
    // ์ ํด๋ฆฌ๋ ํธ์ ๋ฒ ์ต๋๊ณต์ฝ์
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    } 
    gcd = num1;
    
    // ์ต์๊ณต๋ฐฐ์
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

### 024. [์ฝ๋ผ์ค ์ถ์ธก](https://programmers.co.kr/learn/courses/30/lessons/12943)
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

์ผํญ์ฐ์ฐ์ ํ์ฉ
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

### 025. [ํ๊ท  ๊ตฌํ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12944)
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
`reduce()` ํ์ฉ
```javascript
function average(array){
  return array.reduce((a, b) => a + b) / array.length;
}
```

### 026. [ํ์ค๋ ์](https://programmers.co.kr/learn/courses/30/lessons/12947)
```javascript
function solution(x) {
    var answer = true;
    
    let div = (x + "").split("").reduce((a, b) => +a + +b);
    
    (x % div === 0) ? answer = true : answer = false;
    
    return answer;
}
```

### 027. [ํธ๋ํฐ ๋ฒํธ ๊ฐ๋ฆฌ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12948)
`slice()`, `substr()`, `substring()`
```javascript
function solution(phone_number) {
    var answer = '';
    answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4)
    return answer;
}
```

์ ๊ทํํ์ ํ์ฉ
```javascript
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
```

### 028. [ํ๋ ฌ์ ๋ง์](https://programmers.co.kr/learn/courses/30/lessons/12950)
```javascript
function solution(arr1, arr2) {
    return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
```

### 029. [x๋งํผ ๊ฐ๊ฒฉ์ด ์๋ n๊ฐ์ ์ซ์](https://programmers.co.kr/learn/courses/30/lessons/12954)
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

### 030. [์ง์ฌ๊ฐํ ๋ณ์ฐ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/12969)
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
`repeat()` ํ์ฉํด ๋ฐ๋ณต๋ฌธ 1ํ ์ ๊ฑฐ
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

### 031. [์ต์ ์ง์ฌ๊ฐํ](https://programmers.co.kr/learn/courses/30/lessons/86491)
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
๋ค๋ฅธ ์ฌ๋์ ํ์ด
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

### 032. [๋๋จธ์ง๊ฐ 1์ด ๋๋ ์ ์ฐพ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/87389)
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
๋ค๋ฅธ ์ฌ๋์ ํ์ด
```javascript
function solution(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}
```

### 033. [๋ถ์กฑํ ๊ธ์ก ๊ณ์ฐํ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/82612)
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
๋ค๋ฅธ ์ฌ๋์ ํ์ด - ๊ฐ์ฐ์ค ๊ณต์(1/2 * ํญ์ * (์ฒซํญ + ๋ํญ))
```javascript
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
```

### 034. [๋ ๊ฐ ๋ฝ์์ ๋ํ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/68644)
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
๋ค๋ฅธ ์ฌ๋์ ํ์ด - Set() ํ์ฉ
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

### 035. [3์ง๋ฒ ๋ค์ง๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/68935)
```javascript
function solution(n) {
    var answer = 0;
    let temp = parseInt(n.toString(3).split("").reverse().join(""), 3);
    answer = parseInt(temp, 10);
    return answer;
}
```

๋ค๋ฅธ ์ฌ๋์ ํ์ด
```javascript
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
```

### 036. [์ฝ์์ ๊ฐ์์ ๋ง์](https://programmers.co.kr/learn/courses/30/lessons/77884)
```javascript
function solution(left, right) {
    var answer = 0;
    // ์ ๊ณฑ์์ธ ๊ฒฝ์ฐ ์ฝ์์ ๊ฐ์๊ฐ ํ์์ด๋ค.
    for (let i = left; i <= right; i++) {
        Number.isInteger(Math.sqrt(i)) ? answer -= i : answer += i
    }
    return answer;
}
```

### 037. [๋ด์ ](https://programmers.co.kr/learn/courses/30/lessons/70128)
```javascript
function solution(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i] * b[i]
    }
    return sum;
}
```
๋ค๋ฅธ ์ฌ๋์ ํ์ด - reduce() ํ์ฉ
```javascript
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
```
```javascript
function solution(a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
    return answer;
}
```

### 038. [์์ ๋ํ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/76501)
```javascript
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i];
    }
    return answer;
}
```
๋ค๋ฅธ ์ฌ๋์ ํ์ด - reduce() ํ์ฉ
```javascript
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
```
๋ค๋ฅธ ์ฌ๋์ ํ์ด - forEach() ํ์ฉ
```javascript
function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((v, i) => { (signs[i]) ? answer += v : answer -= v; } );
    return answer;
}
```
### 039. [์๋ ์ซ์ ๋ํ๊ธฐ](https://programmers.co.kr/learn/courses/30/lessons/86051)
```javascript
function solution(numbers) {
    var answer = 0;
    
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) answer += i;
    }
    return answer;
}
```
๋ค๋ฅธ ์ฌ๋์ ํ์ด - ์ ์ฒดํฉ ํ์ฉ
```javascript
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
```