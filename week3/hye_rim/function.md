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
## 함수 선언 방법
### 함수 선언문
```javascript
function sayHi() {
  alert( "Hello" );
}
```
* `함수이름()`: 함수 반환 값 나옴  
* `함수이름`만 : 함수 식 자체
* 호이스팅 됨. 즉 선언문이 정의 되기 전 호출 가능해 스크립티 어디에 있던 사용 가능함
### 함수 표현식
* 호이스팅 안됨. 실행 흐름이 함수에 도달했을 때 해당 함수 사용
```javascript
let sayHi = function() {
  alert( "Hello" );
};
```

## 콜백 함수
* 매개변수(parameter) : 함수에서 전달된 값을 받는 변수
* 인수(argument): 전달되는 값
* 콜백함수: 인수로 전달한 함수를 나중에 호출(called back)
```javascript
// 여기서 매개변수는 question, yes, no
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "동의하셨습니다." );
}

function showCancel() {
  alert( "취소 버튼을 누르셨습니다." );
}

// 여기서 "동의하십니까?", showOk, showCancel은 인수
// ask의 인수 showOk, showCancel은 콜백함수다.
ask("동의하십니까?", showOk, showCancel);
```
> 익명함수(anonymous function): 이름 없이 선언한 함수
```javascript
function() { alert("동의하셨습니다.");
```

# [2.17 화살표 함수 기본](https://ko.javascript.info/arrow-functions-basics)
> let func = (arg1, arg2, ...argN) => expression

* `retrun`지시자를 사용해 명시적으로 결과값을 반환해 주어야 한다. 
* (내가 기억하기론 class내에서 this를 사용할 때도 굉장히 유용하다고 안다)
# 과제
### 화살표 함수로 변경하기
```javascript
ask(
  "동의하십니까?",
  () => alert("동의하셨습니다.");,
  () => alert("취소 버튼을 누르셨습니다.");
);
```
