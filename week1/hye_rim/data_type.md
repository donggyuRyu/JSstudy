# [2.5 자료형](https://ko.javascript.info/types)

## 숫자형
## BigInt
## 문자형
## 불린형
## `null`값
* '존재하지 않는(nothing) 값', 
* '비어 있는(empty)'값, 
* '알 수 없는(unknown)' 값 나타낼 때 사용
## `undefined`값
* '값이 할당 되지 않은 상태'를 나타낼 때 사용
* 변수가 ‘비어있거나’ ‘알 수 없는’ 상태라는 걸 나타내려면 null을 사용
## 객체와 심볼
* `객체(object)`: 복잡한 데이터 구조 표현할 때
* `심볼(symbol)`: 객체의 고유한 식별자 만들 때
## typeof 연산자
```javascript
// 예외 정리
typeof Math // "object" // 내장 객체

typeof null // "object"  // 언어 오류

typeof alert // "function"  // 피연산자가 함수면 "function" 반환
```

<hr/>

## 과제
1. 문제열 따옴표

```javascript
let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya
```
