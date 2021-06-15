# [# 'new'연산자와 생성자 함수](https://ko.javascript.info/constructor-new)

## 생성자 함수
### 규칙
1. 함수 이름의 첫 글자는 대문자로 시작
2. 반드시 `'new'`연산자와 함께 호출해야 한다.<br>
   `new`연산자와 함께 호출하면 내부에서 `this`가 암시적으로 만들어지고, 마지막엔 `this`가 반환된다

```javascript
// 알고리즘 동작 예시

function User(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
}

// 아래 코드와 동일하게 동작한다.
let user = {
  name: "Jack",
  isAdmin: false
};
```
* 객체 리터럴 문법으로 일일이 객체를 만드는 방법보다 훨씬 간단하고 읽기 쉽게 객체를 만들 수 있게 되었죠.
* 재사용할 수 있는 객체 생성 코드를 구현하는 것이죠.

### 재사용할 필요 없는 복잡한 객체 반들기: 익명 생성자 함수 사용
* 익명함수로 어디에도 저장되지 않는다
* 한 번 호출할 목적으로 만들었기 때문에 재사용이 불가능하다
* 재사용을 막으며 코드를 캡슐화 할 수 있다.
```javascript
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // 사용자 객체를 만들기 위한 여러 코드.
  // 지역 변수, 복잡한 로직, 구문 등의
  // 다양한 코드가 여기에 들어갑니다.
};
```

## new.target과 생성자 함수
```javascript
// new와 함께 호출한 경우엔 new.target은 함수 자체를 반환해줍니다.
function User() {
  alert(new.target);
}

// "new" 없이 호출함
User(); // undefined

//"new"를 붙여 호출함
new User(); // function User { ... }
```
### `new`를 붙이지 않고 함수를 호출해도 동일하게 동작
=> 유연하게 코드 작성 가능
```javascript
function User(name) {
  if (!new.target) { // new 없이 호출해도
    return new User(name); // new를 붙여줍니다.
  }

  this.name = name;
}

let john = User("John"); // 'new User'를 쓴 것처럼 바꿔줍니다.
alert(john.name); // John
```
## 생성자 return문
* 생성자 함수엔 보통 `return`이 없다.
* 반환값은 모두 `this`에 저장하고 `this`는 자동으로 반환되기 때문에 반환문을 명시적으로 써줄 필요 없다.
```javascirpt
// 규칙1. 객체를 return 한다면 this 대신 객체가 반환된다
function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- this가 아닌 새로운 객체를 반환함
}

alert( new BigUser().name );  // Godzilla 
// 만약 객체를 return 하지 않는다면 John이 출력 됐을 것.

// 
```

## 생성자 내 메서드
```javascript
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
```

## 문제
### 함수 두 개로 동일한 객체 만들기
new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요?
```javascript
// 답: 가능하다
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true
```

### 계산기 만들기
```javascript
function Calculator() {
    this.read = function () {
        this.a = +prompt('숫자 두개를 입력하세요')
        this.b = +prompt('숫자 두개를 입력하세요')
    }
    this.sum = function () {
        return this.a + this.b 
    }

    this.mul = function () {
        return this.a * this.b 
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

### 누산기 만들기
```javascript
function Accumulator(startingValue) {
    this.value = startingValue
    
    this.read = function() {
         this.value += +prompt('숫자를 입력해 주세요')
    }
}


let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value);
```

