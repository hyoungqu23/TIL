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

