# [2.15 함수](https://ko.javascript.info/function-basics)
## 기본값
* 매개변수에 값을 전달하지 않으면 그 값은 `undefined`
* 기본값(default value) 설정하는 방법
```javascript
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```
```javascript
function showMessage(from, text = anotherFunction()) {
  // 함수 본문
}
```
```javascript
function showMessage(text) {
  if (text === undefined) {
    text = '빈 문자열';
  }

  alert(text);
}

showMessage();
```
```javascript
// 매개변수가 생략되었거나 빈 문자열("")이 넘어오면 변수에 '빈 문자열'이 할당됩니다.
function showMessage(text) {
  text = text || '빈 문자열';
  ...
}
```
```javascript
// 매개변수 'count'가 넘어오지 않으면 'unknown'을 출력해주는 함수
function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

## 함수 이름짓기
* 접두어는 대게 동사
* 간경하고 명확
* 한 함수당 하나의 동작 담당

# 과제
### 'else'는 정말 필요한가요?
필요 없음

### '?'나 '||'를 사용하여 함수 다시 작성하기
```javascript
// '?' 사용
function checkAge(age) {
    return age > 18 ? true : confirm('보호자의 동의를 받으셨나요?')
}
```
```javascript
// '||' 사용
function checkAge(age) {
    retrun age > 18 || confirm('보호자의 동의를 받으셨나요?')
}
```

### min(a, b) 함수 만들기
```javascript
function min(a, b) {
    if (a > b) {
        return b
    } else {
        return a
    }
}
```

### pow(x, n) 함수 만들기
```javascript
function pow(x, n) {
    x = +prompt('x값을 입력해주세요')
    n = +prompt('n값을 입력해주세요')
    
    if (n < 1) {
        alert('자연수를 입력해주세요')
    } else {
        alert(Math.pow(x, n))
    }
}
```

# [2.16 함수 표현식](https://ko.javascript.info/function-expressions)
# [2.17 화살표 함수 기본](https://ko.javascript.info/arrow-functions-basics)
