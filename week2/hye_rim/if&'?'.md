# [if와 '?'를 사용한 조건 처리]()

## 'if'문
## 조건부 연산자 '?'
> let result = condition ? value1 : value2;

=> `condition`이 truthy라면 `value1`, 그렇지 않으면 `value2` 반환
### 다중 '?'
늘 가독성을 생각하며 코딩하기. 
`if`를 사용하면 좋을지, 다중 물음표 연산자를 사용하면 좋을지 비교하기

# 과제
### if와 문자열 0
```javascript
// 실행됨
```

### 자바스크립트 공식 이름
```javascript
let jsName = prompt("자바스크립트의 '공식'이름은 무엇일까요?")

if ( jsName === "ECMAScript" ) {
  alert('정답입니다.')
} else {
  alert('모르셨나요? 정답은 ECMAScript 입니다!')
}
```

### 입력받은 숫자의 부호 표시하기
```javascript
let inputNum = prompt('숫자를 입력해주세요')

if ( inputNum > 0) {
  console.log(1)
} else if ( inputNum < 0 ) {
  console.log(-1)
} else {
  console.log(0)
}
```

### 'if'를 '?'로 교체하기
```javascript
let result = (a + b < 4) ? '미만' : '이상'
```

### 'if...else'를 '?'로 교체하기
```javascript
let message = (login == '직원') ? '안녕하세요.' : 
  (login == '임원') ? '환영합니다.' : 
  (login == '') ? '로그인이 필요합니다.' : '';
```
