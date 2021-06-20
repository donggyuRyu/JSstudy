# [# 메서드와 this](https://ko.javascript.info/object-methods)

## 메서드
: 객체 프로퍼티에 할당된 함수
```javascript
// 방법1
let user = {
  name: "John",
  age: 30
};
user.sayHi = function() {
  alert("안녕하세요!");
};
user.sayHi(); // 안녕하세요!

// 방법2
let user = {
  // ...
};
function sayHi() {
  alert("안녕하세요!");
};
user.sayHi = sayHi;
user.sayHi(); // 안녕하세요

// 방법3
user = {
  sayHi: function() {
    alert("Hello");
  }
}
user.sayHi()

// 방법4. 단축 구문 사용
user = {
  sayHi() { // "sayHi: function()"과 동일합니다.
    alert("Hello");
  }
};
user.sayHi()
```

### 객체 지향 프로그래밍 (OOP obejct-oriented programming)
: 객체를 사용하여 개체를 표현하는 방식

## 메서드와 this
* 메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있습니다.
* 여기서 `this`는 메서드를 호출할 때 사용된 객체다.
```javascript
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체'를 나타냅니다.
    alert(this.name);
  }

};

user.sayHi(); // John
```

## 자유로운 this
* 자바스크립트에선 모든 함수에 `this`를 사용할 수 있다. 
* `this`값은 런타임에 결정
    * 장점: 메서드를 하나만 만들어 여러 객체에서 재사용할 수 있다.
    * 단점: 장점으로 인해 실수가 있을 수 있다. 
```javascript
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// 별개의 객체에서 동일한 함수를 사용함
user.f = sayHi;
admin.f = sayHi;

// 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
// this 값이 달라짐
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
```

## this가 없는 화살표 함수
* 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 ‘평범한’ 외부 함수에서 this 값을 가져옵니다.
* 별개의 this가 만들어지는 건 원하지 않고, 외부 컨텍스트에 있는 this를 이용하고 싶은 경우 화살표 함수가 유용합니다.
```javascript
let user = {
  firstName: "보라",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // 보라
```

## 과제
### ❗️객체 리터럴에서 'this' 사용하기
```javascript
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // 답: 에러 발생
```

💡 알았다.
```javascript
// 콘솔에 찍히게 하는 방법1. 
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

console.log( user.ref )
// Window {window: Window, self: Window, document: document, name: "", location: Location, …}
// 엄격 모드가 아닐 때 this는 전역 객체를 참조한다. 
// 그럼 브라우저 환경에선 window 라는 전역 객체를 참조한다. 
```
```javascript
// 콘솔에 찍히게 하는 방법2.
function makeUser() {
  return {
    name: "John",
    ref() {
        return this;
    }
  }
}


let user = makeUser();

console.log( user.ref().name )
// John
// 메서드 내부에서 this 키워드를 이용해 객체에 접근할 수 있다. 
```

### 계산기 만들기
```javascript
let calculator = {
    read() {
        this.a = +prompt('숫자 하나만 입력해')
        this.b = +prompt('숫자 하나만 입력해')
    }

    , sum() {
        return this.a + this.b
    }

    , mul() {
        return this.a * this.b
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```
### ❗️체이닝
```javascript
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

// 객체 자신을 반환하면 체이닝읆 만들 수 있다.
ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep(); // 1
```

