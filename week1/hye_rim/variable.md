# [2.3 변수와 상수](https://ko.javascript.info/variables)

## 변수
**`var`**
* 오래된 변수. 현재 사용 안함. 
* variable의 약자<br/>

**`let`**
* 변수
* 특정 단어의 약자는 아님. 일반 동사로서의 의미.
* 데이터 재할당 가능

### 변수 명명 규칙
1. 변수명에는 문자와 숫자, 기호 `$`와 `_`만 들어갈 수 있다.
2. 첫 글자는 숫자가 될 수 없다
3. 대소문자 구별

> 한국어도 변수명으로 사용 가능하다. 다만 영어를 사용하는 것이 관습이다.
```javascript
let 과일 = ['사과', '배', '딸기', '수박']
console.log(과일) 
// ["사과", "배", "딸기", "수박"]
```

> 예약어 사용 불가(예 - `let`, `class`, `retrun`, `function`)

```javascript
let let = 'let';
//Uncaught SyntaxError: let is disallowed as a lexically bound name
```

## 상수
**`const`**
* 상수. 
* constant(상수)의 약자.
* 데이터 재할당 불가. 하지만 obejct의 키값은 변경 가능
* 선언되는 같은 문에 초기값 지정해야 함. `let`처럼 선언만 할 수 없음.
* 대문자 상수: 기억하기 힘든 값을 변수에 할당해 별칭으로 사용.
  * 페이지가 로드 되기 전 정해진 상수일 경우. (로드 전 정해지지 않았다면 일반적인 캐멀케이스 방식으로 변수명 짓는다)
  * 장점 : 기억하기 쉬움, 오타 낼 확률 낮음, 유의미한 이름으로 코드 가독성 증가


## 바람직한 변수명
(개인적인 생각) 변수명 짓기 어려우면 한국어로 써보고 영어로 바꾼다. 영어가 너무 길어 가독성이 떨어진다고 느껴지면 한국어로 사용하는 것도 하나의 방법이라고 생각한다. 

<hr/>

## 과제
1. 변수 가지고 놀기
```javascript
// 1. 
let admin;
let name;

// 2. 
name = "John";

// 3.
admin = name;

// 4. 
alert(name)
```

2. 올바른 이름 선택하기
```javascript
// 1. 
let liveInPlanetName; // 해답은 ourPlanetName
// 2. 
let userName; // 해답은 currentUserName
```

3. 대문자 상수 올바로 사용하기
```javascript
const BIRTHDAY = '18.04.1982'; // 페이지 로드 전 정해진 상수이므로 대문자가 적절

const age = someCode(BIRTHDAY); // 페이지 로드 후 함수에 인자를 할당하므로 일반적인 변수명이 적절
```


