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
```